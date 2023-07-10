import { useState } from "react";
import AnimalShow from "./AnimalShow";

function App() {
const [type,changeType] = useState(0);
 const showAnimal=()=>{

   changeType(previousState => {return previousState+1});
 }

  return (
    <>
    
    <button onClick={showAnimal}>Add Animal</button>
    <div>Animal to show {type}</div>
    <AnimalShow animal={type}/>
    </>
    
  )
}

export default App;
