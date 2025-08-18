import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Article from './pages/Article'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
// import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        {/* 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App