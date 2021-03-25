import React    from "react"
import Navbar   from './Navbar'
import Content  from './Content'
import Footer   from './Footer'
import Header   from './Header'

if(window.location.pathname === "/")
{
    import('./Navbar.css');
    import('./Header.css');
    import('./Content.css');
}

function MainPage() {
    return (
        <React.StrictMode>
            <Header />
            <Navbar />
            <Content />
            <Footer />
        </React.StrictMode>
    );
}

export default MainPage;