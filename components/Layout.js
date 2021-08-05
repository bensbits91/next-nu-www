import ImageOpt from './ImageOpt';
import Nav from './nav/Nav';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function Layout({ children }) {
    const router = useRouter(),

        handleScroll = () => {
            const vPos = window.scrollY,
                main = document.querySelector('.main');

            if (vPos > 100) {
                main.classList.add('isScrolled');
            } else {
                main.classList.remove('isScrolled');
            }
        };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });


    return (
        <div className='main'>
            <header id='header'>
                <Link href='/'>
                    <a className={router.pathname === '/' ? 'active' : ''}>
                        <ImageOpt path={'ntLogo2021-3colors-b-300w.png'} sizeSet={'small'} />
                    </a>
                </Link>
                <Nav />
            </header>
            <div className='inner'>{children}</div>
        </div>
    )
}