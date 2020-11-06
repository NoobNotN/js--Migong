var fin;
var timenum = 0;
function Begin() {
    $("#begin").click(function () {
        timenum = 0;
        fin = false;
        Next(startx,starty);
    })
}
function Next(hang,lie) {
    if(fin === false){
        timenum++;
        taber[hang][lie] = 1;
        Gonergo(hang,lie);
        setTimeout(function () {
            $("#tab"+hang+"-"+lie).css("background","pink")
        },timer*timenum+350);
        ;
        if(hang === endx&&lie === endy){
            fin = true;
            setTimeout(function () {
                $("#text").html("SUCCESS!")
            },timer*timenum+350);
        }
        else{
            if(lie+1>=1&&lie+1<=max&&fin!==true)if (taber[hang][lie + 1] === 0) Next(hang, lie + 1,1);
            if(hang+1>=1&&hang+1<=max&&fin!==true)if (taber[hang + 1][lie] === 0)  Next(hang + 1, lie,2);
            if(lie-1>=1&&lie-1<=max&&fin!==true)if (taber[hang][lie-1] === 0)  Next(hang , lie-1,3);
            if(hang-1>=1&&hang-1<=max&&fin!==true)if (taber[hang - 1][lie] === 0)  Next(hang - 1, lie,4);
        }
        if(fin === false){
            timenum++;
            setTimeout(function () {
                $("#tab"+hang+"-"+lie).css("background","purple");
        },timer*timenum+350);
            Gonergo(hang,lie);
        }
        if(hang === 1&&lie === 1&&fin === false) $("#text").html("迷宫无出路!");
    }
    return;
}

function Gonergo(i,m) {
    // console.log($("#tab"+i+"-"+m).position().top);
    $("#goner").animate({left:$("#tab"+i+"-"+m).position().left+"px",top:$("#tab"+i+"-"+m).position().top+"px"},timer);
}