// function initPayPalButton(value) {
//     paypal.Buttons({
//       style: {
//         shape: 'rect',
//         color: 'gold',
//         layout: 'vertical',
//         label: 'paypal',
//       },
  
//       createOrder: function(data, actions) {
//         return actions.order.create({
//           purchase_units: [{
//             "amount": {
//               "currency_code": "USD",
//               "value": value
//             }
//           }]
//         });
//       },
  
//       onApprove: function(data, actions) {
//         return actions.order.capture().then(function(orderData) {
//           // Full available details
//           console.log();
//           console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
  
//           // Show a success message within this page, for example:
//           const element = document.getElementById('paypal-button-container');
//           element.innerHTML = '';
//           element.innerHTML = '<h3 style="color: green;">Successfully paid!</h3>';
  
//           // Or go to another URL: actions.redirect('thank_you.html');
//         });
//       },
  
//       onError: function(err) {
//         console.log(err);
//       }
//     }).render('#paypal-button-container');
//   }
  
//   // Call initPayPalButton with the initial total price
// //   initPayPalButton(0.99);
  
//   // Example: Update the total price and call initPayPalButton again whenever the price changes
//   function updateTotalPrice(newPrice) {
//     // Remove previous PayPal button container
//     const container = document.getElementById('paypal-button-container');
//     container.innerHTML = '';
  
//     // Call initPayPalButton with the new total price
//     initPayPalButton(newPrice);
//   }
  
//   // Example usage:
//   // Update the total price and call updateTotalPrice whenever the price changes
//   const totalPrice = 2.99; // Example initial total price
//   updateTotalPrice(totalPrice);
  
//   // Later, when the total price changes
//   const newPrice = 4.99; // Example updated total price
//   updateTotalPrice(newPrice);