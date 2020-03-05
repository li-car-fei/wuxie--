
// 创建雨滴对象
function Drop() {}
//添加对象方法
Drop.prototype = {
    init: function() { //初始化方法 设置每个雨滴的初始化属性
        //设置坐标
        this.x = random(0, w);
        this.y = 0;
        //y方向的速度值
        this.vy = random(3, 4);
        //雨滴下落的最大高度
        this.l = random(0.9 * h, 0.98 * h);
        //波纹的初始半径
        this.r = 1;
        this.vr = 1; //半径增大的速度
        //判断雨滴消失的透明度
        this.a = 1; // =>0
        this.va = 0.76; //透明度的变化系数
    },
    draw: function() { //绘制图形
        if (this.y > this.l) { //雨滴下落到了指定位置 开始绘制圆形
            cxt.beginPath(); //先开始路径
            cxt.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);//绘制雨滴同心圆
            cxt.strokeStyle = "rgba(29,207,198," + this.a + ")";//设置带透明度a的rgba调色
            cxt.stroke();
        } else { //绘制下落的雨滴
            cxt.fillStyle = "rgb(6, 247, 235)";
            cxt.fillRect(this.x, this.y, 2, 8);
        }

        this.update();
    },
    update: function() { //更新坐标位置
        if (this.y < this.l) {//判断雨滴是否到达random随机底部
            this.y += this.vy//雨滴下落
        } else { //雨滴下落到了指定位置 开始绘制波纹
            if (this.a > 0.33) {//判断透明度a的变化是否到预定极限
                this.r += this.vr;//雨滴同心圆半径增大，既雨滴同心圆扩散
                if (this.r > 40) {//雨滴同心圆达到预设定半径后，透明度a开始变化
                    this.a *= this.va;//透明度a乘上透明度变化va
                }
            } else {
                //雨滴动画完成，重新设定雨滴，重新初始化
                this.init()
            }

        }
    }
};
//新建一个雨滴实例化对象
//var drop = new Drop();
//drop.init();// 初始化
//drop.draw();//绘制

function set(){
    for (var i = 0; i < 150; i++) {
    setTimeout(function() {
        var drop = new Drop();
        drop.init();
        drops.push(drop);
    }, i * 20)

}
};
//console.log(drops)
function move() {
    //cxt.clearRect(0,0,w,h);
    //先复制透明层再绘制雨滴 雨滴就把先绘制的透明层覆盖 下一次绘制透明层
    //就会把之前绘制的雨滴覆盖 若干的透明层叠加就会越来越不透明
    
    cxt.fillStyle = "rgb(76, 123, 138)";
    cxt.fillRect(0, 0, w, h);
    for (var k = 0; k < drops.length; k++) {
        drops[k].draw();
    }
    requestAnimationFrame(move);
}
//生成随机数的方法
function random(min, max) {
    return Math.random() * (max - min) + min; //min - max之间的随机数
}