import FaqLayout from '../../components/FaqLayout';

function SynchroniserPlaylist() {
  return (
    <FaqLayout title="Comment synchroniser une playlist ?">
      <div className="text-gray-300 space-y-6">
        <p>
          Pour synchroniser une playlist, vous pouvez procéder de deux manières :
        </p>

        <ul className="space-y-6">
          <li>
            <p>1. Depuis le menu <strong>"Playlists"</strong>, cliquez sur le bouton <strong>"Synchroniser"</strong> associé à la playlist.</p>
            <img src="/tuto/sync/1.png" alt="Bouton Synchroniser dans le menu Playlists" className="rounded-lg shadow-lg mx-auto mt-6" />
          </li>

          <li>
            <p>2. Depuis la page d’une playlist spécifique, cliquez sur le bouton <strong>"Synchroniser"</strong> en haut de la page.</p>
            <img src="/tuto/sync/2.png" alt="Bouton Synchroniser dans la page de la playlist" className="rounded-lg shadow-lg mx-auto mt-6" />
          </li>
        </ul>

        <p>
          Une fois la synchronisation terminée, une notification s'affichera pour confirmer que la playlist a bien été mise à jour.
        </p>
        <img src="/tuto/sync/3.png" alt="Notification de synchronisation réussie" className="rounded-lg shadow-lg mx-auto mt-6" />
      </div>
    </FaqLayout>
  );
}

export default SynchroniserPlaylist;
