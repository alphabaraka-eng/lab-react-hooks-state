import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // State for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false)

  // State for cart management
  const [cart, setCart] = useState([])

  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Handler to toggle dark mode
  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  // Handler to add product to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Render DarkModeToggle */}
      <DarkModeToggle
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      <ProductList
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onAddToCart={handleAddToCart}
      />

      {/* Render Cart component */}
      <Cart cartItems={cart} />
    </div>
  )
}

export default App