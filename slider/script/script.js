$(document).ready(function(){
    $('.awesome-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
          })
  });

  
  var btnToTop=document.getElementById("toTop");
     
    function checkDistance(){ 
      if(document.documentElement.scrollTop>100||window.document.body.scrollTop>100){
         btnToTop.style.display="block";
      } else {
          btnToTop.style.display="none";
         }
      }

      window.onscroll=checkDistance;

      btnToTop.onclick=function(){
      window.scrollTo({top:0,behavior:"smooth"})
  }

        var modal = document.querySelector('.modal');
        var btnShowModal = document.querySelector('#btn');
        var btnSubmit = document.getElementById('Submit');
        var btnClose = document.getElementById('Close')
        console.log(btnShowModal + btnSubmit + btnClose);

        btnShowModal.addEventListener('click', function(){
            modal.style.display = 'block';
            document.body.style.background = "white";
            document.body.style.overflow='hidden';
        });

        btnSubmit.addEventListener('click', function(){
            modal.style.display = 'none';
            document.body.style.background = '#fff';
            document.body.style.overflow="visible";
        });

        btnClose.addEventListener('click', function(){
            modal.style.display = 'none';
            document.body.style.background = '#fff';
            document.body.style.overflow="visible";
        });

