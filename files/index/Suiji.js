function Suiji() {
    $("#Suiji").click(function () {
        console.log("随机生成");
        startx = Math.floor(Math.random() * max/4)*2+3;
        starty = Math.floor(Math.random() * max/4)*2+3;
        endx = Math.floor(Math.random() * (max-1)/2)*2+1;
        endy = Math.floor(Math.random() * (max-1)/2)*2+1;
        console.log(startx,starty);
        console.log(endx,endy);
        Kong();
        Gotaber(startx,starty);
        // console.log(taber);
        taber[1][2]=0;
        Ggcor();
        $("#tab"+endx+"-"+endy).css("background","green");
    });
}
function Gotaber(hang,lie) {
    var Desui = [1,2,3,4];
    for(var p = 0;p<10;p++) {
        var g = Math.floor(Math.random() * 4), h = Math.floor(Math.random() * 4), j;
        j = Desui [g];
        Desui[g] = Desui[h];
        Desui[h] = j;
    }
    for(p = 0;p<4;p++){ tabergo(Desui[p],hang,lie) }
    return;
}

function tabergo(a,hang,lie) {
    switch (a) {
        case 1:
            if(hang+2<=max){
                if(taber[hang+2][lie] === 2){
                    taber[hang+1][lie] = taber[hang+2][lie] = 0;
                    Gotaber(hang+2,lie);
                }
            }

            break;
        case 2:
            if (lie+2<=max){
                if(taber[hang][lie+2] === 2){
                    taber[hang][lie+2] = taber[hang][lie+1] = 0;
                    Gotaber(hang,lie+2);
                }
            }

            break;
        case 3:
            if (hang-2>0){
                if(taber[hang-2][lie] === 2){
                    taber[hang-1][lie] = taber[hang-2][lie] = 0;
                    Gotaber(hang-2,lie);
                }
            }

            break;
        case 4:
            if(lie-2>0){
                if(taber[hang][lie-2] === 2){
                    taber[hang][lie-1] = taber[hang][lie-2] = 0;
                    Gotaber(hang,lie-2);
                }
            }
            break;
    }
}

function Kong() {
    for(var i=1;i<=max;i++){
        for(var m=1;m<=max;m++){
            if(i%2 === 0||m%2 === 0) {
                taber[i][m] = 1;
            }else{taber[i][m] = 2}
        }
    }
    taber[1][1] = 0;
}

function Ggcor() {
    Gonergo(startx,starty);
    for(var i=1;i<=max;i++){
        for(var m=1;m<=max;m++){
            if(taber[i][m] === 1){
                $("#tab"+i+"-"+m).css("background","black");
            }else if(taber[i][m] === 0){
                $("#tab"+i+"-"+m).css("background","white");
            }else{
                $("#tab"+i+"-"+m).css("background","yellow");
            }
        }
    }

}










// function Suiji() {
//     $("#Suiji").click(function () {
//         console.log("随机生成");
//         for(var i=1;i<=max;i++){
//             for(var m=1;m<=max;m++){
//                 var there = Math.floor(Math.random() * 2);
//                 if(there === 1) {
//                     taber[i][m] = 1;
//                     $("#tab"+i+"-"+m).css("background","black");
//                 }else{
//                     taber[i][m] = 0;
//                     $("#tab"+i+"-"+m).css("background","white");
//                 }
//             }
//         }
//         taber[1][1] = 0;
//         $("#tab1-1").css("background","white");
//     });
// }