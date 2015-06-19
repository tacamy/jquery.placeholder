# jquery.placeholder Plugin

[http://tacamy.github.io/jquery.placeholder/](http://tacamy.github.io/jquery.placeholder/)

placeholderのpolyfillはすでにたくさん存在しますが、テキストボックスのvalueを書き換えるpolyfillはformを操作する他のJavaScriptと相性が悪いため、valueを書き換えないpolyfillを作りました。

Polyfill of placeholder exists already a lot.
In the case the polifil rewrites the value of the textbox, It conflict with JavaScript to manipulate the form.
So, I made a polifil of placeholder that does not rewrite the value.

- ブラウザがplaceholderに対応している場合は何もしない
- valueの値は書き換えず、textboxの上に透明のspanを重ねる

- If the browser is compatible with the placeholder, it does not work.
- Overlay the span of transparent on the textbox.

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

default: `'placeholder-wrapper'`

### overlay

If you want to change the class name of the overlay element, please set the class name.

default: `'placeholder-ovarlay'`

## Browsers

IE6+ and other new browsers.

## License

This plugin is available under the MIT license.
