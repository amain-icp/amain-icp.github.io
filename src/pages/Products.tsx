import React, { useEffect } from 'react';
import { trackPageView, trackProductView, trackButtonClick } from '../utils/analytics';
import racketImg from '../assets/product-racket.png';
import shoesImg from '../assets/product-shoes.png';
import bagImg from '../assets/product-bag.png';

const products = [
  { id: '1', name: 'Tennis Racket Pro', price: 199.99, image: racketImg },
  { id: '2', name: 'Tennis Shoes Elite', price: 129.99, image: shoesImg },
  { id: '3', name: 'Tennis Bag Deluxe', price: 79.99, image: bagImg },
];

const Products: React.FC = () => {
  useEffect(() => {
    trackPageView('/products', 'Products - Ace Tennis Academy');
  }, []);

  const handleProductClick = (product: typeof products[0]) => {
    trackProductView(product.id, product.name, product.price);
  };

  const handleAddToCart = (product: typeof products[0]) => {
    trackButtonClick('add_to_cart', `add-to-cart-${product.id}`);
  };

  return (
    <div className="products-page">
      <h1 style={{ color: '#FFC94A' }}>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" style={{ color: '#181a20', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', maxHeight: 180, objectFit: 'cover', borderRadius: 8, marginBottom: 16 }} />
            <h2 style={{ color: '#101522', marginBottom: 8 }}>{product.name}</h2>
            <p style={{ color: '#333', fontWeight: 600, fontSize: 18 }}>${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product)} style={{ marginTop: 12 }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products; 