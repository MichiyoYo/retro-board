import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const ThemeSwitch = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [enabled, setEnabled] = useState(theme == 'light');

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const handleThemeChange = (enabled: boolean) => {
    setTheme(enabled ? 'light' : 'dark');
    setEnabled(enabled);
  };

  return (
    <div className='flex items-center gap-2'>
      <span>Dark Mode</span>
      <label className='switch'>
        <input
          type='checkbox'
          checked={enabled}
          onChange={(e) => handleThemeChange(e.target.checked)}
        />
        <span className='slider round'></span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
