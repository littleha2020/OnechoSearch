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
        case "维基":tools_api = "https://zh.wikipedia.org/w/index.php?search=";
        break;
        case "Stack Overflow":tools_api = "https://stackoverflow.com/search?q=";
        break;
        case "知乎":tools_api = "https://www.zhihu.com/search?type=content&q=";
        break;
        case "哔哩哔哩":tools_api = "https://search.bilibili.com/all?keyword=";
        break;
        case "新浪微博":tools_api = "https://s.weibo.com/weibo?q=";
        break;
        case "YouTube":tools_api = "https://www.youtube.com/results?search_query=";
        break;
        case "百度地图":tools_api = "https://api.map.baidu.com/geocoder?output=html&address=";
        break;
        case "快递查询":tools_api = "https://www.kuaidi100.com/?nu=";
        break;
        case "网购比价":tools_api = "http://www.b1bj.com/s.aspx?key=";
        break;
        case "域名注册":tools_api = "https://namebeta.com/search/";
        break;
    }
    window.open(tools_api + search_text);
});
console.log('OnechoSearch v0.0.2');
