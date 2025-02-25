import { Link } from 'react-router-dom';

function FaqLayout({ title, children }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation */}
        <nav className="mb-12">
          <Link to="/faq" className="text-white/80 hover:text-white transition flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour à la FAQ
          </Link>
        </nav>

        <div className="bg-white/5 p-8 rounded-xl">
          <h1 className="text-3xl font-bold mb-8">{title}</h1>
          {children}
        </div>
      </div>
    </main>
  );
}

export default FaqLayout;