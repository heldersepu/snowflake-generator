let canvas = document.getElementById('snowflake'),
    ctx = canvas.getContext('2d'),
    maxLevel = 5,
    branches = 2;

canvas.width = canvas.height = 600;
ctx.translate(canvas.width / 2, canvas.height / 2);

let angles = []
angles.push((Math.floor(Math.random() * 10) + 1)/10);
for (let i = 0; i < 5; i++) {
    angles.push(Math.PI * 2 * Math.random());
}
console.log(angles)

for (let i = 0; i < 6; i++) {
    drawLine(0);
    ctx.rotate(Math.PI * 2 / 6);
}

function drawLine (level) {
    if (level > maxLevel) return;

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 0);
    ctx.stroke();

    for (let i = 1; i < branches + 1; i++) {
        ctx.save();

        ctx.translate(200 * i / (branches + 1), 0);
        ctx.scale(0.5, 0.5);

        ctx.save();

        ctx.rotate(angles[level]);
        drawLine(level + 1);

        ctx.restore();

        ctx.save();

        ctx.rotate(-angles[level]);
        drawLine(level + 1);

        ctx.restore();

        ctx.restore();
    }
}

drawLine(0);
