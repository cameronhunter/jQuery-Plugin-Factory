jQuery Plugin Plugin
====================

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

    $.plugin("myPlugin", function() {
        // Your functionality goes here.
    });
    
    $("div, a").myPlugin(); // Use in the same way you always have! Support multiple selectors out of the box.

### Specify default options

    $.plugin("myPlugin", {"default":"options"}, function( settings ) {
        // Your functionality goes here.
        // 'settings' are the default options merged with the overrides.
    });
    
    $("div, a").myPlugin({"default":"override"}); // Supports options merging

### Multiple methods

    $.plugin("myPlugin", {"default":"options"}, {
        myMethod: function() {},
        foo: function(param, settings) {}
    });
    
    $("div").myPlugin("myMethod").myPlugin("foo", "accepts parameters too"); // Call multiple methods within the plugin

License
-------

The MIT License

Copyright (c) 2011 Cameron Hunter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
