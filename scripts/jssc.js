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

