import MdxListFlat from './MdxListFlat'
import Link from 'next/link'

export default function StoryBlock({ post }) {
    const { slug, org, link, title, dateStart, dateEnd, skills, htmlContent } = post,

        orgName = link ? <Link href={link}><a>{org}</a></Link> : org

    return (
        <article key={slug} className='timeline-item'/* date-is={`${dateStart} - ${dateEnd}`} */>
            <div className='title'>{orgName} {`- ${dateStart} - ${dateEnd}`}</div>
            <h3>{title}</h3>
            {skills && <div>
                <MdxListFlat
                    items={skills}
                    showIcon={true}
                    showText={false}
                    isLink={true}
                />
            </div>}
            <div dangerouslySetInnerHTML={{ __html: htmlContent.renderedOutput }} />
        </article>
    )
}