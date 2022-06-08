const log = console.log;
const pop = alert;
const QS = name => document.querySelector(name);
const QSA = name => document.querySelectorAll(name);

function drawImage(scale) {
    
    const canvas = document.querySelector('#canvas');
    canvas.width = 22 * 10 * scale;
    canvas.height = 22 * 5 * scale;
    const pix = canvas.getContext('2d');
    pix.scale(scale, scale);

    function cancelShadow() {
        pix.shadowOffsetX = null;
        pix.shadowOffsetY = null;
        pix.shadowBlur = null;
        pix.shadowColor = null;
    }

    function useShadow() {
        pix.shadowOffsetX = 1;
        pix.shadowOffsetY = 1;
        pix.shadowBlur = 1;
        pix.shadowColor = "rgba(0, 0, 0, 0.4)";
    }

    const cellColorList = {
        type1: {
            bg: 'rgb(95,177,116)',
            top: 'rgb(163,209,175)',
            right: 'rgb(71,146,90)',
            down: 'rgb(71,146,90)',
            left: 'rgb(163,209,175)'
        },
        type2: {
            bg: 'rgb(193,138,108)',
            top: 'rgb(205,159,135)',
            right: 'rgb(167,103,69)',
            down: 'rgb(167,103,69)',
            left: 'rgb(205,159,135)'
        },
        type3: {
            bg: 'rgb(112,146,190)',
            top: 'rgb(157,180,210',
            right: 'rgb(77,116,168)',
            down: 'rgb(77,116,168)',
            left: 'rgb(157,180,210)'
        }
    }

    function drawCell(x, y, color) {

        pix.translate(x, y);
        pix.lineWidth = 1;

        pix.fillStyle = color.bg;
        //pix.fillStyle = 'rgb(95,177,116)'
        pix.fillRect(0, 0, 22, 22);

        pix.beginPath();
        pix.moveTo(0, 0);
        pix.lineTo(4, 4);
        pix.lineTo(18, 4);
        pix.lineTo(22, 0);
        pix.closePath();
        pix.fillStyle = color.top;
        //pix.fillStyle = 'rgb(163,209,175)';
        pix.fill();
        pix.beginPath();
        pix.moveTo(22, 0);
        pix.lineTo(18, 4);
        pix.lineTo(18, 18);
        pix.lineTo(22, 22);
        pix.closePath();
        pix.fillStyle = color.right;
        //pix.fillStyle = 'rgb(71,146,90)'
        pix.fill();
        pix.beginPath();
        pix.moveTo(22, 22);
        pix.lineTo(18, 18);
        pix.lineTo(4, 18);
        pix.lineTo(0, 22);
        pix.fillStyle = color.down;
        //pix.fillStyle = 'rgb(71,146,90)';
        pix.fill();
        pix.beginPath();
        pix.moveTo(0, 22);
        pix.lineTo(4, 18);
        pix.lineTo(4, 4);
        pix.lineTo(0, 0);
        pix.fillStyle = color.left;
        //pix.fillStyle = 'rgb(163,209,175)';
        pix.fill();
        pix.beginPath();
        let topLineShine = pix.createLinearGradient(17, 4, 4, 4);
        topLineShine.addColorStop(0, 'rgb(200,200,200)');
        topLineShine.addColorStop(1, 'white');
        pix.strokeStyle = topLineShine;
        pix.moveTo(17, 4);
        pix.lineTo(4, 4);
        pix.stroke();
        pix.beginPath();
        pix.moveTo(4, 4);
        let leftLineShine = pix.createLinearGradient(4, 17, 4, 4);
        leftLineShine.addColorStop(0, 'rgb(200,200,200)');
        leftLineShine.addColorStop(1, 'white');
        pix.strokeStyle = leftLineShine;
        pix.lineTo(4, 17);
        pix.stroke();
        let linearLine = pix.createLinearGradient(0, 0, 4, 4);
        linearLine.addColorStop(0, 'rgb(200,200,200)');
        linearLine.addColorStop(1, 'white');
        pix.beginPath();
        pix.strokeStyle = linearLine;
        pix.lineCap = 'round';
        pix.moveTo(1, 1);
        pix.lineTo(4, 4);
        pix.stroke();
        pix.translate(-x, -y);
    }

    function drawFlag(x, y) {

        pix.translate(x, y);
        pix.lineCap = 'butt';
        pix.fillStyle = 'red';
        pix.shadowOffsetX = 2;
        pix.shadowOffsetY = 2;
        pix.shadowBlur = 2;
        pix.shadowColor = "rgba(0, 0, 0, 0.4)";

        pix.lineWidth = 2;
        pix.strokeStyle = 'black'
        pix.beginPath();
        pix.moveTo(6, 20);
        pix.lineTo(6, 2);
        pix.stroke();

        pix.beginPath();
        pix.moveTo(7, 2);
        pix.lineTo(17, 8);
        pix.lineTo(7, 13);
        pix.closePath();
        pix.fill();
        pix.lineWidth = 1;

        cancelShadow();

        pix.translate(-x, -y);
    }

    function drawBomb(x, y) {

        pix.translate(x, y);
        pix.lineWidth = 2;
        useShadow();

        let circleGradient = pix.createRadialGradient(11, 11, 0, 11, 11, 11);
        circleGradient.addColorStop(0, "rgb(140,140,140)");
        circleGradient.addColorStop(1, "black");

        pix.beginPath();
        pix.fillStyle = circleGradient;
        pix.moveTo(19, 11);
        pix.arc(11, 11, 8, 0, Math.PI * 2, false);
        pix.fill();

        pix.beginPath();
        pix.moveTo(17, 5);
        pix.lineTo(19, 3);
        pix.stroke();
        pix.beginPath();
        pix.strokeStyle = 'red';
        pix.fillStyle = 'yellow';
        pix.moveTo(19, 3);
        pix.arc(19, 3, 1, 0, Math.PI * 2, 0, false);
        pix.stroke();
        pix.fill();

        pix.beginPath();
        let ooo = pix.createLinearGradient(15, 2, 20, 7);
        ooo.addColorStop(0, 'black');
        ooo.addColorStop(0.5, 'gray');
        ooo.addColorStop(1, 'black');
        pix.fillStyle = ooo;

        pix.moveTo(13, 4);
        pix.lineTo(15, 2);
        pix.lineTo(20, 7);
        pix.lineTo(18, 9);
        pix.closePath();
        pix.fill();
        cancelShadow();
        pix.translate(-x, -y);
    }


    function drawCircle(x, y, radius, color) {
        pix.beginPath();
        pix.fillStyle = color;
        pix.arc(x, y, radius, 0, Math.PI * 2, false);
        pix.fill();
    }


    function drawExplodeBomb(x, y) {

        pix.translate(x, y);

        pix.globalAlpha = 0.7;
        let circleGradient = pix.createRadialGradient(11, 11, 0, 11, 11, 11);
        circleGradient.addColorStop(0.8, "orange");
        circleGradient.addColorStop(1, "red");

        pix.beginPath();
        pix.fillStyle = circleGradient
        pix.moveTo(19, 11);
        pix.arc(11, 11, 11, 0, Math.PI * 2, false);
        pix.fill();

        pix.globalAlpha = 1;

        drawBomb(0, 0);

        drawCircle(9, 9, 2, 'orange');
        drawCircle(14, 10, 1, 'yellow');
        drawCircle(12, 14, 1, 'orange');

        pix.translate(-x, -y);
    }

    function drawX(x, y) {
        pix.translate(x, y);
        useShadow();
        pix.lineWidth = 2;
        pix.beginPath();
        pix.moveTo(2, 2);
        pix.lineCap = 'round';
        pix.strokeStyle = 'red';
        pix.lineTo(20, 20);
        pix.moveTo(20, 2);
        pix.lineTo(2, 20);
        pix.stroke();
        cancelShadow();
        pix.translate(-x, -y);
    }

    function drawBackground(x, y) {
        pix.fillStyle = 'rgb(195,195,195)';
        pix.fillRect(x, y, 22, 22);
    }

    function drawNumber(x, y, n) {
        pix.translate(x, y);
        pix.fillStyle = getTextColor(n);
        pix.font = '20px Arial';
        pix.fillText(n, 5, 18);
        pix.translate(-x, -y);
    }

    function drawSunkenCell(x, y, color) {
        pix.translate(x + 11, y + 11);
        pix.rotate(Math.PI * 2 * 1.5);
        drawCell(-11, -11, color);
        pix.rotate(Math.PI * 2 * 1.5);
        pix.translate(-x - 11, -y - 11);
    }

    function getTextColor(n) {
        switch (n) {
            case 1: return 'rgb(65,80,190)';
            case 2: return 'rgb(30,100,5)';
            case 3: return 'rgb(170,5,5)';
            case 4: return 'rgb(15,15,140)';
            case 5: return 'rgb(125,5,5)';
            case 6: return 'rgb(5,125,125)';
            case 7: return 'rgb(170,5,5)';
            case 8: return 'rgb(170,5,5)';
            case '?' : return 'rgb(255,255,255)';
        }
    }

    //type - 1
    const row1 = 0;
    drawBackground(0, row1); //背景
    drawCell(22, row1, cellColorList.type1); //覆盖
    drawBackground(44, row1);//错误标记
    drawFlag(44, row1);
    drawX(44, row1);

    drawCell(66, row1, cellColorList.type1)//爆炸的雷
    drawExplodeBomb(66, row1);

    drawCell(88, row1, cellColorList.type1)//未爆炸的雷
    drawBomb(88, row1);

    drawCell(110, row1, cellColorList.type1); //正常标记
    drawFlag(110, row1);
    drawBackground(132, row1);//正确标记
    drawBomb(132, row1);
    drawFlag(132, row1);
    drawBackground(154, row1)//X号
    drawX(154, row1);
    drawSunkenCell(176, row1, cellColorList.type1);//反色阴影
    drawCell(198, row1, cellColorList.type1); //问号
    drawNumber(198, row1, '?')
    //type - 2;
    const row2 = 22;
    drawBackground(0, row2); //背景
    drawCell(22, row2, cellColorList.type2); //覆盖
    drawBackground(44, row2);//错误标记
    drawFlag(44, row2);
    drawX(44, row2);
    drawCell(66, row2, cellColorList.type2)//爆炸的雷
    drawExplodeBomb(66, row2);
    drawCell(88, row2, cellColorList.type2)//未爆炸的雷
    drawBomb(88, row2);
    drawCell(110, row2, cellColorList.type2); //正常标记
    drawFlag(110, row2);
    drawBackground(132, row2);//正确标记
    drawBomb(132, row2);
    drawFlag(132, row2);
    drawBackground(154, row2)//X号
    drawX(154, row2);
    drawSunkenCell(176, row2, cellColorList.type2);//反色阴影
    drawCell(198, row2, cellColorList.type2); //问号
    drawNumber(198, row2, '?')
    //type - 3;
    const row3 = 44;
    drawBackground(0, row3); //背景
    drawCell(22, row3, cellColorList.type3); //覆盖
    drawBackground(44, row3);//错误标记
    drawFlag(44, row3);
    drawX(44, row3);
    drawCell(66, row3, cellColorList.type3)//爆炸的雷
    drawExplodeBomb(66, row3);
    drawCell(88, row3, cellColorList.type3)//未爆炸的雷
    drawBomb(88, row3);
    drawCell(110, row3, cellColorList.type3); //正常标记
    drawFlag(110, row3);
    drawBackground(132, row3);//正确标记
    drawBomb(132, row3);
    drawFlag(132, row3);
    drawBackground(154, row3)//X号
    drawX(154, row3);
    drawSunkenCell(176, row3, cellColorList.type3);//反色阴影
    drawCell(198, row3, cellColorList.type3); //问号
    drawNumber(198, row3, '?')
    const row4 = 66;
    for (let i = 0, j = 0; i < 8; i++) {
        drawBackground(j, row4);
        drawNumber(j, row4, i + 1);
        j += 22;
    }
    const row5 = 88;
    for (let i = 0, j = 0; i < 8; i++) {
        drawBackground(j, row5);
        drawNumber(j, row5, i + 1);
        drawX(j, row5);
        j += 22;
    }
    return pix;
}
