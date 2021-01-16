import Link from 'next/link'

export default function Related({ items }) {
    console.log('🚀 ~ Related ~ items', items);
    return (
        <ul>
            {items.map(item => {
                if (item.skillPage) {
                    return (
                        <li key={item.skillSlug}>
                            <Link
                                as={`/${item.skillPage.pageType}/${item.skillSlug}`}
                                href={`/${item.skillPage.pageType}/[slug]`}
                            >
                                <a>{item.skillPage ? item.skillPage.title : item.skillSlug}</a>
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
    )
}