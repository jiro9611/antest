<!--//
/*This Script allows people to enter by using a form that asks for a
UserID and Password*/
function pasuser(form) {
  if (form.username.value==="agrilus.com") { 
    if (form.password.value==="4444") {              
        window.location.href = "index.html"; 
        // return false;
      } else {
          alert("Invalid Password")
    }
  } else {  
          alert("Invalid UserID")
    }

    //This method is plug in from function remember_me();
    var c = $("#check"); //INPUT CHECKBOX

         //IF CHECKBOX IS SET, COOKIE WILL BE SET
         if(c.is(":checked")){
           var u = $("#username").val(); //VALUE OF USERNAME
           var p = $("#password").val(); //VALUE OF PASSWORD
           $.cookie("username", u, { expires: 3650 }); //SETS IN DAYS (10 YEARS)
           $.cookie("password", p, { expires: 3650 }); //SETS IN DAYS (10 YEARS)
         }


};
//-->

      function rememberMe(){
         var c = $("#check"); //INPUT CHECKBOX

         //IF CHECKBOX IS SET, COOKIE WILL BE SET
         if(c.is(":checked")){
           var u = $("#username").val(); //VALUE OF USERNAME
           var p = $("#password").val(); //VALUE OF PASSWORD
           $.cookie("username", u, { expires: 3650 }); //SETS IN DAYS (10 YEARS)
           $.cookie("password", p, { expires: 3650 }); //SETS IN DAYS (10 YEARS)
         }
      }
      

      //NEXT PAGE LOAD, THE USERNAME & PASSWORD WILL BE SHOWN IN THEIR FIELDS
      function load_em(){
         var u = $.cookie("username"); //"USERNAME" COOKIE
         var p = $.cookie("password"); //"PASSWORD" COOKIE

         $("#username").val(u); //FILLS WITH "USERNAME" COOKIE
         $("#password").val(p); //FILLS WITH "PASSWORD" COOKIE
      }

    // function swapStyleSheet(sheet){
    //   document.getElementById('pagestyle').setAttribute('href', sheet);
    // }


    function swapStyleSheet(sheet) {
       document.getElementById("css11").setAttribute("href", sheet);  
       console.log(3333333)
    }

    function initate()
    {
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");

    style1.onclick = function () { swapStyleSheet("css/style.css") };
    style2.onclick = function () { swapStyleSheet("css/style-blur.css"); };    

    console.log(style1.onclick)
    }

    window.onload = initate;





      
