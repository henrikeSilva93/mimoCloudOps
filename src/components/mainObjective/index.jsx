import './mainObjective.css'

const MainObjective = () => {
    return(
        <div className='main_objective'>
          <div className='question_container'>
          <p>
           Qual é o seu
            objetivo principal?
           </p>
          </div>
          <div className='select_form'>
            <select id='select_objective'>
                <option value="1">Emagrecer</option>
                <option value="2">Perder Peso</option>
                <option value="2">Ganhar Saúde</option>
                <option value="2">Perder Peso</option>
            </select>
          </div>
        </div>
    )
}

export default MainObjective