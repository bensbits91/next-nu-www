import { useState } from 'react'
import Link from 'next/link'
import { groups } from '../utils/categories'
import dayjs from 'dayjs'
import ItemIcon from './ItemIcon'
import { colors } from '../utils/cssvars'

export default function SKillGrid({ items }) {
    const groupsForPage = groups[items[0].pageType],

        [grouping, setGrouping] = useState('level'),

        groupSelect = groupsForPage ?
            <div className='submenu'>
                <span className='label'>Group by: </span>
                {Object.keys(groupsForPage).map(g =>
                    <a key={g} onClick={() => setGrouping(g)}
                        className={g === grouping ? 'button small active disabled' : 'button small'} >
                        {groupsForPage[g].optionText}
                    </a>
                )}
                <span className='icon-legend'>
                    <span className='fav'><span className='icon-wrap-attr'><ItemIcon slug='fav' color={colors.mainPink} /></span>personal favorite</span>
                    <span className='fav'><span className='icon-wrap-attr'><ItemIcon slug='freq' color={colors.mainYellow} /></span>most used</span>
                </span>
            </div> : <></>,

        skillList = (items, idx) => {
            console.log('🚀 ~ SKillGrid ~ items', items);
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
                                {item.love >= 9 && <span className='fav'><span className='icon-wrap-attr'><ItemIcon slug='fav' size='0.8em' color={colors.mainPink} /></span></span>}
                                {(item.live === 'dozens' || item.live === 'hundreds') && <span className='fav'><span className='icon-wrap-attr'><ItemIcon slug='freq' size='0.8em' color={colors.mainYellow} /></span></span>}
                                {skillDetails(yearsUsed(item.lastUsed, item.firstUsed))}
                            </li>
                        )}
                    </ul>
                </div>)
        },

        yearsUsed = (lastUsed, firstUsed) => (lastUsed ? dayjs(lastUsed).year() : dayjs().year()) - dayjs(firstUsed).year(), // subtract year first used from EITHER year last used OR year now

        skillDetails = (years) =>
            <span className='skill-list-card-details' dangerouslySetInnerHTML={{
                __html: `(${years === 0 ? 'learning' : years === 1 ? years + '&nbsp;year' : years + '&nbsp;years'})`
            }} />


    return (
        <>
            {groupSelect}

            <div className='grid-wrap tight'>
                {groupsForPage[grouping].groups.map((g, idx) => {
                    const filteredItems = function () {
                        switch (grouping) {
                            case 'skillType':
                                return items.filter(i => g.match.indexOf(i.skillType) > -1)

                            case 'level':
                                return items.filter(i => g.match.indexOf(i.level) > -1)

                            case 'years':
                                return items.filter(i => g.match.indexOf(
                                    yearsUsed(i.lastUsed, i.firstUsed)
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
                            {skillList(filteredItems, idx.toString())}
                        </article>

                    )
                })}
            </div>
        </>
    )
}