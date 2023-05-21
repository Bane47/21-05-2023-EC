function details(){
        // creating a http request using XMLHttpRequest

    const xhttp = new XMLHttpRequest();
    var url = "http://localhost:3000/Logins";

    xhttp.open("GET",url);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(xhttp.readyState===4 && xhttp.status===200){
            const details = JSON.parse(xhttp.responseText);

            console.log(this.responseText);
        }
    }

   console.log(details);

    
}
details()

function signin(){
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;

    console.log(name)
 
const xhttp = new XMLHttpRequest();

xhttp.open("POST","http://localhost:3000/Logins");
xhttp.setRequestHeader("Content-type","application/json;charset=utf-8")

xhttp.send(
    JSON.stringify({
    name: name,
    username: username,
    email:email,
    password:password
})
)

details()


}


function login() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/Logins");
    xhttp.setRequestHeader("Content-type", "application/json;charset=utf-8");
    xhttp.send();
  
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const details = JSON.parse(xhttp.responseText);
        let isAuthenticated = false; // Flag to track authentication status
  
        for (let i = 0; i < details.length; i++) {
          if (details[i].username === username && details[i].password === password) {
            isAuthenticated = true;
            break; // Exit the loop since a match is found
          }
        }
  
        if (isAuthenticated) {
          
          window.location.href="./index.html"
        } else {
          console.log("Unsuccessful");
        }
      }
    };
  }
  
  
  
  
  
// function login(){
    

//     var xhttp = new XMLHttpRequest();
//     xhttp.open("GET","http://localhost:3000/Logins");
//     xhttp.setRequestHeader("Content-type","application/json;charset=utf-8")
//     xhttp.send();

//     xhttp.onreadystatechange= function(){
//         if(xhttp.readyState===4 && xhttp.status===200){
//             const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
//             const details = JSON.parse(xhttp.responseText);
//             console.log(details)
//             let isAuthenticated = false; // Flag to track authentication status

//             for (var detail of details) {
//               if (detail.username === username && detail.password === password) {
//                 isAuthenticated = true;
//                 console.log(detail.username)
//                 break; // Exit the loop since a match is found
//               }
//             }
      
//             if (isAuthenticated) {
//               alert("Success");
//             } else {
//                 console.log(detail.username)
//               console.log("Un-Successful");
//             }
//         }
        
//     }

    



// }





// function login(){
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;


//     const xhttp = new XMLHttpRequest();
    
//     xhttp.open("GET","http://localhost:3000/Logins");
//     xhttp.send();

//     xhttp.onreadystatechange = function(){
//         if(xhttp.readyState===4 && xhttp.status===200){
//             const details = JSON.parse(xhttp.responseText);
//             for (let x of response.Logins) {
//                 if (x.username === username && x.password === password) {
//                   isValidUser = true;
//                   break;
//                 }
//               }
        
//               if (isValidUser) {
//                 window.location.href =
//                   "C:/Users/Cgvak/Desktop/My Projects/E-commerce/Index.html";
//               } else {
//                 const errorMessage = "Invalid username or password";
//                 showModal(errorMessage);
//               }
        
            
//             console.log(this.responseText);
//         }
//     }    

    

// }

// function showModal(message){

 
// var mainModal = "";
// mainModal +='<div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
// '<div class="modal-dialog">'+
//   '<div class="modal-content">'+
//     '<div class="modal-header">'+
//       '<h5 class="modal-title" id="exampleModalLabel">Invalid Input</h5>'+
      
//     '</div>'+
//     '<div id="modalLogin" class="modal-body">'+message+'</div>'+
//     '<div class="modal-footer">'+
      
//     '</div>'+
//   '</div>'+
// '</div>'+
// '</div>'

// document.getElementById("modaldiv").innerHTML = mainModal;

// const modalElement = new bootstrap.Modal(document.getElementById("exampleModal"));
//   modalElement.show();
// }



