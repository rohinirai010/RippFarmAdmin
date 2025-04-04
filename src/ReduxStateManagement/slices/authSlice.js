import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fixed admin credentials
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

// Async thunk for login with fixed credentials
export const loginAdmin = createAsyncThunk(
  'auth/loginAdmin',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Check credentials
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Create mock response data
        const userData = {
          id: 1,
          username: "admin",
          role: "administrator",
          name: "Admin User"
        };
        
        const token = "mock-jwt-token-" + Math.random().toString(36).substring(2);
        
        // Store in localStorage
        localStorage.setItem('adminToken', token);
        localStorage.setItem('adminInfo', JSON.stringify(userData));
        
        return {
          admin: userData,
          token
        };
      } else {
        // Reject with authentication error
        return rejectWithValue({ 
          error: "Invalid username or password", 
          status: 401 
        });
      }
    } catch (error) {
      return rejectWithValue({ 
        error: "Login failed", 
        status: 500 
      });
    }
  }
);

// Async thunk for logout
export const logoutAdmin = createAsyncThunk(
  'auth/logoutAdmin',
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Clear localStorage - Make sure this is executed
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminInfo');
      
      return null;
    } catch (error) {
      // Even on error, attempt to clear local storage
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminInfo');
      
      return rejectWithValue({ error: 'Logout failed' });
    }
  }
);

// Check if user is already logged in from localStorage
const getInitialState = () => {
  try {
    const adminToken = localStorage.getItem('adminToken');
    const adminInfoStr = localStorage.getItem('adminInfo');
    const adminInfo = adminInfoStr ? JSON.parse(adminInfoStr) : null;
      
    return {
      admin: adminInfo,
      token: adminToken,
      isAuthenticated: !!adminToken,
      loading: false,
      error: null,
      errorCode: null,
      successMessage: null
    };
  } catch (error) {
    // If anything goes wrong, return a clean state
    console.error("Error initializing auth state:", error);
    return {
      admin: null,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null,
      errorCode: null,
      successMessage: null
    };
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  reducers: {
    clearErrors: (state) => {
      state.error = null;
      state.errorCode = null;
    },
    clearMessages: (state) => {
      state.successMessage = null;
    },
    // Add a forceLogout action to handle edge cases
    forceLogout: (state) => {
      state.isAuthenticated = false;
      state.admin = null;
      state.token = null;
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminInfo');
    }
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.admin = action.payload.admin;
        state.token = action.payload.token;
        state.successMessage = 'Login successful!';
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.admin = null;
        state.token = null;
        state.error = action.payload?.error || 'Invalid credentials';
        state.errorCode = action.payload?.status || 401;
      })
      // Logout cases
      .addCase(logoutAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.admin = null;
        state.token = null;
        state.successMessage = 'Logout successful';
      })
      .addCase(logoutAdmin.rejected, (state) => {
        // Even on error, make sure we clear auth state
        state.loading = false;
        state.isAuthenticated = false;
        state.admin = null;
        state.token = null;
      });
  }
});

export const { clearErrors, clearMessages, forceLogout } = authSlice.actions;

export default authSlice.reducer;