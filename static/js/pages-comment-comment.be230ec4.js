(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-comment-comment"],{"0845":function(e,t,n){"use strict";n.r(t);var a=n("cedf"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"2b08":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={comment:n("b585").default,uPopup:n("4358").default,uToast:n("4fb2").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[""!==e.maincomment?n("v-uni-view",{staticClass:"comment-item"},[n("v-uni-view",{staticClass:"comment-user flex relative",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.gotouser(e.maincomment.author.id)}}},[n("v-uni-view",{staticClass:"comment-user-avatar relative"},[n("v-uni-image",{staticClass:"comment-user-avatar-img",attrs:{mode:"aspectFill",src:e.maincomment.author.avatar}})],1),n("v-uni-view",{staticClass:"comment-user-profile"},[n("v-uni-view",{staticClass:"flex"},[n("v-uni-view",{staticClass:"bold"},[e._v(e._s(e.maincomment.author.name))])],1),n("v-uni-view",{staticClass:"comment-user-items flex gray-99"},[n("v-uni-view",{staticClass:"comment-user-item"},[e._v(e._s(e.maincomment.author.honour.title))])],1)],1)],1),n("v-uni-view",{staticClass:"comment-content",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.replyComment(e.maincomment)}}},[e._v(e._s(e.maincomment.content))]),n("v-uni-view",{staticClass:"comment-footer"},[e._v(e._s(e.maincomment.date)),n("v-uni-view",{staticClass:"comment-thumb",class:e.maincomment.islike?"active":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tapcommentlike(e.maincomment.id)}}},[e.maincomment.islike?n("v-uni-image",{staticClass:"comment-thumb-icon iconfont icon-like",attrs:{src:"/static/images/likes_icon_click.png"}}):n("v-uni-image",{staticClass:"comment-thumb-icon iconfont icon-like",attrs:{src:"/static/images/likes_icon_nor.png"}}),e.maincomment.likes?n("v-uni-view",{staticClass:"comment-thumb-num"},[e._v(e._s(e.maincomment.likes))]):e._e()],1)],1)],1):e._e(),e.commentList.length>0?n("v-uni-view",{staticClass:"comments"},[n("comment",{attrs:{commentList:e.commentList,showButton:e.showButton,isNewest:e.isNewest},on:{reply:function(t){arguments[0]=t=e.$handleEvent(t),e.reply.apply(void 0,arguments)},tapLikes:function(t){arguments[0]=t=e.$handleEvent(t),e.tapcommentLike.apply(void 0,arguments)},showRecommendList:function(t){arguments[0]=t=e.$handleEvent(t),e.showRecommend.apply(void 0,arguments)},showNewestList:function(t){arguments[0]=t=e.$handleEvent(t),e.showNewest.apply(void 0,arguments)},deleteCommentByUser:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteComment.apply(void 0,arguments)},changeCommentStatus:function(t){arguments[0]=t=e.$handleEvent(t),e.changeCommentsHiddenStatus.apply(void 0,arguments)}}})],1):e._e(),n("u-popup",{attrs:{mode:"bottom","border-radius":"14",height:"800rpx","z-index":"10"},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.outComment.apply(void 0,arguments)}},model:{value:e.isComments,callback:function(t){e.isComments=t},expression:"isComments"}},[n("v-uni-view",{staticClass:"textareacontent"},[n("v-uni-view",{staticClass:"textheaders"},[n("v-uni-view",{staticClass:"cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.outComment.apply(void 0,arguments)}}},[e._v("取消")]),n("v-uni-view",{staticClass:"publish",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addComment.apply(void 0,arguments)}}},[e._v("发布")])],1),n("v-uni-view",{staticClass:"textareaBox"},[n("v-uni-textarea",{staticClass:"textareaInput",attrs:{maxlength:"140","show-confirm-bar":!1,name:"content",placeholder:e.placeholder,"placeholder-class":"placeholder-text",value:e.commentContent},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.bindInput.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"textCount"},[e._v(e._s(e.count)+"/140")])],1)],1)],1),n("u-toast",{ref:"uToast"})],1)},o=[]},"891d":function(e,t,n){"use strict";n.r(t);var a=n("2b08"),i=n("0845");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("a2c5");var s,c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"311e4ecb",null,!1,a["a"],s);t["default"]=r.exports},a2c5:function(e,t,n){"use strict";var a=n("ef08"),i=n.n(a);i.a},cedf:function(e,t,n){"use strict";var a=n("4ea4");n("99af"),n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5d71")),o={data:function(){return{maincomment:"",commentList:[],page:1,isNewest:!0,showButton:!1,content:"",isFocus:!0,topshow:!0,placeholder:"写评论...",isComments:!1,count:0,id:0}},onLoad:function(e){this.getCommentDetail(e.id),this.getReplayList(e.id,{per_page:10}),this.id=e.id},onReachBottom:function(){this.isLastPage||this.getReplayList(this.id,{page:this.page,per_page:10})},methods:{getCommentDetail:function(e){var t=this;i.default.getCommentDetailById(e).then((function(e){console.log(e),t.maincomment=e}))},getReplayList:function(e,t){var n=this;i.default.getReplayLists(e,t).then((function(e){e.length<10&&(n.isLastPage=!0),console.log(e),n.commentList=n.commentList.concat(e),n.page=n.page+1,n.isCommentLoad=!0}))},reply:function(e){console.log(e);var t=e.data.id,n=e.data.author.name;this.isFocus=!0,this.isComments=!0,this.parent=t,this.placeholder=" @"+n+":"},tapcommentLike:function(e){var t=this,n=e.id,a=e.index;i.default.markComment({id:n}).then((function(e){200==e.status?(t.commentList[a].islike=!0,t.commentList[a].likes+=1):202==e.status&&(t.commentList[a].islike=!1,t.commentList[a].likes-=1)})).catch((function(e){t.$refs.uToast.show({title:e.message,type:"error"})}))},changeCommentsHiddenStatus:function(e){var t=parseInt(e.id),n=parseInt(e.sid);this.commentList[t].reply[n].islike=!this.commentList[t].reply[n].islike},tapComment:function(){this.isComments=!0},outComment:function(){this.isComments=!1,this.parent=0,this.placeholder="写点评论..."},bindInput:function(e){this.commentContent=e.detail.value,this.count=this.commentContent.length},addComment:function(){var e=this,t={},n=this;this.user?(t.id=this.id,t.parent=this.parent,t.content=this.commentContent,0!==this.commentContent.length?i.default.addComment(t).then((function(t){200==t.status?(e.page=1,e.commentContent="",e.commentList=[],e.isCommentLoad=!1,e.isFocus=!1,e.isComments=!1,e.getPostsComments({id:e.id,page:e.page,orderby:"comment_date"}),setTimeout((function(){n.$refs.uToast.show({title:t.message,type:"success"})}),900)):500===t.status&&n.$refs.uToast.show({title:t.message,type:"error"})})).catch((function(e){console.log(e),e.message?n.$refs.uToast.show({title:res.message,type:"error"}):n.$refs.uToast.show({title:"未知错误",type:"error"})})):n.$refs.uToast.show({title:评论不能为空,type:"error"})):uni.showModal({title:"温馨提示",content:"必须登录才能发表评论, 是否前往登陆",success:function(e){e.confirm&&wx.navigateTo({url:"/pages/login/login"})},fail:function(e){console.log(e)}})}}};t.default=o},d000:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.textareacontent[data-v-311e4ecb]{border-top-left-radius:%?16?%;border-top-right-radius:%?16?%;background-color:#fff;z-index:10}.textareacontent .textheaders[data-v-311e4ecb]{width:100%;height:%?96?%;border-bottom:%?1?% solid #eaeaea;display:flex;justify-content:space-between}.textareacontent .textheaders .cancel[data-v-311e4ecb]{color:#333;font-size:%?32?%;line-height:%?96?%;margin-left:%?32?%}.textareacontent .textheaders .publish[data-v-311e4ecb]{color:#3ec382;font-size:%?32?%;line-height:%?96?%;margin-right:%?32?%}.textareacontent .textareaBox[data-v-311e4ecb]{height:%?360?%;position:relative}.textareacontent .textareaBox .textCount[data-v-311e4ecb]{position:absolute;font-size:%?26?%;color:#999;right:%?32?%;top:%?4?%}.textareacontent .textareaBox .textareaInput[data-v-311e4ecb]{margin:%?30?%}.comment-item[data-v-311e4ecb]{padding:%?20?% %?32?%;position:relative}.comment-item[data-v-311e4ecb]::after{background-color:hsla(0,0%,90.2%,.3);bottom:%?-1?%;content:"";height:%?2?%;position:absolute;right:0;width:%?620?%}.comment-item[data-v-311e4ecb]:last-child::after{display:none}.comment-user[data-v-311e4ecb]{padding-top:%?24?%}.comment-user-avatar[data-v-311e4ecb],\r\n.reply-user-avatar[data-v-311e4ecb]{border-radius:50%;flex-shrink:0;height:%?80?%;overflow:hidden;width:%?80?%}.reply-user-avatar[data-v-311e4ecb]{align-self:flex-start;height:%?40?%;margin-right:%?20?%;width:%?40?%}.comment-user-avatar-img[data-v-311e4ecb],\r\n.reply-user-avatar-img[data-v-311e4ecb]{border-radius:50%;height:100%;width:100%}.unlock-heart-icon[data-v-311e4ecb]{bottom:0;height:%?28?%;position:absolute;right:0;width:%?28?%;z-index:100}.raduis-none[data-v-311e4ecb]{border-radius:0}.blur[data-v-311e4ecb]{-webkit-filter:blur(%?20?%);filter:blur(%?20?%)}.comment-user-profile[data-v-311e4ecb]{color:#1a1a1a;flex-grow:1;margin-left:%?24?%}.comment-user-items[data-v-311e4ecb]{margin-top:%?6?%}.comment-user-item[data-v-311e4ecb]{font-size:%?24?%;margin-left:%?22?%;position:relative}.comment-user-item[data-v-311e4ecb]::before{background-color:#666;border-radius:50%;content:"";height:%?4?%;left:%?-13?%;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:%?4?%}.comment-user-item[data-v-311e4ecb]:first-child{margin-left:0}.comment-user-item[data-v-311e4ecb]:first-child::before{display:none}.comment-content[data-v-311e4ecb]{margin-left:%?104?%;padding:%?24?% 0 %?4?%;word-break:break-all}.comment-footer[data-v-311e4ecb],\r\n.reply-footer[data-v-311e4ecb]{align-items:center;color:#999;display:flex;font-size:%?24?%}.comment-footer[data-v-311e4ecb]{height:%?64?%;margin-left:%?104?%;padding-right:%?4?%}.reply-footer[data-v-311e4ecb]{padding:%?8?% 0 %?10?%}.comment-thumb[data-v-311e4ecb],\r\n.reply-thumb[data-v-311e4ecb]{align-items:center;display:flex;margin-left:auto;padding-left:%?24?%}.reply-thumb[data-v-311e4ecb]{padding-right:%?24?%}.comment-thumb.active[data-v-311e4ecb],\r\n.reply-thumb.active[data-v-311e4ecb]{color:#00b49c}.comment-thumb-icon[data-v-311e4ecb],\r\n.reply-thumb-icon[data-v-311e4ecb]{font-size:%?48?%}.comment-thumb-num[data-v-311e4ecb],\r\n.reply-thumb-num[data-v-311e4ecb]{margin-left:%?10?%}.reply-list[data-v-311e4ecb]{background-color:#f8f8f8;border-radius:%?16?%;display:flex;flex-direction:column;margin-left:%?100?%;margin-top:%?20?%;padding:%?12?% 0}.reply-list1[data-v-311e4ecb]{background-color:hsla(0,0%,97.3%,.49);border-radius:%?16?%;display:flex;flex-direction:column;margin-left:%?10?%;padding:%?12?% 0}.reply-item[data-v-311e4ecb]{padding:%?20?% 0 0 %?20?%}.reply-item + .reply-item[data-v-311e4ecb]::after{background-color:hsla(0,0%,90.2%,.3);content:"";height:%?2?%;position:absolute;right:0;top:%?-1?%;width:calc(100% - %?20?%)}.reply-item-content[data-v-311e4ecb]{max-width:%?506?%}.reply-header[data-v-311e4ecb]{color:#1f1f1f;padding-right:%?24?%;font-size:%?32?%;font-weight:500}.reply-header1[data-v-311e4ecb]{color:#696969;padding-right:%?24?%;font-size:%?28?%;font-weight:500}.reply-header[data-v-311e4ecb]::after{bottom:0;content:"";display:block;left:%?-20?%;position:absolute;right:0;top:0}.reply-content[data-v-311e4ecb]{color:#323232;padding:%?8?% %?24?% 0 0;word-break:break-all;font-size:%?28?%}.reply-content-nickname[data-v-311e4ecb]{display:inline-block;white-space:nowrap}.reply-more[data-v-311e4ecb],\r\n.reply-target[data-v-311e4ecb]{color:#1f1f1f;font-weight:700}.reply-more[data-v-311e4ecb]{align-self:flex-start;box-sizing:border-box;font-size:%?24?%;padding:%?10?% %?24?% %?12?% %?80?%;width:100%}.flex[data-v-311e4ecb]{align-items:center;display:flex}.relative[data-v-311e4ecb]{position:relative}.gray-99[data-v-311e4ecb]{color:#999}.bold[data-v-311e4ecb]{font-weight:700}.flex-s-0[data-v-311e4ecb]{font-size:%?24?%;padding-left:%?10?%;color:#999;flex-shrink:0}.icon-like[data-v-311e4ecb]{width:%?28?%;height:%?28?%}.information-more[data-v-311e4ecb]{margin-top:%?40?%;line-height:%?100?%;color:#7d7d7d;font-size:%?26?%;text-align:center;position:relative}.hiddenAll > .product-msg[data-v-311e4ecb]{height:%?150?%;overflow:hidden}.hiddenAlls[data-v-311e4ecb]{height:%?150?%;overflow:hidden}',""]),e.exports=t},ef08:function(e,t,n){var a=n("d000");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("40e16b82",a,!0,{sourceMap:!1,shadowMode:!1})}}]);