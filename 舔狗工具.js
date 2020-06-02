home();
// qqHandler("过往", "七台河");
wechatHandler("xxx", "宣城");

function weatherGet(location) {
    var weather = http.get(
        "http://wthrcdn.etouch.cn/weather_mini?city=" + location
    );
    var type = weather.body.json()["data"]["forecast"][0].type;
    if (type.indexOf("雨") !== -1) {
        return [
            type,
            "今天有雨哦，记得带伞。" +
                "是不是每个城市都会下雨？是啊。就像我走到哪里都会想你。",
        ];
    }
    return [type, ""];
}

function getRandom(end) {
    let random = Math.random();
    return (end * random).toFixed();
}

function message(city) {
    var wea = weatherGet(city);
    var msg = "";
    if (wea[1].length === 0) {
        var tuweiqinghua = [
            "给你科普一下辣的级别：微辣、中辣、特辣、变态辣、我想你辣。",
            "给你科普下虾的种类，有腰果炒虾，麻辣小龙虾，茄汁大虾，油焖大虾，和可不可以想我一下。",
            "给你科普一下鸭子的种类、达克鸭、小黄鸭、扁嘴鸭、我想你了鸭。",
            "我觉得所有的门都应该你来敲，因为你敲好看啊。",
            "你知道你和星星有什么区别吗？星星在天上，你在我心里。",
            "我很想把自己涂黑。为什么？这样我就可以暗中保护你。",
            "喜欢你是一件麻烦的事。那你别喜欢我，可是我偏偏喜欢找麻烦。",
            "我的目光变短了。为啥？因为只能看见你。",
            "你知道什么东西最灿烂吗？阳光。不对，在我心里你的笑容最灿烂。",
            "真想咬你一口。咬我干嘛？我想尝尝你是什么做的这么可爱。",
            "其实我想做一个坏人。为什么呢？因为我只想对你一个人好。",
            "你闻到什么没有，飘着香味。什么？你出现后空气都是甜的。",
            "我现在非常喜欢一个女孩。喜欢谁呀？你把手机黑屏就能看见她了。",
            "你最近真讨人厌，讨人喜欢百看不厌。",
            "一年365天，我只爱你三天，昨天今天明天。",
            "和你捉迷藏我一定会输的，因为喜欢一个人是藏也藏不住的。",
        ];
        msg =
            "今天是" +
            wea[0] +
            "天哦！" +
            tuweiqinghua[getRandom(tuweiqinghua.length)];
    } else {
        msg = wea[1];
    }
    return msg
}

function qqHandler(name, city) {
    app.launchApp("QQ");
    var msg = message(city);
    setScreenMetrics(device.width, device.height);
    id("et_search_keyword").findOne().click();
    sleep(1000);
    id("et_search_keyword").findOne().setText(name);
    sleep(1000);
    click(100, 540);
    sleep(1000);
    id("input").findOne().setText(msg);
    sleep(1000);
    text("发送").findOne().click();
    home();
}

function wechatHandler(name, city) {
    home();
    app.launchApp("微信");
    var msg = message(city);
    setScreenMetrics(device.width, device.height);
    id("dn7").findOne().click();
    sleep(1000);
    id("bhn").findOne().setText(name);
    sleep(1000);
    // 点击无法确定位置
    // press(200, 600, 500);
}
