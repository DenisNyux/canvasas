// https://kodaktor.ru/?!=bc7d44a

function makeCanvas(x, y) {
    const canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
    canvas.setAttribute('width', x);
    canvas.setAttribute('height', y);
    return { canvas, ctx };
};

function change_coord(x, y, angle){
    res = angle === 0 ?  [x, y] : [Math.round(x * Math.cos(angle) + y * Math.sin(angle)),
         Math.round(x * Math.sin(angle) + y * Math.cos(angle))];
    return res;
}

function draw_initials(canvas, ctx, ang=0){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle ='blue';     
    ctx.lineWidth = 2;
    // целостная фигура
    const rect1 = [...change_coord(0, 20, ang), ...change_coord(190, 100, ang)];
    // letter Д
    const rect_d = [...change_coord(30, 30, ang), ...change_coord(40, 70, ang)];
    ctx.strokeRect(...rect1);
    ctx.moveTo(...change_coord(20, 110, ang));
    ctx.lineTo(...change_coord(20, 100, ang));
    ctx.lineTo(...change_coord(30, 100, ang));
    ctx.moveTo(...change_coord(70, 100, ang));
    ctx.lineTo(...change_coord(80, 100, ang));
    ctx.lineTo(...change_coord(80, 110, ang));
    ctx.strokeRect(...rect_d);

    // make a dot
    ctx.moveTo(...change_coord(95, 100, ang));
    ctx.lineTo(...change_coord(96, 101, ang));

    // letter Н
    ctx.moveTo(...change_coord(110, 100, ang));
    ctx.lineTo(...change_coord(110, 30, ang));
    ctx.moveTo(...change_coord(110, 65, ang));
    ctx.lineTo(...change_coord(150, 65, ang));
    ctx.moveTo(...change_coord(150, 30, ang));
    ctx.lineTo(...change_coord(150, 100, ang));

    // make a dot
    ctx.moveTo(...change_coord(160, 100, ang));
    ctx.lineTo(...change_coord(161, 101, ang));
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle ='pink';     
    ctx.lineWidth = 2;
    ctx.moveTo(...change_coord(20, 130, ang));
    ctx.bezierCurveTo(...change_coord(50, 200, ang), ...change_coord(130, 200, ang), ...change_coord(160, 130, ang));
    ctx.stroke()
}


const {canvas, ctx} = makeCanvas(300, 300);
document.body.appendChild(canvas); 
draw_initials(canvas, ctx)

document
    .getElementById('rotator')
    .addEventListener('click', ev => {
        draw_initials(canvas, ctx, Math.PI/2);
})
