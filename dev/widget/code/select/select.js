;(function($, window, document, undefined) {
	'use strict';

	var _defaults = {
		selBox: 'form-control',
		optHtml: function(status) {
			status.list.append("<options>" + status.item.text() + "</options>");
		}
	}

	var _setStyle = function($el,styles) {
		for (var i in styles) {
			if (!isNaN(Number(i))) {
				$el.css(styles[i],styles[styles[i]]);
			}
		}
		$el.show();
	}

	var _methods = {
		init: function(options) {
			var settings = $.extend(_defaults, options);

			return this.each(function() {
				var _self = this,
					$this = $(this),
					styles = _self.style,
					$selBox = $('<select class="' + settings.selBox + '"></select>'),
					$option = $this.find('option');


				$this.hide().after($selBox);
				$selBox.append($option);
				_setStyle($selBox,styles);
			})
		}
	}

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