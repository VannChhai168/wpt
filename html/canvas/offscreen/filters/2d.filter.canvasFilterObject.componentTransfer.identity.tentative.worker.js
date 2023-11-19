// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.filter.canvasFilterObject.componentTransfer.identity.tentative
// Description:Test pixels on CanvasFilter() componentTransfer with identity type
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Test pixels on CanvasFilter() componentTransfer with identity type");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.filter = new CanvasFilter({name: 'componentTransfer',
      funcR: {type: 'identity'},
      funcG: {type: 'identity'},
      funcB: {type: 'identity'},
  });

  const inputColors = [
      [255, 255, 255],
      [0, 0, 0],
      [127, 0, 34],
      [252, 186, 3],
      [50, 68, 87],
  ];

  for (const color of inputColors) {
      ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`,
      ctx.fillRect(0, 0, 10, 10);
      _assertPixel(canvas, 5, 5, color[0],color[1],color[2],255);
  }
  t.done();
});
done();
