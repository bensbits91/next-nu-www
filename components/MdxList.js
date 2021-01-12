import Link from 'next/link'

export default function MdxList({ items }) {
    console.log('🚀 ~ MdxList ~ items', items);
    return (
        <ul>
            {items.map((item) => (
                <li key={item.slug}>
                    <Link
                        as={`/work/${item.slug.replace(/\.mdx?$/, '')}`}
                        href={`/work/[slug]`}
                    >
                        <a>{item.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}