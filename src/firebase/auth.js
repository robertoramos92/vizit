import { auth } from './firebase'

//Sign up
export const doCreateUserWithEmailAndPassword = (email, password) =>
auth.createUserWithEmailAndPassword(email, password);

//Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
auth.signInWithEmailAndPassword(email, password); 

//Sign Out
export const doSignOut = () => auth.signOut();

//Password reset
export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

//Password Change 
export const doPasswordChange = (password) =>auth.currentUser.updatePassword(password);

//Email Change
export const doEmailChange = (email) => auth.currentUser.updateEmail(email);

//Check for users
export const doCheckForUser = () => auth.onAuthStateChanged();