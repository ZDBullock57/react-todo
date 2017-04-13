import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA7G-ozWxeuBBLqoWSRX8QE0IPHbVzBcp8",
    authDomain: "zach-todo-app.firebaseapp.com",
    databaseURL: "https://zach-todo-app.firebaseio.com",
    projectId: "zach-todo-app",
    storageBucket: "zach-todo-app.appspot.com",
    messagingSenderId: "1071787987917"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: 1.0
    },
    isRunning: true,
    user: {
      name: 'Zach',
      age: 29
    }
  });

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('new todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Walk the dog!'
});
todosRef.push({
  text: 'todo 2'
});
