[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/) [![Build Status](https://secure.travis-ci.org/cameronhunter/jQuery-Plugin-Factory.svg?branch=master)](https://travis-ci.org/cameronhunter/jQuery-Plugin-Factory)

# jQuery Plugin Factory

There are many [best practices](http://docs.jquery.com/Plugins/Authoring) when creating a jQuery plugin. This project takes care of all the boilerplate code required to fullfill these best practices so you can focus on the functionality of your plugin.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/cameron/jQuery-Plugin-Factory/master/dist/jQuery-Plugin-Factory.min.js
[max]: https://raw.github.com/cameron/jQuery-Plugin-Factory/master/dist/jQuery-Plugin-Factory.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jQuery-Plugin-Factory.min.js"></script>
```

## Best Practices

<dl>
	<dt>Context</dt>
	<dd>Ensure that the dollar sign maps to jQuery and isn't overwritten by another library in the scopt of its execution.</dd>
	<dt>Maintaining Chainability</dt>
	<dd>Plugins should return the ''this'' keyword in its immediate scope, it maintains chainability and the jQuery collection can continue to be manipulated by jQuery methods.</dd>
	<dt>Defaults and Options</dt>
	<dd>For more complex and customizable plugins that provide many options, it's a best practice to have default settings that can be extended when the plugin is invoked.</dd>
	<dt>Single namespace for multiple methods</dt>
	<dd>Plugins can contain multiple methods, but should only acquire a single namespace.</dd>
	<dt>Multiple selectors</dt>
	<dd>Your plugin should handle multiple selectors being passed to it.</dd>
</dl>

## Usage

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
