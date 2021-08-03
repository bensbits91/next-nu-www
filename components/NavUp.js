import Link from 'next/link'
import { useRouter } from 'next/router'
import ItemIcon from './ItemIcon'

export default function NavUp() {
    const router = useRouter(),

        path = router.pathname,

        aLink = (node, text) => <Link href={node}><a><ItemIcon slug='navup' />{text}</a></Link>,

        comp = function () {
            switch (path) {
                case '/skills/[slug]':
                    return aLink('/skills/', 'All Skills')

                case '/sharepoint-apps/[slug]':
                    return aLink('/sharepoint-apps/', 'All SharePoint Apps')

                default:
                    return aLink('/', 'Home')
            }
        }()

    return <div className='navup'>{comp}</div>

}