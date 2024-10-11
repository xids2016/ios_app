/******************************

脚本功能：幕布-大纲笔记+解锁VIP

*******************************

[rewrite_local]

^https:\/\/api2\.mubu\.com\/v3\/api\/user\/current_user url script-response-body https://raw.githubusercontent.com/xids2016/ios_app/main/qx/rewrite/mubu.js

[mitm] 

hostname = api2.mubu.com


*******************************/


var body = $response.body.replace(/vipEndDate":""/g,'vipEndDate":"99999999"')
.replace(/level":\d+/g,'level":1')
$done({ body });
