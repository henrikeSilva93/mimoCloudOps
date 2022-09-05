import './pricingCard.css'

const PricingCard = ({title, price, children}) => {
    return (
        <div className='pricing-card'>
            <div className='card-title'>
                <span>{title}</span>
            </div>
            <div className='card-body'>
                <span className='price'><span className='rs_span'>R$</span> <br></br>{price}</span>
                 {children}

                 <button>Comece agora</button>
            </div>
        </div>
    )
}

export default PricingCard