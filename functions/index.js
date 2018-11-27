//@ts-check

const functions = require('firebase-functions');

const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addUserToDatabase = functions.auth.user().onCreate((user) => {
    // [END onCreateTrigger]
      
    var docRef = db.collection('kullanicilar').doc();

var setUser = docRef.set({
  name: user.displayName === null ? user.email: user.displayName, 

  
});
    console.log("User Created...");
    return setUser
    });