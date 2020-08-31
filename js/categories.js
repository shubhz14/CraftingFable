window.onload=function(){  
    const ele = document.getElementById('imageRow');
    let pos = {left: 0, x: 0 };
    const mouseDownHandler = function(e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            x: e.clientX,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function(e) {
        const dx = e.clientX - pos.x;
        ele.scrollLeft = pos.left - dx;
    }

    const mouseUpHandler = function() {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');
    };

    ele.addEventListener('mousedown', mouseDownHandler);
}

