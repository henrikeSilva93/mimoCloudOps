import './dietEconomy.css'
import Pig from '../../assets/pig.png'
const DietEconomy = () => {
    return (
        <div className='diet_economy_container'>
          
            <p>Investimento
            na dieta:</p>
            <img src={Pig} alt="pig" className='pig' />
            <div className='economy_selector'>
               <div>
                    <input type="radio" name="economy_selector" id="economica"/>
                    <label htmlFor="economica">Econômica</label>
               </div>
               <div>
                    <input type="radio" name="economy_selector" id="economica"/>
                    <label htmlFor="economica">moderadamente Econômica</label>
               </div>
               <div>
                    <input type="radio" name="economy_selector" id="economica"/>
                    <label htmlFor="economica">O que for melhor para mim</label>
               </div>
            </div>
        
        </div>
    )
}

export default DietEconomy