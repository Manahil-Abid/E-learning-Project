import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB8U6hOvr6QP9DSDKxMQ5qIiIEhjdbjxPc",
    authDomain: "authetication-85c4d.firebaseapp.com",
    projectId: "authetication-85c4d",
    storageBucket: "authetication-85c4d.firebasestorage.app",
    messagingSenderId: "379031153136",
    appId: "1:379031153136:web:8acfbcace6d0d165761535",
    measurementId: "G-EXK9PS7409"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Analytics = getAnalytics(app);
const provider = newGoogleAuthProvider();

// Sign Up
document.getElementById("signup-btn")?.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("SignUp successful!");
      window.location.href = "form.html";
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
});

// Login
document.getElementById("login-btn")?.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password )
    .then(() => {
      alert("Login Successful!");
      window.location.href = "form.html";
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
});

// Google Sign Up
document.getElementById("google-signup-btn")?.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then(() => {
            alert("Signup successfully!!");
            window.location.href = "form.html";
        })
        .catch((error) => {
            document.getElementById("message").innerText = error.message;
        });
});

// Google Login
document.getElementById("google-login-btn")?.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then(() => {
            alert("Login successfully!!");
            window.location.href = "form.html";
        })
        .catch((error) => {
            document.getElementById("message").innerText = error.message;
        });
});


// Logout
document.getElementById("logout-btn")?.addEventListener("click", (e) => {
  e.preventDefault();
  signOut(auth)
    .then(() => {
      alert("Logout Successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
        document.getElementById("message").innerText = error.message;
    });
});


// Reset Password
document.getElementById("reset-password")?.addEventListener('click' , (e) => {
  e.preventDefault();

  const email = prompt('Please enter a email address');
  if(email){
    sendPasswordResetEmail(auth , email)
    .then(()=>{
      alert("Password Reset ! <br>  Email Sent , Check Your Inbox")
    })
    .catch((error)=>{
      document.getElementById("message").innerText = error.message;
    })
  }
  else{
      alert("Enter a valid Email Address!!")
  }
})
