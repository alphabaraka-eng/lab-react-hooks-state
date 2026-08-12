import React, { useState } from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ selectedCategory: propsCategory, onSelectCategory, onAddToCart }) => {
  // Local state as fallback in case props are not passed from App
  const [localCategory, setLocalCategory] = useState('All')

  const selectedCategory = propsCategory !== undefined ? propsCategory : localCategory

  const handleCategoryChange = (e) => {
    const value = e.target.value
    if (onSelectCategory) {
      onSelectCategory(value)
    } else {
      setLocalCategory(value)
    }
  }

  // Get unique categories dynamically from sampleProducts
  const categories = ['All', ...Array.from(new Set(sampleProducts.map((p) => p.category)))]

  // Filter products according to selected category
  const filteredProducts = sampleProducts.filter((product) => {
    if (selectedCategory === 'All') return true
    return product.category === selectedCategory
  })

  return (
    <div>
      <h2>Available Products</h2>

      {/* Category Dropdown Filter */}
      <div className="filter-container">
        <label htmlFor="category-select">Filter by Category: </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Render Filtered Products */}
      {filteredProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))
      )}
    </div>
  )
}

export default ProductList