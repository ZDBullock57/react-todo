import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyA7G-ozWxeuBBLqoWSRX8QE0IPHbVzBcp8",
      authDomain: "zach-todo-app.firebaseapp.com",
      databaseURL: "https://zach-todo-app.firebaseio.com",
      projectId: "zach-todo-app",
      storageBucket: "zach-todo-app.appspot.com",
      messagingSenderId: "1071787987917"
    };
  firebase.initializeApp(config);
} catch (e) {

}


export var firebaseRef = firebase.database().ref();
export default firebase;
