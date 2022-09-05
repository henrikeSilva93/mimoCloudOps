import FoodRestrictionBtn from '../foodRestrictionBtn'
import './foodRestriction.css'

const FoodRestriction = () => {
    return (
        <div className='foodRestriction_container'>
            <p>Você tem alguma Restrição Alimentar?</p>
            <div className='food_restriction_btn_grid'>
                <FoodRestrictionBtn restriction="Glutem"/>
                <FoodRestrictionBtn restriction="Amendoin"/>
                <FoodRestrictionBtn restriction="Ovos"/>
                <FoodRestrictionBtn restriction="Peixes"/>
                <FoodRestrictionBtn restriction="Leite"/>
                <FoodRestrictionBtn restriction="Soja"/>
                <FoodRestrictionBtn restriction="Mariscos"/>
                <FoodRestrictionBtn restriction="Porco"/>
                <FoodRestrictionBtn restriction="Bacon"/>
                <FoodRestrictionBtn restriction="Tomate"/>
                <FoodRestrictionBtn restriction="Leguminosas"/>
                <FoodRestrictionBtn restriction="Laticíneos"/>
            </div>
            <div className='restriction_add'>
                <p>Adicione suas prórias restrições</p>
                <div>
                <input type="text" placeholder='digite aqui' />
                <button>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default FoodRestriction