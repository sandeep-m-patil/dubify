function save(){
    alert("Dubbed video/text is successfully saved")
}
function expo(){
    alert("Dubbed video/text is ready to export")
}
function edit(){
    alert("edit your dubbed video/text")
}
function video(){
   document.querySelector('.video').style.display='block';
   document.querySelector('.text').style.display='none';

}
function text(){
    document.querySelector('.video').style.display='none';
    document.querySelector('.text').style.display='block';
 
}
