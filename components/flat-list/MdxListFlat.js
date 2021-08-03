import Link from 'next/link';
import ItemIcon from '../ItemIcon';
import styles from './MdxListFlat.module.scss';

export default function MdxListFlat({
    items,
    showIcon = true,
    showText = true,
    isLink = false
}) {

    return (
        <div className={styles.flatList}>
            {items.map(item => {
                const slug = item.skillSlug,

                    title = item.skillPage.title,

                    icon = showIcon ?
                        <span title={title}
                            className={showText ? styles.iconWrap : styles.iconOnlyWrap}
                        >
                            <ItemIcon slug={slug} />
                        </span>
                        : <></>,

                    text = showText ? <span>{title}</span> : <></>,

                    el = isLink ? <Link href={`/skills/${slug}`}><a>{icon}{text}</a></Link> : <>{icon}{text}</>

                return (
                    <span key={slug} className={styles.flatListItem}>
                        {el}
                    </span>
                )
            })}
        </div>
    )
}