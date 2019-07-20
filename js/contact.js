// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCzY8SkghI7R1RNxqgcPV1jX7-ybNrJmTA",
  authDomain: "attendance-test-msc.firebaseapp.com",
  databaseURL: "https://attendance-test-msc.firebaseio.com",
  projectId: "attendance-test-msc",
  storageBucket: "",
  messagingSenderId: "1068373078996"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactus').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var squery = getInputVal('squery');
  var phno = getInputVal('phno');
  var msg = getInputVal('msg');

  // Save message
  saveMessage(fname, lname, squery, phno, msg);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 5 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },5000);

  // Clear form
  document.getElementById('contactus').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, squery, phno, msg){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    First_name: fname,
    Last_name:lname,
    Choice:squery,
    phone:phno,
    message:msg
  });
}