import './suplements.css'
import  Suplement from  '../../assets/suplement.png'

const Suplements  = () => {
    return(
       <div className='suplements_container'>
        
            <p>Gostaria de utilizar
            suplementos esportivos?</p>
            <img src={Suplement} alt="" className='suplement_vector'/>
            <div className='selector'>
            <div>
                <input type="radio"  name="selector" id="sim"/>
                <label htmlFor="sim">Sim</label>
            </div>
            <div>
                <input type="radio"  name="selector" id="nao"/>
                <label htmlFor="nao">Não</label>
            </div>
            
            </div>
            
        </div>
     
  )
}   

export default Suplements