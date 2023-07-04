for(let i=25;i>0;i--){
    let slider=document.createElement('div');
    slider.setAttribute('class','slider animate');
    slider.setAttribute('id','slider'+i);
    document.getElementById('game').appendChild(slider);
    slider.classList.add('animate');


}

var slidewidth=400;
function stopSliding(slider){
    var curentSlider=document.getElementById('slider'.concat(slider));
    var ustSlider=document.getElementById('slider'.concat(slider+1));
    if(slider==1){
        var altSlider=curentSlider;
    }else{
        var altSlider=document.getElementById('slider'.concat(slider-1));
    }
  
    var left = parseInt(window.getComputedStyle(curentSlider).getPropertyValue('left'), 10);

curentSlider.classList.remove('animate');
curentSlider.style.left=left.toString().concat('px');

var width=parseInt(window.getComputedStyle(curentSlider).getPropertyValue('width'));
var solalt=parseInt(window.getComputedStyle(altSlider).getPropertyValue('left'));
left=parseInt(left);
var differnce=left-solalt;
var absdiffernce=Math.abs(differnce);
if(differnce>width || differnce<-width){
    var scor='scor:'.concat(slider-1);
    alert(scor);
    location.reload();
}

if(differnce>0){
    left=left+absdiffernce;
}else{
    left=left-differnce;
    curentSlider.style.left=left.toString().concat('px');
}
var offset=(width-absdiffernce).toString().concat('px');
curentSlider.style.width=offset;
ustSlider.style.width=offset;
ustSlider.style.visibility='visible';
 slidewidth=slidewidth+absdiffernce;

 document.documentElement.style.setProperty('--width', slidewidth + 'px');

 var onclick = "stopSliding("+ (slider+1) +")"
document.getElementById('btn').setAttribute('onclick',onclick);
}

