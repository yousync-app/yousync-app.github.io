import FaqLayout from '../../components/FaqLayout';

function SynchroniserPlaylist() {
  return (
    <FaqLayout title="Comment synchroniser une playlist ?">
      <p className="text-gray-300">
        Depuis le menu "Playlists" ou depuis la page d'une playlist spécifique, cliquez simplement sur le bouton de synchronisation. YouSync se chargera automatiquement de télécharger les nouvelles musiques et de mettre à jour les métadonnées.
      </p>
    </FaqLayout>
  );
}

export default SynchroniserPlaylist;