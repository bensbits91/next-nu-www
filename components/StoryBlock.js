import MdxListFlat from './MdxListFlat'
import Link from 'next/link'

export default function StoryBlock({ post }) {
    const { slug, org, link, title, dateStart, dateEnd, skills, htmlContent } = post,

        orgName = link ? <Link href={link}><a>{org}</a></Link> : org

    return (
        <article key={slug} className='timeline-item'/* date-is={`${dateStart} - ${dateEnd}`} */>
            <div key='org-name' className='title'>{orgName} {`- ${dateStart} - ${dateEnd}`}</div>
            <h3>{title}</h3>
            {skills && <div key='skill-icons'>
                <MdxListFlat
                    items={skills}
                    showIcon={true}
                    showText={false}
                    isLink={true}
                />
            </div>}
            <div key='story-body' dangerouslySetInnerHTML={{ __html: htmlContent.renderedOutput }} />
        </article>
    )
}