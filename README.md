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
$('[placeholder]').placeholder({
  color: '#999'
});
```

### color

If you want to change the color of the placeholder text, please set the color code.

default: `'#AAA'`

## Browsers

IE6+ and other new browsers.

## License

This plugin is available under the MIT license.
