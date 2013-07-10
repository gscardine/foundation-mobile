/*
 * Foundation Mobile Library
 * http://opensource.alfajango.com/foundation-mobile
 * Copyright 2013, Alfa Jango
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

// Don't really need anything in here yet, since we're building off of Foundation,
// and the nice folks at Zurb have done all the heavy lifting already.
;
/*jslint unparam: true, browser: true, indent: 2 */


;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.bottombar = {
    name : 'bottombar',

    version : '4.2.3',

    settings : {
      init : false
    },

    init : function (section, method, options) {
      Foundation.inherit(this, 'data_options');
      var self = this;

      if (typeof method === 'object') {
        $.extend(true, this.settings, method);
      } else if (typeof options !== 'undefined') {
        $.extend(true, this.settings, options);
      }

      if (typeof method !== 'string') {

        $('.bottom-bar, [data-bottombar]').each(function () {
          $.extend(true, self.settings, self.data_options($(this)));
          self.settings.$w = $(window);
          self.settings.$bottombar = $(this);

          if (self.settings.$bottombar.parent().hasClass('fixed-bottom')) {
            var paddingBottom = self.outerHeight(self.settings.$bottombar);
            paddingBottom += parseInt(self.settings.$bottombar.css('margin-top'));
            $('body').css('padding-bottom', paddingBottom);
          }
        });

        return this.settings.init;
      } else {
        // fire method
        return this[method].call(this, options);
      }
    },

    height : function (ul) {
      var total = 0,
          self = this;

      ul.find('> li').each(function () { total += self.outerHeight($(this), true); });

      return total;
    },

    reflow : function () {}
  };
}(Foundation.zj, this, this.document));
/*


*/

;
