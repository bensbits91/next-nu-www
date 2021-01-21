import { useState } from 'react'
import Link from 'next/link'
import { groups } from '../utils/categories'
import dayjs from 'dayjs'
import ItemIcon from './ItemIcon'

export default function SKillGrid({ items }) {
    const groupsForPage = groups[items[0].pageType],

        [grouping, setGrouping] = useState('skillType'),

        groupSelect = groupsForPage ?
            <ul className='actions stacked'>
                {Object.keys(groupsForPage).map(g =>
                    <li key={g}>
                        <a onClick={() => setGrouping(g)}
                            className={g === grouping ? 'button small active disabled' : 'button small'} >
                            {groupsForPage[g].optionText}
                        </a>
                    </li>
                )}
            </ul> : <></>,

        aList = (items, idx) => {
            return (
                <div key={idx}>
                    <ul>
                        {items.map(item =>
                            <li key={item.slug}>
                                <Link as={`/${item.pageType}/${item.slug.replace(/\.mdx?$/, '')}`}
                                    href={`/${item.pageType}/[slug]`} >
                                    <a>
                                        <span className='icon-wrap'>
                                            <ItemIcon slug={item.slug} />
                                        </span>
                                        {item.title}
                                    </a>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>)
        }

    return (
        <div className='row'>
            <div className='col-8 col-12-medium'>
                <div className='grid-wrap'>

                    {groupsForPage[grouping].groups.map((g, idx) => {

                        const filteredItems = function () {
                            switch (grouping) {
                                case 'skillType':
                                    return items.filter(i => g.match.indexOf(i.skillType) > -1)

                                case 'level':
                                    return items.filter(i => g.match.indexOf(i.level) > -1)

                                case 'years':
                                    return items.filter(i => g.match.indexOf(
                                        (i.lastUsed ? dayjs(i.lastUsed).year() : dayjs().year()) - dayjs(i.firstUsed).year() // subtract year first used from EITHER year last used OR year now
                                    ) > -1)

                                case 'lastUsed':
                                    return items.filter(i => (!i.lastUsed && g.match === dayjs().year()) || g.match === dayjs(i.lastUsed).year())

                                default:
                                    return null
                            }
                        }()

                        return (
                            filteredItems.length > 0 &&
                            <article key={idx}>
                                <h2>{g.groupName}</h2>
                                {aList(filteredItems, idx.toString())}
                            </article>

                        )
                    })}
                </div>
            </div>

            <div className='col-4 col-12-medium mdx-sidebar'>
                {groupSelect}
            </div>
        </div>
    )
}