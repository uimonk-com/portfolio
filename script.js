
    // document.querySelector('#startGame').addEventListener('click',function(){
          
    //     console.log(document.querySelector('#man').classList)
    //     document.querySelector('#man').classList.add('manAnimation')
    //     document.querySelector('body').classList.add('bodyAnimation')
    //     document.querySelector('.start_intro').style.opacity = 0
    // })

let t1 = gsap.timeline({ paused: true, reversed: true });
 
  
document.querySelector('#startGame').addEventListener('click',(e)=>{
    t1.play()
})



t1.to(".start_intro",{
    ease: "power1.inOut",
    scale:5,
    opacity:0,
    duration:0.5
})
    .to(".commingSoon",{
        ease: "power1.inOut",
    scale:1,
    opacity:1,
        },1)


        // .to("#man",{
        //     onComplete: function() {
        //         document.querySelector('#man').classList.add('manAnimation')
        //         document.querySelector('body').classList.add('bodyAnimation')
        //       }
        // })




    // .to("#xxxxxx",{
    //     onComplete: function() {
    //         xxxxxxx
    //       }
    // })


  

  
  

    document.onkeydown = checkKey;
    var scrollY = 0;
    var oldValScrollY = 0;
    var ParsedoldValScrollY = 0;
    
     
     

function checkKey(e) {

    e = e || window.event;
 if (e.keyCode == '39') {
 

    scrollY += 20;
    console.log(scrollY)
    // window.scrollTo(0, scrollY);
     allSildes = document.querySelectorAll('.slide');   

     allSildes.forEach(function(s){
       

        if(s.style.left){

        oldValScrollY =  (s.style.left)
        ParsedoldValScrollY             =  parseInt(oldValScrollY, 10);

        ParsedoldValScrollY -= 10;
           console.log(ParsedoldValScrollY)
         s.style.left = ParsedoldValScrollY + 'px' 
        }else{
            s.style.left = -scrollY + "px"
        }
         

         
      
     })
   
    
      document.querySelector('#man').classList.add('manAnimation')
  
   
    document.onkeyup = checkKeyUp;
  
    } 

    else if (e.keyCode == '37') {
        // scrollY += 5;
        document.querySelector('#man').classList.add('rev_manAnimation')
        document.onkeyup = checkKeyUp;
        allSildes = document.querySelectorAll('.slide');   

        allSildes.forEach(function(s){
          
             oldValScrollY =  (s.style.left)
          ParsedoldValScrollY             =  parseInt(oldValScrollY, 10);

          ParsedoldValScrollY += 10;
             console.log(ParsedoldValScrollY)
           s.style.left = ParsedoldValScrollY + 'px' 
        })



    }

}


function checkKeyUp(e) {
    e = e || window.event;
    if (e.keyCode == '39') {

        
        // document.querySelector('.first_section').style.animationFillMode  = "forwards"; 
      
        document.querySelector('#man').classList.remove('manAnimation')
        // document.querySelector('.first_section').classList.remove('bodyAnimation')
    } else if(e.keyCode == '37'){

        document.querySelector('#man').classList.remove('rev_manAnimation')
    }

}



document.addEventListener('wheel', function(e) {
  e.preventDefault();
      alert('press left or right arrow in keyboard')
}, { passive: false });



document.addEventListener('keydown', function(e) {
  if (e.keyCode == 38 || e.keyCode == 40) {
    e.preventDefault();
      alert('press left or right arrow in keyboard')
  }
});


