import logo from '../logo.svg';
import '../App.css';
import SignInPage from "../pages/signInPage/signInPage";
import {Route, Routes} from "react-router-dom";
import SignUpPage from "../pages/signUpPage/signUpPage";
import DashboardPage from "../pages/DashboardPage/dashboardPage/dashBoard";
import ProductManage from "../pages/DashboardPage/productManage/productManage";
import CartManage from "../pages/DashboardPage/cartManage/cartManage";



function App() {
  return (
    <Routes>
        <Route exact path='/' element={<SignInPage/>}/>
        <Route  path='/signUpPage' element={<SignUpPage/>}/>
        <Route  path='/dashboardPage' element={<DashboardPage/>}/>
        <Route  path='/productManage' element={<ProductManage/>}/>
        <Route  path='/cartManage' element={<CartManage/>}/>
    </Routes>

  );
}


export default App;
