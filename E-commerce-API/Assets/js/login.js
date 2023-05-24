// for bootstrap validation 
(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over each form and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
          }

          form.classList.add('was-validated');
      }, false);
  });
})();

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
    const username = document.getElementById("uname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;
    const repassword = document.getElementById("repwd").value;

    console.log(username)
 
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
          
          window.location.href="./Home.html"
        } else {
          console.log("Unsuccessful");
        }
      }
    };
  }
  
  
  
//  function Validitate(){ 
//     const name = document.getElementById("name").value;
//     const username = document.getElementById("uname").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("pwd").value;
//     const repassword = document.getElementById("repassword").value;


//     if(name===""){

//     }
// }