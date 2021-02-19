$(function(){
    // $(window).on("touchstart",function(){
    //   $("#audio").trigger("load").trigger("play");
    //   $(this).off("touchstart")
    // })

    // $("body").one("click",function(){
    //   document.getElementById('audio').play();
    //   console.log("asdasd")
    // })


    $(".down").click(function (e) {
        console.log(e)
        e.preventDefault();
        window.playableSDK.openAppStore();
      });
});