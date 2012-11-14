jQuery Plugin Factory
=====================

There are many [best practices](http://docs.jquery.com/Plugins/Authoring) when creating a jQuery plugin. This project takes care of all the boilerplate code required to fullfill these best practices so you can focus on the functionality of your plugin. 

Features
--------

* Context -- Ensure that the dollar sign maps to jQuery and isn't overwritten by another library in the scopt of its execution.
* Maintaining Chainability -- Plugins should return the ''this'' keyword in its immediate scope, it maintains chainability and the jQuery collection can continue to be manipulated by jQuery methods.
* Defaults and Options -- For more complex and customizable plugins that provide many options, it's a best practice to have default settings that can be extended when the plugin is invoked.
* Single namespace for multiple methods -- Plugins can contain multiple methods, but should only acquire a single namespace.
* Multiple selectors -- Your plugin should handle multiple selectors being passed to it.

Usage
-----

Below shows a few examples of how to use the plugin to easily create a new jQuery plugin which incorporates all of the best practices. You can use your plugin in the same way that you always have!

### Creating a very simple plugin

````javascript
$.plugin("myPlugin", function() {
    // Your functionality goes here.
});

$("div, a").myPlugin(); // Use in the same way you always have! Support multiple selectors out of the box.
````

### Specify default options

````javascript
$.plugin("myPlugin", {"default":"options"}, function( settings ) {
    // Your functionality goes here.
    // 'settings' are the default options merged with the overrides.
});

$("div, a").myPlugin({"default":"override"}); // Supports options merging
````

### Multiple methods

````javascript
$.plugin("myPlugin", {"default":"options"}, {
    myMethod: function() {},
    foo: function(param, settings) {}
});

$("div").myPlugin("myMethod").myPlugin("foo", "accepts parameters too"); // Call multiple methods within the plugin
````
