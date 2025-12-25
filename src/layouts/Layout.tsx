import { useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { Navbar } from '../components/Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    const theme = useAppSelector((state) => state.theme.mode);
    const lang = useAppSelector((state) => state.language.lang);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <>
            <Navbar />
            <main className="container fade-in" style={{ padding: '2rem 1rem 4rem' }}>
                {children}
            </main>
        </>
    );
};
