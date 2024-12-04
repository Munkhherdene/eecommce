import React from 'react';
import { Search, ShoppingBag, User, Heart } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">LUXE</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-black">New In</a>
            <a href="#" className="text-gray-700 hover:text-black">Clothing</a>
            <a href="#" className="text-gray-700 hover:text-black">Accessories</a>
            <a href="#" className="text-gray-700 hover:text-black">Sale</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}