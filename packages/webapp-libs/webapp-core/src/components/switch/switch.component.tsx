import React, { useState } from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, label }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <label className="flex cursor-pointer items-center">
      <div className="relative">
        <input type="checkbox" checked={isChecked} onChange={handleToggle} className="sr-only" />
        <div className="block h-8 w-14 rounded-full bg-gray-600"></div>
        <div
          className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${
            isChecked ? 'translate-x-full transform bg-green-500' : ''
          }`}
        ></div>
      </div>
      {label && <span className="ml-3 text-gray-700">{label}</span>}
    </label>
  );
};
