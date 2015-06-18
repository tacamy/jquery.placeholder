/*! http://github.com/tacamy/jquery.placeholder v1.0.0 by @tacamy */

(function ($, window, document, undefined) {
  'use strict';

  $.fn.placeholder = function (options) {

    var defaults = {
      wrapper : 'placeholder',
      overlay : 'placeholder__overlay',
      color   : '#AAA'
    };

    var settings = $.extend({}, defaults, options);

    if ('placeholder' in document.createElement('input')) {
      return;
    }

    return this.each(function () {
      var el = this;
      var $el = $(el);
      var $wrapper = $el.wrapAll('<span class="' + settings.wrapper + '" />').closest('.' + settings.wrapper);
      var $overlay = $wrapper.append('<span class="' + settings.overlay + '" />').find('.' + settings.overlay);

      var text = $el.attr('placeholder');
      var left = parseInt($el.css('padding-left'), 10) + parseInt($el.css('border-left-width'), 10);
      var top = parseInt($el.css('padding-top'), 10) + parseInt($el.css('border-top-width'), 10);
      var width = el.clientWidth - parseInt($el.css('padding-left'), 10) * 2;
      var height = el.clientHeight - parseInt($el.css('padding-top'), 10) * 2;
      var fontFamily = $el.css('font-family');
      var fontSize = $el.css('font-size');
      var lineHeight = $el.css('line-height');

      $overlay.text(text);

      $overlay.css({
        display: 'inline-block',
        position: 'absolute',
        top: top,
        left: left,
        zIndex: 1,
        overflow: 'hidden',
        width: width,
        height: height,
        lineHeight: lineHeight,
        color: settings.color,
        fontFamily: fontFamily,
        fontSize: fontSize,
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word'
      });

      $wrapper.css({
        display: 'inline-block',
        position: 'relative',
        lineHeight: lineHeight,
        fontFamily: fontFamily,
        fontSize: fontSize
      });

      $overlay.on({
        click: function () {
          $el.trigger('focus');
        }
      });

      $el.on({
        focus: function () {
          $overlay.hide();
        },
        blur: function () {
          if ($el.val()) {
            $overlay.hide();
          }
          else {
            $overlay.show();
          }
        }
      });
    });
  };

})(jQuery, this, this.document);
