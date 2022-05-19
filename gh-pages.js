import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'main',
  repo: 'https://github.com/Mascarenhas12/Mascarenhas-folio.git', // Update to point to your repository
  user: {
   name: 'Mascarenhas12', // update to use your name
   email: 'manuel.d.mascarenhas@tecnico.ulisboa.pt' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);