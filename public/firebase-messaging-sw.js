//file for firebase service worker register


//scripts for firebase cdn
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCTgsrcW9hTs76q7KIYayG9cotmc8uip7A",
    authDomain: "expense-tracker-app-8826d.firebaseapp.com",
    projectId: "expense-tracker-app-8826d",
    storageBucket: "expense-tracker-app-8826d.appspot.com",
    messagingSenderId: "1036210608950",
    appId: "1:1036210608950:web:e2f59204536081265b7197"
  })

 firebase.messaging()