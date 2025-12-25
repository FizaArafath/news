import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Language = 'en' | 'ar';

interface LanguageState {
    lang: Language;
}

const getInitialLanguage = (): Language => {
    const storedLang = localStorage.getItem('language') as Language;
    return storedLang || 'en';
};

const initialState: LanguageState = {
    lang: getInitialLanguage(),
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        toggleLanguage: (state) => {
            state.lang = state.lang === 'en' ? 'ar' : 'en';
            localStorage.setItem('language', state.lang);
            // document.dir will be handled in a component or effect
        },
        setLanguage: (state, action: PayloadAction<Language>) => {
            state.lang = action.payload;
            localStorage.setItem('language', state.lang);
        },
    },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
