const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
      context.fillStyle = '#fff';
      context.fillRect(0,0,width,height);
      context.lineWidth = width * 0.01;

      const w = width * 0.1;
      const h = height * 0.1;
      const gap = width * 0.03;
      const ix = width * 0.17;
      const iy = height * 0.17;
      const off = width * 0.02;
      
      let x, y;

      var colors = ['#EF8354', '#EE4B6A', '#DF3B57', '#0F7173'];
      
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            var paletteIndex = Math.floor(Math.random() * colors.length);
            x = ix + (w + gap) * i;
            y = iy + (h + gap) * j;

            context.beginPath();
            context.rect(x, y, w, h);
            context.strokeStyle = colors[paletteIndex][0] === '#' ? `${colors[paletteIndex]}` : `#${colors[paletteIndex]}`;
            context.stroke();
            
            if (Math.random() > 0.5) {
              context.beginPath();
              context.rect(x + 8, y + 8, w - 16, h - 16);
              context.stroke();``
            }
        }
      }
  };
};

canvasSketch(sketch, settings);
setInterval(()=> {window.location.reload()}, 1000);
