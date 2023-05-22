function showBill(id){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://localhost:3000/cart")
    xhttp.send();

    xhttp.onreadystatechange = function (){
        if(this.readyState==4 && this.status ==200){
            const objects = JSON.parse(this.responseText);
            var html = "";
            for(let object of objects){
                html += 
              
            
        }
    }
}


function addToCart(id){
    const cartItems = [];
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET",`http://localhost:3000/${id}`);
    xhttp.send();

    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.responseText == 200){
            console.log(id);
            cartItems = JSON.parse(this.responseText);
            console.log(cartItems)
            xhttp.open("POST","http://localhost:3000/cart");
            xhttp.send(cartItems);

            xhttp.onreadystatechange = function(){
                if(this.readyState==4 && this.status == 200){
                    const x = JSON.parse(this.responseText);
                    // showBill();
                }
            }
        }
    }


    
}