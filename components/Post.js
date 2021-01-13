export default function Post({ mdxSource }) {
    return <div dangerouslySetInnerHTML={{ __html: mdxSource.renderedOutput }} />
}