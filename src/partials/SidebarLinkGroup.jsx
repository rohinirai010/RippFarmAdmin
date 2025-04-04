import React, { useState } from 'react';

const SidebarLinkGroup = ({ children, activecondition }) => {
  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li 
      className={`
       py-1 rounded-lg mb-1 last:mb-0 
        transition-all duration-150 ease-in-out
        ${activecondition ? 
          'bg-violet-50 dark:bg-violet-900/20' : 
          'hover:bg-violet-50/50 dark:hover:bg-violet-900/10'
        }
      `}
    >
      {children(handleClick, open)}
    </li>
  );
};

export default SidebarLinkGroup;