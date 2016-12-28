/*钱*/
function Money() {
    this.fallMoney = {
        speed: 1500,// 每秒移动的像素
        moneyActionStep: 0,
        first: 'money-first',
        second: 'money-second',
        third: 'money-third',
        startX: Math.round(util.getCoordinateMap(50, 0).x * application.canvas.width),
        startY: 0,
        stopX: Math.round(util.getCoordinateMap(50, 0).x * application.canvas.width),
        stopY: Math.round(util.getCoordinateMap(0, 780).y * application.canvas.height),
        x: 0,
        y: 0
    };
    this.stackedMoney = {};
}
/*下落*/
Money.prototype.fall = function (moneyObj, modifier) {
    var _self = this;
    var moneyStatu = ['money-first', 'money-second', 'money-second', 'money-third'];//下落的钱的状态
    var gap = Math.round((moneyObj.stopY - moneyObj.startY) / moneyStatu.length);
    var x = moneyObj.x = moneyObj.startX * appConfig.prop;
    var y;

    if (moneyObj.moneyActionStep > 3) {
        y = 0;
        moneyObj.moneyActionStep = 0;
    } else {
        moneyObj.y = moneyObj.y + moneyObj.speed * modifier;
        y = moneyObj.y;
        moneyObj.moneyActionStep++;
    }

    if (y <= moneyObj.stopY) {
        if (0 < y && y <= gap) {
            moneyObj.moneyActionStep = 0;
        } else if (gap < y && y <= gap * 2) {
            moneyObj.moneyActionStep = 1;
        } else if (gap * 2 < y && y <= gap * 3) {
            moneyObj.moneyActionStep = 2;
        } else if (gap * 3 < y && y <= gap * 4) {
            moneyObj.moneyActionStep = 3;
        }
    } else if (y > moneyObj.stopY) {
        moneyObj.y = 0;
    }
    if (moneyObj.moneyActionStep > 3) {
        moneyObj.moneyActionStep = 0;
    }

    var myImage = util.$$(moneyStatu[moneyObj.moneyActionStep]);//各个阶段show各个阶段的money形状
    var width = Math.round(myImage.width * appConfig.prop);
    var height = Math.round(myImage.height * appConfig.prop);
    application.context.drawImage(myImage, x, y, width, height);
    _self.moving();

};

/*堆叠*/
Money.prototype.stack = function () {
    var strMap = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];//堆叠的钱的状态
};

Money.prototype.moving = function (modifier) {

};

