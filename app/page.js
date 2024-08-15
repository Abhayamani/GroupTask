// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../public/images/profilepic.png';

export const metadata = {
  title: 'Group Portfolio',
};

export default function Home() {
  return (
    <div className="p-4">
      <header className="bg-gray-800 p-4">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
            <li><Link href="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link></li>
            <li><Link href="/blog" className="text-white hover:text-gray-300">Blog</Link></li>
            <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>

          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center mt-8">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to Our Portfolio</h1>
        <div className="w-80 h-80 relative mb-6">
          <Image
            src={profilePic}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg"
          />
        </div>
        <p className="text-center">Discover my projects and more about me.</p>
      </main>
    </div>
  );
}
