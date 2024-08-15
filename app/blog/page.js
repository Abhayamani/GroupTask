// app/blog/page.js
import Image from 'next/image';
import Link from 'next/link';

// Define your articles array
const articles = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence',
    description: 'An in-depth look at the advancements and future prospects of AI technology.',
    content: (
      <>
        <p>
          Artificial Intelligence (AI) is rapidly transforming various industries...
        </p>
        <Image
          src="/images/ai-future.png"
          alt="Future of AI"
          width={600}
          height={400}
          className="my-4"
        />
        <p>
          AI technologies, including machine learning and deep learning...
        </p>
        <a
          href="https://medium.com/@yourusername/the-future-of-artificial-intelligence"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read on Medium
        </a>
      </>
    ),
  },
  {
    id: 2,
    title: 'Understanding Cloud Computing',
    description: 'A guide to the principles of cloud computing and its benefits.',
    content: (
      <>
        <p>
          Cloud computing is revolutionizing the way we think about data storage...
        </p>
        <Image
          src="/images/cloud-computing.png"
          alt="Cloud Computing"
          width={600}
          height={400}
          className="my-4"
        />
        <p>
          With cloud services, businesses can scale their resources efficiently...
        </p>
        <a
          href="https://medium.com/@yourusername/understanding-cloud-computing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read on Medium
        </a>
      </>
    ),
  },
  {
    id: 3,
    title: 'Getting Started with React.js',
    description: 'A beginner’s guide to building interactive UIs with React.js.',
    content: (
      <>
        <p>
          React.js is a powerful library for building user interfaces...
        </p>
        <Image
          src="/images/reactjs-guide.png"
          alt="React.js Guide"
          width={600}
          height={400}
          className="my-4"
        />
        <p>
          React allows developers to create reusable components and manage state...
        </p>
        <a
          href="https://medium.com/@yourusername/getting-started-with-react-js"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read on Medium
        </a>
      </>
    ),
  },
];

export default function Blog() {
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

      <h1 className="text-3xl font-bold text-center mb-6">Blog</h1>
      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-4">{article.description}</p>
            <div className="mb-4">{article.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
