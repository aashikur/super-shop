
"use client"
import { useSession, signOut} from 'next-auth/react';
import Link from 'next/link';

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
              SuperShop
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
           { !session && <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
              Login
            </Link>}
           { session && 
            <button className='text-black'>My Account</button>}
          
           { session && 
            <button onClick={() => signOut()} className='text-red-600'>logout</button>}
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;