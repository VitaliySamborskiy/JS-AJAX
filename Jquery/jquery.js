let div = $('.container');
let info;

$('.btn-active').click(() => {
     info = {
        fill: $('#fill').prop('checked'),
        border: $('#border').prop('checked'),
        colorFill: $('#colorFill').val(),
        colorBorder: $('#colorBorder').val(),
         shape: $('input[name="form"]:checked').val()
    }

    switch (info.shape) {
        case `formCircle`: {
            circle();
            break;
        }
        case `formRectangle`: {
            rectangle();
            break;
        }
        case `formTriangle`: {
            triangle(info.fill, info.border, info.colorFill, info.colorBorder);
            break;
        }
        case `formSquare`: {
            base(info.fill, info.border, info.colorFill, info.colorBorder);
            break;
        }
    }
});

function base (fill, border, colorFill, colorBorder) {
    removeTriangle();
    div.width(150).height(150).css({
        borderRadius: '0%',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        backgroundColor: fill ? `${colorFill}` : 'transparent',
        border: border ? `solid 3px ${colorBorder}` : 'none',
    })
}

function rectangle () {
    base(info.fill, info.border, info.colorFill, info.colorBorder);
    div.width(250);
}

function circle () {
    base(info.fill, info.border, info.colorFill, info.colorBorder);
    div.css('borderRadius', '100%');
}

function triangle (fill, border, colorFill, colorBorder) {
    removeTriangle();
    div.css({
        backgroundColor: 'transparent',
        border: `0px`,
    });
    let fillBlock = $('<div></div>').addClass('fill').width(150).height(150).css({
        backgroundColor: `${colorFill}`,
        clipPath:'polygon(50% 0%, 0% 100%, 100% 100%)',
    });
    let borderBlock = $('<div></div>').addClass('border').width(144).height(144).css({
        padding: '3px',
        backgroundColor: `${colorBorder}`,
        clipPath: 'polygon(0% 100%, 3% 100%, 50% 7%, 95% 97%, 2% 97%, 0 100%, 100% 100%, 50% 0)',
    });
    if (fill && border) {
        fillBlock.append(borderBlock);
        div.append(fillBlock);
        return;
    }
    if (border) {
        div.append(borderBlock);
    }
    if (fill) {
        div.append(fillBlock);
    }
}

function removeTriangle () {
    let borderTriangle = $('.border');
    let fillTriangle = $('.fill');
    if (borderTriangle) {
        borderTriangle.remove();
    }
    if (fillTriangle) {
        fillTriangle.remove();
    }
}
