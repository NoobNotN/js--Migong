function Shuaxin() {
    $("#Shuaxin").click(function () {
        console.log("刷新");
        timenum = 0;
        for(var i=1;i<=max;i++){
            for(var m=1;m<=max;m++){
                taber[i][m] = 0;
                $("#tab"+i+"-"+m).css("background","white");
            }
        }
        $("#goner").animate({left:"0vw"},500);
        $("#goner").animate({top:"0vw"},500);
        $("#text").html("");
    });
}