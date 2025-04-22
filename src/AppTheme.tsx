import React from 'react';

export const AppTheme = React.createContext<string>('light');
export const SetAppTheme = React.createContext<any>(null);

export const useAppTheme = () => {
  return React.useContext(AppTheme);
};

export const useSetAppTheme = () => {
  return React.useContext(SetAppTheme);
};

export const AppThemeProvider = (props: any) => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <>
      <AppTheme.Provider value={theme}>
        <SetAppTheme.Provider value={toggleTheme}>
          {props.children}
        </SetAppTheme.Provider>
      </AppTheme.Provider>
    </>
  );
};
