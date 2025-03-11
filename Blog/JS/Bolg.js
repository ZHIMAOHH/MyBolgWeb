let v= new Vue({
    el: '#app',
    data: function() {
      return {
          menuItems: [
              {
                  index: '1',
                  title: '个人信息',
                  icon: 'el-icon-location',
                  children: [
                      { index: '1-1',   link: '../../personalblogpage/index.html',title: '我的空间' },
                      { index: '1-2', link: '../../personalblogpage/HomePage.html',title: '个人主页' }
                  ]
              },
              {
                  index: '2',
                  title: '导航二',
                  icon: 'el-icon-location',
                  children: [
                      { index: '2-1', title: '我的空间' },
                      { index: '2-2', title: '个人主页' }
                  ]
              },
              {
                  index: '3',
                  title: '导航三',
                  icon: 'el-icon-location',
                  children: [
                      { index: '3-1', title: '我的空间' },
                      { index: '3-2', title: '个人主页' }
                  ]
              },
              // 其他菜单项...
          ],

// ============================================asdasda==================================================
        isCollapse: false,
          HomePagepath: '../../personalblogpage/HomePage.html',
        flakes: [],
        url: '../imgs/touxiang.jpg',
        progresses: [
          { name: 'SSM', percentage: 30 ,current: 0},
          { name: 'JS', percentage: 70 ,current: 0},
          { name: 'Css', percentage: 90 ,current: 0},
          { name: 'Vue', percentage: 50 ,current: 0},
          { name: 'HTML', percentage: 100 ,current: 0},
          { name: 'Blender', percentage: 85 ,current: 0},
          { name: 'Cascadeur', percentage: 60 ,current: 0},
          { name: 'PS', percentage: 70 ,current: 0},
          { name: 'MD', percentage: 75 ,current: 0},
          { name: 'PT', percentage: 65 ,current: 0},
        ],

        images: [
          {
            src: '../imgs/QQ3.png', // 图片路径
            alt: 'Image 1',
            popoverSrc: '../imgs/image1.png', // 弹窗图片路径
            popoverText: 'QQ联系方式',
          },
          {
            src: '../imgs/微信.png', // 图片路径
            alt: 'Image 2',
            popoverSrc: '../imgs/image2.png', // 弹窗图片路径
            popoverText: '微信联系方式',
          },
          {
            src: '../imgs/bl.jpg', // 图片路径
            alt: 'Image 3',
            popoverSrc: '../imgs/image3.png', // 弹窗图片路径
            popoverText: '扫码关注小破站',
          },
          {
            src: '../imgs/抖音.png', // 图片路径
            alt: 'Image 4',
            popoverSrc: '../imgs/image4.png', // 弹窗图片路径
            popoverText: '扫码关注抖音',
          },

          // 继续添加更多图片，但注意每行只有四个
        ],
      }
    },

   mounted() {
     this.createSnowflakes();
     this.startProgressAnimation();// 添加兴趣爱好和个人掌握技能进度条加载动画启动
   },

   methods: {
       navigateTo(link) {
           // 使用 Vue Router 进行路由跳转
           window.location.href = link; // 确保link是你要跳转的路由路径
       },
       formatProgress(percentage) {
           return `${percentage}%`;
       },

// 兴趣爱好和个人掌握技能进度条加载动画
       startProgressAnimation() {
           this.progresses.forEach(item => {
               let current = 0;
               const target = item.percentage;
               const animation = setInterval(() => {
                   if (current >= target) {
                       clearInterval(animation);
                       return;
                   }
                   current++;
                   item.current = current;
               }, 30); // 调整时间间隔控制动画速度
           });
       },
       // 兴趣爱好和个人掌握技能进度条加载动画结束


    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },


    goToSpacePage() {  // 重命名方法
      window.location.href = this.HomePagepath;
    },

     createSnowflakes() {
       for (let i = 0; i < 100; i++) {
         const x = Math.random() * window.innerWidth;
         const delay = Math.random() * 10;
         this.flakes.push({
           id: i,
           style: {
             left: `${x}px`,
             animationDelay: `${delay}s`,
           },
         });
       }
     },
   },
//兴趣爱好和个人掌握技能进度条加载动画修改计算属性
    computed: {
        chunkedProgresses() {
            return this.progresses.reduce((result, item, index) => {
                const chunkIndex = Math.floor(index/2);
                if(!result[chunkIndex]) {
                    result[chunkIndex] = [];
                }
                result[chunkIndex].push(item);
                return result;
            }, []);
        }
    },



});


/*左侧目录栏css样式*/
