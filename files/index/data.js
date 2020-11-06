$(document).ready(function () {
    // 生成空图
    SCtab(max);
    // 随机生成
    Suiji();
    // 开启编辑功能
    Bianji();
    // 开始
    Begin();
    //刷新
    Shuaxin();
    // 设置
    Setting();
});
var timer = 500;
var max = 11;
var startx=1;
var starty=1;
var endx = max;
var endy = max;