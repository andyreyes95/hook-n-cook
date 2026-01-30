import { useState } from 'react'
import './Menu.css'

const menuData = {
  appetizers: [
    { name: 'Crispy Calamari', description: 'Lightly breaded and fried, served with marinara sauce', price: 10.99, icon: '🦑' },
    { name: 'Shrimp Cocktail', description: 'Chilled jumbo shrimp with zesty cocktail sauce', price: 12.99, icon: '🍤' },
    { name: 'Clam Chowder', description: 'New England style creamy clam chowder', price: 7.99, icon: '🥣' },
    { name: 'Crab Cakes', description: 'Two pan-seared crab cakes with remoulade', price: 13.99, icon: '🦀' },
    { name: 'Oysters on the Half Shell', description: 'Half dozen fresh oysters with mignonette', price: 14.99, icon: '🦪' },
  ],
  mains: [
    { name: 'Lobster Roll', description: 'Fresh Maine lobster in a buttery toasted roll with fries', price: 16.99, icon: '🦞' },
    { name: 'Fish & Chips', description: 'Beer-battered Atlantic cod with seasoned fries and coleslaw', price: 14.99, icon: '🐟' },
    { name: 'Grilled Salmon', description: 'Atlantic salmon with lemon butter, rice pilaf and vegetables', price: 18.99, icon: '🐠' },
    { name: 'Shrimp Basket', description: 'Golden fried shrimp with fries and cocktail sauce', price: 12.99, icon: '🍤' },
    { name: 'Seafood Platter', description: 'Fried shrimp, fish, clams, and crab cake with two sides', price: 24.99, icon: '🍽️' },
    { name: 'Crab Legs', description: 'One pound of snow crab legs with drawn butter and corn', price: 29.99, icon: '🦀' },
    { name: 'Blackened Mahi-Mahi', description: 'Cajun-spiced mahi with mango salsa and rice', price: 17.99, icon: '🐟' },
    { name: 'Shrimp Scampi', description: 'Sautéed shrimp in garlic butter over linguine', price: 16.99, icon: '🍝' },
  ],
  sides: [
    { name: 'Seasoned Fries', description: 'Crispy fries with our special seasoning', price: 4.99, icon: '🍟' },
    { name: 'Coleslaw', description: 'Creamy homemade coleslaw', price: 3.99, icon: '🥗' },
    { name: 'Corn on the Cob', description: 'Buttered sweet corn', price: 3.99, icon: '🌽' },
    { name: 'Hush Puppies', description: 'Southern-style fried cornmeal fritters', price: 4.99, icon: '🧆' },
    { name: 'Rice Pilaf', description: 'Herb-seasoned rice', price: 3.99, icon: '🍚' },
  ],
  drinks: [
    { name: 'Fresh Lemonade', description: 'House-made lemonade', price: 3.49, icon: '🍋' },
    { name: 'Iced Tea', description: 'Sweet or unsweetened', price: 2.99, icon: '🧊' },
    { name: 'Soft Drinks', description: 'Coke, Sprite, Dr Pepper, and more', price: 2.99, icon: '🥤' },
    { name: 'Ocean Breeze Mocktail', description: 'Blue curacao, coconut, and pineapple', price: 5.99, icon: '🍹' },
  ],
  desserts: [
    { name: 'Key Lime Pie', description: 'Tangy and sweet Florida classic', price: 6.99, icon: '🥧' },
    { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with molten center', price: 7.99, icon: '🍫' },
    { name: 'Cheesecake', description: 'New York style with berry compote', price: 6.99, icon: '🍰' },
  ],
}

function Menu() {
  const [activeCategory, setActiveCategory] = useState('mains')

  const categories = [
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🍽️' },
    { id: 'sides', name: 'Sides', icon: '🍟' },
    { id: 'drinks', name: 'Drinks', icon: '🥤' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
  ]

  return (
    <div className="menu">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Fresh from the ocean to your plate</p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section">
        <div className="container">
          {/* Category Tabs */}
          <div className="menu-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`menu-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-name">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="menu-items">
            {menuData[activeCategory].map((item, index) => (
              <div className="menu-item" key={index}>
                <div className="item-icon">{item.icon}</div>
                <div className="item-details">
                  <div className="item-header">
                    <h3>{item.name}</h3>
                    <span className="item-price">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="menu-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <span>🌿</span>
              <h3>Fresh Ingredients</h3>
              <p>All our seafood is sourced fresh daily from sustainable fisheries.</p>
            </div>
            <div className="info-card">
              <span>⚠️</span>
              <h3>Allergy Info</h3>
              <p>Please inform your server of any allergies. Menu items may contain shellfish.</p>
            </div>
            <div className="info-card">
              <span>👨‍👩‍👧‍👦</span>
              <h3>Kids Menu</h3>
              <p>Ask your server about our kids menu with smaller portions and prices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
