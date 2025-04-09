import React, { useState, useContext, createContext } from 'react';

// Create a context to manage which dropdown is currently open
const DropdownContext = createContext({
  activeDropdown: null,
  setActiveDropdown: () => {}
});

// Provider component to wrap around the sidebar navigation
export const DropdownProvider = ({ children }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  return (
    <DropdownContext.Provider value={{ activeDropdown, setActiveDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};

const SidebarLinkGroup = ({ children, activecondition, id }) => {
  const { activeDropdown, setActiveDropdown } = useContext(DropdownContext);
  const isOpen = id === activeDropdown;
  
  const handleClick = () => {
    // If this dropdown is already open, close it
    // Otherwise, open this one (which will close any other open dropdown)
    setActiveDropdown(isOpen ? null : id);
  };

  return (
    <li 
      className={`
       py-1 px-2 rounded-lg mb-1 last:mb-0 
        transition-all duration-150 ease-in-out
        ${activecondition ? 
          'bg-violet-50 dark:bg-[#2742ea]/30' : 
          'hover:bg-violet-50/50 dark:hover:bg-[#2742ea]/20'
        }
      `}
    >
      {children(handleClick, isOpen)}
    </li>
  );
};

export default SidebarLinkGroup;