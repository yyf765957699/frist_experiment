window.onload=function() {
	var btn=document.getElementById("btn");
	var imgs=document.querySelectorAll("img");
	var on=true;  //用来决定用户是否可以再次点击 ture 可以点false不可点
	var endNum=0; //运动完成的图片数量
	var allEnd=0; 
	btn.onclick=function () {
		// for (var i = 0; i < imgs.length; i++) {
		// 	// imgs[i].style.transition="1s";
		// 	// imgs[i].style.transform="scale(0)";
		// 	montion(imgs[i],"1s",function () {
		// 		imgs[i].style.transform="scale(0)";
		// 	},function () {
		// 		console.log(1);
		// 	});
		// };
			if (!on) {
				return;
			}
			on=false;

			
		for (var i = 0; i < imgs.length; i++) {
			(function (i) {
				setTimeout(function () {
					montion(imgs[i],"10ms",function () {
						this.style.transform="scale(0)";
						
				},function () {
					// callBack
					montion(this,'1s',function () {
						this.style.transform='scale(1)';
						this.style.opacity=0;
					},function () {
						endNum++;
						if (endNum==imgs.length) {
								toBig();
						}
					});
				});
			}, Math.random()*500);
				})(i);
			
		}
	};






	
	// 运动函数（运动对象，运动时间,运动属性，回调函数）
	function montion(obj,time,doFn,callBack) {
		obj.style.transition=time;
		doFn.call(obj);      //调用函数， 把this指向给obj
		var called=false;	//解决transitionend调用多次的bug
		obj.addEventListener('transitionend', function () {
			if (!called) {
				callBack&&callBack.call(obj);
				called=true;
			}
		
		},false);  //冒泡阶段
	}







function toBig () {
	 // 第三个效果 
	 for (var i = 0; i < imgs.length; i++) {
	 	// imgs[i].style.transition="";
	 	// imgs[i].style.transform='rotateY(0deg) translateZ(-'+Math.random()*500+'px)';
	 	// 	//用这种方式写 是因为想要在循环中找到i的值
	 	// 	(function (i) {
	 	// 		setTimeout(function () {
	 	// 			montion(imgs[i],'2s',function () {
	 	// 				this.style.opacity=1;
	 	// 				this.style.transform='rotateY(-360deg) translateZ(0)';
	 	// 			},function () {
	 	// 				allEnd++;
	 	// 				if (allEnd=imgs.length) {
	 	// 					//所有运动完成 用户可以再次点击了
	 	// 					on=true;

	 	// 				}
	 	// 			});
	 	// 		}, Math.random()*1000);
	 	// 	})(i);
	 	imgs[i].style.transition='';
	 	imgs[i].style.transform="rotateY(0deg) translateZ(-"+Math.random()*500+"px)";
	 	(function (i) {
	 		setTimeout(function () {
	 			montion(imgs[i],'2s',function () {
	 				this.style.opacity=1;
	 				this.style.transform='rotateY(-360deg) translateZ(0)';
	 			},function () {
	 				allEnd++;
	 				if (allEnd==imgs.lenth) {
	 					on=true;
	 				}	 			})
	 		}, Math.random()*1000);
	 	})(i);
	 }
}

};

