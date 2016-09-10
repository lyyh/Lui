/*
	插件公共js
*/
;(function($,window,document,undefined){
	$.extend({
		pluginInit: function (pluginName, $this, args, plugin, cb) {
            var options = null;
            if (args&&args.length>0) {
                options = args[0];
            }
            
            if (!options || typeof options === 'object') {
                //创建对象
                return $this.each(function () {
                    // if ($.data(this, 'plugin_' + pluginName)) {
                    //     $.data(this, 'plugin_' + pluginName, cb(this));
                    // }else{
                    $.data(this, 'plugin_' + pluginName, null);
                    $.data(this, 'plugin_' + pluginName, cb(this));
                });
            } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
                //对象方法调用
                var ret = null;
                $this.each(function () {
                    var instance = $.data(this, 'plugin_' + pluginName);
                    if (!instance) {
                        instance = $.data(this, 'plugin_' + pluginName, cb(this));
                    }
                    if (instance instanceof plugin && typeof instance[options] === 'function') {
                        ret = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                    } else {
                        $.error('方法 ' + options + ' 不存在在插件 ' + pluginName);
                        return this;
                    }
                });
                return ret !== undefined ? ret : $this;
            }
        }
  		
	})
})(jQuery,window,document);