/*************************************
项目名称：JavDB-去广告
## https://raw.githubusercontent.com/chxm1023/Advertising/main/JavDB.js
**************************************

[rewrite_local]
^https?:\/\/api\.((pxxgg|yijingluowangluo)\.xyz|ujvnmkx\.cn)\/api url script-response-body https://raw.githubusercontent.com/xids2016/ios_app/main/qx/rewrite/JavDB_AD.js

[mitm]
hostname = api.pxxgg.xyz, api.ujvnmkx.cn, api.yijingluowangluo.xyz

*************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);

const ada = '/ads';
const adb = '/startup';

//横幅广告
if ($request.url.indexOf(ada) != -1){
  chxm1023.data.ads = {};
}

//公告，开屏
if ($request.url.indexOf(adb) != -1){
  chxm1023.data.splash_ad.enabled = false;
  chxm1023.data.splash_ad.overtime = 0;
  chxm1023.data.splash_ad.ad = {};
  chxm1023.data.feedback.placeholder = "";
  chxm1023.data.settings.UPDATE_DESCRIPTION = "";
  chxm1023.data.settings.NOTICE = "";
}

$done({body : JSON.stringify(chxm1023)});
