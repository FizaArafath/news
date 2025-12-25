import { useState } from 'react';
import { ArrowRight, ImageOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Post } from '../features/news/newsApi';
import { useAppSelector } from '../app/hooks';
import styles from './NewsCard.module.css';

interface NewsCardProps {
    post: Post;
    authorName: string;
}

const translations = {
    en: {
        readMore: 'Read More',
        by: 'By',
    },
    ar: {
        readMore: 'اقرأ المزيد',
        by: 'بواسطة',
    },
};

export const NewsCard = ({ post, authorName }: NewsCardProps) => {
    const lang = useAppSelector((state) => state.language.lang);
    const [imageError, setImageError] = useState(false);

    const t = translations[lang];

    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>
                {imageError ? (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                        <ImageOff size={48} />
                    </div>
                ) : (
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className={styles.image}
                        onError={() => setImageError(true)}
                        loading="lazy"
                    />
                )}
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{post.title}</h2>
                <div className={styles.author}>
                    {t.by} {authorName}
                </div>
                <p className={styles.body}>{post.body}</p>
                <div className={styles.footer}>
                    <Link to={`/post/${post.id}`} className={styles.readMore}>
                        {t.readMore}
                        <ArrowRight size={16} className={lang === 'ar' ? styles.rtlIcon : ''} style={lang === 'ar' ? { transform: 'rotate(180deg)' } : {}} />
                    </Link>
                </div>
            </div>
        </article>
    );
};
