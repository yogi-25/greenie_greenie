import React from "react";
import Axios from "axios";
function App() {
    const getJoke = ()=>
    {
        Axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=> {console.log(response);})
    }
  return (
    <div className="App">
        Hello Youtube <button onClick={getJoke}>get joke</button>
    </div>);

}
export default App;
