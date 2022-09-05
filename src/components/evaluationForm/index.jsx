import '../evaluationForm/evaluationForm.css'
const EvaluationForm = () => {
    return(
        <div className="evalution_form">
            <div class="evalution_form_text">
            <p>
            Olá!<br></br>
            Precisamos conhecer
            um pouco sobre de você:</p>    
            </div>
           <div className='form'>
           <div className="radios">
           <label htmlFor='homem'><strong>Homem</strong></label>
           <input type="radio" id="homem" name='sexo' value="m"/>
           <label htmlFor="mulher"><strong>Mulher</strong></label>
           <input type="radio" id="mulher" name='sexo' value="f"/>
           </div>
           <div className='name'>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name"  required/>
            </div>
            <div>
                <label htmlFor="sobrenome">Sobrenome</label>
                <input type="text" id="sobrenome"  required/>
            </div>
           </div>
           <div className='birthdate'>
                 <label htmlFor="birtdate">Data de nascimento</label>
                <input type="date" id="birtdate"/>
           </div>
           <div className='measures'>
                <div>
                <label htmlFor="weight">Peso</label>
                <input type="number" id="weight" placeholder='kg'/>
                </div>
                <div>
                <label htmlFor="height">Altura</label>
                <input type="number" id="height" placeholder='m'/>
                </div>
           </div>
           <div className='greasePercentage'>
                <label htmlFor="fat-level">Porcentagem de Gordura Corporal</label>
                <select id='fat-level'>
                    <option>Moderado (22% a 35%)</option>
                </select>
           </div>
           
         </div>

        </div>
    )
}

export default EvaluationForm