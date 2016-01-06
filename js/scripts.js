window.onload = function() {
  var navigation = responsiveNav('.nav-collapse', {
    transition: 250,
    label: 'Menu',
    insert: 'before',
    customToggle: '#menu',
    openPos: 'relative',
    open: function () {
      var menu = document.getElementById("menu");
      menu.className = menu.className.replace(/(^|\s)open(\s|$)/, 'close ');
    },
    close: function () {
      var menu = document.getElementById("menu");
      menu.className = menu.className.replace(/(^|\s)close(\s|$)/, 'open ');
    }
  });

  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
  }
}