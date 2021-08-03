import { useRouter } from 'next/router';
import MdxListFlat from '../MdxListFlat';
import ImageOpt from '../ImageOpt';
import styles from './AppsGrid.module.scss';

export default function AppsGrid({ items }) {
    const router = useRouter()

    return (
        <div className={styles.gridWrap}>
            {items.map(item =>
                <article
                    key={item.slug}
                    className={styles.clickable}
                    onClick={() => {
                        router.push(`/apps/${item.slug}`)
                    }}
                >
                    <div className={styles.title}>{item.title}</div>
                    <ImageOpt path={item.thumb} sizeSet='mid' />
                    <MdxListFlat items={item.skills} showIcon={true} showText={false} />
                    {item.description && item.description}
                </article>
            )}
        </div>
    )
}