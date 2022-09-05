import './navbar.css'
import Logo from '../../assets/logo.png'
import LogoTitle from '../../assets/logo_title.png'

const Navbar = () => {
    return(
       <nav>
       <div>
        <img src={Logo} style={{marginRight:"18px"}} alt="logo"/>
        <img src={LogoTitle} alt="logo_title"/>
       </div>
        <div className='navItens'>
            <ul>
                <li><a href="#">Como fazemos</a></li>
                <li><a href="#">Planos e Preços</a></li>
                <li><a href="#">Receitas</a></li>
                <li><a href="#">Sobre Nós</a></li>
            </ul>
        </div>
        <div className='authItens'>
        <ul>
                <li><a href="#">Inscrever-se</a></li>
                <li><a href="#">Login</a></li>
                
        </ul>
        </div>
       </nav>
    )
}

export default Navbar