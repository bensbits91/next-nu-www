import Nav from './Nav'

export default function Layout({ children }) {
    return (
        <div id='wrapper' class='dark'>
            <div className='main'>
                <header id='header'>
                    <Nav />
                </header>
                <div className='inner'>{children}</div>
            </div>
        </div>
    )
}