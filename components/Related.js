import Link from 'next/link'

export default function Related({ items, list }) {
    console.log('🚀 ~ Related ~ items', items);
    return (
        <ul>
            {items.map((item) => {
                // const skill = 

                return (
                    <li key={(item.replace(/[ \.]/g, '')).trim()}>
                        <Link
                            as={`/${list}/${(item.replace(/\.mdx?$/, '')).trim()}`}
                            href={`/${list}/[slug]`}
                        >
                            <a>{item.trim()}</a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}