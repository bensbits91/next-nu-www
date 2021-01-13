import Nav from './Nav'

export default function Layout({ children }) {
    return (
        <div id='wrapper'>
            <div className='main'>
                <header id='header'>
                    <Nav />
                </header>
                <div className='inner'>{children}</div>
            </div>
        </div>
    )
}