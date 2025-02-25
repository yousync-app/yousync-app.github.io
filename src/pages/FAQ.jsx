import { Link } from 'react-router-dom';

const faqItems = [
  {
    title: "Comment installer YouSync ?",
    path: "/faq/installation",
    icon: "💿"
  },
  {
    title: "Comment ajouter une playlist ?",
    path: "/faq/ajouter-playlist",
    icon: "➕"
  },
  {
    title: "Comment synchroniser une playlist ?",
    path: "/faq/synchroniser-playlist",
    icon: "🔄"
  },
  {
    title: "Comment télécharger une playlist ou un titre ?",
    path: "/faq/telecharger-playlist",
    icon: "⬇️"
  },
  {
    title: "Comment supprimer une playlist ?",
    path: "/faq/supprimer-playlist",
    icon: "🗑️"
  },
  {
    title: "Comment retrouver une playlist ?",
    path: "/faq/retrouver-playlist",
    icon: "🔍"
  },
  {
    title: "Comment mettre à jour YouSync ?",
    path: "/faq/mettre-a-jour",
    icon: "⚡"
  }
];

function FAQ() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation */}
        <nav className="mb-12">
          <Link to="/" className="text-white/80 hover:text-white transition flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour à l'accueil
          </Link>
        </nav>

        <h1 className="text-4xl font-bold mb-12 text-center">Foire Aux Questions</h1>

        <div className="grid gap-4">
          {faqItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition flex items-center gap-4"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xl font-medium">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default FAQ;