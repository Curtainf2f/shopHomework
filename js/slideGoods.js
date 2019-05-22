var slideGoods = document.getElementsByClassName('slideGoods')[0];
var btn = document.querySelectorAll('ol li');
var oUl = document.getElementsByClassName('oUl')[0];
var css = document.getElementsByTagName('style')[0];
var timer, n = 0;

createDom();
function createDom() {
    var num = 59, uHTML = '', pHTML = '', tHTML = '';
    var allWidth = parseInt(getComputedStyle(slideGoods, null).width);
    var width = allWidth / num;
    for (var i = 0; i < num; i++) {
        uHTML += '<li><div></div><div></div><div></div><div></div></li>';
        pHTML += '.slideGoods ul li:nth-child(' + (i + 1) + ') div{background-position-x: ' + (-i*width) + 'px;}';
        tHTML += '.slideGoods ul li:nth-child(' + (i + 1) + '){transition: 0.8s ' + (0.3 * i / num) + 's}';
    }
    oUl.innerHTML = uHTML;
    css.innerHTML += pHTML + tHTML  + '.slideGoods ul li, .slideGoods ul li div{width:' + width + 'px;height:100%}';
    bindEvent();
    play();
}

function bindEvent() {
    for (var i = 0; i < btn.length; i++) {
        btn[i].index = i;
        btn[i].onclick = function () {
            n = this.index;
            for (var i = 0; i < btn.length; i++) {
                btn[i].className = '';
            }
            this.className = 'on';
            css.innerHTML += '.slideGoods ul li{transform: translateZ(-220px) rotateX(' + (n * 90) + 'deg);}';
        }
    };
    slideGoods.onmouseenter = function () {
        clearInterval(timer);
    };
    slideGoods.onmouseleave = function () {
        play();
    };
}
function play() {
    clearInterval(timer);
    timer = setInterval(function () {
        n++;
        n %= 4;
        for (var i = 0; i < btn.length; i++) {
            btn[i].className = '';
        }
        btn[n].className = 'on';
        css.innerHTML += '.slideGoods ul li{transform: translateZ(-220px) rotateX(' + (n * 90) + 'deg);}';
    }, 2000);
}