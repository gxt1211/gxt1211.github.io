
     //根据QueryString参数名称获取值
     function getQueryStringByName(name) {
         var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
         if (result == null || result.length < 1) {
             return "";
         }
         return result[1];
     }
     var pengyouquanTitle = "上天入地，308S同你一嗨到底";
     var wxtitle = "上天入地，308S同你一嗨到底";
     var wxdesc = "日复一日有够无聊！308S免费送车让你玩嗨到底";
     var src = getQueryStringByName("src");
     var wxlink = "http://wx.fractalist.com.cn/dongfeng/201508308S/index.aspx?src=" + src;
     var wximgUrl = "http://wx.fractalist.com.cn/dongfeng/images/share201508308S.jpg";
     window.addEventListener('load', onloadFun, false);
     function onloadFun() {
         $.ajax({
             async: false,
             url: 'http://wx.fractalist.com.cn/yixin/GetWXJsApiByAjax.aspx?urlStr=' + encodeURIComponent(window.location.href),
             type: "GET",
             dataType: 'jsonp',
             jsonp: 'callback',
             timeout: 5000,
             beforeSend: function () {
             },
             success: function (json) {
                 wx.config({
                     debug: false,
                     appId: json["appId"],
                     timestamp: json["timestamp"],
                     nonceStr: json["nonceStr"],
                     signature: json["signature"],
                     jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage'
                          ]
                 });

                 wx.ready(function () {
                     wx.onMenuShareAppMessage({
                         title: wxtitle,
                         desc: wxdesc,
                         link: wxlink,
                         imgUrl: wximgUrl,
                         trigger: function (res) {

                         },
                         success: function (res) {

                             // alert("分享成功"); 分享给好友
                         },
                         cancel: function (res) {
                             // alert("cancel");
                         },
                         fail: function (res) {
                         }
                     });

                     wx.onMenuShareTimeline({
                         title: pengyouquanTitle,
                         link: wxlink,
                         desc: wxdesc,
                         imgUrl: wximgUrl,
                         trigger: function (res) {

                         },
                         success: function (res) {

                             // alert("ok"); 分享到朋友圈
                         },
                         cancel: function (res) {
                             // alert("cancel");
                         },
                         fail: function (res) {
                             // alert("fail");
                         }
                     });
                 });
             },
             complete: function (XMLHttpRequest, textStatus) {

             },
             error: function (xhr) {
                 // alert(xhr.errMsg);
             }
         });
     }