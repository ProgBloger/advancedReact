import { FC, ReactNode, useMemo, useState } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

const LOCAL_STORAGE_THEME_KEY:string = "LOCAL_STORAGE_THEME_KEY";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;