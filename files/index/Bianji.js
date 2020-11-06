function Bianji() {
    // $("#Bcover").css("display",'none');
    $("#Bianji").click(function () {
        console.log(taber);
        console.log("允许编辑");
        $(".tabMi").click(function () {
            var id = this.id;
            var idmode = /\d{1,}/gi;
            var witch = id.match(idmode);
            var Hang = Number(witch[0]),Lie = Number(witch[1]);
            if( taber[Hang][Lie] === 0){
                taber[Hang][Lie] = 1;
                $("#"+id).css("background","black");
            }else{taber[Hang][Lie] = 0;
                $("#"+id).css("background","white");}
        });
    });

}