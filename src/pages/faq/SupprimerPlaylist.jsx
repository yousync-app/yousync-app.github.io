import FaqLayout from '../../components/FaqLayout';

function SupprimerPlaylist() {
  return (
    <FaqLayout title="Comment supprimer une playlist ?">
      <ol className="space-y-4 text-gray-300">
        <li>1. Localisez le dossier contenant la playlist sur votre ordinateur.</li>
        <li>2. Supprimez le dossier.</li>
        <li>3. Redémarrez YouSync.</li>
        <li>4. Dans la fenêtre popup qui s'affiche, confirmez la suppression en cliquant sur "Delete playlist".</li>
        <li>5. Pour libérer complètement l'espace disque, n'oubliez pas de vider votre corbeille.</li>
      </ol>
    </FaqLayout>
  );
}

export default SupprimerPlaylist;