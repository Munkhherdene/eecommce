import React from 'react';
import { Button } from '../ui/Button';

export function HeroBanner() {
  return (
    <div className="relative h-[600px] bg-gray-100">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80"
          alt="Fashion Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl font-bold mb-4">Summer Collection 2024</h1>
          <p className="text-xl mb-8">Discover the latest trends in fashion and explore our new collection.</p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}