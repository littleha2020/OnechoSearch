$('.search-button').click(function () {
    var search_text = $('#search_input').val();
    if (search_text =="") {
        return;
    }
    var tools = $(this).attr("data-tools-type");
    var tools_api;
    console.log(tools);
    switch (tools) {
        case "百度":tools_api = "https://www.baidu.com/s?ie=utf-8&wd=";
        break;
        case "谷歌":tools_api = "https://www.google.com/search?&q=";
        break;
        case "必应":tools_api = "https://www.bing.com/search?q=";
        break;
        case "百度地图":tools_api = "https://api.map.baidu.com/geocoder?output=html&address=";
        break;
        case "维基":tools_api = "https://zh.wikipedia.org/w/index.php?search=";
        break;
        case "知乎":tools_api = "https://www.zhihu.com/search?type=content&q=";
        break;
        case "哔哩哔哩":tools_api = "https://search.bilibili.com/all?keyword=";
        break;
    }
    window.open(tools_api + search_text);
});