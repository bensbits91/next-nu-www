import ItemIcon from './ItemIcon'

export default function MdxListFlat({ items, showIcon = true, showText = true }) {
    return (
        <div className='mdx-list-flat'>
            {items.map(item =>
                <span key={item.skillSlug} className='flat-list'>
                    {showIcon &&
                        <span title={item.skillPage.title}
                            className={showText ? 'icon-wrap' : 'icon-only-wrap'}
                        >
                            <ItemIcon slug={item.skillSlug} />
                        </span>
                    }
                    {showText && item.skillPage.title}
                </span>
            )}
        </div>
    )
}