# jquery.placeholder Plugin

[http://tacamy.github.io/jquery.placeholder/](http://tacamy.github.io/jquery.placeholder/)

This plug-in doesn't conflict with other JavaScript, because it doesn't change the value.

## Example Usage

```html
<input type="text" value="" placeholder="placeholder text">
<textarea placeholder="placeholder text"></textarea>

<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="jquery.placeholder.js"></script>
<script>
  $('[placeholder]').placeholder();
</script>
```

## Options

```js
$('[placeholder]').ovPlaceholder({
  color: '#999',
  wrapper : 'wrapper',
  overlay : 'overlay'
});
```

### color

If you want to change the color of the placeholder text, please set the color code.

default: `'#AAA'`

### wrapper

If you want to change the class name of the wrapper element, please set the class name.

default: `'overlay-placeholder'`

### overlay

If you want to change the class name of the overlay element, please set the class name.

default: `'overlay-placeholder__overlay'`

## Browsers

IE6+ and other new browsers.

## License

This plugin is available under the MIT license.
