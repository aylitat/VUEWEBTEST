(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-myfav-myfav"],{"05e1":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={helangWaterfall:i("1c7d").default,uLoadmore:i("049a").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"wfw"},[i("v-uni-view",{staticClass:"wf_left"},t._l(t.leftList,(function(e,n){return i("helang-waterfall",{key:n,attrs:{params:e,tag:"left",index:n},on:{height:function(e){arguments[0]=e=t.$handleEvent(e),t.onHeight.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})})),1),i("v-uni-view",{staticClass:"wf_right"},t._l(t.rightList,(function(e,n){return i("helang-waterfall",{key:n,attrs:{params:e,tag:"right",index:n},on:{height:function(e){arguments[0]=e=t.$handleEvent(e),t.onHeight.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})})),1)],1),i("u-loadmore",{attrs:{"margin-top":40,status:t.status}})],1)},o=[]},"10fc":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("2909")),o=n(i("5d71")),r=(getApp(),{data:function(){return{id:"",page:1,leftHeight:0,rightHeight:0,leftList:[],rightList:[],isLastPage:!1,status:"loading"}},onLoad:function(t){this.getUserFavPosts()},onReachBottom:function(){this.isLastPage||this.getUserFavPosts({page:this.page})},methods:{getUserFavPosts:function(t){var e=this;o.default.getFavPosts(t).then((function(t){0==t.length&&(e.nulls=!0),t.length<10&&(e.isLastPage=!0,e.status="nomore"),e.addList(t)})).catch((function(t){}))},onHeight:function(t,e){"left"==e?this.leftHeight+=t:this.rightHeight+=t},addList:function(t){if(console.log(t),t&&!(t.length<1)){var e=this.leftHeight-this.rightHeight,i=0,n=e>0?1:0,o=[],r=[],s=function(t){return e>=600&&t<3?(i=1,"right"):e<=-600&&t<3?(i=-1,"left"):e>=350&&t<2?"right":e<=-350&&t<2?(i=-1,"left"):(n+i)%2==0?"left":"right"};t.forEach((function(t,e){"left"==s(e)?o.push(t):r.push(t),n++})),1==this.page?(this.leftList=o,this.rightList=r,uni.stopPullDownRefresh()):(this.leftList=[].concat((0,a.default)(this.leftList),(0,a.default)(o)),this.rightList=[].concat((0,a.default)(this.rightList),(0,a.default)(r))),this.page++,this.topicload=!1}}}});e.default=r},"13aa":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uPopup:i("4358").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"waterpull"},[n("v-uni-view",{staticClass:"wf-item"},[n("v-uni-view",{staticClass:"wf-content"},[n("v-uni-image",{attrs:{src:t.params.meta.thumbnail,mode:"widthFix"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.emitHeight.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.emitHeight.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoDetail(t.params.id)}}}),"video"==t.params.format?n("v-uni-view",{staticClass:"vicon"}):t._e(),n("v-uni-view",{staticClass:"infow"},[n("v-uni-view",{staticClass:"title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoDetail(t.params.id)}}},[t._v(t._s(t.params.title.rendered))]),n("v-uni-view",{staticClass:"user"},[n("v-uni-view",{staticClass:"author",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoUser(t.params.author.id)}}},[n("v-uni-view",{staticClass:"avatar"},[n("v-uni-image",{staticClass:"img",attrs:{src:t.params.author.avatar}})],1),n("v-uni-view",{staticClass:"name"},[t._v(t._s(t.params.author.name))])],1),n("v-uni-view",{staticClass:"likes"},[n("v-uni-view",{staticClass:"image"},[n("v-uni-image",{staticClass:"img",attrs:{src:i("c1c0"),mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"number"},[t._v(t._s(t.params.likes))])],1),t.edit?n("v-uni-view",{staticClass:"menu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onMenu.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:"/static/images/album-more-gray.png",mode:"widthFix"}})],1):t._e()],1)],1)],1)],1),n("u-popup",{attrs:{mode:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-uni-view",{staticClass:"menu-button"},[n("v-uni-view",{staticClass:"menu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deletePost(t.params.id,t.index,t.tag)}}},[t._v("删除")]),n("v-uni-view",{staticClass:"menu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消")])],1)],1)],1)},o=[]},"15a9":function(t,e,i){"use strict";i.r(e);var n=i("9fdb"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"1c7d":function(t,e,i){"use strict";i.r(e);var n=i("13aa"),a=i("15a9");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("fcd0");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"3a6cd6c2",null,!1,n["a"],r);e["default"]=c.exports},2909:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var n=s(i("6005")),a=s(i("db90")),o=s(i("06c5")),r=s(i("3427"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t){return(0,n.default)(t)||(0,a.default)(t)||(0,o.default)(t)||(0,r.default)()}},3427:function(t,e,i){"use strict";function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},"4db5":function(t,e,i){var n=i("dfdc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1a0407db",n,!0,{sourceMap:!1,shadowMode:!1})},5927:function(t,e,i){"use strict";i.r(e);var n=i("10fc"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},6005:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=a(i("6b75"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t))return(0,n.default)(t)}},"9fdb":function(t,e,i){"use strict";i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"helang-waterfall",props:{params:{type:Object,default:function(){return{}}},unitid:{type:String|Number,default:""},edit:{type:Boolean,default:!1},tag:{type:String|Number,default:""},index:{type:Number,default:-1}},data:function(){return{show:!1}},methods:{emitHeight:function(t){var e=this,i=uni.createSelectorQuery().in(this);i.select(".wf-item").boundingClientRect((function(t){var i=Math.floor(t.height);e.$emit("height",i,e.$props.tag)})).exec()},gotoDetail:function(t){console.log(t),uni.navigateTo({url:"/pages/detail/detail?id="+t+"&type=forums"})},gotoUser:function(t){uni.navigateTo({url:"/pages/user/user?id="+t})},deletePost:function(t,e,i){var n={id:t,index:e,tag:i};this.$emit("deletePosts",n),this.show=!1},onMenu:function(){this.show=!0},cancel:function(){this.show=!1}}};e.default=n},b463:function(t,e,i){"use strict";var n=i("fba0"),a=i.n(n);a.a},c1c0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABvUExURUxpcZ6enpmZmZ2dna2trZaWlpmZmZaWlpeXl5eXl5aWlpeXl5eXl5eXl5iYmJqampiYmJiYmJiYmJeXl5eXl5eXl5mZmZeXl5eXl5eXl5iYmJeXl5iYmJeXl5eXl5eXl5eXl5eXl5eXl5iYmJeXl9mO2coAAAAkdFJOUwAGHA0D/gj7+PD0gOtuiylZEpzadUYXajTjwK1iUbS8lMukPSVmzTUAAAKOSURBVFjD7VbJgqsgEIxLFETFfUnUqPH/v3GcBqMsRpN3fNOnpMGiqiyQy+Wv/ocqqjxq2pwa26ZB87aJ8qo4ft5px9T3McZ+PRC6dCkZamj66dg6bwHiNp2u01JXr6fzfIcmaNOc0jbeR8g7dxLLJ3ER+lLT7fIdADuQ586FbgNSu35ga10g61wXuSvxtbv+RkTnSIP5cDqSoMzCBxbYDD3JSNjV/D9uND7wJ+rGtOAtxtXdXdU/i99l7djMfMYFK36YKVusMzfmNHxNr9xkhN4YcmpKVmZgBAotof1kwDUVopcABspES80B+CaWRO4JPFAgxvcOwINII2fcqKzPILBiJ4apYgJFNxLoBarLzCNfxLZDmJ4ImYDX4evedQ8vIJJ2InDD2/lURX2RhqFQ6j6gSxUrGh2EBVvsLnWJYkYDnad26wSPuXo5ysqaGXSq88dSBA+Um075KQRbs1VA2/MQo7Km3vb9sjwI7TZwBuQitU7rgLB0Qq/bS6e2KNt9Yt5aiFt9ztB4dDW7vWA7tTNPIDghHAwuMXTnhfs4tsNJkOYQedGYpscRD4txmLxIGXqyL4B7Nw8QPIagsz5iY++1WMzJyQ11s+yS8bi+0WL1TIV6QnKfSnygZUHwwr1Psx3ht1qskSGgcF+rzXnotcQ98wEl764H77Qcq5C03GSuFv88InKUvpeWm8gjTjhCbxznV6sl5qn2iHFiF+m0xC8Vzqm9rGp5qQiNkyeKE4haFhWYGKePRlFL3H2mYrm58TvPrKUYP1Uha6k4As4+Q/jVwvd+zTlkzuXTWrRceR7sL27zTuCtV9XsG4RVy8zhCxWilu9UbLXsXLhPa/Hnq7Jx+acq8uLyV3/1Rf0AO2RxKe7MhlgAAAAASUVORK5CYII="},d4ea:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.wfw[data-v-1036795a]{margin:%?20?%}.wfw .wf_left[data-v-1036795a],\r\n.wfw .wf_right[data-v-1036795a]{display:inline-block;vertical-align:top;width:50%}',""]),t.exports=e},db90:function(t,e,i){"use strict";function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},dfdc:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.wf-item[data-v-3a6cd6c2]{background-position:50%;background-repeat:no-repeat;background-size:cover;box-sizing:border-box;height:auto;overflow:hidden;padding:%?0?% %?10?% %?32?%;width:100%}.wf-item .wf-itemw[data-v-3a6cd6c2]{border-radius:%?14?%;box-shadow:0 %?6?% %?12?% rgba(0,0,0,.1);display:block;overflow:hidden}.wf-item .wf-content[data-v-3a6cd6c2]{position:relative;border-radius:%?14?%;box-shadow:0 %?6?% %?12?% rgba(0,0,0,.1);display:block;overflow:hidden}.wf-item .wf-content uni-image[data-v-3a6cd6c2]{display:block;width:100%;height:%?350?%}.wf-item .wf-content .vicon[data-v-3a6cd6c2]{background:url(https://s1.st.meishij.net/p2/20181206/20181206143142_460.png) %?0?% %?0?% no-repeat;background-size:%?40?% %?80?%;display:block;height:%?40?%;position:absolute;right:%?20?%;top:%?20?%;width:%?40?%}.wf-item .wf-content .infow[data-v-3a6cd6c2]{background:#fff;padding-bottom:%?24?%}.wf-item .wf-content .infow .title[data-v-3a6cd6c2]{-webkit-line-clamp:4;-webkit-box-orient:vertical;color:#333;display:-webkit-box;font-size:%?32?%;font-weight:600;line-height:%?44?%;max-height:%?196?%;overflow:hidden;padding:%?20?% %?30?% %?0?%;position:relative;text-overflow:ellipsis}.wf-item .wf-content .infow .user[data-v-3a6cd6c2]{height:%?36?%;margin:%?40?% %?30?% %?0?%;position:relative;display:flex;justify-content:space-between}.wf-item .wf-content .infow .user .author[data-v-3a6cd6c2]{font-size:%?0?%}.wf-item .wf-content .infow .user .author .avatar[data-v-3a6cd6c2]{border-radius:%?18?%;box-shadow:%?0?% %?2?% %?6?% rgba(0,0,0,.1);display:inline-block;height:%?36?%;overflow:hidden;vertical-align:top;width:%?36?%}.wf-item .wf-content .infow .user .author .avatar uni-image[data-v-3a6cd6c2]{display:block;height:%?36?%;width:%?36?%}.wf-item .wf-content .infow .user .author .name[data-v-3a6cd6c2]{color:#666;display:inline-block;font-size:%?24?%;height:%?36?%;width:%?180?%;line-height:%?36?%;overflow:hidden;padding-left:%?10?%;text-overflow:ellipsis;vertical-align:top;white-space:nowrap}.wf-item .wf-content .infow .user .likes[data-v-3a6cd6c2]{display:flex;justify-content:flex-start}.wf-item .wf-content .infow .user .likes .image[data-v-3a6cd6c2]{width:%?36?%;height:%?36?%}.wf-item .wf-content .infow .user .likes .image uni-image[data-v-3a6cd6c2]{display:block;height:%?36?%!important;width:%?36?%!important}.wf-item .wf-content .infow .user .likes .number[data-v-3a6cd6c2]{color:#666;display:inline-block;font-size:%?24?%;color:#999;height:%?36?%;line-height:%?36?%;overflow:hidden;padding-left:%?5?%;text-overflow:ellipsis;vertical-align:top;white-space:nowrap}.wf-item .wf-content .infow .user .menu uni-image[data-v-3a6cd6c2]{width:%?40?%;position:absolute;right:%?-30?%;top:%?-3?%}.menu-button[data-v-3a6cd6c2]{text-align:center}.menu-button .menu-item[data-v-3a6cd6c2]{padding:%?30?% %?0?%;border-bottom:#f9f9f9 %?1?% solid}',""]),t.exports=e},fba0:function(t,e,i){var n=i("d4ea");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4fb144fe",n,!0,{sourceMap:!1,shadowMode:!1})},fcd0:function(t,e,i){"use strict";var n=i("4db5"),a=i.n(n);a.a},fdf8:function(t,e,i){"use strict";i.r(e);var n=i("05e1"),a=i("5927");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b463");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"1036795a",null,!1,n["a"],r);e["default"]=c.exports}}]);