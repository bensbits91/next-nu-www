import Link from 'next/link'

export default function MdxList({ files, list }) {
    return (
        <ul>
            {files.map((file) => (
                <li key={file.filePath}>
                    <Link
                        as={`/${list}/${file.filePath.replace(/\.mdx?$/, '')}`}
                        href={`/${list}/[slug]`}
                    >
                        <a>{file.data.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}