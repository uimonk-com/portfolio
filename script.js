 
//     // document.querySelector('#startGame').addEventListener('click',function(){
          
//     //     console.log(document.querySelector('#man').classList)
//     //     document.querySelector('#man').classList.add('manAnimation')
//     //     document.querySelector('body').classList.add('bodyAnimation')
//     //     document.querySelector('.start_intro').style.opacity = 0
//     // })

// let t1 = gsap.timeline({ paused: true, reversed: true });
 
  
// document.querySelector('#startGame').addEventListener('click',(e)=>{
//     t1.play()
// })



// t1.to(".start_intro",{
//     ease: "power1.inOut",
//     scale:5,
//     opacity:0,
//     duration:0.5
// })
//     .to(".commingSoon",{
//         ease: "power1.inOut",
//     scale:1,
//     opacity:1,
//         },1)


//         // .to("#man",{
//         //     onComplete: function() {
//         //         document.querySelector('#man').classList.add('manAnimation')
//         //         document.querySelector('body').classList.add('bodyAnimation')
//         //       }
//         // })




//     // .to("#xxxxxx",{
//     //     onComplete: function() {
//     //         xxxxxxx
//     //       }
//     // })


  

  
  

//     document.onkeydown = checkKey;
//     var scrollY = 0;
//     var oldValScrollY = 0;
//     var ParsedoldValScrollY = 0;
    
     
     

// function checkKey(e) {

//     e = e || window.event;
//  if (e.keyCode == '39') {
 

//     scrollY += 20;
//     console.log(scrollY)
//     // window.scrollTo(0, scrollY);
//      allSildes = document.querySelectorAll('.slide');   

//      allSildes.forEach(function(s){
       

//         if(s.style.left){

//         oldValScrollY =  (s.style.left)
//         ParsedoldValScrollY             =  parseInt(oldValScrollY, 10);

//         ParsedoldValScrollY -= 10;
//            console.log(ParsedoldValScrollY)
//          s.style.left = ParsedoldValScrollY + 'px' 
//         }else{
//             s.style.left = -scrollY + "px"
//         }
         

         
      
//      })
   
    
//       document.querySelector('#man').classList.add('manAnimation')
  
   
//     document.onkeyup = checkKeyUp;
  
//     } 

//     else if (e.keyCode == '37') {
//         // scrollY += 5;
//         document.querySelector('#man').classList.add('rev_manAnimation')
//         document.onkeyup = checkKeyUp;
//         allSildes = document.querySelectorAll('.slide');   

//         allSildes.forEach(function(s){
          
//              oldValScrollY =  (s.style.left)
//           ParsedoldValScrollY             =  parseInt(oldValScrollY, 10);

//           ParsedoldValScrollY += 10;
//              console.log(ParsedoldValScrollY)
//            s.style.left = ParsedoldValScrollY + 'px' 
//         })



//     }

// }


// function checkKeyUp(e) {
//     e = e || window.event;
//     if (e.keyCode == '39') {

        
//         // document.querySelector('.first_section').style.animationFillMode  = "forwards"; 
      
//         document.querySelector('#man').classList.remove('manAnimation')
//         // document.querySelector('.first_section').classList.remove('bodyAnimation')
//     } else if(e.keyCode == '37'){

//         document.querySelector('#man').classList.remove('rev_manAnimation')
//     }

// }



// document.addEventListener('wheel', function(e) {
//   e.preventDefault();
//       alert('press left or right arrow in keyboard')
// }, { passive: false });



// document.addEventListener('keydown', function(e) {
//   if (e.keyCode == 38 || e.keyCode == 40) {
//     e.preventDefault();
//       alert('press left or right arrow in keyboard')
//   }
// });

// 	document.querySelector('#man').style.display='none'
// document.querySelector('.fixedMe').style.display='none'
// document.querySelector('#startGame').addEventListener('click',function(){
// 	setTimeout(function(){
// 	document.querySelector('#man').style.display='block'
		 
// 	},1000)
// 	setTimeout(function(){
	 
// 		document.querySelector('.fixedMe').style.display='block'
// 	},2500)
// })









 




// // ##############################

// // old code

// // #############################



 
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

	document.querySelector('#man').style.display='none'
document.querySelector('.fixedMe').style.display='none'
document.querySelector('#startGame').addEventListener('click',function(){
	setTimeout(function(){
	document.querySelector('#man').style.display='block'
		 
	},1000)
	setTimeout(function(){
	 
		document.querySelector('.fixedMe').style.display='block'
	},2500)
})









 


// Detect desktop (no touch + minimum width)
function isDesktop() {
    return window.matchMedia("(min-width: 1024px)").matches && !('ontouchstart' in window);
}

if (isDesktop()) {

    let t1 = gsap.timeline({ paused: true, reversed: true });

    document.querySelector('#startGame').addEventListener('click', (e) => {
        t1.play();
    });

    t1.to(".start_intro", {
        ease: "power1.inOut",
        scale: 5,
        opacity: 0,
        duration: 0.5
    })
    .to(".commingSoon", {
        ease: "power1.inOut",
        scale: 1,
        opacity: 1,
    }, 1);


    document.onkeydown = checkKey;

    var scrollY = 0;
    var oldValScrollY = 0;
    var ParsedoldValScrollY = 0;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == 39) { // RIGHT ARROW

            scrollY += 20;

            let allSlides = document.querySelectorAll('.slide');

            allSlides.forEach(function (s) {

                if (s.style.left) {

                    oldValScrollY = s.style.left;
                    ParsedoldValScrollY = parseInt(oldValScrollY, 10);

                    ParsedoldValScrollY -= 10;

                    s.style.left = ParsedoldValScrollY + 'px';

                } else {
                    s.style.left = -scrollY + "px";
                }

            });

            document.querySelector('#man').classList.add('manAnimation');

            document.onkeyup = checkKeyUp;

        }

        else if (e.keyCode == 37) { // LEFT ARROW

            document.querySelector('#man').classList.add('rev_manAnimation');

            document.onkeyup = checkKeyUp;

            let allSlides = document.querySelectorAll('.slide');

            allSlides.forEach(function (s) {

                oldValScrollY = s.style.left || "0px";

                ParsedoldValScrollY = parseInt(oldValScrollY, 10);

                ParsedoldValScrollY += 10;

                s.style.left = ParsedoldValScrollY + 'px';

            });

        }
    }

    function checkKeyUp(e) {

        e = e || window.event;

        if (e.keyCode == 39) {
            document.querySelector('#man').classList.remove('manAnimation');
        }
        else if (e.keyCode == 37) {
            document.querySelector('#man').classList.remove('rev_manAnimation');
        }

    }


    // Disable scroll wheel on desktop game
    document.addEventListener('wheel', function (e) {
        e.preventDefault();
        alert('Press left or right arrow on keyboard');
    }, { passive: false });


    document.addEventListener('keydown', function (e) {
        if (e.keyCode == 38 || e.keyCode == 40) {
            e.preventDefault();
            alert('Press left or right arrow on keyboard');
        }
    });


    // Initial state
    document.querySelector('#man').style.display = 'none';
    document.querySelector('.fixedMe').style.display = 'none';


    document.querySelector('#startGame').addEventListener('click', function () {

        setTimeout(function () {
            document.querySelector('#man').style.display = 'block';
        }, 1000);

        setTimeout(function () {
            document.querySelector('.fixedMe').style.display = 'block';
        }, 2500);

    });

}

 
// MOBILE ONLY SCRIPT

if (window.matchMedia("(max-width:1023px)").matches || navigator.maxTouchPoints > 0) {
             document.querySelector('#man').style.display = 'block';


    const leftBtn = document.querySelector('.left');
    const rightBtn = document.querySelector('.right');
    const man = document.querySelector('#man');

    let moveInterval = null;

    function moveRight() {


        let allSlides = document.querySelectorAll('.slide');

        allSlides.forEach(function (s) {

            let currentLeft = parseInt(s.style.left || "0", 10);

            s.style.left = (currentLeft - 2) + "px";

        });

        man.classList.add('manAnimation');
    }

    function moveLeft() {
         document.querySelector('#man').style.display = 'block';


        let allSlides = document.querySelectorAll('.slide');

        allSlides.forEach(function (s) {

            let currentLeft = parseInt(s.style.left || "0", 10);

            s.style.left = (currentLeft + 2) + "px";

        });

        man.classList.add('rev_manAnimation');
    }

    function stopMove() {

        clearInterval(moveInterval);

        man.classList.remove('manAnimation');
        man.classList.remove('rev_manAnimation');
    }

    // RIGHT BUTTON TOUCH
    rightBtn.addEventListener('touchstart', function () {
         document.querySelector('#man').style.display = 'block';

        clearInterval(moveInterval);
        moveInterval = setInterval(moveRight, 16); // ~60fps

    });

    rightBtn.addEventListener('touchend', stopMove);


    // LEFT BUTTON TOUCH
    leftBtn.addEventListener('touchstart', function () {
         document.querySelector('#man').style.display = 'block';

        clearInterval(moveInterval);
        moveInterval = setInterval(moveLeft, 16);

    });

    leftBtn.addEventListener('touchend', stopMove);


    // fallback for mobile browsers that trigger mouse events
    rightBtn.addEventListener('mousedown', function () {

        clearInterval(moveInterval);
        moveInterval = setInterval(moveRight, 16);

    });

    leftBtn.addEventListener('mousedown', function () {

        clearInterval(moveInterval);
        moveInterval = setInterval(moveLeft, 16);

    });

    document.addEventListener('mouseup', stopMove);

}
