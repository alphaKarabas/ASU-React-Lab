import React, { useContext } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from './CustomThemeProvider';

const ThemeSwitch = (props) => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const iconStyle = {
    color: isDarkMode ? 'rgba(0, 0, 0, 0.6)' : 'rgb(250, 175, 0)',
    backgroundColor: '#fff',
    borderRadius: '50%',
    padding: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-2px'
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          color="default"
          icon={<LightModeIcon sx={iconStyle} />}
          checkedIcon={<DarkModeIcon sx={iconStyle} />}
        />
      }
      label={isDarkMode ? "Темная" : "Светлая"}
      labelPlacement="start"
      sx={{ marginY: 0, height: '100%', alignItems: 'center' }}
      {...props}
    />
  );
};

export default ThemeSwitch;