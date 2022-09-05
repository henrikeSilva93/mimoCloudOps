import './meals.css'
const Meals = () => {
    return(
        <div className="meal_container">
          
                <p>Quantas refeições
                você faz ao dia?</p>
            
            <div className='meal_select'>
                <select>
                <option value="3">3 refeições</option>
                </select>
            </div>
        </div>
    )
}

export default Meals