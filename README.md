# jQuery ov-placeholder Plugin

## Example Usage

```html
<input type="text" value="" placeholder="placeholder text">
<textarea placeholder="placeholder text"></textarea>

<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="jquery.ov-placeholder.js"></script>
<script>
  $('[placeholder]').ovPlaceholder();
</script>
```

## Options

```js
$('[placeholder]').ovPlaceholder({
  wrapper : 'wrapper',
  overlay : 'overlay',
  color: '#999'
});
```

### wrapper

If you want to change the class name of the wrapper element, please set the class name.

default: `'ov-placeholder'`

### overlay

If you want to change the class name of the overlay element, please set the class name.

default: `'ov-placeholder__overlay'`

### color

If you want to change the color of the placeholder text, please set the color code.

default: `'#AAA'`

## License

This plugin is available under the MIT license.
