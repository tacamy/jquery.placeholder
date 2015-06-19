# jquery.placeholder Plugin

[http://tacamy.github.io/jquery.placeholder/](http://tacamy.github.io/jquery.placeholder/)

Polyfill of placeholder exists already a lot.
In the case the polifil rewrites the value of the textbox, It conflict with JavaScript to manipulate the form.
So, I made a polifil of placeholder that does not rewrite the value.

- If the browser is compatible with the placeholder, it does not work.
- Overlay the transparent `span` on the textbox, and reproduce the pseudo-placeholder.

placeholderのpolyfillはすでにたくさん存在しますが、テキストボックスの`value`を書き換えるpolyfillはフォームを操作する他のJavaScriptと相性が悪いため、`value`を書き換えないpolyfillを作りました。

- ブラウザがplaceholderに対応している場合は何もしない
- テキストボックスの上に透明の`span`を重ねて、擬似的にplaceholderを再現

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
  color   : '#999',
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

## Change log

1.1.0 : Corresponding to the percentage specified in the textbox.

1.1.0 : テキストボックスの`width`に`%`を指定しても崩れないように修正

## License

This plugin is available under the MIT license.
