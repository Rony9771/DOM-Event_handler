    //option-1
   // <button onclick="document.body.style.backgroundColor='red'">Make Red</button>
   
   //<!-- function option0-2 -->
   function makeCyan(){
    document.body.style.backgroundColor='cyan';
  }

  //<!-- another method on click using id -3-->
  
    const makeWhite = document.getElementById("make-white");
      makeWhite.onclick =mkWhite;

    function mkWhite (){
      document.body.style.backgroundColor='white';

    }

    //<!-- option-4  -->
  
      const makePink = document.getElementById('make-pink');
        makePink.addEventListener('click',mp)

      function mp (){
        document.body.style.backgroundColor='pink';
      }

      //<!-- another option-4  -->
  
      const makeGreen =document.getElementById('make-green');
      makeGreen.addEventListener('click',function mg(){
        document.body.style.backgroundColor ='green';
    })

    // final
    document.getElementById('make-orange').addEventListener('click',function(){
      document.body.style.backgroundColor= 'orange';
    })
    
    document.getElementById('make-gold').addEventListener('click',function(){
      document.body.style.backgroundColor ='goldenRod'
    })
    