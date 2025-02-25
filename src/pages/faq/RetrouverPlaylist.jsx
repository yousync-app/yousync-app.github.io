import FaqLayout from '../../components/FaqLayout';

function RetrouverPlaylist() {
  return (
    <FaqLayout title="Comment retrouver une playlist ?">
      <ol className="space-y-4 text-gray-300">
        <li>1. Ouvrez le menu "Playlists".</li>
        <li>2. Cliquez sur l'icône "+" dans le coin supérieur droit.</li>
        <li>3. Naviguez jusqu'au dossier contenant votre playlist.</li>
        <li>4. Sélectionnez le dossier pour réimporter la playlist dans YouSync.</li>
      </ol>
    </FaqLayout>
  );
}

export default RetrouverPlaylist;