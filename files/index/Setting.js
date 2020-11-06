function Setting() {
    $("#setr").click(function () {

        timer = Number($("#settime").val());
        max = Number($("#setmax").val());
        if(max%2===0){
            max++;
            $("#text").html("迷宫大小必须为奇数!（迷宫大小已+1）")
        }
        SCtab(max);

    })
}