<script setup>
import { db, auth } from '../firebase/index'
import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 

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
</script>

<template>
    <button class="bg-pretty-blue p-2 pl-4 pr-4 rounded-2xl drop-shadow-lg" @click="logIn">Log In</button>
</template>``