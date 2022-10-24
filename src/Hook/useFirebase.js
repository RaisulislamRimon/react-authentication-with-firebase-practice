import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import app from "./firebaseConfig";

const useFirebase = () => {
  const [userInfo, setUserInfo] = useState({});

  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        setUserInfo(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return {
    handleGoogleLogin,
    userInfo,
  };
};

export default useFirebase;

//   console.log(
//     "Hello, I am a custom hook. I am used to share data between components."
//   );
//   const test1 = () => {
//     console.log("test1");
//   };
//   const test2 = () => {
//     console.log("test2");
//   };
//   return { test1, test2 };
// };

// export default useFirebase;
