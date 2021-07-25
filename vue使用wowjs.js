1、cnpm i wowjs --save
2、import { WOW } from 'wowjs'
	import animated from 'wowjs/css/libs/animate.css'
	//这里需要将样式用起来，
	Vue.use(animated)
	//创建全局实例
	Vue.prototype.$wow = new WOW({
		boxClass: 'wow', // 需要执行动画的元素的 class
		animateClass: 'animated', //animation.css 动画的 class
		offset: 0, // 距离可视区域多少开始执行动画
		mobile: true, // 是否在移动设备上执行动画
		live: true, // 异步加载的内容是否有效
		}
	})
3、//监测数据加载完成，初始化动画
	mounted: {
	  this.$nextTick(() => {
		// 在dom渲染完后,再执行动画
		this.$wow.init()
	  });
	},

<div class="wow flipInX"><span style="margin-left: 20px">博客</span></div>

