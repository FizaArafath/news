import { useGetPostsQuery, useGetUsersQuery } from '../features/news/newsApi';
import { NewsCard } from '../components/NewsCard';
import { SkeletonCard } from '../components/SkeletonCard';
import { useAppSelector } from '../app/hooks';
import { Layout } from '../layouts/Layout';

export const HomePage = () => {
    const { data: posts, isLoading: isPostsLoading, isError } = useGetPostsQuery();
    const { data: users } = useGetUsersQuery();
    const lang = useAppSelector((state) => state.language.lang);

    const isLoading = isPostsLoading || !users;

    const headings = {
        en: { title: 'Latest News', subtitle: 'Stay updated with the latest headlines' },
        ar: { title: 'آخر الأخبار', subtitle: 'ابق على اطلاع بأحدث العناوين' }
    };

    return (
        <Layout>
            <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    marginBottom: '0.5rem',
                    background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    {headings[lang].title}
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    {headings[lang].subtitle}
                </p>
            </header>

            {isError && (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
                    <p>Failed to load news. Please check your connection.</p>
                </div>
            )}

            <div className="grid grid-cols-auto">
                {isLoading ? (
                    Array.from({ length: 8 }).map((_, i) => (
                        <SkeletonCard key={i} />
                    ))
                ) : (
                    posts?.map((post) => {
                        const author = users?.find(u => u.id === post.userId);
                        return (
                            <NewsCard
                                key={post.id}
                                post={post}
                                authorName={author?.name || 'Unknown Author'}
                            />
                        );
                    })
                )}
            </div>
        </Layout>
    );
};
