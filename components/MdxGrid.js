import { useRouter } from 'next/router'
import MdxListFlat from './MdxListFlat'
import ImageOpt from './ImageOpt'

export default function MdxGrid({ items }) {
    const router = useRouter()

    return (
        <div className='grid-wrap'>
            {items.map(item =>
                <article
                    key={item.slug}
                    onClick={() => {
                        router.push(`/work/${item.slug}`)
                    }}
                >
                    <div className='title'>{item.title}</div>
                    <ImageOpt path={item.thumb} sizeSet='mid' />
                    <MdxListFlat items={item.skills} showIcon={true} showText={false} />
                    {item.description && item.description}
                </article>
            )}
        </div>
    )
}