import logo from './images/logo.svg';

function Header(){
    return(
        <header>
            <div><img src={logo} alt='logo'/></div>
            <div><button>Try it free</button></div>
        </header>
    );
}

export default Header;