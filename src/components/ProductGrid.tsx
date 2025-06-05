export {};

const products = [
  {
    id: 1,
    name: 'Tennis Racket Pro',
    price: 199.99,
    image: '/src/assets/product-racket.png',
    description: 'Professional-grade tennis racket for competitive players.'
  },
  {
    id: 2,
    name: 'Tennis Shoes Elite',
    price: 129.99,
    image: '/src/assets/product-shoes.png',
    description: 'High-performance tennis shoes with superior grip and comfort.'
  },
  {
    id: 3,
    name: 'Tennis Bag Deluxe',
    price: 89.99,
    image: '/src/assets/product-bag.png',
    description: 'Spacious tennis bag with multiple compartments and thermal protection.'
  }
]; 

{products.map((product) => (
  <div key={product.id} className="product-card" style={{ color: '#181a20', background: '#1a1a1a', border: '1px solid #333', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.2)', padding: 16, transition: 'transform 0.3s ease' }}>
    <img src={product.image} alt={product.name} style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 8, marginBottom: 16 }} />
    <h2 style={{ color: '#fff', marginBottom: 8 }}>{product.name}</h2>
    <p style={{ color: '#ccc', marginBottom: 8 }}>{product.description}</p>
    <p style={{ color: '#ffb347', fontWeight: 'bold', marginBottom: 16 }}>${product.price}</p>
    <button style={{ background: '#ffb347', color: '#181a20', border: 'none', borderRadius: 4, padding: '8px 16px', cursor: 'pointer', transition: 'background 0.3s ease' }}>Add to Cart</button>
  </div>
))} 