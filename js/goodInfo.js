var goodInfoTimer;

playGdb();

function gdb(time, event, link, goods){
    $("<dd style='height:0px;'><div class='gi-left'><span>"+time+"</span></div><div class='gi-right'><h4>"+event+"</h4><a href='"+link+"'>"+goods+"</a></div></dd>").prependTo('#idGoodsInfo dl');
    var _first=$('#idGoodsInfo dl dd:first');
	_first.animate({height: '+62px'}, "slow");
	var _last=$('#idGoodsInfo dl dd:last');
	_last.remove();
}; 

function playGdb() {
    clearInterval(goodInfoTimer);
    goodInfoTimer = setInterval(function () {
        gdb("1小时前", "王**购买了", "#", "商品x");
    }, 3000);
}