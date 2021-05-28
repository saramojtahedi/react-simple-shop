import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import { Container } from 'react-bootstrap'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Cart from './Pages/Cart'

function App() {

  return (
    <Router>
      <Header />
        <main className="py-4">
          <Container>
            <Route path="/" exact component={Home} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart/:id?" component={Cart} />
          </Container>
        </main>
      <Footer />
    </Router>
  )
}

export default App