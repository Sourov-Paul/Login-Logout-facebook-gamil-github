import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  FacebookAuthProvider 
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();
const facebookProvider=new FacebookAuthProvider();



  const signInUsingGoole = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.massage);
      });
  };

  // ======Github======
const signInUsingGithub=()=>{
  signInWithPopup(auth,githubProvider)
  .then(result=>{
    setUser(result.user)
  })
  .catch((error)=>{
    setError(error.massage)
  })
}
// Facebook Login=========
const signinUsingFacebook=()=>{
  signInWithPopup(auth,facebookProvider)
  .then(result=>{
    setUser(result.user)
  })
  .catch((error)=>{
    setError(error.massage)
  })
}





// =======Logout======
  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Inside state: ", user);
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    error,
    signInUsingGoole,
    signInUsingGithub,
    signinUsingFacebook,
    logout,
  };
};
export default useFirebase;
