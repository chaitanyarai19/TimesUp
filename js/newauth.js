const myModel = document.querySelectorAll('.modal')

// sign up 


async function signup(e){
    e.preventDefault()
 const email = document.querySelector('#SignUpEmail')
 const password = document.querySelector('#SignUpPassword')
//  console.log(email.value,password.value);
 try{
     const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
     M.toast({html: `Welcome ${result.user.email}`,classes:"green"})
     //  console.log(result)
 }
 catch(err){
     console.log(err)
     M.toast({html: err.message,classes:'red'})
 }
}




async function signin(e){
    e.preventDefault()
 const email = document.querySelector('#SignInEmail')
 const password = document.querySelector('#SignInPassword')
//  console.log(email.value,password.value);
 try{
     const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
     M.toast({html: `Welcome ${result.user.email}`,classes:"green"})
    //  console.log(result)

    function Redirect() {
        window.location = "index.html";
     }
     Redirect();


 }
 catch(err){
     console.log(err)
     M.toast({html: err.message,classes:"red"})
 }

 email.value = ""
 password.value = ""
 M.Modal.getInstance(myModel[1]).close()

}


//   document.querySelector("#loginli").style.display = "block"
    // document.querySelector("#logoutli").style.display = "none"
// document.getElementById('logoutli').addEventListener('click',logoutUser)

// function logoutUser(){
//     firebase.auth.signOut().then(()=>{
//         console.log('user logout');
//         function Redirect() {
//             window.location = "login.html";
//          }
//          Redirect();
    
//          document.querySelector("#loginli").style.display = "block"
//     document.querySelector("#logoutli").style.display = "none"
//     }).catch((err)=>{
//         console.log(err);
//     })
// }

// logoutUser();




//  async function logoutUser(){
//      try
//      {
//       await firebase.auth.signOut();
//          function Redirect() {
//            window.location = "login.html";
//        }         Redirect();

//      }
//      catch(err){
//          console.log('error found',err)
//      }

// }
// logoutUser();





// const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//     console.log(user)
//     // // document.querySelector("#loginli").style.display = "none"
//     // // document.querySelector("#logoutli").style.display = "block"
//     // document.querySelector("#loginli").style.display = "none"
//     // document.querySelector("#logoutli").style.display = "block"
//     // M.toast({html: "signOut unsuccess",classes:"green"})
//     } else {
    
//     console.log('signOut success')
    
//     // document.getElementById("logoutli").style.display = "none"
//     // document.getElementById("loginli").style.display = "block"
    
//     // M.toast({html: "signOut success",classes:"green"})
//     }
//   });

//   unsubscribe();