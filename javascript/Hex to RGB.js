color = 'FFFFFF';

color = color.match(/\w{2}/g)
color[0] = parseInt(color[0],16);
color[1] = parseInt(color[1],16);
color[2] = parseInt(color[2],16);

console.log(color.join(" "));