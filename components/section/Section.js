import styles from './Section.module.scss';
import ImageOpt from '../ImageOpt';
import { colors } from '../../utils/cssvars';


export default function Section({
    bgColor = 'bg',
    h1Text,
    h2Text,
    content1 = null,
    content2 = null,
    imgSrc = null,
    swap = false,
    flex = true,
    variant = null,
    shape = null
}) {
    const
        swapStyle = swap ? ' ' + styles.swap : '',
        flexStyle = flex ? ' ' + styles.flex : '',
        variantStyle = variant ? ' ' + styles[variant] : '',
        shapeStyle = shape ? ' ' + styles[shape] : '';

    return (
        <section style={{ backgroundColor: colors[bgColor] }} className={`${styles.sectionOuter}${shapeStyle}`}>
            <div className={`${styles.sectionWrap}${swapStyle}${flexStyle}${variantStyle}`}>
                <article className={styles.article1}>
                    {h1Text && <h1>{h1Text}</h1>}
                    {h2Text && <h2>{h2Text}</h2>}
                    {content1 && <div dangerouslySetInnerHTML={{ __html: content1 }} />}
                </article>
                {(content2 || imgSrc) &&
                    <article className={styles.article2}>
                        {imgSrc && <ImageOpt path={imgSrc} sizeSet='mid' />}
                        {content2 && <div dangerouslySetInnerHTML={{ __html: content2 }} />}
                    </article>
                }
            </div>
        </section>
    );
}