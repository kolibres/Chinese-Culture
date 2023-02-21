        // 找对象
        var slideShow = document.getElementById("slideshow");
        var imgList = document.getElementById("imglist");
        var imgs = imgList.children;
        var dotList = document.getElementById("dotlist");
        var dots = dotList.children;
        // var pre = document.getElementById("pre");
        // var next = document.getElementById("next");
        var duration = 3000; // 设置轮播时间间隔
        var Index = 0;
        var count = imglist.children.length; // 获取图片数量
        var timer; // 设置一个计时器
        
        window.onload = function() {
            imgList.children[0].classList.add("appear"); // 初始时显示第一幅图片
            dotList.children[0].classList.add("appear"); // 初始时第一个点为白色

            //为每个点添加单击处理函数
            for (var i = 0; i < dots.length; i++) {
                dots[i].index = i;
                dots[i].onmouseover = changeMe;
            }

            //启动动画自动播放
            timer = setInterval(rotate, duration);

            // 鼠标移到图片上面时，停止动画
            slideShow.onmouseover = function(event) {
                clearInterval(timer);
            };

            // 鼠标离开图片上面时，启动动画
            slideShow.onmouseout = function(event) {
                timer = setInterval(rotate, duration);
            };

            //左右播放图片
            // pre.onclick = preImg;
            // next.onclick = nextImg;
        }

        //改变图片和点的当前状态（通过 添加 或 移除 appear 属性）
        function change() {
            for (var i = 0; i < dots.length; i++) {
                dots[i].classList.remove("appear");
                imgs[i].classList.remove("appear");
            }
            dots[Index].classList.add("appear");
            imgs[Index].classList.add("appear");
        }

        //循环切换图片
        function rotate() {
            Index++;
            if (Index == count) {
                Index = 0;
            }
            change();
        }

        //切换上一幅图片
        function preImg() {
            Index--;
            if (Index < 0) {
                Index = count - 1;
            }
            change();
        }

        //切换下一幅图片
        function nextImg() {
            Index++;
            if (Index == count) {
                Index = 0;
            }
            change();
        }

        //单击某个圆点，切换到相应图片
        function changeMe() {
            Index = this.index;
            change();
        }
        window.onscroll = function(){ 
            var t = document.documentElement.scrollTop || document.body.scrollTop; 
            var top_div = document.getElementById( "backTop" ); 
            if( t >= 200 ) { 
             top_div.style.display = "inline"; 
            } else { 
             top_div.style.display = "none"; 
            } 
           } 