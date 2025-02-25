import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="absolute top-0 right-0 p-4">
        <Link to="/faq" className="bg-white/10 text-white px-6 py-2 rounded-lg font-medium hover:bg-white/20 transition">
          FAQ
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            YouSync
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Synchronisez vos playlists directement sur votre ordinateur depuis YouTube, Spotify, Apple Music et bientôt SoundCloud.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/0m8y/YouSync/raw/refs/heads/main/YouSyncInstaller.exe"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Télécharger
            </a>
            <a
              href="https://github.com/0m8y/YouSync/"
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition"
            >
              Voir sur GitHub
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-3">🔄 Synchronisation des playlists</h3>
            <p className="text-gray-400">Téléchargez et mettez à jour vos playlists en un clic.</p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-3">🎵 Téléchargement MP3</h3>
            <p className="text-gray-400">Conversion en MP3 avec récupération automatique des métadonnées.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-3">🌐 Multi-plateforme</h3>
            <p className="text-gray-400">Compatible avec YouTube, Spotify, Apple Music et bientôt SoundCloud.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-3">💻 Interface intuitive</h3>
            <p className="text-gray-400">Une navigation fluide pour une gestion simplifiée des playlists.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-3">📁 Organisation optimisée</h3>
            <p className="text-gray-400">Association des playlists à des dossiers spécifiques sur votre PC.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-3">⚡ Accès rapide</h3>
            <p className="text-gray-400">Boutons de raccourci vers le dossier de sauvegarde et la playlist en ligne.</p>
          </div>
        </div>
      </div>

      {/* License Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Open Source</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          YouSync est un projet open-source sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer selon vos besoins.
        </p>
      </div>
    </main>
  );
}

export default Home;