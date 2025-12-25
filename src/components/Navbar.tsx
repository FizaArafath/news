import { Moon, Sun, Newspaper } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggleTheme } from '../features/preferences/themeSlice';
import { toggleLanguage } from '../features/preferences/languageSlice';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.mode);
    const lang = useAppSelector((state) => state.language.lang);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    <Newspaper size={28} color="var(--accent)" />
                    Activity<span>News</span>
                </div>

                <div className={styles.controls}>
                    <button
                        className={styles.langButton}
                        onClick={() => dispatch(toggleLanguage())}
                        aria-label="Toggle Language"
                    >
                        {lang === 'en' ? 'العربية' : 'English'}
                    </button>

                    <button
                        className={styles.iconButton}
                        onClick={() => dispatch(toggleTheme())}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};
