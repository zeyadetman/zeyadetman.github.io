const lines = [];
let ctx,
  nextLine = 0;
const hilbertCurve = (x, y, Xi, Xj, Yi, Yj, n) => {
  if (n < 0) {
    lines.push({ x, Xi, Xj, y, Yi, Yj });
  } else {
    hilbertCurve(x, y, Yi / 2, Yj / 2, Xi / 2, Xj / 2, n - 1);
    hilbertCurve(x + Xi / 2, y + Xj / 2, Xi / 2, Xj / 2, Yi / 2, Yj / 2, n - 1);
    hilbertCurve(
      x + Xi / 2 + Yi / 2,
      y + Xj / 2 + Yj / 2,
      Xi / 2,
      Xj / 2,
      Yi / 2,
      Yj / 2,
      n - 1
    );
    hilbertCurve(
      x + Xi / 2 + Yi,
      y + Xj / 2 + Yj,
      -Yi / 2,
      -Yj / 2,
      -Xi / 2,
      -Xj / 2,
      n - 1
    );
  }
};

function animate() {
  if (nextLine < lines.length) {
    requestAnimationFrame(animate);
  }
  if (nextLine > lines.length) return;

  const prevLine = nextLine - 1 > -1 ? lines[nextLine - 1] : lines[0];
  const line = lines[nextLine || 0];
  ctx.beginPath();
  if (prevLine) {
    ctx.moveTo(
      prevLine.x + (prevLine.Xi + prevLine.Yi) / 2,
      prevLine.y + (prevLine.Xj + prevLine.Yj) / 2
    );
  }
  if (line) {
    ctx.lineTo(
      line.x + (line.Xi + line.Yi) / 2,
      line.y + (line.Xj + line.Yj) / 2
    );
  }
  ctx.strokeStyle = "#cccccc";
  ctx.stroke();
  nextLine++;
}

function init(bw, bh) {
  const pixelX = 10;
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "hilbert");
  canvas.setAttribute("width", bw);
  canvas.setAttribute("height", bh);
  document.body.append(canvas);

  ctx = canvas.getContext("2d");
  hilbertCurve(0, 0, bw, 0, 0, bh, 5);

  requestAnimationFrame(animate);
  animate();
}

export default init;
