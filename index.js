// slide navbar function started 

function scrollFunction(){
    var nav = document.querySelector(".fixed-nav");
    
    if(document.body.scrollTop > 300 ){
        nav.style.top = "0px";
    }
   else if(document.body.scrollTop > 0){
    nav.style.top = "-120px";
   }
   
    else{
        nav.style.top = "-169px"
    }
}
window.onscroll = function() {scrollFunction()};

// slide navbar function end 

// dark mode function started 
        // var color = [yellow];
     function darktheme(){
        var btn = document.getElementById('dark-mode');
        var fixbtn = document.getElementById('fix-btn');

        btn.addEventListener("click",()=>{
            let body = document.querySelector("body");
            body.classList.toggle('darking');
            btn.classList.toggle('darkbg');
            fixbtn.classList.toggle('darkbg');
        })
        fixbtn.addEventListener("click",()=>{

            let body = document.querySelector("body");
            body.classList.toggle('darking');
             fixbtn.classList.toggle('darkbg');
             btn.classList.toggle('darkbg');
        })
      

    
    }
    darktheme();
   

    // function text();
    // typing function End
    const texts = ['Web Developer','Web Designer','Programmer'];
    var count = 0;
    var index = 0;
    var decrement = 0;
    var currentText = '';
    var letter = '';
    
    function sleep(delay){
        return new Promise(resolve => setTimeout(resolve,delay));
    }
    
    const typeWrite = async() =>{
      if (count == texts.length)
      {
        count = 0;
      }
      currentWord = texts[count];
      currentLetter = currentWord.slice(0,++index);
      document.querySelector("#skill").textContent = currentLetter;
      if(index == currentWord.length)
      {
        await sleep(1500);
        while(index > 0)
        {
          currentLetter = currentWord.slice(0,--index);
          document.querySelector("#skill").textContent = currentLetter;
          await sleep(50);
        }
        count++;
        index = 0;
        await sleep(500);
      }
      setTimeout(typeWrite,Math.random()*200+50);
    }
    typeWrite();

    // animation for click on home 
   
    // animation for scroll reveal started 
      // function run 
      function reveal(){
        var reveals = document.querySelectorAll('.about');
        var lorem = document.querySelectorAll('.services');
        var nft = document.querySelectorAll('.nft-container');
        var skill = document.querySelectorAll('.skill-container');
        var skill = document.querySelectorAll('#skillcon');
        var team = document.querySelectorAll('#team');


        // for h1 animation 
        for( var i=0; i<reveals.length; i++){
            var windowhight =window.innerHeight;
            var revealtop= reveals[i].getBoundingClientRect().top;
            var revealpoint= 100;

            if(revealtop < windowhight - revealpoint ){
                reveals[i].classList.add('revealfunction');
            }
            else{
                reveals[i].classList.remove('revealfunction');
            }
        }

        // for lorem para animation 
        for( var i=0; i<lorem.length; i++){
            var windowwhight =window.innerHeight;
            var loremtop= lorem[i].getBoundingClientRect().top;
            var lorempoint= 100;

            if(loremtop<windowwhight- lorempoint){
                lorem[i].classList.add('servicesanimate');
            }
            else{
                lorem[i].classList.remove('servicesanimate');
            }
        }

        // // for NFT Bazar animation 
        for( var i=0; i<nft.length; i++){
            var windowwhight =window.innerHeight;
            var loremtop= nft[i].getBoundingClientRect().top;
            var lorempoint= 100;

            if(loremtop<windowwhight- lorempoint){
                nft[i].classList.add('nftanimate');
            }
            else{
                nft[i].classList.remove('nftanimate');
            }
        }

        // // for skill progress bar animation 
        for( var i=0; i<skill.length; i++){
            var windowwhight =window.innerHeight;
            var loremtop= skill[i].getBoundingClientRect().top;
            var lorempoint= 100;

            if(loremtop<windowwhight- lorempoint){
                skill[i].classList.add('skillanimation');
            }
            else{
                skill[i].classList.remove('skillanimation');
            }
        }

        // // for team animation 
        for( var j=0; j<team.length; j++){
            var windowwhight =window.innerHeight;
            var loremtop= team[j].getBoundingClientRect().top;
            var lorempoint= 100;

            if(loremtop<windowwhight- lorempoint){
                team[j].classList.add('teamanimation');
            }
            else{
                team[j].classList.remove('teamanimation');
            }
        }

        // // // for team animation 
        // for( var i=0; i<team.length; i++){
        //     var windowwhight =window.innerHeight;
        //     var loremtop= team[i].getBoundingClientRect().top;
        //     var lorempoint= 100;

        //     if(loremtop<windowwhight- lorempoint){
        //         team[i].classList.add('teamanimation');
        //     }
        //     else{
        //         team[i].classList.remove('teamanimation');
        //     }
        // }

       

    }

     // call to function
     window.addEventListener('scroll',reveal);


//     //  menu btn function 
// function menuscroll(){

//     const menubtn = document.querySelector('.menu');
//     const ullist = document.querySelector('.content header ul');

//     menubtn.addEventListener('click',()=>{
//         ullist.classList.toggle('ulanimation');
//     })


// }
// menuscroll();
function scroling(){
    const navbar=document.getElementById('ullist');
    const btn=document.getElementById('menu');
    
    btn.addEventListener("click",()=>{
    navbar.classList.toggle("ulanimation");
    btn.classList.toggle("navanimation");
    
    
            
        })
    
    }

scroling();

// menuscroll of fixed nav();
function fixing(){
    const navbar=document.getElementById('fixed-nav');
    const btn=document.querySelector('.fixed-menubar');
    
    btn.addEventListener("click",()=>{
    navbar.classList.toggle("ulanimation");
    btn.classList.toggle("navanimation");
    
    
            
        })
    
    }

fixing();
