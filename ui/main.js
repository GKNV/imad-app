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
var counter = 0;

button.onclick = function(){
    counter=counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};