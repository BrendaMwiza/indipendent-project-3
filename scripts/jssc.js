$(document).ready(function(){
    $(".img1").click(function(){
      $(".par1").show();
      $(".img1").hide(); 
    });
    $(".par1").click(function(){
        $(".img1").show();
        $(".par1").hide(); 
    });

    $(".img2").click(function(){
        $(".par2").show();
        $(".img2").hide(); 
      });
    $(".par2").click(function(){
          $(".img2").show();
          $(".par2").hide(); 
      });

    $(".img3").click(function(){
        $(".par3").show();
        $(".img3").hide(); 
      });

    $(".par3").click(function(){
      $(".img3").show();
      $(".par3").hide(); 
      });

    $("#four").mouseover(function(){
      $(".four").show()
    });
    $("#four").mouseout(function(){
      $(".four").hide();
    });
    
    $("#three").mouseover(function(){
      $(".three").show()
    });
    $("#three").mouseout(function(){
      $(".three").hide();
    });

    $("#two").mouseover(function(){
      $(".two").show()
    });
    $("#two").mouseout(function(){
      $(".two").hide();
    });

    $("#one").mouseover(function(){
      $(".one").show()
    });
    $("#one").mouseout(function(){
      $(".one").hide();
    });

    $("#five").mouseover(function(){
      $(".five").show()
    });
    $("#five").mouseout(function(){
      $(".five").hide();
    });

    $("#six").mouseover(function(){
      $(".six").show()
    });
    $("#six").mouseout(function(){
      $(".six").hide();
    });

    $("#seven").mouseover(function(){
      $(".seven").show()
    });
    $("#seven").mouseout(function(){
      $(".seven").hide();
    });

    $("#eight").mouseover(function(){
      $(".eight").show()
    });
    $("#eight").mouseout(function(){
      $(".eight").hide();
    });
  

    $(".sub").click(function(){
      var name= $(".form").val();
      var email= $(".form").val();
      var message= $(".forms").val();
      if((name !== "") || (email !== "") || (message !== "")){
        alert(name + "," + "Your message was recieved, thank you for reaching out to us");
      }
      else{
        alert("the form must be filled first");
      }
      });
});

