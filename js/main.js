    var disenoW=0;
    var responsivWD=0;
    setInterval(function(){
        if(disenoW<50){
            disenoW++;
            var barra=document.querySelector("#barr-diseño-web");
            //alert(disenoW);
            barra.style.width=disenoW+'%';
            barra.innerHTML=disenoW+'%';

        }
    }), 1000;
    setInterval(function(){
        if(responsivWD<100){
            responsivWD++;
            var barra=document.querySelector("#barra-responsiveWD");
            //alert(responsivWD);
            barra.style.width=responsivWD+'%';
            barra.innerHTML=responsivWD+'%';

        }
    }), 1000;
    