import { useState } from 'react'
import Link from 'next/link'
import { groups } from '../static/categories'
import dayjs from 'dayjs'

export default function MdxList({ items }) {
    const groupsForPage = groups[items[0].pageType],

        [grouping, setGrouping] = useState('skillType'),

        groupSelect = groupsForPage ?
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
            </ul> : <></>,

        aList = (items, idx) =>{
        console.log('🚀 ~ MdxList ~ items', items);

            return(
            <div>
                <ul key={idx}>
                    {items.map(item =>
                        <li key={item.slug}
                            className='asdf'>
                            <Link
                                as={`/${item.pageType}/${item.slug.replace(/\.mdx?$/, '')}`}
                                href={`/${item.pageType}/[slug]`}
                            >
                                <a>
                                    <i className={item.icon || 'fas fa-chevron-right'}></i>
                                    {item.title}
                                </a>
                            </Link>
                        </li>
                    )}
                </ul>

                <style jsx>{`
                    li {
                        list-style: none;
                        padding: 0;
                    }
                    i {
                        padding-right: 20px;
                    }
                `}</style>
            </div>)}

    return (
        <div className='row'>
            <div className='col-8 col-12-medium'>
                <div className='row mdxList'>
                    {groupsForPage && groupsForPage[grouping].groups.map((g, idx) => {

                        const filteredItems = function () {
                            switch (grouping) {
                                case 'skillType':
                                    return items.filter(i => g.match.indexOf(i.skillType) > -1)

                                case 'level':
                                    return items.filter(i => g.match.indexOf(i.level) > -1)

                                case 'years':
                                    return items.filter(i => g.match.indexOf(dayjs().year() - dayjs(i.firstUsed).year()) > -1)

                                case 'lastUsed':
                                    return items.filter(i => (!i.lastUsed && g.match === dayjs().year()) || g.match === dayjs(i.lastUsed).year())

                                default:
                                    return null
                            }
                        }()

                        return (
                            filteredItems.length > 0 &&
                            <div className='col-6 col-12-medium'>
                                <h2 key={typeof g === 'string' ? g.groupName.replace(/ /g, '') : g}>
                                    {g.groupName}
                                </h2>

                                {grouping === 'skillType' &&
                                    aList(filteredItems, idx.toString())
                                }

                                {grouping === 'level' &&
                                    aList(filteredItems, idx.toString())
                                }

                                {grouping === 'years' &&
                                    aList(filteredItems, idx.toString())
                                }

                                {grouping === 'lastUsed' &&
                                    aList(filteredItems, idx.toString())
                                }
                            </div>

                        )
                    })}
                </div>

                {!groupsForPage && aList(items, '1')}
            </div>

            <div className='col-4 col-12-medium sidebar'>
                {groupSelect}
            </div>

            <style jsx>{`
                .mdxList .col-6 {
                    border-top: 1px solid;
                    padding-top: 40px;
                }
                .sidebar {
                    text-align: right;
                }
            `}</style>
        </div>
    )
}