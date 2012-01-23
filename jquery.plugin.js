(function($, undef) {
    $.extend({
        plugin: function(/* plugin_name, [default_settings], functionality */) {
        
            var plugin_name = arguments[0],
                default_settings = arguments.length === 3 ? arguments[1] : {},
                functionality = arguments.length === 3 ? arguments[2] : arguments[1];
            
            if ( !plugin_name ) {
                $.error( 'You must specify a valid name for the plugin' );
            }
            
            if ( $.isFunction( functionality ) ) {
                functionality = { init: functionality };
            } else if ( $.isPlainObject(functionality) && !$.isEmptyObject(functionality) ) {
                functionality = $.extend({}, { init: function() {} }, functionality)
            } else {
                $.error( 'You must specify functionality for the plugin' );
            }
            
            var settings = function( options ) {
                var init = this, 
                    _settings = (default_settings || options) ? $.extend(true, {}, default_settings, options) : undef;
                settings = function( options ) { return options ? init : _settings; };
                return _settings;
            };
            
            $.fn[plugin_name] = function( options ) {
                var args, method_name = ($.type(options) === 'string') ? options : 'init';

                if ( !$.isFunction( functionality[method_name] ) ) {
                    $.error( 'The plugin "' + plugin_name + '" does not have method "' + method_name + '"' );
                }
                
                if ( 'init' === method_name ) {
                    args = [settings( options )];
                } else {
                    var params = Array.prototype.slice.call( arguments, 1 );
                    args = settings() ? [settings()].concat(params) : params;
                }
                
                for( var i=0, len=this.length; i < len; i++ ) { 
                    functionality[method_name].apply( $(this[i]), args ); 
                }
                
                return this;
            };
            
            return $;
        }
    });
})(jQuery);
