import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Error from "./pages/Error"

const App = () => {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </div>
  )
};

export default App;
