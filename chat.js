// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyDlVCa9iBBaf9N2D5hK8PnZmYcgQs1dkAg",
    authDomain: "letschatwebapp-6e8c8.firebaseapp.com",
    databaseURL: "https://letschatwebapp-6e8c8-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-6e8c8",
    storageBucket: "letschatwebapp-6e8c8.appspot.com",
    messagingSenderId: "138844474268",
    appId: "1:138844474268:web:9dcf8354486fa3cf36d659",

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}



