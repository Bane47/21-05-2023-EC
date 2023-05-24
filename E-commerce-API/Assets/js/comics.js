function fetchDataAndDisplay(){
    fetch("http://localhost:3000/comics")
    .then(response => response.json())
    .then(data => {
        if(data && data.length > 0){
            var chtml = "";

            for(let i = 0; i<data.length;i+=5){
                chtml +=      '<div class="container mt-3">'
        chtml +=   '<div class="row p-5">'
        chtml +=  '<div class="card col-lg-2 container " >'
        chtml +=   '<img src="'+data[i].poster+'" class="card-img-top link-offset-3-hover" alt="...">'
          chtml +=   '<h6 class="card-title">'+data[i].name+'</h6>'
          chtml +=       '<h6>Price:$'+data[i].price+'</h6>'

          chtml += '<button onclick="addToCart('+data[i].id+')" class="btn btn-danger col-lg-6 container"><i class="fa-solid fa-cart-plus align-item-center"></i></button>'
          chtml +=   '</div>'
          chtml +=  '<div class="card col-lg-2 container" >'
          chtml +=    '<img src="'+data[i+1].poster+'" class="card-img-top" alt="...">'
          chtml +=    '<h6 class="card-title">'+data[i+1].name+'</h6>'
          chtml +=       '<h6>Price:$'+data[i+1].price+'</h6>'

          chtml += '<button onclick="addToCart('+data[i+1].id+')" class="btn btn-danger col-lg-6 container"><i class="fa-solid fa-cart-plus align-item-center"></i></button>'

          chtml +=   '</div>'
          chtml +=   '<div class="card col-lg-2 container" >'
          chtml +=     '<img src="'+data[i+2].poster+'" class="card-img-top" alt="...">'
          chtml +=   '<h6 class="card-title">'+data[i+2].name+'</h6>'
          chtml +=       '<h6>Price:$'+data[i+2].price+'</h6>'
          chtml += '<button onclick="addToCart('+data[i+2].id+')" class="btn btn-danger col-lg-6 container"><i class="fa-solid fa-cart-plus align-item-center"></i></button>'

          chtml +=  '</div>'
          chtml +=   '<div class="card col-lg-2 container" >'
          chtml +=   '<img src="'+data[i+3].poster+'" class="card-img-top" alt="...">'
          chtml +=    '<h6 class="card-title">'+data[i+3].name+'</h6>'
          chtml +=       '<h6>Price:$'+data[i+3].price+'</h6>'
          chtml += '<button onclick="addToCart('+data[i+3].id+')" class="btn btn-danger col-lg-6 container"><i class="fa-solid fa-cart-plus align-item-center"></i></button>'

          chtml +=   '</div>'
          chtml +=   '<div class="card col-lg-2 container" >'
          chtml +=     '<img src="'+data[i+4].poster+'" class="card-img-top" alt="...">'
          chtml +=    '<h6 class="card-title">'+data[i+4].name+'</h6>'
          chtml +=       '<h6>Price:$'+data[i+4].price+'</h6>'
          chtml += '<button onclick="addToCart('+data[i+4].id+')" class="btn btn-danger col-lg-6 container"><i class="fa-solid fa-cart-plus align-item-center"></i></button>'

          chtml +=   '</div>'
          chtml +=       '</div>'
          chtml +=   '</div>'
            }

            document.getElementById("comicsCard").innerHTML = chtml;
        }
    })
}

fetchDataAndDisplay();

function showBill(id){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://localhost:3000/cart")
    xhttp.send();

    xhttp.onreadystatechange = function (){
        if(this.readyState==4 && this.status ==200){
            const objects = JSON.parse(this.responseText);
            var html = "";
            for(let object of objects){
                console.log(object);

                html += '<table>'
                html +=   '<thead>'
                html += '<tr>'
                html +=   '<th>Item name</th>'
                html +=   '<th>Price</th>'
                html += '</tr>'
                html += '</thead>'
                html += '<tbody>'
                html += '<tr>'
                html += '<td>'+object.name+'</td>'
                html += '<td>'+object.price+'</td>'
                html += '</tr>'
                html += '</tbody>'
                html += '</table>'
              
            }

            document.getElementById("comicsCard").innerHTML=html;

        }
    }
}


function addToCart(id) {
    const cartItems = [];
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://localhost:3000/comics/${id}`);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(id);
            const itemDetails = JSON.parse(this.responseText);
            console.log(itemDetails);

            const xhttpAdd = new XMLHttpRequest();
            xhttpAdd.open("POST", "http://localhost:3000/cart");
            xhttpAdd.setRequestHeader("Content-Type", "application/json");
            xhttpAdd.onload = function() {
                if (xhttpAdd.status === 200) {
                    const response = JSON.parse(xhttpAdd.responseText);
                    cartItems.push(response);
                    showBill();
                }
            };

            xhttpAdd.send(JSON.stringify(itemDetails));
            Swal.fire({
                icon:'success',
                title:"Item added",
                timer:10000,
                showConfirmButton:true,
                confirmButtonText: 'View Cart',
                showCancelButton: true, // Add showCancelButton option
                cancelButtonText: 'Continue Shopping', 
                willOpen:() =>{

                }
                }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.href = 'cart.html';
                    }
        })
    };
}

function showBill() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/cart");
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                console.log(object);
            }
        }
    };
}

}
