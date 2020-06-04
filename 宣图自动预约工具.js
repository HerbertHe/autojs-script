home();
var w = floaty.window(
    <vertical bg="#000000" alpha="0.5" padding="10">
        <text id="title" textColor="white">
            宣图自动预约脚本
        </text>
        <text id="status" textColor="white">
            运行中...
        </text>
    </vertical>
);

app.launchApp("微信");
xcLibrary("姓名", "读者证号", "手机号码");

function xcLibrary(name, numid, phone) {
    // 点击搜索
    setScreenMetrics(device.width, device.height);
    if (id("dn7").findOnce() === null) {
        // 规避在“我”这一页没有控件的情况
        text("发现").findOne().parent().click();
        sleep(1000);
    }
    id("dn7").findOne().click();
    sleep(1000);
    id("bhn").findOne().setText("宣城市图书馆");
    sleep(1000);
    text("公众号").findOne().parent().click();
    ui.run(function () {
        w.status.setText("进入公众号...");
    });
    sleep(1000);
    text("馆助服务").findOne().parent().click();
    ui.run(function () {
        w.status.setText("进入馆助服务...");
    });
    sleep(1000);
    text("预约入馆").findOne().click();
    ui.run(function () {
        w.status.setText("预约入馆...");
    });
    sleep(1000);
    press(600, 900, 2000);
    text("识别图中的二维码").findOne().parent().click();
    // sleep(2000);
    // id("q1").findOne().setText(name);
    // id("q2").findOne().setText(numid);
    // id("q3").findOne().setText(phone);
    w.close();
}
