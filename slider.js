let strength = 0.2;
document.querySelector(".increase").addEventListener('click',(e)=>{
    strength -= 0.1;
    if(strength < 0.0) strength=1.0;
    document.querySelector(".progress").style.width = (strength/1) *100 + "%";
    displayCompressImage(files);
});
document.querySelector(".decrease").addEventListener('click',(e)=>{
    strength += 0.1;
    if(strength > 1.0) strength=0.0;
    document.querySelector(".progress").style.width = (strength/1) *100 + "%";
    displayCompressImage(files);
});