/* eslint-disable prettier/prettier */
import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCWopzUXorB7MAr2EquDaYwQEtBIyWW4SM',
  databaseURL: 'https://meetup-184f7.firebaseio.com/',
  projectId: 'meetup-184f7',
  appId: '1:533937180642:android:52f770ad4bc55cc023b3bb',
};

export default Firebase.initializeApp(firebaseConfig);
