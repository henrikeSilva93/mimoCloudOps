import './foodRestrictionBtn.css'
const FoodRestrictionBtn = ({restriction}) =>{
    return(
        <div className='restriction_btn'>
            <input type="radio" id={restriction} name="restricoes" value={restriction} className=''></input>
            <label htmlFor={restriction}>{restriction}</label>
        </div>
    )
}

export default FoodRestrictionBtn