import React, { useState } from 'react';

const SidebarLinkGroup = ({ children, activecondition }) => {
  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
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
      {children(handleClick, open)}
    </li>
  );
};

export default SidebarLinkGroup;



