import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ReduxStateManagement/store";

import "./css/style.css";


// Import pages
import Dashboard from "./pages/Dashboard";
import MembersList from "./pages/Members/MembersList";
import CreateSubAdmin from "./pages/subAdmin/CreateSubAdmin";
import DepositHistory from "./pages/Deposit/DepositHistory";
import AddQRCode from "./pages/Deposit/AddQRCode";
import WithdrawalHistory from "./pages/Withdrawal/WithdrawalHistory";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Login from "./pages/Login";
import DepositBonus from "./pages/Reports/DepositBonusReport";
import InvitationBonus from "./pages/Reports/InvitationBonus";
import LevelBonus from "./pages/Reports/LevelBonus";
import TeamWinningBonus from "./pages/Reports/TeamWinningBonus";
import RoyaltyBonus from "./pages/Bonanza/RoyaltyBonus";
import SpecialReward from "./pages/Bonanza/SpecialReward";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <Provider store={store}>
      <Routes>
        {/* admin routes */}
        <Route exact path="/" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route exact path="/admin/members-list" element={<MembersList />} />
    
        <Route
          exact
          path="/admin/create-subadmin"
          element={<CreateSubAdmin />}
        />
        <Route exact path="/admin/add-qr" element={<AddQRCode />} />
        <Route
          exact
          path="/admin/deposit-history"
          element={<DepositHistory />}
        />
        <Route
          exact
          path="/admin/withdraw-history"
          element={<WithdrawalHistory />}
        />

        {/* admin report routes */}
        <Route
          exact
          path="/admin/deposit-bonus"
          element={<DepositBonus />}
        />
         <Route
          exact
          path="/admin/invitation-bonus"
          element={<InvitationBonus />}
        />
        <Route
          exact
          path="/admin/level-bonus"
          element={<LevelBonus />}
        />
        <Route
          exact
          path="/admin/team-winning-bonus"
          element={<TeamWinningBonus />}
        />
        <Route
          exact
          path="/admin/royalty-bonus"
          element={<RoyaltyBonus />}
        />
        <Route
          exact
          path="/admin/special-reward"
          element={<SpecialReward />}
        />
 
      </Routes>
    </Provider>
  );
}

export default App;
