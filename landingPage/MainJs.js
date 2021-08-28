var acc=document.getElementsByClassName("first");
for(var i=0;i<acc.length;i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle("active");
        var demo = this.nextElementSibling;
        if(demo.style.display === "block"){
            demo.style.display = "none";
        }else{
          demo.style.display = "block";
        }
    });
    
}