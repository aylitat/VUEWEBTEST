(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-mine"],{"0668":function(t,i,e){var a=e("2e3e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("5f8e9bf4",a,!0,{sourceMap:!1,shadowMode:!1})},"0be9":function(t,i,e){"use strict";var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("17cc")),s=a(e("5d71")),o=getApp(),r={data:function(){return{list:n.default.tabbar,barStyle:{background:"#6c8ff1"},raScale:2,iconSize:"10",keyword:"",active:"mine",animate:"rubberBand",userBannerStyle:"",user:[],account:[],social:[],credit:[],subscribe:[],honour:[],board_id:"",privacyid:3,about:2,vesion:848,showcontact:!1,show:!1,isAdmin:!1}},onShow:function(){this.active="mine",this.animate="rubberBand";var t=o.globalData.user;t?this.getUserMineInfo():(t="",uni.navigateTo({url:"/pages/login/login"}))},onPageScroll:function(t){var i=t.scrollTop>0;if(i)this.userBannerStyle="";else{var e=1+Math.abs(t.scrollTop)/150;this.userBannerStyle="position: fixed; transform-origin: top center; transform: scale(".concat(e,")")}},methods:{handleChange:function(t){console.log(t),"creat"==t.name?this.show=!0:uni.switchTab({url:"/pages/"+t.name+"/"+t.name})},gotoAudtiCircle:function(){uni.navigateTo({url:"/pages/circle/auditcircle/auditcircle"})},gotoAudtiPosts:function(){uni.navigateTo({url:"/pages/auditPost/auditPost"})},loginOut:function(){uni.removeStorageSync("user"),uni.removeStorageSync("token"),uni.removeStorageSync("expired_in")},closePub:function(){this.show=!1,this.active="mine",this.animate="rubberBand"},close:function(){this.show=!1},likeClick:function(){uni.navigateTo({url:"mylike/mylike"})},favClick:function(){uni.navigateTo({url:"myfav/myfav"})},gotoPrivacy:function(){uni.navigateTo({url:"../page/page?id="+this.privacyid})},gotoMyCircle:function(t){uni.navigateTo({url:"./mycircle/mycircle?id="+t})},gotoExchan:function(){uni.navigateTo({url:"/pages/integral/exchanges/exchanges"})},gotoAbout:function(){uni.navigateTo({url:"../page/page?id="+this.about})},sign:function(){var t=this,i=this;s.default.updateCredit({action:"sign"}).then((function(e){t.getUserMineInfo(),i.$refs.uToast.show({title:e.message,type:"success"}),201==e.status&&uni.navigateTo({url:"/pages/credits/rank"})})).catch((function(t){console.log(t)}))},save:function(){uni.downloadFile({url:"http://uploadfile.yunnangateway.com/s2/c19/2020/0225/20200225112817823.png",success:function(t){200===t.statusCode&&uni.saveImageToPhotosAlbum({filePath:t.tempFilePaths,success:function(){that.$refs.uToast.show({title:"保存成功",type:"success"})}})}})},linkAnalysis:function(){uni.navigateTo({url:"../linkanalysis/linkanalysis"})},getUserMineInfo:function(){var t=this;s.default.checkUser().then((function(i){console.log(i),200==i.status?s.default.getMineInfo().then((function(i){console.log(i),t.user=i.user,"administrator"==i.user.role&&(t.isAdmin=!0),t.account=i.account,t.social=i.social,t.credit=i.credit,t.subscribe=i.subscribe,t.honour=i.honour,t.board_id=i.board_id})).catch((function(t){console.log(t)})):uni.showModal({title:"温馨提示",content:"检测出授权已过期, 是否注销授权?",success:function(i){i.cancel?t.$refs.uToast.show({title:"取消注销",type:"error"}):t.bindLogout()},fail:function(t){console.log(t)}})})).catch((function(t){console.log(t)}))},changeAcount:function(){uni.navigateTo({url:"change/change?isAdmin="+this.isAdmin})},showContact:function(){this.showcontact=!0},gotoMyposts:function(t){uni.navigateTo({url:"mypost/mypost?id="+t})},bindLogout:function(){var t=this;s.default.Loginout(),t.$refs.uToast.show({title:"正在注销",type:"info"}),this.user="",uni.removeStorageSync("videoAdLogs"),uni.reLaunch({url:"/pages/login/login"})}}};i.default=r},"0d27":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.top-header[data-v-49d184fc]{padding:%?100?%}.user-background[data-v-49d184fc]{position:absolute;top:0;left:0;width:100%}.user-background .banner[data-v-49d184fc]{width:100%}.user-background .gradient[data-v-49d184fc]{position:absolute;height:%?126?%;width:100%;left:0;bottom:0;background-image:linear-gradient(180deg,transparent,#fff)}.own-header[data-v-49d184fc]{position:relative;display:flex;justify-content:center;flex-flow:column nowrap;margin:%?130?% %?20?% %?20?%;border-radius:%?16?%;background-color:#fff;box-shadow:0 %?2?% %?24?% 0 hsla(0,0%,58.4%,.2)}.own-header .header-top[data-v-49d184fc]{height:%?186?%;padding:0 %?32?% 0 %?54?%;display:flex}.own-header .header-top .own-header-img-div[data-v-49d184fc],\r\n.own-header .header-top .own-header-img[data-v-49d184fc]{width:%?120?%;height:%?120?%;border-radius:%?60?%}.own-header .header-top .own-header-img-div[data-v-49d184fc]{margin-top:%?20?%}.own-header .header-top .header-middle[data-v-49d184fc]{-webkit-box-flex:1;flex:1;padding-left:%?28?%}.own-header .header-top .header-middle .own-header-r-t[data-v-49d184fc]{color:#434343;font-size:%?34?%;line-height:%?48?%;margin-top:%?30?%;width:%?340?%;height:%?50?%;overflow:hidden}.own-header .header-top .header-middle .header-label[data-v-49d184fc]{width:%?156?%;height:%?42?%;display:flex;background-color:#fff6d4;border-radius:%?21?%;text-align:center;color:#4a4a4a;font-size:%?22?%;margin-top:%?10?%;margin-left:%?10?%;line-height:%?42?%}.own-header .header-top .header-middle .header-label uni-image[data-v-49d184fc]{width:%?27?%;height:%?27?%;margin:%?7?% %?8?% 0 %?16?%}.own-header .header-top .header-middle2[data-v-49d184fc]{-webkit-box-flex:1;flex:1;padding-left:%?28?%;line-height:%?166?%;color:#fff;font-size:%?34?%;font-weight:700}.own-header .header-top .header-right[data-v-49d184fc]{margin-top:%?20?%;width:%?172?%;height:%?54?%;border-radius:%?27?%;background-color:#fff6d5;text-align:center;line-height:%?54?%;text-align:center;color:#000;font-size:%?24?%;margin-top:%?50?%}.own-header .header-bottom[data-v-49d184fc]{height:%?120?%;display:flex}.own-header .header-bottom .header-bottom-li[data-v-49d184fc]{-webkit-box-flex:1;flex:1;text-align:center;height:%?120?%}.own-header .header-bottom .own-header-num[data-v-49d184fc]{color:#434343;font-size:%?36?%;font-weight:700;line-height:%?50?%}.own-header .header-bottom .own-header-text[data-v-49d184fc]{color:#434343;font-size:%?24?%}.jifen[data-v-49d184fc]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;padding:%?10?%}.jifen .tab[data-v-49d184fc]{position:relative;background-color:#fff;width:%?260?%;margin-right:%?10?%;margin-left:%?10?%;display:flex;flex-direction:column;padding:%?40?% %?0?%;justify-content:center;align-items:center}.jifen .tab .title[data-v-49d184fc]{font-weight:550;padding-top:%?10?%}.jifen .tab .icon[data-v-49d184fc]{width:40px;height:40px;border-radius:40px}.jifen .tab .icon uni-image[data-v-49d184fc]{width:40px;height:40px;border-radius:40px}.jifen .tab .cont[data-v-49d184fc]{padding-top:%?14?%;font-size:%?24?%;color:#c0c4cc}.jifen .border-box[data-v-49d184fc]{box-shadow:0 0 20px hsla(0,0%,90.6%,.6);border-radius:8px}.menu[data-v-49d184fc]{margin:%?20?%;box-shadow:0 0 20px hsla(0,0%,90.6%,.6);border-radius:8px}.menu .u-flex-item[data-v-49d184fc]{padding:%?30?%!important;justify-content:space-between;display:flex;flex-direction:row;align-items:center;position:relative}.menu .u-flex-item .contact[data-v-49d184fc]{position:absolute;width:100%;height:%?120?%;top:0;left:0;opacity:0}.menu .u-flex-item .u-row-left[data-v-49d184fc]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.menu .u-flex-item .u-row-left uni-image[data-v-49d184fc]{width:%?45?%;height:%?45?%;padding-right:%?20?%}.menu .u-flex-item .u-row-left .name[data-v-49d184fc]{font-size:%?28?%}.menu .u-flex-item .u-row-right[data-v-49d184fc]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.menu .u-flex-item .u-row-right .arror-right[data-v-49d184fc]{width:7px;height:7px;border-top:1px solid #a9acb3;border-right:1px solid #a9acb3;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.kefu-justify-center[data-v-49d184fc]{flex-grow:1;flex-direction:column;display:flex;width:%?500?%;height:%?700?%;text-align:center}.kefu-justify-center .title[data-v-49d184fc]{padding:%?20?% %?30?%;font-size:%?30?%}.kefu-justify-center .image[data-v-49d184fc]{width:%?400?%;margin:0 auto}.kefu-justify-center .image uni-image[data-v-49d184fc]{width:%?400?%}.kefu-justify-center .save[data-v-49d184fc]{width:%?200?%;margin:%?20?% auto;padding:%?20?% %?30?%;border:1px solid #00aa7f;background:#00aa7f;border-radius:5px;font-size:%?28?%;color:#fff}',""]),t.exports=i},"1f8a":function(t,i,e){"use strict";e.r(i);var a=e("fa8a"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"2d5d":function(t,i,e){"use strict";e.r(i);var a=e("0be9"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"2e3e":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-toast[data-v-070c62ba]{position:fixed;z-index:-1;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-070c62ba]{opacity:1}.u-icon[data-v-070c62ba]{margin-right:%?10?%;display:flex;flex-direction:row;align-items:center;line-height:normal}.u-position-center[data-v-070c62ba]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-070c62ba]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-070c62ba]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-070c62ba]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-070c62ba]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-070c62ba]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-070c62ba]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-070c62ba]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-070c62ba]{color:#fff;background-color:#585858}',""]),t.exports=i},3710:function(t,i,e){"use strict";var a=e("0668"),n=e.n(a);n.a},4029:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var a={uPopup:e("4358").default,creat:e("32a3").default,lbTabbar:e("9669").default,lbTabbarItem:e("514e").default,uToast:e("4fb2").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"top-header"},[e("v-uni-view",{staticClass:"user-background",style:t.userBannerStyle},[e("v-uni-image",{staticClass:"banner",staticStyle:{height:"496rpx"},attrs:{mode:"aspectFill",src:t.user.background}}),e("v-uni-view",{staticClass:"gradient"})],1)],1),e("v-uni-view",{staticClass:"own-header"},[t.user?e("v-uni-view",{staticClass:"header-top"},[e("v-uni-navigator",{staticClass:"own-header-img-div",attrs:{url:"/page/personalCenter/personalCenter"}},[e("v-uni-image",{staticClass:"own-header-img",attrs:{mode:"aspectFill",lazyLoad:"true",src:t.user&&t.user.avatarUrl}})],1),e("v-uni-view",{staticClass:"header-middle"},[e("v-uni-view",{staticClass:"own-header-r-t text-overflow"},[t._v(t._s(""+(t.user&&t.user.nickName||"正在加载")))]),e("v-uni-view",{staticClass:"header-label"},[e("v-uni-image",{staticClass:"data-v-53537ef4",attrs:{mode:"aspectFill",src:t.honour.icon}}),t._v(t._s(""+t.honour.title?t.honour.title:"初始会员"))],1)],1),e("v-uni-navigator",{staticClass:"header-right",attrs:{url:"/pages/mine/editme/editme"}},[t._v("个人资料"),e("v-uni-text",{staticClass:"iconfont"})],1)],1):e("v-uni-navigator",{staticClass:"header-top",attrs:{url:"/page/login/login"}},[e("v-uni-image",{staticClass:"own-header-img-div",attrs:{mode:"aspectFill",lazyLoad:"true",src:"/image/avatar_icon_default_show.png"}}),e("v-uni-view",{staticClass:"header-middle2"},[t._v("注册/登录")])],1),e("v-uni-view",{staticClass:"header-bottom"},[e("v-uni-navigator",{staticClass:"header-bottom-li",attrs:{url:"/pages/mine/mypost/mypost?id="+t.user.userId}},[e("v-uni-view",{staticClass:"own-header-num"},[t._v(t._s(t.account.forums||0))]),e("v-uni-view",{staticClass:"own-header-text"},[t._v("帖子")])],1),e("v-uni-navigator",{staticClass:"header-bottom-li",attrs:{url:"/pages/mine/myfans/myfans?id="+t.user.userId}},[e("v-uni-view",{staticClass:"own-header-num"},[t._v(t._s(t.social.fans||0))]),e("v-uni-view",{staticClass:"own-header-text"},[t._v("粉丝")])],1),e("v-uni-navigator",{staticClass:"header-bottom-li",attrs:{url:"/pages/mine/myfollow/myfollow?id="+t.user.userId}},[e("v-uni-view",{staticClass:"own-header-num"},[t._v(t._s(t.social.following||0))]),e("v-uni-view",{staticClass:"own-header-text"},[t._v("关注")])],1)],1)],1),e("v-uni-view",{staticClass:"menu"},[e("v-uni-view",{staticClass:"u-flex-item",attrs:{"hover-class":"hover-class1","hover-stay-time":"50"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.likeClick.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"u-row-left"},[e("v-uni-image",{attrs:{src:"/static/images/icon2.png"}}),e("v-uni-view",{staticClass:"name"},[t._v("我的点赞")])],1),e("v-uni-view",{staticClass:"u-row-right"},[e("v-uni-view",{staticClass:"u-light-color"}),e("v-uni-view",{staticClass:"arror-right"})],1)],1),e("v-uni-view",{staticClass:"u-flex-item",attrs:{"hover-class":"hover-class1","hover-stay-time":"50"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.favClick.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"u-row-left"},[e("v-uni-image",{attrs:{src:"/static/images/icon3.png"}}),e("v-uni-view",{staticClass:"name"},[t._v("我的收藏")])],1),e("v-uni-view",{staticClass:"u-row-right"},[e("v-uni-view",{staticClass:"u-light-color"}),e("v-uni-view",{staticClass:"arror-right"})],1)],1)],1),"administrator"==t.user.role?e("v-uni-view",{staticClass:"menu"},[e("v-uni-view",{staticClass:"u-flex-item",attrs:{"hover-class":"hover-class1","hover-stay-time":"50"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.gotoAudtiCircle.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"u-row-left"},[e("v-uni-image",{attrs:{src:"/static/images/icon4.png"}}),e("v-uni-view",{staticClass:"name"},[t._v("审核圈子")])],1),e("v-uni-view",{staticClass:"u-row-right"},[e("v-uni-view",{staticClass:"u-light-color"}),e("v-uni-view",{staticClass:"arror-right"})],1)],1),e("v-uni-view",{staticClass:"u-flex-item",attrs:{"hover-class":"hover-class1","hover-stay-time":"50"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.gotoAudtiPosts.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"u-row-left"},[e("v-uni-image",{attrs:{src:"/static/images/icon5.png"}}),e("v-uni-view",{staticClass:"name"},[t._v("审核内容")])],1),e("v-uni-view",{staticClass:"u-row-right"},[e("v-uni-view",{staticClass:"u-light-color"}),e("v-uni-view",{staticClass:"arror-right"})],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"menu"},[e("v-uni-view",{staticClass:"u-flex-item",attrs:{"hover-class":"hover-class1","hover-stay-time":"50"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.gotoAbout.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"u-row-left"},[e("v-uni-image",{attrs:{src:"/static/images/icon6.png"}}),e("v-uni-view",{staticClass:"name"},[t._v("关于我们")])],1),e("v-uni-view",{staticClass:"u-row-right"},[e("v-uni-view",{staticClass:"u-light-color"}),e("v-uni-view",{staticClass:"arror-right"})],1)],1),e("v-uni-view",{staticClass:"u-flex-item",attrs:{"hover-class":"hover-class1","hover-stay-time":"50"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.gotoPrivacy.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"u-row-left"},[e("v-uni-image",{attrs:{src:"/static/images/icon7.png"}}),e("v-uni-view",{staticClass:"name"},[t._v("隐私协议")])],1),e("v-uni-view",{staticClass:"u-row-right"},[e("v-uni-view",{staticClass:"u-light-color"}),e("v-uni-view",{staticClass:"arror-right"})],1)],1),e("v-uni-view",{staticClass:"u-flex-item",attrs:{"hover-class":"hover-class1","hover-stay-time":"50"}},[e("v-uni-button",{staticClass:"contact",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showContact.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"u-row-left"},[e("v-uni-image",{attrs:{src:"/static/images/icon8.png"}}),e("v-uni-view",{staticClass:"name"},[t._v("联系客服")])],1),e("v-uni-view",{staticClass:"u-row-right"},[e("v-uni-view",{staticClass:"u-light-color"}),e("v-uni-view",{staticClass:"arror-right"})],1)],1),e("v-uni-view",{staticClass:"u-flex-item",attrs:{"hover-class":"hover-class1","hover-stay-time":"50"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changeAcount.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"u-row-left"},[e("v-uni-image",{attrs:{src:"/static/images/icon9.png"}}),e("v-uni-view",{staticClass:"name"},[t._v("切换账号")])],1),e("v-uni-view",{staticClass:"u-row-right"},[e("v-uni-view",{staticClass:"u-light-color"}),e("v-uni-view",{staticClass:"arror-right"})],1)],1),e("v-uni-view",{staticClass:"u-flex-item",attrs:{"hover-class":"hover-class1","hover-stay-time":"50"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.bindLogout.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"u-row-left"},[e("v-uni-image",{attrs:{src:"/static/images/icon10.png"}}),e("v-uni-view",{staticClass:"name"},[t._v("退出账号")])],1),e("v-uni-view",{staticClass:"u-row-right"},[e("v-uni-view",{staticClass:"u-light-color"}),e("v-uni-view",{staticClass:"arror-right"})],1)],1)],1),e("u-popup",{attrs:{mode:"center",mask:!0,closeable:!0,"border-radius":"20"},model:{value:t.showcontact,callback:function(i){t.showcontact=i},expression:"showcontact"}},[e("v-uni-view",{staticClass:"kefu-justify-center"},[e("v-uni-view",{staticClass:"title"},[t._v("关注我们")]),e("v-uni-view",{staticClass:"image"},[e("v-uni-image",{attrs:{src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-df030316-1829-4b96-bc8e-8f7701956390/d81706a6-a46a-4423-aa80-565119e0deca.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"save",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.save.apply(void 0,arguments)}}},[t._v("保存图片")])],1)],1),t.show?e("creat",{attrs:{showPubModal:t.show},on:{closePub:function(i){arguments[0]=i=t.$handleEvent(i),t.closePub.apply(void 0,arguments)},close:function(i){arguments[0]=i=t.$handleEvent(i),t.close.apply(void 0,arguments)}}}):t._e(),e("lb-tabbar",{attrs:{"raisede-scale":t.raScale,animate:t.animate,"active-color":"#0000ff","inactive-color":"#00007f","safe-area-inset-bottom":!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.handleChange.apply(void 0,arguments)}},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},t._l(t.list,(function(i){return e("lb-tabbar-item",{key:i.name,attrs:{name:i.name,icon:t.active===i.name?i.selectedIconPath:i.iconPath,dot:i.dot,info:i.info,raisede:i.raisede,"icon-prefix":"iconfont"}},[t._v(t._s(i.text))])})),1),e("u-toast",{ref:"uToast"})],1)},s=[]},"4fb2":function(t,i,e){"use strict";e.r(i);var a=e("fca0"),n=e("1f8a");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("3710");var o,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"070c62ba",null,!1,a["a"],o);i["default"]=c.exports},"6fd3":function(t,i,e){"use strict";var a=e("c2a6"),n=e.n(a);n.a},c2a6:function(t,i,e){var a=e("0d27");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("49a6713a",a,!0,{sourceMap:!1,shadowMode:!1})},db86:function(t,i,e){"use strict";e.r(i);var a=e("4029"),n=e("2d5d");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("6fd3");var o,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"49d184fc",null,!1,a["a"],o);i["default"]=c.exports},fa8a:function(t,i,e){"use strict";e("c975"),e("a9e3"),e("b64b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var i=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){i.isShow=!1,clearTimeout(i.timer),i.timer=null,"function"===typeof i.tmpConfig.callback&&i.tmpConfig.callback(),i.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};i.default=a},fca0:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var a={uIcon:e("80a1").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[e("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?e("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),e("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},s=[]}}]);