var taber;
function SCtab(maxr){
    $("#MiGong").html("");
 max = maxr;
    console.log("生成空迷宫");
    taber = new Array(max+1);
    for(var i=1;i<=max;i++){
        taber[i] = new Array(max+1);
        var tabC = "<div class=\"tabC\" id=\"tabC"+i+"\"></div>\n";
        $("#MiGong").append(tabC);
        for(var m=1;m<=max;m++){
            var tabMi = "<div class=\"tabMi\" id=\"tab"+i+"-"+m+"\"></div>";
            $("#tabC"+i).append(tabMi);
            taber[i][m] = 0;
        }
    }
        $("#human").css("width",$("#tab1-1").width()*0.5+"px");
        $("#human").css("height",$("#tab1-1").height()*0.5+"px");

}


