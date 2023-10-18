import './App.css';
import Hero from './sections/Hero';
import Welcome from './sections/Welcome'; 
import Retard from './sections/Retard'; 
import Storm from './sections/Storm'; 
import Explosive from './sections/Explosive'; 
import Memastic from './sections/Memastic'; 
import Tokenomics from './sections/Tokenomics'; 
import Quick from './sections/Quick'; 
import Footer from './sections/Footer'; 
import Header from './sections/Header'; 
import Wholebg from './assets/wholebg.svg'

function App() {
  return (
   <div className="flex flex-col justify-center align-center align-middle px-10 relative">
    <img src={Wholebg} alt="" className='w-screen absolute left-0 z-[-1]' />
<Header/>
<Hero/>
<Welcome/>
<Retard/>
<Explosive/>
<Storm/>
<Memastic/>
<Tokenomics/>
<Quick/>

   </div>
  );
}

export default App;
