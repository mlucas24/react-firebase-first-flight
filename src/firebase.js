import firebase from 'firebase';

    const config = {
    apiKey: "AIzaSyBs-CxGY_g0N7-VKCsjzzvbRhLx-5mDRnQ",
    authDomain: "flight-w-friends.firebaseapp.com",
    databaseURL: "https://flight-w-friends.firebaseio.com",
    projectId: "flight-w-friends",
    storageBucket: "flight-w-friends.appspot.com",
    messagingSenderId: "1082981089282",
    appId: "1:1082981089282:web:9dea155fc7b095d5d8a71b",
    measurementId: "G-BWQCGTR3HR"
  };

  firebase.initializeApp(config);

  export default firebase;

  export const database = firebase.database();