function fetchDataAndDisplay() {
  fetch('http://localhost:3000/clothes')
    .then(response => response.json())
    .then(data => {
      if (data && data.length > 0) {
        const clothesContainer = document.getElementById("clothesContainer");

        data.forEach(item => {

          const card = document.createElement('div');
          card.classList.add('card', 'col-lg-4', 'hover-shadow');

          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');

          const title = document.createElement('h5');
          title.classList.add('card-title', 'text-center');
          title.textContent = item.category;

          const image = document.createElement('img');
          image.classList.add('col-lg-12');
          image.src = item.photo;
          image.alt = "T-Shirt Image";

          const brand = document.createElement('p');
          brand.classList.add('card-text', 'text-center', 'dressclr');
          brand.textContent = item.brand;

          const row = document.createElement('div');
          row.classList.add('row');

          const row2 = document.createElement('div');
          row2.classList.add('row');

          const price = document.createElement('p');
          price.classList.add('dressclr', 'col-lg-6');
          price.textContent ='Price: '+ item.price;

          const size = document.createElement('p');
          size.classList.add('dressclr', 'col-lg-6', 'text-center');
          size.textContent = 'Size: '+ item.size;

 

          const wishlistDiv = document.createElement('div');
          wishlistDiv.classList.add('uiverse', 'col-lg-6');

          const wishlistIcon = document.createElement('span');
          wishlistIcon.classList.add('tooltip');
          wishlistIcon.innerHTML = '<i class="fa-solid fa-heart"></i>';

          const wishlistText = document.createElement('span');
          wishlistText.textContent = 'Add to wishlist ';

          const wishlistEmptyIcon = document.createElement('i');
          wishlistEmptyIcon.classList.add('fa-regular', 'fa-heart');

          wishlistText.appendChild(wishlistEmptyIcon);
          wishlistDiv.appendChild(wishlistIcon);
          wishlistDiv.appendChild(wishlistText);

          const cartDiv = document.createElement('div');
          cartDiv.classList.add('uiverse', 'cart', 'col-lg-6');

          const cartIcon = document.createElement('span');
          cartIcon.classList.add('tooltip');
          cartIcon.innerHTML = '<i class="fa-solid fa-cart-plus"></i>';

          const cartText = document.createElement('span');
          cartText.textContent = 'Add to cart ';

          const cartLogo = document.createElement('i');
          cartLogo.classList.add('fa-brands', 'fa-opencart');

          cartText.appendChild(cartLogo);
          cartDiv.appendChild(cartIcon);
          cartDiv.appendChild(cartText);

          row.appendChild(wishlistDiv);
          row.appendChild(cartDiv);


          cardBody.appendChild(title);
          cardBody.appendChild(image);
          cardBody.appendChild(brand);

          
          cardBody.appendChild(row2);
          row2.appendChild(price);
          row2.appendChild(size);
          
          cardBody.appendChild(row);
          card.appendChild(cardBody);
          clothesContainer.appendChild(card);


          cartDiv.addEventListener('click',function addtocart(){
            
          })
                   
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

fetchDataAndDisplay();


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
