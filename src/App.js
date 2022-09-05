import logo from './logo.svg';
import VectorU from './assets/VectorU.svg'
import Kiwi from './assets/kiwi.svg'
import VectorN from './assets/vectorN.svg'
import Cake from './assets/cake.svg'
import Caramel from './assets/caramel.png'
import Pasta from './assets/pasta.svg'
import Elipse from './assets/elipse.svg'
import FruitsLeft from './assets/fruits_Left.png'
import FruitsRight from './assets/fruits_Right.png'
import VectorM from './assets/vectorM.svg'
import Tomato from './assets/tomato.svg'
import Mushroom from './assets/mushroom.svg'
import './App.css';
import Navbar from './components/Navbar';
import EvaluationForm from './components/evaluationForm';
import MainObjective from './components/mainObjective';
import DietSelection from './components/dietSelection';
import Meals from './components/meals';
import FoodRestriction from './components/foodRestriction';
import DietDifficult from './components/dietDifficult';
import DietEconomy from './components/dietEconomy';
import Suplements from './components/suplements';
import Exercices from './components/exercises';
import PricingCard from './components/pricingCard';
import Footer from './components/footer';

function App() {
  return (
    <>
    <div className="container">
      <Navbar/>
       <section>
       <p>Planejamos tudo para você!</p>
       <button>Comece agora</button>
       </section>
         <img src={VectorU} className='vectorU'/> 
         <img src={Kiwi} className='kiwi_vector'/> 
         <img src={Cake} className='cake'/>
         <img src={Caramel} className='caramel'/>
         <img src={VectorN} className='vectorN'/>
          <img src={Pasta} className='pasta'/>
          <img src={VectorM} className='vectorM'/>
          <img src={Tomato} className='tomato'/>
          <img src={Mushroom} className='mushroom'/>
    
          

            <EvaluationForm/>
            <MainObjective/>
            <DietSelection/>
           <Meals/>
           <FoodRestriction/>
           <DietDifficult/>
            <DietEconomy/> 
            <Suplements/>
            <Exercices/>
            <div className='start_now'>
              <p>Comece Agora!</p>
              <button>Clique aqui para ver sua dieta</button>
            </div>
            <div className='pricing_container'>
           
             <p className='pricing_title'>Conheça nossos planos</p>
              <img src={FruitsLeft} className="fruit_left"alt="fruits"/>
              <img src={FruitsRight} className="fruit_right"alt="fruits"/>
            </div>
            <div className='card_grid'>
              <PricingCard title="Plano Individual"
              price="19,90">
               <p>Este plano é para pessoas residente no mesmo endereço.
                Os planos e a lista de compras serão feitos
                 para auxiliar nos objetivos de cada pessoa e 
                 facilitar a rotina da casa.</p>
                </PricingCard>
                <PricingCard title="Plano casal"
              price="24,90">
                <p>Este plano é para pessoas residente no mesmo endereço.
                Os planos e a lista de compras serão
                 feitos para auxiliar nos objetivos de 
                 cada pessoa e facilitar a rotina da casa.</p>
                </PricingCard>
                <PricingCard title="Plano Familiar (4 pessoas)"
              price="43.90">
                <p>Este plano é para pessoas residente no mesmo endereço.
                Os planos e a lista de compras serão feitos 
                para auxiliar nos objetivos de cada pessoa e 
                facilitar a rotina da casa.</p>
                </PricingCard>
  
             </div>
             <div className='feed'>
              <div>
               <span>Receba nossos conteúdos Exclusivos</span>
                <input type="text" id="feed"/>
                <button>Enviar</button>
              </div>
             </div>
            
         </div>
         <Footer/>
             <div className='copyright'>
              <p>© Nutri Alimentar. Todos os Direitos Reservados. </p>
              <p>Desenvolvido por: Aquila henrique da Silva Faria</p>
             </div>
         </>

  );
}

export default App;
