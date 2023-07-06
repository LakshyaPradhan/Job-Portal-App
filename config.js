import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAXMJ-mDgMuJ__ipCtaKEkdjP4wGXzuH1I",
  authDomain: "job-portal-a8380.firebaseapp.com",
  projectId: "job-portal-a8380",
  storageBucket: "job-portal-a8380.appspot.com",
  messagingSenderId: "1084942857904",
  appId: "1:1084942857904:web:800da7d5398cb0802bed75"
};

// Initialize Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   