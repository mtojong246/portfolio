import { Routes, Route } from "react-router-dom";
import All from "./All/all.component";



const App = () => {

  return (
    <Routes>
      <Route path='/' element={<All />} />
    </Routes> 
  );
}

export default App;
