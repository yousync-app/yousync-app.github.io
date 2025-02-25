import FaqLayout from '../../components/FaqLayout';

function AjouterPlaylist() {
  return (
    <FaqLayout title="Comment ajouter une playlist ?">
      <ol className="space-y-4 text-gray-300">
        <li>1. Accédez à la section "Home" de l'application.</li>
        <li>2. Sélectionnez la plateforme de streaming de votre choix (YouTube, Spotify, Apple Music).</li>
        <li>3. Collez l'URL de votre playlist dans le champ prévu à cet effet.</li>
        <li>4. Cliquez sur l'icône de dossier pour sélectionner l'emplacement de sauvegarde sur votre ordinateur.</li>
        <li>5. Cliquez sur "Save" pour enregistrer la configuration.</li>
        <li>6. Votre playlist apparaîtra désormais dans le menu "Playlists".</li>
      </ol>
    </FaqLayout>
  );
}

export default AjouterPlaylist;