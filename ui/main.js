//console.log('Loaded!');
//var element = document.getElementById('main-text');
//element.innerHTML='so tired of doing things';

//var img = document.getElementById('madi');
//var marginLeft =0;
//function moveRight() {
  //  marginLeft = marginLeft + 5;
    //img.style.marginLeft= marginLeft + 'px';
    
//}
//img.onclick =function(){
    
  // var intervel =setInterval(moveRight,50);
//};



var button= document.getElementById('counter');
button.onclick = function(){

var request = new XMLHttpRequest();

request.onreadystatechange= function(){
    if(request.readyState === XMLHttpRequest.Done){
        if(request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML= counter.toString();
        }
    }
};

request.open('GET', 'http://gopikanna09.imad.hasura-app.io/counter', true);
request.send();
};