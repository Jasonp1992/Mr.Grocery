<script setup>
import { ref } from 'vue'
import { db, auth } from '../firebase/index'
import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 

let isLoggedIn = ref(true)

auth.onAuthStateChanged(function(user) {
    if (user) {
        isLoggedIn.value = true
        console.log("logged in: ", auth)
    } else {
        isLoggedIn.value = false
        console.log("logged out: ", auth)
    }
})

const logIn = async () => {
  var provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider)
    .then(async(result) => {  
       const credential = GoogleAuthProvider.credentialFromResult(result);
       const token = credential.accessToken;
       const user = result.user;
       console.log("logged it", auth)

       const userUid = auth.currentUser.uid;
       await setDoc(doc(db, "users", `${userUid}`), { name: user.displayName }, { merge: true });
    })
    .catch((error) => {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    })
}

const logOut = () => {
    auth.signOut()
        .then(function() {
            console.log("Signed Out", auth)
        })
        .catch((error) => {
            console.log("Sign Out Error", error)
        })
}
</script>

<template>
    <button v-if="isLoggedIn" @click="logOut">sign out</button>
    <button v-else @click="logIn">sign in</button>
</template>``