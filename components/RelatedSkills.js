import Link from 'next/link'

export default function RelatedSkills({ items }) {
    console.log('🚀 ~ RelatedSkills ~ items', items);
    return (
        <ul>
            {items.map((item) => {
                // const skill = 

                return (
                    <li key={item.filePath}>
                        <Link
                            as={`/${list}/${item.filePath.replace(/\.mdx?$/, '')}`}
                            href={`/${list}/[slug]`}
                        >
                            <a>{item.data.title}</a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}