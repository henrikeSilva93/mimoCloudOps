import './dietItem.css'
import Brocolis from '../../assets/broccolis.png'
const DietItem = ({title}) => {
    return(
        <div className="dietItem">
            <div className="dietItem_img">
                <img src={Brocolis}/>
            </div>

            <div className="dietItem_radio">
                
                <input type="radio" id="dieta" name="diet" value="dieta"/>
                <label htmlFor="dieta">{title}</label>
            </div>
        </div>
    )
}

export default DietItem