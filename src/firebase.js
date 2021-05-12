import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCTgsrcW9hTs76q7KIYayG9cotmc8uip7A",
    authDomain: "expense-tracker-app-8826d.firebaseapp.com",
    projectId: "expense-tracker-app-8826d",
    storageBucket: "expense-tracker-app-8826d.appspot.com",
    messagingSenderId: "1036210608950",
    appId: "1:1036210608950:web:e2f59204536081265b7197"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
