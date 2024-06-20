import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/counter";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Crud from "./pages/Crud";

function App() {
 const {isDarkTheme} = useSelector((store)=> store.counterReducer);
//  console.log(store)
  return (
    <>
    <BrowserRouter>
    <div className={isDarkTheme ? "bg-dark text-white" : "bg-white text-dark"} >
    <Header />
    <Routes >

<Route   path="/" element={ < Counter /> } />
<Route path="/crud" element={<Crud />} />
    </Routes>
   </div>
    </BrowserRouter>
    
    </>
  )
}

export default App
