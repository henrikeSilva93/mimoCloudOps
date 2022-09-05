import DietItem from '../dietItem'
import './dietSelection.css'
const DietSelection = () => {
    return(
        <div className="diet_selection">
            <div className='diet_selection_text'>
            Qual tipo de dieta
            você gostaria?
            </div>
            <div className='diet_selection_grid'>
                <DietItem title="Equilibrada"/>
                <DietItem title="Paleolítica"/>
                <DietItem title="Cetogênica"/>
                <DietItem title="Vegetariana"/>
                <DietItem title="Jejum"/>
                <DietItem title="sem lactose"/>
                <DietItem title="Vegana"/>
                <DietItem title="Low Carb"/>
                <DietItem title="variada"/>
              
            </div>
        </div>
    )
}

export default DietSelection