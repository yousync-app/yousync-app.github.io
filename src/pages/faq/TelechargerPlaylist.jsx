import FaqLayout from '../../components/FaqLayout';

function TelechargerPlaylist() {
  return (
    <FaqLayout title="Comment télécharger une playlist ou un titre ?">
      <div className="text-gray-300 space-y-6">
        <p>Deux options s'offrent à vous pour télécharger votre musique :</p>

        <ul className="list-disc list-inside space-y-6">
          <li>
            <p><strong>1. Télécharger une playlist complète :</strong></p>
            <p>Cliquez sur le bouton <strong>"Télécharger"</strong> situé dans la page playlists pour télécharger l'intégralité de celle-ci.</p>
            <img
              src="/tuto/dl/1.png"
              alt="Télécharger une playlist complète"
              className="rounded-lg shadow-lg mx-auto mt-4"
            />
          </li>

          <li>
            <p><strong>2. Télécharger un titre spécifique :</strong></p>
            <p>Utilisez le bouton <strong>"Télécharger"</strong> situé à côté du titre souhaité dans la liste des morceaux.</p>
            <img
              src="/tuto/dl/2.png"
              alt="Télécharger un titre spécifique"
              className="rounded-lg shadow-lg mx-auto mt-4"
            />
          </li>
        </ul>
      </div>
    </FaqLayout>
  );
}

export default TelechargerPlaylist;
