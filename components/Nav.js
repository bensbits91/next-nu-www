import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {
    const router = useRouter()

    return (
        <nav/*  id="menu" */>
            <ul>
                <li>
                    <Link href='/'>
                        <a className={router.pathname === '/' ? 'active' : ''}>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/work'>
                        <a className={router.pathname === '/work' || router.pathname === '/work/[slug]' ? 'active' : ''}>
                            Work
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/skills'>
                        <a className={router.pathname === '/skills' || router.pathname === '/skills/[slug]' ? 'active' : ''}>
                            Skills
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
