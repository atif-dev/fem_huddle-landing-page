import logo from './images/logo.svg';

function Header(){
    return(
        <header>
            <div>
                <a href='#'><img src={logo} alt='logo'/></a>
            </div>
            <div><button>Try it free</button></div>
        </header>
    );
}

export default Header;