export const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    category: 'Electronics',
    brand: 'AudioTech',
    rating: 4.5,
    image: 'https://via.placeholder.com/300x300?text=Wireless+Headphones',
    description: 'High-quality wireless headphones with noise cancellation'
  },
  {
    id: 2,
    name: 'USB-C Charger',
    price: 29.99,
    category: 'Electronics',
    brand: 'PowerUp',
    rating: 4.8,
    image: 'https://via.placeholder.com/300x300?text=USB-C+Charger',
    description: 'Fast charging USB-C charger compatible with all devices'
  },
  {
    id: 3,
    name: 'Smartphone Case',
    price: 19.99,
    category: 'Accessories',
    brand: 'CaseShield',
    rating: 4.3,
    image: 'https://via.placeholder.com/300x300?text=Phone+Case',
    description: 'Durable protective smartphone case'
  },
  {
    id: 4,
    name: 'Laptop Stand',
    price: 49.99,
    category: 'Electronics',
    brand: 'WorkSpace',
    rating: 4.6,
    image: 'https://via.placeholder.com/300x300?text=Laptop+Stand',
    description: 'Ergonomic laptop stand for improved productivity'
  },
  {
    id: 5,
    name: 'Screen Protector',
    price: 9.99,
    category: 'Accessories',
    brand: 'ProtectIt',
    rating: 4.4,
    image: 'https://via.placeholder.com/300x300?text=Screen+Protector',
    description: 'Tempered glass screen protector'
  },
  {
    id: 6,
    name: 'Portable SSD',
    price: 129.99,
    category: 'Electronics',
    brand: 'StoragePro',
    rating: 4.7,
    image: 'https://via.placeholder.com/300x300?text=Portable+SSD',
    description: 'Fast portable SSD with 1TB storage'
  },
  {
    id: 7,
    name: 'Keyboard',
    price: 69.99,
    category: 'Electronics',
    brand: 'KeyMaster',
    rating: 4.5,
    image: 'https://via.placeholder.com/300x300?text=Keyboard',
    description: 'Mechanical keyboard with RGB lighting'
  },
  {
    id: 8,
    name: 'Mouse Pad',
    price: 14.99,
    category: 'Accessories',
    brand: 'PrecisionPad',
    rating: 4.2,
    image: 'https://via.placeholder.com/300x300?text=Mouse+Pad',
    description: 'Large gaming mouse pad'
  },
  {
    id: 9,
    name: 'USB Hub',
    price: 39.99,
    category: 'Electronics',
    brand: 'ConnectHub',
    rating: 4.6,
    image: 'https://via.placeholder.com/300x300?text=USB+Hub',
    description: '7-port USB hub with fast data transfer'
  },
  {
    id: 10,
    name: 'Cable Organizer',
    price: 12.99,
    category: 'Accessories',
    brand: 'OrganizeIt',
    rating: 4.1,
    image: 'https://via.placeholder.com/300x300?text=Cable+Organizer',
    description: 'Cable organizer set'
  },
  {
    id: 11,
    name: 'Wireless Mouse',
    price: 34.99,
    category: 'Electronics',
    brand: 'PointMaster',
    rating: 4.4,
    image: 'https://via.placeholder.com/300x300?text=Wireless+Mouse',
    description: 'Ergonomic wireless mouse with precision tracking'
  },
  {
    id: 12,
    name: 'Monitor Stand',
    price: 44.99,
    category: 'Accessories',
    brand: 'ViewRise',
    rating: 4.5,
    image: 'https://via.placeholder.com/300x300?text=Monitor+Stand',
    description: 'Adjustable monitor stand for dual displays'
  }
]

export const brands = [...new Set(products.map(p => p.brand))]
export const categories = [...new Set(products.map(p => p.category))]
export const priceRanges = [
  { min: 0, max: 25, label: '$0 - $25' },
  { min: 25, max: 50, label: '$25 - $50' },
  { min: 50, max: 100, label: '$50 - $100' },
  { min: 100, max: 200, label: '$100 - $200' }
]
