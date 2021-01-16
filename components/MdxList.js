import { useState } from 'react'
import Link from 'next/link'
import { groups } from '../static/categories'
import dayjs from 'dayjs'


export default function MdxList({ items }) {
    console.log('🚀 ~ MdxList ~ items', items);




    const groupsForPage = groups[items[0].pageType]
    // console.log('🚀 ~ MdxList ~ groupsForPage', groupsForPage);




    const [grouping, setGrouping] = useState('skillType')


    const groupSelect = groupsForPage ?
        <ul className='actions stacked'>
            {Object.keys(groupsForPage).map(g =>
                <li key={g}>
                    <a
                        onClick={() => setGrouping(g)}
                        className={g === grouping ? 'button small active disabled' : 'button small'}
                    >
                        {groupsForPage[g].optionText}
                    </a>
                </li>
            )}
        </ul> : <></>

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
                console.log('🚀 ~ {g', g);
                return (
                    <>
                        <h2 key={typeof g === 'string' ? g.groupName.replace(/ /g, '') : g}>{g.groupName}</h2>

                        {grouping === 'skillType' &&
                            aList(items.filter(i => i.skillType === g.groupName),
                                idx.toString()
                            )
                        }

                        {grouping === 'level' &&
                            aList(items.filter(i =>
                                g.match.indexOf(i.level) > -1
                            ),
                                idx.toString()
                            )
                        }

                        {grouping === 'years' &&
                            aList(items.filter(i =>
                                g.match.indexOf(dayjs().year() - dayjs(i.firstUsed).year()) > -1
                            ),
                                idx.toString()
                            )
                        }

                        {grouping === 'lastUsed' &&
                            aList(items.filter(i =>
                                (!i.lastUsed && g.match === dayjs().year()) || g.match === dayjs(i.lastUsed).year()
                            ),
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