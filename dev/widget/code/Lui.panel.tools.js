
/*!
 * =======================================================
 * 插件信息
 *   描述:面板工具JS
 *   组件名称:panelTools
 *   js名称:Lui.panel.tools.js
 *
 * 功能
 *   1/初始化组件
 *   2/显示主键 show()
 *   3/隐藏组件 hide()
 *   4/刷新 refresh()
 *   5/收缩组件 shrink()
 *
 * 开发者信息
 *   作者:liuyh
 *   时间:2016年9月6日
 *   注释
 * =======================================================
 */
;(function($, window, document, undefined) {
	/**
	 * 插件名称
	 * 默认参数定义
	 * @type {{a: number}}
	 */
	var pluginName = 'panelTool',
		defaults = {
			callback: {
				close: null,
				refresh: null
			}
		};

	/**
	 * 插件构造函数
	 *
	 * @param element
	 * @param options
	 * @constructor
	 */
	function PanelTools(element, options) {
		this.element = $(element);
		this.setting = $.extend(true, {}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	/**
	 * 绑定默认事件
	 */
	function _bindEvents(panel_tool) {
		//隐藏面板
		panel_tool.element.on('click', '.x-panel-close', function() {});

		/**
		 * 刷新操作
		 */
		panel_tool.element.on('click', '.x-panel-refresh', function() {});

		//面板收缩事件
		panel_tool.element.on('click', '.x-panel-shrink', function() {

		});
	}

	PanelTools.prototype = {
		init: function() {
			//绑定事件
			_bindEvents(this);
		},
		destory: function() {

		}
	};

	/**
	 *
	 * 创建实例,并防止重复创建
	 *
	 * @param options
	 * @returns {*}
	 */
	$.fn.panelTools = function(options) {
		/**
		 *
		 * @param pluginName 插件名称
		 * @param $this 插件注册对象
		 * @param options 插件参数
		 * @param cb 回调函数,用于创建对象 一定要用return返回创建的插件对象
		 * @returns {*}
		 */
		return $.pluginInit(pluginName, this, arguments, PanelTools, function($this) {
			/**
			 * 一定要返回创建的插件对象
			 */
			return new PanelTools($this, options);
		});
	};
})(jQuery, window, document);


/*
	初始化
*/
;(function($, window, docuemnt, undefined) {

		var title = $('.lui-panel').attr('title'),
			options = $('.lui-panel').data('options');

		if (title && title != '')$('.lui-panel').prepend('<div class="lui-panel-head">' + title + '</div>');

		$('.wrap').css('opacity',1);  
})(jQuery, window, document);