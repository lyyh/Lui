;(function($, window, document, undefined) {
	'use strict';

	//初始化默认值
	var _defaults = {
		selBox: 'form-control'
	},
	settings = {};

	//设置内联属性
	var _setStyle = function($el,styles) {
		for (var i in styles) {
			if (!isNaN(Number(i))) {
				$el.css(styles[i],styles[styles[i]]);
			}
		}
		$el.show();
	}

	var _initMethod = function(){
		// console.log(typeof settings.url == 'string')
		if(settings.url && typeof settings.url == 'string'){
			// $.getJSON(settings.url, function(json, textStatus) {
			// 	console.log(123)
			// });
			$.ajax({
				url: settings.url,
				type: 'get',
				dataType: 'json'
			})
			.done(settings.success)
			.fail(function(err) {
				console.log(err.responseText);
			})
			.always(function() {
				console.log("complete");
			});
		}
	}

	//插件方法
	var _methods = {
		init: function(options) {
			settings = $.extend(_defaults, options);

			return this.each(function() {
				var _self = this,
					$this = $(this),
					styles = _self.style,
					$selBox = $('<select class="' + settings.selBox + '"></select>'),
					$option = $this.find('option');

				_setStyle($selBox,styles);
				$this.hide().after($selBox);
				_initMethod();

				$selBox.append($option);
			})
		}
	}

	//select插件
	$.fn.select = function(options) {
		if (_methods[options]) {
			return _methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof options === 'object' || !options) {
			return _methods.init.call(this, options);
		} else {
			$.error('Method' + method + 'does not exist on jQuery.tooltip');
		}
	}
})(jQuery, window, document);