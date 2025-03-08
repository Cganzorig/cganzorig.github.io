import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ganzorig Chuluunbat</h1>
        <ul className="flex space-x-4">
          <li><Link href="#about">About Me</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#fitness">Fitness Journey</Link></li>
          <li><Link href="#blog">Blog</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
} 