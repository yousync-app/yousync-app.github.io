import FaqLayout from '../../components/FaqLayout';

function Installation() {
  return (
    <FaqLayout title="Comment installer YouSync ?">
      <ol className="space-y-4 text-gray-300">
        <li>1. Téléchargez la dernière version de YouSync depuis <a href="https://github.com/yourusername/yousync/releases/latest" className="text-primary hover:underline">notre page de téléchargement</a>.</li>
        <li>2. Lancez l'exécutable YouSyncInstaller.exe.</li>
        <li>3. Note de sécurité : Windows Defender pourrait afficher un avertissement car l'application n'est pas signée. Ceci est normal pour les applications open source. Vous pouvez vérifier l'intégralité du code source sur <a href="https://github.com/yourusername/yousync" className="text-primary hover:underline">notre GitHub</a>.</li>
        <li>4. Une fois l'installation terminée, lancez YouSync depuis le menu démarrer.</li>
        <li>5. C'est prêt ! Vous pouvez maintenant commencer à synchroniser vos playlists.</li>
      </ol>
    </FaqLayout>
  );
}

export default Installation;