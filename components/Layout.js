import Nav from './nav/Nav'

export default function Layout({ children }) {
    return (
        <div className='main'>
            <header id='header'>
                <Nav />
            </header>
            <div className='inner'>{children}</div>
        </div>
    )
}