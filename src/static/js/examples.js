(function () {
  if (Modernizr.emoji) {
    var placeholder = document.getElementById('insert-emoji-here');
    if (placeholder) {
      var canvas = document.createElement('canvas');
      canvas.setAttribute('width', 32);
      canvas.setAttribute('height', 32);
      placeholder.appendChild(canvas);

      var ctx = canvas.getContext('2d');
      ctx.fillStyle = '#f00';
      ctx.textBaseline = 'top';
      ctx.font = '32px Arial';
      ctx.fillText('\ud83d\udc28', 0, 0);
    }
  }
}) ();
