// app/about/page.js
import Link from 'next/link';

export const metadata = {
  title: 'About Me',
};

export default function About() {
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
        <h1 className="text-5xl font-bold text-center mb-6 text-blue-800">About Me</h1>
        <div className="w-full max-w-screen-md bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold mb-4 text-purple-700">Hello! I'm a passionate developer.</h2>
          <p className="text-lg mb-4 text-gray-700 leading-relaxed font-serif underline">
            I have experience in various technologies and enjoy building web applications. My expertise includes working with modern frameworks, developing responsive designs, and creating intuitive user experiences.
          </p>
          <p className="text-xl mb-4 text-gray-700 leading-relaxed font-mono italic">
            In my free time, I like to explore new programming languages and work on open-source projects. I believe in continuous learning and always strive to keep myself updated with the latest industry trends.
          </p>
          <p className="text-2xl text-gray-700 leading-relaxed font-sans font-bold">
            Feel free to check out my projects and get to know more about my work! Connect with me on social media or send me an email. I'm always open to discussing new ideas and collaborations.
          </p>
        </div>
      </main>
    </div>
  );
}
