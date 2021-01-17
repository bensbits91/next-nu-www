import Link from 'next/link'

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/work'>
                        <a>Work</a>
                    </Link>
                </li>
                <li>
                    <Link href='/skills'>
                        <a>Skills</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}