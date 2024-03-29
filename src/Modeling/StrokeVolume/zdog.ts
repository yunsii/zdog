import Zdog from 'zdog';

var yellow = '#ED0';
var gold = '#EA0';
var orange = '#E62';
var garnet = '#C25';
const TAU = Zdog.TAU;

export function render() {
  const illo = new Zdog.Illustration({
    element: '#zdog',
    dragRotate: true,
    rotate: { x: -TAU / 8 },
  });

  const burger = new Zdog.Anchor({
    addTo: illo,
    translate: { y: 24 },
    rotate: { x: TAU / 4 },
  });

  // top bun
  const topBun = new Zdog.Hemisphere({
    addTo: burger,
    diameter: 96,
    translate: { z: 44 },
    stroke: 24,
    color: orange,
    // backface: gold,
  });

  // cheese
  new Zdog.Rect({
    addTo: burger,
    width: 92,
    height: 92,
    translate: { z: 24 },
    stroke: 16,
    color: yellow,
    fill: true,
  });

  // patty
  new Zdog.Ellipse({
    addTo: burger,
    diameter: 96,
    stroke: 32,
    color: garnet,
    fill: true,
  });

  // bottom bun
  new Zdog.Cylinder({
    addTo: burger,
    diameter: topBun.diameter,
    length: 16,
    translate: { z: -36 },
    stroke: topBun.stroke,
    color: topBun.color,
  });

  const seedAnchor = new Zdog.Anchor({
    addTo: topBun,
  });

  const seedZ = (topBun.diameter + (topBun.stroke as number)) / 2 + 1;

  // seed
  new Zdog.Shape({
    addTo: seedAnchor,
    path: [{ y: -3 }, { y: 3 }],
    translate: { z: seedZ },
    stroke: 8,
    color: gold,
  });

  seedAnchor.copyGraph({
    rotate: { x: 0.6 },
  });
  seedAnchor.copyGraph({
    rotate: { x: -0.6 },
  });
  seedAnchor.copyGraph({
    rotate: { y: -0.5 },
  });
  seedAnchor.copyGraph({
    rotate: { y: 0.5 },
  });

  function animate() {
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
  }

  animate();
}
