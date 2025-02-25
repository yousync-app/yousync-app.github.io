import FaqLayout from '../../components/FaqLayout';

function SupprimerPlaylist() {
  return (
    <FaqLayout title="Comment supprimer une playlist ?">
      <div className="text-gray-300 space-y-6">
        <ol className="space-y-6">
          <li>
            <p><strong>1. Localisez le dossier contenant la playlist sur votre ordinateur.</strong></p>
            <img
              src="/tuto/supp/1.png"
              alt="Localiser le dossier de la playlist"
              className="rounded-lg shadow-lg mx-auto mt-4"
            />
          </li>

          <li>
            <p><strong>2. Supprimez le dossier.</strong></p>
          </li>

          <li>
            <p><strong>3. Redémarrez YouSync.</strong></p>
          </li>

          <li>
            <p><strong>4. Dans la fenêtre popup qui s'affiche, confirmez la suppression en cliquant sur "Delete playlist".</strong></p>
            <img
              src="/tuto/supp/2.png"
              alt="Confirmer la suppression de la playlist"
              className="rounded-lg shadow-lg mx-auto mt-4"
            />
          </li>

          <li>
            <p><strong>5. Pour libérer complètement l'espace disque, n'oubliez pas de vider votre corbeille.</strong></p>
            <img
              src="/tuto/supp/3.png"
              alt="Vider la corbeille après suppression"
              className="rounded-lg shadow-lg mx-auto mt-4"
            />
          </li>
        </ol>
      </div>
    </FaqLayout>
  );
}

export default SupprimerPlaylist;
