import Link from 'next/link'

export default function Nav() {
    return (
        <nav>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/work'>
                <a>Work</a>
            </Link>
            <Link href='/skills'>
                <a>Skills</a>
            </Link>
        </nav>
    )
}