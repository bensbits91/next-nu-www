import Nav from './Nav'
// import { useState } from 'react'

export default function Layout({ children }) {
    // const [shownav, setShownav] = useState(false)

    return (
        <div id='wrapper'>
            <div className='main'>
                <header id='header'>
                    <Nav />
                </header>
                <div className='inner'>{children}</div>
            </div>
            {/* <div id="sidebar" className={shownav ? "" : "inactive"}>
                <div className="inner">
                    SIDEBAR CONTENT
                </div>
                <a href="#sidebar" className="toggle" onClick={() => setShownav(!shownav)}>Toggle</a>
            </div> */}
        </div>
    )
}