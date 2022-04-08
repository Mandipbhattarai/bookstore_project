    // scroll to top 
    const toTop = document.querySelector(".to-top");

    window.addEventListener("scroll" , () => {
        if(window.pageYOffset > 100){
            toTop.classList.add("active");
        }
        else{
            toTop.classList.remove("active");
        }
    })




    // slider
    var slide = document.getElementById("slide");
    var upArrow = document.getElementById("upArrow");
    var downArrow = document.getElementById("downArrow");
     
    let x=0;
    upArrow.onclick = function(){
        if(x > "-900")
        x = x - 300;
        slide.style.top = x + "px";
    }
    downArrow.onclick = function(){
        if(x < "0")
        x = x + 300;
        slide.style.top = x + "px";
    }





    // photo changer 
    var i = 0; // start point
    var images = [];
    var time = 3000;

    //image list
    images[0] = "img/slider/pic41.jpg";

    images[1] = "img/slider/pic2.jpg";

    images[2] = "img/slider/pic3.jpg";

    images[3] = "img/slider/pic1.jpg";

    images[4] = "img/slider/pic5.jpg";

    //change time

    function changeImg() {
      document.move.src = images[i];

      if (i < images.length - 1) {
        i++;
      } else {
        i = 0;
      }

      setTimeout("changeImg()", time);
    }

    window.onload = changeImg;