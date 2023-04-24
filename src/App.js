import { Routes, Route } from "react-router-dom";
import All from "./All/all.component";
import KnifePurveyor from './Knife-Purveyor/knife-purveyor.component';
import Pantry from "./Pantry/pantry.component";
import Primordial from "./Primordial/primordial.component";



const App = () => {

  return (
    <Routes>
      <Route path='/' element={<All />} />
      <Route path='knife-purveyor' element={<KnifePurveyor />} />
      <Route path='pantry' element={<Pantry/>} />
      <Route path='primordial' element={<Primordial />} />
    </Routes> 
  );
}

export default App;
