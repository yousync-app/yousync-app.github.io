import FaqLayout from '../../components/FaqLayout';

function AjouterPlaylist() {
  return (
    <FaqLayout title="Comment ajouter une playlist ?">
      <ol className="space-y-10 text-gray-300"> {/* Augmente l'espacement entre chaque étape */}
        <li>
          <p>1. Accédez à la section "Home" de l'application.</p>
          <img src="/tuto/add/1.png" alt="Accéder à la section Home" className="rounded-lg shadow-lg mx-auto mt-6" />
        </li>
        <li>
          <p>2. Sélectionnez la plateforme de streaming de votre choix (YouTube, Spotify, Apple Music).</p>
          <img src="/tuto/add/2.png" alt="Sélectionner la plateforme" className="rounded-lg shadow-lg mx-auto mt-6" />
        </li>
        <li>
          <p>3. Collez l'URL de votre playlist dans le champ prévu à cet effet.</p>
          <img src="/tuto/add/3.png" alt="Coller l'URL de la playlist" className="rounded-lg shadow-lg mx-auto mt-6" />
        </li>
        <li>
          <p>4. Cliquez sur l'icône de dossier pour sélectionner l'emplacement de sauvegarde sur votre ordinateur.</p>
          <img src="/tuto/add/4.png" alt="Sélectionner l'emplacement de sauvegarde" className="rounded-lg shadow-lg mx-auto mt-6" />
        </li>
        <li>
          <p>5. Cliquez sur "Save" pour enregistrer la configuration.</p>
        </li>
        <li>
          <p>6. Votre playlist apparaîtra désormais dans le menu "Playlists".</p>
          <img src="/tuto/add/5.png" alt="Sauvegarder la configuration" className="rounded-lg shadow-lg mx-auto mt-6" />
        </li>
      </ol>
    </FaqLayout>
  );
}

export default AjouterPlaylist;
