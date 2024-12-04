import React from 'react';
import { Header } from './components/layout/Header';
import { HeroBanner } from './components/home/HeroBanner';
import { FeaturedProducts } from './components/home/FeaturedProducts';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroBanner />
        <FeaturedProducts />
      </main>
      <footer className="bg-gray-100 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <p className="text-sm text-gray-600">
                LUXE is your destination for premium fashion and accessories.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Contact Us</li>
                <li>Shipping Information</li>
                <li>Returns & Exchanges</li>
                <li>Size Guide</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>New Arrivals</li>
                <li>Sale</li>
                <li>Gift Cards</li>
                <li>Store Locator</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-sm text-gray-600">
            <p>© 2024 LUXE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;