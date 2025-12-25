import styles from './SkeletonCard.module.css';

export const SkeletonCard = () => {
    return (
        <div className={styles.skeletonCard}>
            <div className={styles.skeletonImage} />
            <div className={styles.skeletonContent}>
                <div className={styles.skeletonTitle} />
                <div className={styles.skeletonText} />
                <div className={styles.skeletonText} />
                <div className={styles.skeletonText} />
            </div>
        </div>
    );
};
