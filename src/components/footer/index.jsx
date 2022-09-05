import './footer.css'
import Logo from '../../assets/mimma_footer.png'
import Socials from '../../assets/sociais.png'
const Footer = () => {
    return(
        <div className='footer'>
           <div className='footer_logo'>
              <img src={Logo}></img>
            <img src={Socials}></img>
           </div>

           <div className='institution'>
            <p>Institucional</p>
            <ul>
                <li><a href="#"> sobre nós</a></li>
                <li><a href="#"> Planos </a></li>
                <li><a href="#"> Receitas</a></li>
                <li><a href="#"> Fale conosco</a></li>
            </ul>
           </div>
           <div className='utils'>
            <p>Links úteis</p>
            <ul>
                <li><a href="#"> Privacidade</a></li>
                <li><a href="#"> Controle de Cookies </a></li>
            </ul>
           </div>
           <div className='contacts'>
            <p>Contato</p>
            <ul>
                <li>(61) 1234-4123</li>
                <li>aquilahenrique.silva@gmail.com</li>
                <li>R. Loren Impsun, 999 - Criciúma 93000-00
                </li>
            </ul>
           </div>
           <div className='sign-up'>
            <button>Inscreva-se</button>
           
           </div>
          
        </div>
    )
}

export default Footer