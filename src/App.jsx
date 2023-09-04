/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// Purpose: Main App component
import './App.css'
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Nav from './components/Nav';
import  Buy  from './pages/cart/Buy'
import  ListShop  from './pages/shop/ListShop'
import {ShopContextProvider} from './context/shop-context'






function App() {




  return (
   <div className="App">
    <ShopContextProvider>
            <Router>
            <Nav/>
                    <Routes>
                          <Route path="/" element={<ListShop/>} />
                          <Route path="/cart" element={<Buy/>}/>
                    </Routes>
            </Router>
    </ShopContextProvider>
   </div>
  )
} 

export default App;
