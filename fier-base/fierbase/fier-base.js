// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDU5L1-RT7iySQUl1CurxocWexKQvFHRa8",
    authDomain: "my-firs-project-fierbase.firebaseapp.com",
    projectId: "my-firs-project-fierbase",
    storageBucket: "my-firs-project-fierbase.appspot.com",
    messagingSenderId: "546035599569",
    appId: "1:546035599569:web:636b2c2fe7154989769df0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.forms.userDataForm;
const submitButon = document.querySelector('.submit')
const popupForm = document.querySelector('.popup-background');
const addData = document.querySelector('.addData');
const userTable = document.querySelector('.userDataTable');

export function submitBase () {
    submitButon.addEventListener('click', async () =>{
        popupForm.classList.remove('active');
        try  {
             const docRef = await addDoc(collection(db, "users"), {
                name: form.elements.fullName.value,
                email: form.elements.email.value,
                phone: form.elements.phone.value,
                message: form.elements.message.value,
            });
             console.log(docRef);
             console.log(docRef._delegate);
            console.log(docRef._key);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    })
}

export function loadData (){
    addData.addEventListener('click', async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const table = userTable.insertRow();
            table.innerHTML = `<td>${data.name}</td>
                               <td>${data.email}</td>
                               <td>${data.phone}</td>
                               <td>${data.message}</td>`
        })
    })
}



