
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
 }
 catch(err){
     console.log(err)
    //  M.toast({html: 'err.message'})
 }
}
