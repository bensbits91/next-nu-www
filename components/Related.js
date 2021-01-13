import Link from 'next/link'

export default function Related({ items, list }) {
    console.log('🚀 ~ Related ~ items', items);
    return (
        <ul>
            {items.map(item => {
                if (item.skillPage) {
                    return (
                        <li key={item.skillSlug}>
                            <Link
                                as={`/${list}/${item.skillSlug}`}
                                href={`/${list}/[slug]`}
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