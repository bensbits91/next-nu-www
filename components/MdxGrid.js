import { useRouter } from 'next/router'
import ImageOpt from './ImageOpt'

export default function MdxGrid({ items }) {
    console.log('🚀 ~ MdxGrid ~ items', items);
    const router = useRouter()

    return (
        <div className='grid-wrap'>
            {items.map(item =>
                <article
                    key={item.slug}
                    onClick={() => {
                        console.log(item.slug)
                        router.push(`/work/${item.slug}`)
                    }}
                >
                    <div className='title'>{item.title}</div>
                    <ImageOpt path={item.thumb} sizeSet='mid' />

                </article>
            )}
        </div>
    )
}