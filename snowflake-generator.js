let canvas = document.getElementById('snowflake'),
    ctx = canvas.getContext('2d'),
    maxLevel = 5;

canvas.width = canvas.height = 600;
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.lineCap = "round";

let angles = []
angles.push((Math.floor(Math.random() * 100) + 111)/100);
for (let i = 0; i < 5; i++) {
    angles.push(Math.PI * 2 * Math.random());
}

let trunks = Math.floor(Math.random() * 4) + 5
for (let i = 0; i < trunks; i++) {
    drawLine(0);
    ctx.rotate(Math.PI * 2 / trunks);
}

function drawLine (level) {
    if (level > maxLevel) return;

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 0);
    ctx.stroke();

    for (let i = 1; i < 3; i++) {
        ctx.save();

        let rx = 200 + Math.floor(Math.random() * 50)
        ctx.translate(rx * i / 3, 0);
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
