console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='so tired of doing things';

var img = document.getElementById('madi');
var marginLeft =0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft= marginLeft + 'px';
    
}
img.onclick =function(){
    
   var intervel =setInterval(moveRight,100);
};