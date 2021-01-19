import Link from 'next/link'
import ItemIcon from './ItemIcon'

export default function Related({ items }) {
    return (
        <div className='mdx-list'>
            <ul>
                {items.map(item => {
                    if (item.skillPage) {
                        return (
                            <li key={item.skillSlug}>
                                <Link as={`/${item.skillPage.pageType}/${item.skillSlug}`}
                                    href={`/${item.skillPage.pageType}/[slug]`} >
                                    <a>
                                        <span className='icon-wrap'>
                                            <ItemIcon slug={item.skillSlug} />
                                        </span>
                                        {item.skillPage ? item.skillPage.title : item.skillSlug}
                                    </a>
                                </Link>
                            </li>
                        )
                    }

                    return (
                        <li key={item.skillSlug}>
                            {item.skillSlug}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}