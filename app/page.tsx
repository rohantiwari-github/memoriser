import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-purple-400 mb-4">Quiz Memorizer</h1>
      <p className="text-lg mb-8 text-center">
        Practice questions from various weeks to help you memorize key information.
        Select a week below to start practicing!
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-2xl w-full">
        {[...Array(12)].map((_, index) => (
          <Link key={index} href={`/week/${index + 1}`} className="bg-gray-800 p-4 rounded-lg hover:bg-purple-500 transition text-center text-lg">
            Week {index + 1} Questions
          </Link>
        ))}
      </div>
    </div>
  );
}
