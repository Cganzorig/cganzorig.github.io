import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navy text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">My Website</h1>
        <div className="hidden md:flex space-x-4">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#fitness">Fitness</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-navy">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#fitness">Fitness</Link>
          <Link href="#contact">Contact</Link>
        </div>
      )}
    </nav>
  );
} 