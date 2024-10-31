import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { CartProvider } from './components/context/CartContext'
import { ThemeProvider } from './components/context/ThemeContext'
import Navbar from './components/navbar/Navbar'
import Routes from './components/routes/Routes'

function App() {


  return (
    <>
    <BrowserRouter> 
    <ThemeProvider>
    <CartProvider>
      <Navbar></Navbar>
     <Routes/>
</CartProvider></ThemeProvider>
</BrowserRouter>
    </>
  )
}

export default App
