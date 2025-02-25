import FaqLayout from '../../components/FaqLayout';

function MettreAJour() {
  return (
    <FaqLayout title="Comment mettre à jour YouSync ?">
      <ol className="space-y-4 text-gray-300">
        <li>1. Téléchargez la dernière version depuis <a href="https://github.com/yourusername/yousync/releases/latest" className="text-primary hover:underline">notre page de téléchargement</a>.</li>
        <li>2. Lancez le nouvel installeur YouSyncInstaller.exe.</li>
        <li>3. L'application se mettra à jour automatiquement en préservant vos données et configurations.</li>
      </ol>
    </FaqLayout>
  );
}

export default MettreAJour;