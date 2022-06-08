


/*
QS('#main').addEventListener('wheel', function (event) {

    let width = deskShadow.clientWidth,
        height = deskShadow.clientHeight,
        stepSize = 20,
        whRatio = width / height;

    if (stopTimeout) {
        clearTimeout(stopTimeout);
    }

    if (event.deltaY < 0) {
        width += stepSize * whRatio;
        height += stepSize;
    } else {
        width -= stepSize * whRatio;
        height -= stepSize;
    }

    const level = Minesweeper.level;

    let minWidth;

    if (level) {
        minWidth = minSize[Minesweeper.level][0];
    } else {
        minWidth = _func(localGameData.custom[0])[0];
    }
    //绘图基准的 80%
    if (width < (minWidth * 0.8)) {
        width += stepSize * whRatio;
        height += stepSize;
    }

    deskShadow.style.borderColor = '#FFFFFF'
    deskShadow.style.zIndex = 100;
    deskShadow.style.width = width + 'px';
    deskShadow.style.height = height + 'px';
    
    stopTimeout = setTimeout(() => {
        width -= 2;
        height -= 2;
        Minesweeper.ele_desk.style.height = height + 'px';
        Minesweeper.ele_desk.style.width = width + 'px';

        localGameData.whSize[Minesweeper.level][0] = width;
        localGameData.whSize[Minesweeper.level][1] = height;

        saveGameDataToLocal();
        deskShadow.style.borderColor = 'transparent'
        deskShadow.style.zIndex = -1;
        const scale = getScale(width);
        cellPostion.scale = scale;
        resizeCellImg(scale);
        cellPostion.allRepaint();
    }, 500);
}, false)
*/