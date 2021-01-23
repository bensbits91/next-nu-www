import Link from 'next/link'
import ItemIcon from './ItemIcon'

export default function MdxListFlat({ items, showIcon = true, showText = true, isLink = false }) {

    return (
        <div className='mdx-list-flat'>
            {items.map(item => {
                const slug = item.skillSlug,

                    title = item.skillPage.title,

                    icon = showIcon ?
                        <span title={title}
                            className={showText ? 'icon-wrap' : 'icon-only-wrap'}
                        >
                            <ItemIcon slug={slug} />
                        </span>
                        : <></>,

                    text = showText ? <span>{title}</span> : <></>,

                    el = isLink ? <Link href={`/skills/${slug}`}><a>{icon}{text}</a></Link> : <>{icon}{text}</>

                return (
                    <span key={slug} className='flat-list-item'>
                        {el}
                    </span>
                )
            })}
        </div>
    )
}