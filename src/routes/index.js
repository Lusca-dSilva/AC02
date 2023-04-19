import { Routes, Route, Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h2>Home</h2>
        <Link to='/sobre' replace>CU</Link>
      </div>
    );
  }
  
  function Sobre() {
    return (
      <div>
        <h2>Sobre</h2>
      </div>
    );
  }
  

export default function Router(){

    return (
        <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/sobre' element={<Sobre />}> </Route>

        </Routes>
    )
}

