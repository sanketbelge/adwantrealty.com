// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
        apiKey: "AIzaSyApjoZTnQ4djprs33PkW5LM6aZ18y829zA",
        authDomain: "realestate-44038.firebaseapp.com",
        databaseURL: "https://realestate-44038-default-rtdb.firebaseio.com",
        projectId: "realestate-44038",
        storageBucket: "realestate-44038.appspot.com",
        messagingSenderId: "779630998971",
        appId: "1:779630998971:web:217f99214df3a3599e409e"
      };
    
      firebase.initializeApp(config);
      
      // Reference messages collection
      var messagesRef = firebase.database().ref('contacts');
      
      // Listen for form submit
      document.getElementById('contactForm').addEventListener('submit', submitForm);
      
      // Submit form
      function submitForm(e){
        e.preventDefault();
      
        // Get values
        var name = getInputVal('name');
        var email = getInputVal('email');
        var phone = getInputVal('phone');
        console.log(name)
        // Save message
        saveMessage(name,email, phone);
      
        // Show alert
        document.querySelector('.alert').style.display = 'block';
      
        // Hide alert after 3 seconds
        setTimeout(function(){
          document.querySelector('.alert').style.display = 'none';
        },3000);
      
        // Clear form
        document.getElementById('contactForm').reset();
      }
      
      // Function to get get form values
      function getInputVal(id){
        return document.getElementById(id).value;
      }
      
      // Save message to firebase
      function saveMessage(name, email, phone){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
          name: name,
          email:email,
          phone:phone
        });
      }
    