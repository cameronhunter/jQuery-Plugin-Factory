var EMPTY_FUNCTIONALITY = function() {};

module("jQuery Plugin", {
  setup: function() {
    $.fn.test = undefined;
    $.fn.test1 = undefined;
    $.fn.test2 = undefined;
  }
});

test("Plugin should return jQuery object", function() {
  equals( $, $.plugin("test", EMPTY_FUNCTIONALITY), "jQuery.plugin should return jQuery object to allow chaining" );
});

test("Plugin should require a valid javascript function name", function() {
  raises(function() {
    $.plugin();
  }, "Plugins must be given a name" );
  
  ok( $.plugin("test", EMPTY_FUNCTIONALITY), "Valid plugin name" );
});

test("Created plugins should allow chaining", function() {
  $.plugin("test", EMPTY_FUNCTIONALITY);
  var html = $("html");
  equals( html, html.test(), "Plugins should return the selector" );  
});

module("jQuery Plugin Functionality", {
  setup: function() {
    $.fn.test = undefined;
    $.fn.test1 = undefined;
    $.fn.test2 = undefined;
  }
});

test("Plugins accept functionality", function() {
  raises(function() {
    $.plugin("test");
  }, "Plugins must have functionality");
  
  raises(function() {
    $.plugin("test", {});
  }, "Plugins will not allow empty functionality objects");
  
  ok( $.plugin("test1", function() {}), "Plugins can accept an anonymous function containing its functionality" );
  ok( $.plugin("test2", {init:function() {}}), "Plugins can accept an object containing its functionality" );
});

test("Plugins bind this to selection", function() {
   var fixture = $("#qunit-fixture").data("foo", "bar");
  
  expect(1);
  
  $.plugin("test", function() {
    equal( this.data("foo"), fixture.data("foo") );
  });
  
  fixture.test();
});

module("jQuery Plugin Settings", {
  setup: function() {
    $.fn.test = undefined;
    $.fn.test1 = undefined;
    $.fn.test2 = undefined;
  }
});

test("Plugins accept default settings", function() {
  expect( 2 );
  var defaults = {"opt":"1"};
  ok( $.plugin("test", defaults, function(settings) {
    deepEqual( defaults, settings );
  }), "Plugins accept default options and pass them to the functionality");  
  $("html").test();
});

test("Plugins accept merge default settings and init options", function() {
  expect( 4 );
  var defaults = {opt1:"1", opt2:"2"};
  ok( $.plugin("test", defaults, function(settings) {
    equals( "one", settings.opt1, "Default was successfully overridden" );
    equals( true, settings.appended, "Extra option was merged with defaults" );
    equals( "2", settings.opt2, "Default option was untouched" );
  }), "Plugins accept default options and pass them to the functionality"); 
   
  $("html").test({opt1:"one", appended:true});
});

test("Settings are deep merged", function() {
  expect(3);
  
  $.plugin("test", {foo:{bar:"baz", boo:"foo"}}, function(settings) {
    equals( "boo", settings.foo.bar );
    equals( "foo", settings.foo.boo );
    equals( "bob", settings.foo.alice );
  });
  
  $("html").test({foo:{bar:"boo",alice:"bob"}});
});

