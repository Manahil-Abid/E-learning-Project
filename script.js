 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdcTzIhWV_c947eoUGZmYw0P1PkSZqvvk",
  authDomain: "auth-45438.firebaseapp.com",
  projectId: "auth-45438",
  storageBucket: "auth-45438.appspot.com",
  messagingSenderId: "803246495829",
  appId: "1:803246495829:web:4ae7914f609c41404d9cdc",
  measurementId: "G-RLFPR07Q4Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

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
