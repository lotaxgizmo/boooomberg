import './App.css';
import Hero from './sections/Hero';
import Welcome from './sections/Welcome'; 
import Retard from './sections/Retard'; 
import Storm from './sections/Storm'; 
import Explosive from './sections/Explosive'; 
import Memastic from './sections/Memastic'; 
import Tokenomics from './sections/Tokenomics'; 
import Quick from './sections/Quick'; 
import Header from './sections/Header'; 

function App() {
  return (
   <div className="flex flex-col justify-center align-center align-middle px-10 relative">
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
