'use client';

import { useState, useEffect } from 'react';

interface VerticalMenuProps {
  onMenuChange?: (index: number) => void;
}

export default function VerticalMenu({ onMenuChange }: VerticalMenuProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleMenuClick = (index: number) => {
    setActiveItem(index);
    if (onMenuChange) {
      onMenuChange(index);
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const menuItems = [
    { icon: 'coins', label: 'Token' },
    { icon: 'basket', label: 'Buyback' },
    { icon: 'armchair', label: 'Markets' },
    { icon: 'joystick', label: 'Games' },
  ];

  // Text color helper for dark mode
  const textColor = isDark ? '#FFFFFF' : '#2E3837';

  return (
    <div
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 px-3 py-4 rounded-2xl backdrop-blur-3xl"
      style={{
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.18))',
        border: '1px solid rgba(255, 255, 255, 0.35)',
        boxShadow: `
          inset 0 1px 2px rgba(0, 0, 0, 0.04),
          inset 0 -1px 1px rgba(255, 255, 255, 0.25),
          0 2px 6px rgba(0, 0, 0, 0.04),
          0 4px 12px rgba(0, 0, 0, 0.02)
        `
      }}
    >
      <div className="flex flex-col gap-3">
        {menuItems.map((item, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => handleMenuClick(index)}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: activeItem === index
                  ? 'rgba(46, 56, 55, 0.9)'
                  : 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                boxShadow: activeItem === index
                  ? '0 4px 12px rgba(0, 0, 0, 0.15)'
                  : '0 2px 6px rgba(0, 0, 0, 0.08)'
              }}
              aria-label={item.label}
            >
            {item.icon === 'coins' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={activeItem === index ? "#ffffff" : "#2E3837"} viewBox="0 0 256 256">
                <path d="M207.58,63.84C186.85,53.48,159.33,48,128,48S69.15,53.48,48.42,63.84,16,88.78,16,104v48c0,15.22,11.82,29.85,32.42,40.16S96.67,208,128,208s58.85-5.48,79.58-15.84S240,167.22,240,152V104C240,88.78,228.18,74.15,207.58,63.84ZM128,64c62.64,0,96,23.23,96,40s-33.36,40-96,40-96-23.23-96-40S65.36,64,128,64Zm-8,95.86v32c-19-.62-35-3.42-48-7.49V153.05A203.43,203.43,0,0,0,120,159.86Zm16,0a203.43,203.43,0,0,0,48-6.81v31.31c-13,4.07-29,6.87-48,7.49ZM32,152V133.53a82.88,82.88,0,0,0,16.42,10.63c2.43,1.21,5,2.35,7.58,3.43V178C40.17,170.16,32,160.29,32,152Zm168,26V147.59c2.61-1.08,5.15-2.22,7.58-3.43A82.88,82.88,0,0,0,224,133.53V152C224,160.29,215.83,170.16,200,178Z"></path>
              </svg>
            ) : item.icon === 'basket' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={activeItem === index ? "#ffffff" : "#2E3837"} viewBox="0 0 256 256">
                <path d="M136,120v56a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm36.84-.8-5.6,56A8,8,0,0,0,174.4,184a7.44,7.44,0,0,0,.81,0,8,8,0,0,0,7.95-7.2l5.6-56a8,8,0,0,0-15.92-1.6Zm-89.68,0a8,8,0,0,0-15.92,1.6l5.6,56a8,8,0,0,0,8,7.2,7.44,7.44,0,0,0,.81,0,8,8,0,0,0,7.16-8.76ZM239.93,89.06,224.86,202.12A16.06,16.06,0,0,1,209,216H47a16.06,16.06,0,0,1-15.86-13.88L16.07,89.06A8,8,0,0,1,24,80H68.37L122,18.73a8,8,0,0,1,12,0L187.63,80H232a8,8,0,0,1,7.93,9.06ZM85.22,80h85.56L128,36.15ZM209,200,224,88H32L47,200Z"></path>
              </svg>
            ) : item.icon === 'armchair' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={activeItem === index ? "#ffffff" : "#2E3837"} viewBox="0 0 256 256">
                <path d="M216,88.8V72a40,40,0,0,0-40-40H80A40,40,0,0,0,40,72V88.8a40,40,0,0,0,0,78.4V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V167.2a40,40,0,0,0,0-78.4ZM80,48h96a24,24,0,0,1,24,24V88.8A40.07,40.07,0,0,0,168,128H88A40.07,40.07,0,0,0,56,88.8V72A24,24,0,0,1,80,48ZM208.39,152H208a8,8,0,0,0-8,8v40H56V160a8,8,0,0,0-8-8h-.39A24,24,0,1,1,72,128v40a8,8,0,0,0,16,0V144h80v24a8,8,0,0,0,16,0V128a24,24,0,1,1,24.39,24Z"></path>
              </svg>
            ) : item.icon === 'joystick' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={activeItem === index ? "#ffffff" : "#2E3837"} viewBox="0 0 256 256">
                <path d="M208,144H136V95.19a40,40,0,1,0-16,0V144H48a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V160A16,16,0,0,0,208,144ZM104,56a24,24,0,1,1,24,24A24,24,0,0,1,104,56ZM208,208H48V160H208v48Zm-40-96h32a8,8,0,0,1,0,16H168a8,8,0,0,1,0-16Z"></path>
              </svg>
            ) : (
              <span style={{ fontSize: '20px' }}>
                {item.icon}
              </span>
            )}
            </button>

            {/* Hover label */}
            {hoveredItem === index && (
              <div
                className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-xl backdrop-blur-3xl whitespace-nowrap"
                style={{
                  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.18))',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  boxShadow: `
                    inset 0 1px 2px rgba(0, 0, 0, 0.04),
                    inset 0 -1px 1px rgba(255, 255, 255, 0.25),
                    0 2px 6px rgba(0, 0, 0, 0.04),
                    0 4px 12px rgba(0, 0, 0, 0.02)
                  `
                }}
              >
                <span className="text-sm font-[family-name:var(--font-inter)] font-medium" style={{ color: textColor }}>
                  {item.label}
                </span>
              </div>
            )}
          </div>
        ))}

        {/* Theme Toggle - Last Item */}
        <div className="relative">
          <button
            onClick={toggleTheme}
            onMouseEnter={() => setHoveredItem(999)}
            onMouseLeave={() => setHoveredItem(null)}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)'
            }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              // Sun icon for light mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#FFFFFF"
                viewBox="0 0 256 256"
              >
                <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/>
              </svg>
            ) : (
              // Moon with stars icon for dark mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#2E3837"
                viewBox="0 0 256 256"
              >
                <path d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"/>
              </svg>
            )}
          </button>

          {/* Hover label */}
          {hoveredItem === 999 && (
            <div
              className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-xl backdrop-blur-3xl whitespace-nowrap"
              style={{
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.18))',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                boxShadow: `
                  inset 0 1px 2px rgba(0, 0, 0, 0.04),
                  inset 0 -1px 1px rgba(255, 255, 255, 0.25),
                  0 2px 6px rgba(0, 0, 0, 0.04),
                  0 4px 12px rgba(0, 0, 0, 0.02)
                `
              }}
            >
              <span className="text-sm font-[family-name:var(--font-inter)] font-medium" style={{ color: textColor }}>
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
