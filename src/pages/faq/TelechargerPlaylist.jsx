import FaqLayout from '../../components/FaqLayout';

function TelechargerPlaylist() {
  return (
    <FaqLayout title="Comment télécharger une playlist ou un titre ?">
      <p className="text-gray-300">Deux options s'offrent à vous :</p>
      <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
        <li>Cliquez sur le bouton de téléchargement situé sous le titre de la playlist pour télécharger l'intégralité de celle-ci.</li>
        <li>Pour un titre spécifique, utilisez le bouton de téléchargement à côté du titre souhaité dans la liste des morceaux.</li>
      </ul>
    </FaqLayout>
  );
}

export default TelechargerPlaylist;