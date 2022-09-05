import './dietDifficult.css'
import VectorChef from '../../assets/Vectorchef.svg'
const DietDifficult = () => {
    return (
        <div className='dietdificult_container'>
        
            <p>
                Nível de Dificuldade da dieta:
            </p>
            <img src={VectorChef} alt="vectorChef" className='vector_chef' />
            <div className='diet_selector'>

                <div>
                 <input type="radio" name="dietDificult" id="sempreparo" value="sem preparo" />
                 <label htmlFor="sempreparo">Sem Preparo</label>
                </div>
                <div>
                 <input type="radio" name="dietDificult" id="rapido" value="sem preparo" />
                 <label htmlFor="rapido">Com preparos Rápidos</label>
                </div>
               <div>
                 <input type="radio" name="dietDificult" id="gostocozinhar" value="sem preparo" />
                 <label htmlFor="gostocozinhar">Gosto de Cozinhar</label>
               </div>
            </div>
        </div>
    )
}

export default DietDifficult