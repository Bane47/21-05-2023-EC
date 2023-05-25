
// var paypalButtonRendered = false; // Keep track of whether the PayPal button has been rendered
var amount = 0
function fetchDataAndDisplay() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/cart");
  xhttp.send();

  xhttp.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      const objects = JSON.parse(this.responseText);

      var html = "";
      amount = 0;
      for (let object of objects) {
        html += '<tr>';
        html += '<td>' + object.name + '</td>';
        html += '<td>' + object.price + '</td>';
        html += '</tr>';

        amount += parseFloat(object.price);
       
      }
      document.getElementById("itemBill").innerHTML = html;
      document.getElementById("amount").innerHTML = amount;

      console.log(amount)
      // Render PayPal button only if it hasn't been rendered before
      if (!paypalButtonRendered) {
        initPayPalButton(amount);   
             paypalButtonRendered = true;
      }
    }
  }
}
// // Render PayPal button
// function renderPayPalButton(amount) {
//   paypal.Buttons({
//     style: {
//       shape: 'pill',
//       color: 'gold',
//       layout: 'vertical',
//       label: 'paypal',
//     },
//     createOrder: function(data, actions) {
//       return actions.order.create({
//         purchase_units: [{
//           amount: {
//             currency_code: 'USD',
//             value: amount.toString() // Use the dynamically provided amount
//           }
//         }]
//       });
//     },
//     onApprove: function(data, actions) {
//       return actions.order.capture().then(function(details) {
//         // Show a success message
//         document.getElementById('payment-status').innerHTML = '<p style="color: green;">Payment successful! Transaction ID: ' + details.id + '</p>';
//       });
//     },
//     onError: function(err) {
//       console.log(err);
//       // Show an error message
//       document.getElementById('payment-status').innerHTML = '<p style="color: red;">An error occurred. Please try again.</p>';
//     }
//   }).render('#paypal-button-container');
// }

// document.getElementById('pay-button').addEventListener('click', function() {
//   var amount = parseFloat(document.getElementById('amount').value);

//   if (isNaN(amount) || amount <= 0) {
//     alert('Please enter a valid payment amount.');
//   } else {
//     // Clear any previous PayPal buttons and payment status
//     document.getElementById('paypal-button-container').innerHTML = '';
//     document.getElementById('payment-status').innerHTML = '';

//     renderPayPalButton(amount);
//   }
// });

// function initPayPalButton(value) {
//   paypal.Buttons({
//     style: {
//       shape: 'rect',
//       color: 'gold',
//       layout: 'vertical',
//       label: 'paypal',
//     },

//     createOrder: function(data, actions) {
//       return actions.order.create({
//         purchase_units: [{
//           "amount": {
//             "currency_code": "USD",
//             "value": value
//           }
//         }]
//       });
//     },

//     onApprove: function(data, actions) {
//       return actions.order.capture().then(function(orderData) {
//         // Full available details
//         console.log();
//         console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

//         // Show a success message within this page, for example:
//         const element = document.getElementById('paypal-button-container');
//         element.innerHTML = '';
//         element.innerHTML = '<h3 style="color: green;">Successfully paid!</h3>';

//         // Or go to another URL: actions.redirect('thank_you.html');
//       });
//     },

//     onError: function(err) {
//       console.log(err);
//     }
//   }).render('#paypal-button-container');
// }

// // Call fetchDataAndDisplay to fetch data and display the table
// fetchDataAndDisplay();


// var add = 0;
// function fetchDataAndDisplay(){
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("GET","http://localhost:3000/cart");
//     xhttp.send();

//     xhttp.onload= function(){
//         if(this.readyState==4 && this.status==200){
//             console.log(this.responseText);
//             const objects = JSON.parse(this.responseText);
            
//             var html = "";
            
//             for(let object of objects){
            
//         html +='<tr>'
//         html +='<td>'+object.name+'</td>'
//         html +='<td>'+object.price+'</td>'
//         html +='</tr>'

//         add += parseFloat(object.price);
        
//             }
//                         document.getElementById("itemBill").innerHTML = html;
//             document.getElementById("paymentTotal").innerHTML = add;
//         }
//     }
    // cart.js
    // initPayPalButton(add);

// }
fetchDataAndDisplay();
console.log("Vanakkamdi Dhana")


function initPayPalButton(value) {
  console.log(value);
  paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'gold',
      layout: 'vertical',
      label: 'paypal',
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          "amount": {
            "currency_code": "USD",
            "value": value
          }
        }]
      });
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        // Full available details
        console.log();
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        // Show a success message within this page, for example:
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3 style="color: green;">Successfully paid!</h3>';

        // Or go to another URL: actions.redirect('thank_you.html');
      });
    },

    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-container');
}

// Call initPayPalButton with the initial total price
//initPayPalButton(amount);

// Example: Update the total price and call initPayPalButton again whenever the price changes
function updateTotalPrice(newPrice) {
  // Remove previous PayPal button container
  const container = document.getElementById('paypal-button-container');
  container.innerHTML = '';

  // Call initPayPalButton with the new total price
 initPayPalButton(newPrice);
}

// Example usage:
// Update the total price and call updateTotalPrice whenever the price changes
const totalPrice = 2.99; // Example initial total price
updateTotalPrice(amount);
console.log(amount)
// Later, when the total price changes
const newPrice = amount; // Example updated total price
updateTotalPrice(newPrice);


// // function initPayPalButton() {
// //   paypal.Buttons({
// //     style: {
// //       shape: 'rect',
// //       color: 'gold',
// //       layout: 'vertical',
// //       label: 'paypal',
      
// //     },

// //     createOrder: function(data, actions) {
// //       return actions.order.create({
// //         purchase_units: [{"amount":{"currency_code":"USD","value":0.99}}]
// //       });
// //     },

// //     onApprove: function(data, actions) {
// //       return actions.order.capture().then(function(orderData) {
        
// //         // Full available details
// //         console.log()
// //         console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

// //         // Show a success message within this page, for example:
// //         const element = document.getElementById('paypal-button-container');
// //         element.innerHTML = '';
// //         element.innerHTML = '<h3 style="color: green;">Successfully paid!</h3>';

// //         // Or go to another URL:  actions.redirect('thank_you.html');
        
// //       });
// //     },

// //     onError: function(err) {
// //       console.log(err);
// //     }
// //   }).render('#paypal-button-container');
// // }
// // initPayPalButton();


// function initPayPalButton(value) {
//   console.log("Vanakkamdi Selva")
//     paypal.Buttons({
//       style: {
//         shape: 'rect',
//         color: 'gold',
//         layout: 'vertical',
//         label: 'paypal',
        
//       },
  
//       createOrder: function(data, actions) {
//         return actions.order.create({
//           purchase_units: [{"amount":{"currency_code":"USD","value":value}}]

//         });
//       },
      

//       onApprove: function(data, actions) {
//         return actions.order.capture().then(function(orderData) {
          
//           // Full available details
//           console.log()
//           console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
//           console.log("Vanakkamdi mapla")
//           // Show a success message within this page, for example:
//           const element = document.getElementById('paypal-button-container');
//           element.innerHTML = '';
//           element.innerHTML = '<h3 style="color: green;">Successfully paid!</h3>';
  
//           // Or go to another URL:  actions.redirect('thank_you.html');
          
//         });
//       },
  
//       onError: function(err) {
//         console.log(err);
//       }
//     }).render('#paypal-button-container');
//   }
//   console.log("Vanakkamdi satis uh")


// var add = 0;

// function fetchDataAndDisplay() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.open("GET", "http://localhost:3000/cart");
//   xhttp.send();

//   xhttp.onload = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(this.responseText);
//       const objects = JSON.parse(this.responseText);

//       var html = "";

//       for (let object of objects) {
//         html += '<tr>';
//         html += '<td>' + object.name + '</td>';
//         html += '<td>' + object.price + '</td>';
//         html += '</tr>';

//         add += parseFloat(object.price);
//       }

//       document.getElementById("itemBill").innerHTML = html;
//       document.getElementById("paymentTotal").innerHTML = add;

//       // Call initPayPalButton with the updated total price
//       initPayPalButton(add);
//     }
//   }
// }

// function initPayPalButton(value) {
//   paypal.Buttons({
//     style: {
//       shape: 'rect',
//       color: 'gold',
//       layout: 'vertical',
//       label: 'paypal',
//     },

//     createOrder: function(data, actions) {
//       return actions.order.create({
//         purchase_units: [{
//           "amount": {
//             "currency_code": "USD",
//             "value": value
//           }
//         }]
//       });
//     },

//     onApprove: function(data, actions) {
//       return actions.order.capture().then(function(orderData) {
//         // Full available details
//         console.log();
//         console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

//         // Show a success message within this page, for example:
//         const element = document.getElementById('paypal-button-container');
//         element.innerHTML = '';
//         element.innerHTML = '<h3 style="color: green;">Successfully paid!</h3>';

//         // Or go to another URL: actions.redirect('thank_you.html');
//       });
//     },

//     onError: function(err) {
//       console.log(err);
//     }
//   }).render('#paypal-button-container');
// }

// // Call initPayPalButton with the initial total price
// //   initPayPalButton(0.99);

// // Example: Update the total price and call initPayPalButton again whenever the price changes
// function updateTotalPrice(newPrice) {
//   // Remove previous PayPal button container
//   const container = document.getElementById('paypal-button-container');
//   container.innerHTML = '';

//   // Call initPayPalButton with the new total price
//   initPayPalButton(newPrice);
// }

// // Example usage:
// // Update the total price and call updateTotalPrice whenever the price changes
// const totalPrice = 2.99; // Example initial total price
// updateTotalPrice(totalPrice);

// // Later, when the total price changes
// const newPrice = 4.99; // Example updated total price
// updateTotalPrice(newPrice);

// function initPayPalButton(value) {
//   paypal.Buttons({
//     style: {
//       shape: 'rect',
//       color: 'gold',
//       layout: 'vertical',
//       label: 'paypal',
//     },

//     createOrder: function(data, actions) {
//       return actions.order.create({
//         purchase_units: [{
//           "amount": {
//             "currency_code": "USD",
//             "value": value
//           }
//         }]
//       });
//     },

//     onApprove: function(data, actions) {
//       return actions.order.capture().then(function(orderData) {
//         // Full available details
//         console.log();
//         console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

//         // Show a success message within this page, for example:
//         const element = document.getElementById('paypal-button-container');
//         element.innerHTML = '';
//         element.innerHTML = '<h3 style="color: green;">Successfully paid!</h3>';

//         // Or go to another URL: actions.redirect('thank_you.html');
//       });
//     },

//     onError: function(err) {
//       console.log(err);
//     }
//   }).render('#paypal-button-container');
// }

fetchDataAndDisplay();









