/*
 * jQuery Tooltip plugin 1.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-tooltip/
 *
 * Copyright (c) 2006 J�rn Zaefferer, Stefan Petre
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.tooltip.js 2237 2007-07-04 19:11:15Z joern.zaefferer $
 *
 */
(function($){var helper={},current,title,tID,IE=$.browser.msie&&/MSIE\s(5\.5|6\.)/.test(navigator.userAgent),track=false;$.Tooltip={blocked:false,defaults:{delay:200,showURL:true,extraClass:"",top:15,left:15},block:function(){$.Tooltip.blocked=!$.Tooltip.blocked;}};$.fn.extend({Tooltip:function(settings){settings=$.extend({},$.Tooltip.defaults,settings);createHelper();return this.each(function(){this.tSettings=settings;this.tooltipText=this.title;$(this).removeAttr("title");this.alt="";}).hover(save,hide).click(hide);},fixPNG:IE?function(){return this.each(function(){var image=$(this).css('backgroundImage');if(image.match(/^url\(["']?(.*\.png)["']?\)$/i)){image=RegExp.$1;$(this).css({'backgroundImage':'none','filter':"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"+image+"')"}).each(function(){var position=$(this).css('position');if(position!='absolute'&&position!='relative')$(this).css('position','relative');});}});}:function(){return this;},unfixPNG:IE?function(){return this.each(function(){$(this).css({'filter':'',backgroundImage:''});});}:function(){return this;},hideWhenEmpty:function(){return this.each(function(){$(this)[$(this).html()?"show":"hide"]();});},url:function(){return this.attr('href')||this.attr('src');}});function createHelper(){if(helper.parent)return;helper.parent=$('<div id="tooltip"><h3></h3><div class="body"></div><div class="url"></div></div>').hide().appendTo('body');if($.fn.bgiframe)helper.parent.bgiframe();helper.title=$('h3',helper.parent);helper.body=$('div.body',helper.parent);helper.url=$('div.url',helper.parent);}function handle(event){if(this.tSettings.delay)tID=setTimeout(show,this.tSettings.delay);else
show();track=!!this.tSettings.track;$('body').bind('mousemove',update);update(event);}function save(){if($.Tooltip.blocked||this==current||!this.tooltipText)return;current=this;title=this.tooltipText;if(this.tSettings.bodyHandler){helper.title.hide();helper.body.html(this.tSettings.bodyHandler.call(this)).show();}else if(this.tSettings.showBody){var parts=title.split(this.tSettings.showBody);helper.title.html(parts.shift()).show();helper.body.empty();for(var i=0,part;part=parts[i];i++){if(i>0)helper.body.append("<br/>");helper.body.append(part);}helper.body.hideWhenEmpty();}else{helper.title.html(title).show();helper.body.hide();}if(this.tSettings.showURL&&$(this).url())helper.url.html($(this).url().replace('http://','')).show();else
helper.url.hide();helper.parent.addClass(this.tSettings.extraClass);if(this.tSettings.fixPNG)helper.parent.fixPNG();handle.apply(this,arguments);}function show(){tID=null;helper.parent.show();update();}function update(event){if($.Tooltip.blocked)return;if(!track&&helper.parent.is(":visible")){$('body').unbind('mousemove',update)}if(current==null){$('body').unbind('mousemove',update);return;}var left=helper.parent[0].offsetLeft;var top=helper.parent[0].offsetTop;if(event){left=event.pageX+current.tSettings.left;top=event.pageY+current.tSettings.top;helper.parent.css({left:left+'px',top:top+'px'});}var v=viewport(),h=helper.parent[0];if(v.x+v.cx<h.offsetLeft+h.offsetWidth){left-=h.offsetWidth+20+current.tSettings.left;helper.parent.css({left:left+'px'});}if(v.y+v.cy<h.offsetTop+h.offsetHeight){top-=h.offsetHeight+20+current.tSettings.top;helper.parent.css({top:top+'px'});}}function viewport(){return{x:$(window).scrollLeft(),y:$(window).scrollTop(),cx:$(window).width(),cy:$(window).height()};}function hide(event){if($.Tooltip.blocked)return;if(tID)clearTimeout(tID);current=null;helper.parent.hide().removeClass(this.tSettings.extraClass);if(this.tSettings.fixPNG)helper.parent.unfixPNG();}})(jQuery);