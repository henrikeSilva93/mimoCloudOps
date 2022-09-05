import './exercises.css'
import Exercise from '../../assets/Vectorexcercise.svg'
const Exercices = () => {
    return (
        <div className="exercise_container">
            <p>Você pratica exercícios Físicos?</p>
            <img src={Exercise} className="exercise_vector" alt="exercise" />
            <div>
                <div className='selection'>
                <div className='radio'>
                <input type="radio"  name="selector" id="sim"/>
                <label htmlFor="sim">Sim</label>
            </div>
            <div className='radio'>
                <input type="radio"  name="selector" id="nao"/>
                <label htmlFor="nao">Não</label>
            </div>
            <div>
                <select>
                    <option value="bmx">BMX, Montain BIKE</option>
                </select>
            </div>
            <div>
                <div>
                    <input type="text" id="horario" placeholder="horário do Treino" />
                </div>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Exercices