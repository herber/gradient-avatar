const stringHash = require('string-hash');
const hslTriad = require('hsl-triad');
const hslRgb = require('hsl-rgb');

const avatar = (str, size) => {
  const hash = stringHash(str);
  const colors = hslTriad(hash % 360, 1, 0.5);
  const color1 = hslRgb(colors[0][0], colors[0][1], colors[0][2]);
  const color2 = hslRgb(colors[1][0], colors[1][1], colors[1][2]);
  const color1str = `rgb(${ color1[0] }, ${ color1[1] }, ${ color1[2] })`;
  const color2str = `rgb(${ color2[0] }, ${ color2[1] }, ${ color2[2] })`;
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg ${ size != undefined ? `width="${size}px" height="${size}px"` : '' } viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="g">
      <stop stop-color="${color1str}" offset="0%"></stop>
      <stop stop-color="${color2str}" offset="100%"></stop>
    </linearGradient>
  </defs>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect id="Rectangle" fill="url(#g)" x="0" y="0" width="80" height="80"></rect>
  </g>
</svg>`;
};

module.exports = avatar;