"use client";

import Link from 'next/link';
import { FC } from 'react';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: FC<NavbarProps> = ({ transparent = false }) => {
  return (
    <header className={`w-full ${transparent ? 'absolute top-0 left-0 z-10' : 'bg-white shadow-sm'}`}>
      <div className="container-custom py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-foreground">
          Cybernack
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-foreground hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-foreground hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/features" className="text-foreground hover:text-accent transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-foreground hover:text-accent transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
            Contact
          </Link>
          <Link href="/blog" className="text-foreground hover:text-accent transition-colors">
            Blog
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link href="/signup" className="btn-primary">
            Sign Up
          </Link>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
