//.............................................................................CERRAR SESION
eventsPost = () => {

  $('#btnLogOut').click(() => {
    firebase.auth().signOut();
  });

  //.................................... GUARDAR POST 

  $('#btnPublicar').click(() => {
    alert('Hola');
    guardarPost($('#welcomeProfile').val(), $('#postOne').val(), $('#typePost').val());
    

  });


  const guardarPost = (username, post, privacy) => {
    let newPostKey = firebase.database().ref().child('Postzare').push().key;

    firebase.database().ref('Postzare/' + newPostKey).set({
      author: username,
      postUser: post,
      private: privacy
    });
  }

 /*  const guardarPostUser = (uidUser,newPostKey) => {
    let newPostUser = firebase.database().ref().child('PostzareUsers').push().key;
    firebase.database().ref('PostzareUsers/' + newPostUser).set({
      users: uidUser,
      post: newPostKey,

    });
  } */


























}


