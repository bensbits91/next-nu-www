import Link from 'next/link'

export default function MdxList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.slug}>
                    <Link
                        as={`/${item.pageType}/${item.slug.replace(/\.mdx?$/, '')}`}
                        href={`/${item.pageType}/[slug]`}
                    >
                        <a>{item.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}