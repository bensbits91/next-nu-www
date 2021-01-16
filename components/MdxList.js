import { useState } from 'react'
import Link from 'next/link'
import { groups } from '../static/categories'
import dayjs from 'dayjs'


export default function MdxList({ items }) {
    console.log('🚀 ~ MdxList ~ items', items);




    const groupsForPage = groups[items[0].pageType]
    console.log('🚀 ~ MdxList ~ groupsForPage', groupsForPage);




    const [grouping, setGrouping] = useState('skillType')


    const groupSelect = groupsForPage ? Object.keys(groupsForPage).map(g => {
        return (
            <a
                key={g}
                onClick={() => setGrouping(g)}
                className='button primary small'
            >
                {groupsForPage[g].optionText}
            </a>
        )
    }) : <></>

    const aList = (items, idx) =>
        <ul key={idx}>
            {items.map(item =>
                <li key={item.slug}>
                    <Link
                        as={`/${item.pageType}/${item.slug.replace(/\.mdx?$/, '')}`}
                        href={`/${item.pageType}/[slug]`}
                    >
                        <a>{item.title}</a>
                    </Link>
                </li>
            )}
        </ul>

    return (
        <>
            {groupSelect}

            {groupsForPage && groupsForPage[grouping].groups.map((g, idx) => {
                return (
                    <>
                        <h2 key={g.groupName.replace(/ /g, '')}>{g.groupName}</h2>
                        {grouping === 'skillType' &&
                            aList(items.filter(i => i.skillType === g.groupName),
                                idx.toString()
                            )
                        }
                        {grouping === 'years' &&
                            aList(items.filter(i => {
                                console.log('🚀 ~ dayjs().year()', dayjs().year());
                                console.log('🚀 ~ dayjs(i.firstUsed).year()', dayjs(i.firstUsed).year());
                                console.log('🚀 ~ dayjs().year() - dayjs(i.firstUsed).year()', dayjs().year() - dayjs(i.firstUsed).year());
                                console.log('🚀 ~ g.match', g.match);
                                console.log('🚀 ~ {groupsForPage&&groupsForPage[grouping].groups.map ~ g.match.indexOf(dayjs().year() - dayjs(i.firstUsed).year())', g.match.indexOf(dayjs().year() - dayjs(i.firstUsed).year()));
                                return g.match.indexOf(dayjs().year() - dayjs(i.firstUsed).year()) > -1
                            }),
                                idx.toString()
                            )
                        }
                    </>
                )
            })}

            {!groupsForPage && aList(items, '1')}
        </>
    )
}