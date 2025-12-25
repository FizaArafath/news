import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/preferences/themeSlice';
import languageReducer from '../features/preferences/languageSlice';
import { newsApi } from '../features/news/newsApi';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        language: languageReducer,
        [newsApi.reducerPath]: newsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
