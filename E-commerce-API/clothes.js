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
          // const card = document.createElement('div');
          // card.classList.add('card', 'col-lg-4', 'hover-shadow');

          // const cardBody = document.createElement('div');
          // cardBody.classList.add('card-body');

          // const title = document.createElement('h5');
          // title.classList.add('card-title', 'text-center');
          // title.textContent = item.category;

          // const image = document.createElement('img');
          // image.classList.add('col-lg-12');
          // image.src = item.photo;
          // image.alt = "T-Shirt Image";

          // const brand = document.createElement('p');
          // brand.classList.add('card-text', 'text-center', 'dressclr');
          // brand.textContent = item.brand;

          // const newdiv = document.createElement('div');
          // newdiv.className= 'row';

          // const price = document.createElement('p');
          // price.classList.add('dressclr', 'col-lg-6');
          // price.textContent = 'Cost:'+item.price;

          
          // const size = document.createElement('p');
          // size.classList.add('dressclr', 'col-lg-6', 'text-center');
          // size.textContent = 'Size: '+ item.size;

          // // <div class="row">
          // //   <div class="uiverse col-lg-6">
          // //     <span class="tooltip">
          // //       <i class="fa-solid fa-heart"></i>
          // //     </span>
          // //     <span>
          // //       Add to wishlist <i class="fa-regular fa-heart"></i>
          // //     </span>
          // //   </div>
          // //   <div class="uiverse cart col-lg-6">
          // //     <span class="tooltip"><i class="fa-solid fa-cart-plus"></i></span>
          // //     <span>
          // //       Add to cart <i class="fa-brands fa-opencart"></i>
          // //     </span>
          // //   </div>
          // // </div>
          
          // const row = document.createElement('div');
          // row.classList.add('row');
          
          // const div3 = document.createElement('div');
          // div3.classList.add('uiverse', 'col-lg-6');

          // const tooltipSpan1 = document.createElement('span');
          // tooltipSpan1.classList.add('tooltip');

          // const heart = document.createElement('i');
          // heart.classList.add('fa-solid','fa-heart');

          // const wishList = document.createElement('span');
          // wishList.textContent='Add to wishlist';

          // const cartplus = document.createElement('i');
          // cartplus.classList.add('fa-solid','fa-cart-plus');

          // const tooltipSpan2 = document.createElement('span');
          // tooltipSpan2.classList.add('tooltip');

          // const div4 = document.createElement('div');
          // div4.classList.add('uiverse','cart', 'col-lg-6')

          // const cart = document.createElement('span');
          // cart.textContent='Add to cart';

          // const opencart = document.createElement('i');
          // opencart.classList.add('fa-brands','fa-opencart');
          // //<div class="uiverse cart col-lg-6">
          // //     <span class="tooltip"><i class="fa-solid fa-cart-plus"></i></span>
          // //     <span>
          // //       Add to cart <i class="fa-brands fa-opencart"></i>
          // //     </span>
          // //   </div>
     

          // cardBody.appendChild(title);
          // cardBody.appendChild(image);
          // cardBody.appendChild(brand);
          // cardBody.appendChild(newdiv);
          // newdiv.appendChild(price);
          // newdiv.appendChild(size);
          // card.appendChild(cardBody);
          // cardBody.appendChild(row);
          // row.appendChild(div3);

          // div3.appendChild(tooltipSpan1);
          // tooltipSpan1.appendChild(heart);

          // div3.appendChild(wishList);
          // wishList.appendChild(heart);
          
          // div3.appendChild(tooltipSpan2);
          // tooltipSpan2.appendChild(heart);

          // div4.appendChild(cart);
          
          // div4.appendChild(tooltipSpan1);
          // cart.appendChild(opencart);


          // clothesContainer.appendChild(card);
          
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

fetchDataAndDisplay();
