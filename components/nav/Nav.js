import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Nav.module.scss';

export default function Nav() {
    const router = useRouter()

    return (
        <nav/*  id="menu" */ className={styles.nav}>
            <ul>
                <li>
                    <Link href='/'>
                        <a className={router.pathname === '/' ? 'active' : ''}>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/sharepoint-apps'>
                        <a className={router.pathname === '/sharepoint-apps' || router.pathname === '/sharepoint-apps/[slug]' ? 'active' : ''}>
                            SharePoint Apps
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a className={router.pathname === '/about' ? 'active' : ''}>
                            About
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/contact'>
                        <a className={router.pathname === '/contact' ? 'active' : ''}>
                            Contact
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
