import React from 'react';
import { ProductCard } from '../products/ProductCard';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Leather Crossbody Bag',
    price: 129.99,
    description: 'Elegant leather crossbody bag with adjustable strap',
    images: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80'],
    category: 'Accessories',
    colors: ['Black', 'Brown', 'Tan'],
    sizes: ['One Size'],
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Classic White Sneakers',
    price: 89.99,
    description: 'Minimalist white sneakers for everyday wear',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80'],
    category: 'Shoes',
    colors: ['White'],
    sizes: ['36', '37', '38', '39', '40', '41'],
    rating: 4.8,
    reviews: 256
  },
  {
    id: '3',
    name: 'Silk Summer Dress',
    price: 159.99,
    description: 'Flowing silk dress perfect for summer occasions',
    images: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80'],
    category: 'Dresses',
    colors: ['Blue', 'Pink', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.6,
    reviews: 89
  },
  {
    id: '4',
    name: 'Gold Chain Necklace',
    price: 79.99,
    description: 'Delicate gold-plated chain necklace',
    images: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80'],
    category: 'Jewelry',
    colors: ['Gold'],
    sizes: ['One Size'],
    rating: 4.7,
    reviews: 156
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}