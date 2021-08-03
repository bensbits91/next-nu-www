import MdxListFlat from '../flat-list/MdxListFlat';
import Link from 'next/link';
import styles from './AboutBlock.module.scss';

export default function AboutBlock({ post }) {
    const { slug, link, title, skills, htmlContent } = post;

    return (
        <article key={slug} className={styles.timelineItem}>
            <h3>{title}</h3>
            {skills && <div key='skill-icons'>
                <MdxListFlat
                    items={skills}
                    showIcon={true}
                    showText={false}
                    isLink={true}
                />
            </div>}
            <div key='about-body' dangerouslySetInnerHTML={{ __html: htmlContent.renderedOutput }} />
        </article>
    )
}