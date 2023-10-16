import './App.css';
import Hero from './sections/Hero';
import Welcome from './sections/Welcome'; 
import Retard from './sections/Retard'; 
import Storm from './sections/Storm'; 
import Explosive from './sections/Explosive'; 
import Memastic from './sections/Memastic'; 
import Tokenomics from './sections/Tokenomics'; 
import Quick from './sections/Quick'; 

function App() {
  return (
   <div className="app px-10">
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
