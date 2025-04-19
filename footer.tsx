"use client";

import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">Cybernack</h3>
            <p className="text-muted-foreground mb-4">
              Empowering organizations with effective cybersecurity awareness solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-gray hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-dark-gray hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-dark-gray hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-dark-gray hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Product links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="/features" className="text-muted-foreground hover:text-accent">Features</a></li>
              <li><a href="/pricing" className="text-muted-foreground hover:text-accent">Pricing</a></li>
              <li><a href="/signup" className="text-muted-foreground hover:text-accent">Sign Up</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-muted-foreground hover:text-accent">About Us</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-accent">Contact</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-accent">Blog</a></li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-muted-foreground hover:text-accent">Privacy Policy</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-accent">Terms of Service</a></li>
              <li><a href="/cookies" className="text-muted-foreground hover:text-accent">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Cybernack. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Designed and developed with security in mind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
