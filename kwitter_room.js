// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBQJ99G9zbrqGIolP8CYLR_hBOAjpokMH8",
      authDomain: "classicchat-b4266.firebaseapp.com",
      databaseURL: "https://classicchat-b4266-default-rtdb.firebaseio.com",
      projectId: "classicchat-b4266",
      storageBucket: "classicchat-b4266.appspot.com",
      messagingSenderId: "269099330271",
      appId: "1:269099330271:web:43d4e99df940c412e2976a"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
