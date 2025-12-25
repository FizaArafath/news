import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useGetPostQuery, useGetUserQuery } from '../features/news/newsApi';
import { useAppSelector } from '../app/hooks';
import { Layout } from '../layouts/Layout';

export const PostPage = () => {
    const { id } = useParams<{ id: string }>();
    const lang = useAppSelector((state) => state.language.lang);
    const { data: post, isLoading: isPostLoading } = useGetPostQuery(id || '');

    // Skip user query if post is not loaded yet
    const { data: user } = useGetUserQuery(post?.userId || 0, {
        skip: !post,
    });

    const translations = {
        en: { back: 'Back to News', by: 'By' },
        ar: { back: 'العودة إلى الأخبار', by: 'بواسطة' }
    };

    const t = translations[lang];

    if (isPostLoading || !post) {
        return (
            <Layout>
                <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="container" style={{ maxWidth: '800px' }}>
                <Link
                    to="/"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '2rem',
                        color: 'var(--accent)',
                        fontWeight: 500
                    }}
                >
                    <ArrowLeft size={20} className={lang === 'ar' ? 'rtl-icon' : ''} style={lang === 'ar' ? { transform: 'rotate(180deg)' } : {}} />
                    {t.back}
                </Link>

                <article className="fade-in">
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            marginBottom: '2rem',
                            boxShadow: 'var(--card-shadow)'
                        }}
                    />

                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        lineHeight: 1.2
                    }}>
                        {post.title}
                    </h1>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '2rem',
                        color: 'var(--text-secondary)'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'var(--accent)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold'
                        }}>
                            {user?.name.charAt(0) || 'A'}
                        </div>
                        <div>
                            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{user?.name || 'Unknown'}</div>
                            <div style={{ fontSize: '0.9rem' }}>{user?.email}</div>
                        </div>
                    </div>

                    <div style={{
                        fontSize: '1.2rem',
                        lineHeight: 1.8,
                        color: 'var(--text-secondary)'
                    }}>
                        {post.body}
                        {/* Adding dummy content to make it look like a full article */}
                        <p style={{ marginTop: '1.5rem' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </article>
            </div>
        </Layout>
    );
};
