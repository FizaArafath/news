import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'light' | 'dark';

interface ThemeState {
    mode: Theme;
}

const getInitialTheme = (): Theme => {
    const storedTheme = localStorage.getItem('theme') as Theme;
    if (storedTheme) return storedTheme;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
};

const initialState: ThemeState = {
    mode: getInitialTheme(),
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.mode);
        },
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.mode = action.payload;
            localStorage.setItem('theme', state.mode);
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
