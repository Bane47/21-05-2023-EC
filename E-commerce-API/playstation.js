// function fetchDataAndDisplay(){
//     fetch('http://localhost:3000/playstationCard')
//     .then(response => response.json())
//     .then(data => {
//         if(data&& data.length > 0){
//             var html = ""

//             const objects = 
//         }
//     })
// }

function PlaystationCard(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','http://localhost:3000/clothes')
    xhttp.send();

    xhttp.onreadystatechange= function(){
        if(this.readyState == 4 && this.status == 200){
                var html = "";
            const objects = JSON.parse(this.responseText);
            for(let object of objects){
             html += '<div class="container">'
             html +=  ' <div class="row row-cols-1 row-cols-md-2 g-4 p-3">'
             html +=    '<div class="col">'
             html +=       '<div class="card">'
             html +=         '<img src='+object["photo"]+' class="card-img-top "'
             html +=           'alt="Hollywood Sign on The Hill" />'
             html +=         '<div class="card-body">'
             html +=          '<h5 class="card-title">'+object["GameName"]+'</h5>'
             html +=          '<p class="card-text">'+object["description"]+'</p>'
                
             html +=        '</div>'
                      html +=      '</div>'
                      html +=   '</div>'
                      html +=     '<div class="col">'
                      html +=      '<div class="card">'
                      html +=        '<img src='+object["photo"]+' class="card-img-top "'
               html +=         'alt="Hollywood Sign on The Hill" />'
              html +=        '<div class="card-body">'
              html +=          '<h5 class="card-title">'+object["GameName"]+'</h5>'
              html +=         '<p class="card-text">'+object["description"]+'</p>'
            
              html +=       '</div>'
              html +=     '</div>'
              html +=   '</div>'
              html +=   '<div class="col">'
              html +=       '<div class="card">'
              html +=        '<img src='+object["photo"]+' class="card-img-top "'
              html +=          'alt="Hollywood Sign on The Hill" />'
              html +=        '<div class="card-body">'
              html +=         '<h5 class="card-title">'+object["GameName"]+'</h5>'
              html +=         '<p class="card-text">'+object["description"]+'</p>'
                        
                        html +=       '</div>'
                        html +=       '</div>'
                        html +=      '</div>'
                  html +=     '<div class="col">'
                  html +=      '<div class="card">'
                  html +=        '<img src='+object["photo"]+' class="card-img-top "'
              html +=          'alt="Hollywood Sign on The Hill" />'
               html +=       '<div class="card-body">'
               html +=         '<h5 class="card-title">'+object["GameName"]+'</h5>'
               html +=        '<p class="card-text">'+object["description"]+'</p>'
                          
                          html +=       '</div>'
                          html +=       '</div>'
                          html +=    '</div>'
                          html +=  '</div>'
                          html +='</div>'
              
            }
           

            document.getElementById("psCard").innerHTML = html;
        }
    }
}

PlaystationCard();