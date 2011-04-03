(function($) {
    $.extend({
        validate: function( condition, msg ) {
            if ( !condition ) $.error( msg );
            return $;
        },
        plugin: function( name, defaultSettings, functionality ) {
        
            var undef, defaults, methods, init = "init";
            
            if ( arguments.length === 3 ) {
                defaults = defaultSettings;
                methods = functionality;
            } else {
                methods = defaultSettings;
            }
            
            $.validate( name && /^(?:[a-z_$][a-z_$0-9]*)$/i.test(name), "You must specify a valid name for the plugin" ).
              validate( !$.isFunction($.fn[name]), 'jQuery plugin "' + name + '" already exists' ).
              validate( $.isFunction(methods) || ($.isPlainObject(methods) && !$.isEmptyObject(methods)), "You must specify functionality for the plugin" );
              
            methods = $.isFunction( methods ) ? {init:methods} : $.extend({}, {init:function() {}}, methods);
            
            var settings = function( options ) {
                  var init = this, _settings = (defaults || options) ? $.extend(true, {}, defaults, options) : undef;
                  settings = function( options ) { return options ? init : _settings; };
                  return _settings;
                };
            
            $.fn[name] = function( options ) {
                var args, method = ($.type(options) === "string") ? options : init;

                if ( !(methods[method] && $.isFunction( methods[method] )) ) {
                    $.error( 'The plugin "' + name + '" does not have a method "' + method + '"' );
                }
                
                if ( method === init ) {
                    args = [settings( options )];
                } else {
                    var params = Array.prototype.slice.call( arguments, 1 );
                    args = settings() ? [settings()].concat(params) : params;
                }
                
                for(var i=(this.length-1); i>=0; i--) { 
                    methods[method].apply($(this[i]), args); 
                }
                
                return this;
            };
            return $;
        }
    });
})(jQuery);
