let v= new Vue({
    el: '#app',
    data: function() {
      return {
        BlogPagepath: '/MyBolgWeb/Bolg/Personalblogpage/index.html',

        showCard: true, // 控制卡片是否显示
        isHovering: false, // 控制图标颜色
        bool:['../imgs/c4.png','../imgs/c5.png','../imgs/c6.png'],
        booo:['../imgs/c1.png','../imgs/c2.png','../imgs/c3.png'],
        urr: '../imgs/touxiang.jpg',
        currentPage: '1',
        previewVisible: false,
        dialogVisible: false,// 控制对话框的显示与隐藏
        dialogWidth: '20%', // 初始化对话框宽度，可根据需要调整
        previewImage: '',
        currentPage: '', // 用于控制哪个页面是活动的

        tabPosition: 'left',
        flakes: [],
        url: '../imgs/image2.png',
        path: '/MyBolgWeb/Bolg/Personalblogpage/index.html',
        currentPage: '1', // 默认显示页面1的内容

        treasureList: [ // 宝藏收藏列表
          {
            softwareName: '【软件】：植物大战僵尸杂交版 2.1',
            installEnvironment: '【资源提取码】：bhv2',
            downloadLink: 'https://pan.baidu.com/s/16Ho6CPS21gbOiGs7191t4w?pwd=bhv2 ' // 假设的下载链接
            // ... 可以添加更多软件信息
          },
          {
            softwareName: '【工具箱】：黑科技工具箱',
            installEnvironment: '【资源类型】：短视频',
            downloadLink: 'https://vvtld748t6.feishu.cn/docx/doxcn7UTG5nXonGV8RBXgmmWl4g' // 假设的下载链接
            // ... 可以添加更多软件信息
          },
          {
            softwareName: '【galgame】：美少女游戏',
            installEnvironment: '【资源类型】：游戏',
            downloadLink: 'https://sakustar.me/phone' // 假设的下载链接
            // ... 可以添加更多软件信息
          },
          {
            softwareName: '【软件名称】：羽兔网',
            installEnvironment: '【资源类型】：资源下载',
            downloadLink: 'https://www.yutu.cn/' // 假设的下载链接
            // ... 可以添加更多软件信息
          },
          {
            softwareName: '【音乐放映】：suno',
            installEnvironment: '【资源类型】：音乐创作',
            downloadLink: 'https://suno.cn/?from=Bing&msclkid=2fa40cdae9fa158d88c66a58b057b96c#/' // 假设的下载链接
            // ... 可以添加更多软件信息
          },
          {
            softwareName: '【素材网址】：PICK FREE',
            installEnvironment: '【资源类型】：免费素材',
            downloadLink: 'http://www.pickfree.cn/' // 假设的下载链接
            // ... 可以添加更多软件信息
          },
          {
            softwareName: '【资源网址】：ACGN导航',
            installEnvironment: '【资源类型】：动漫资源',
            downloadLink: 'https://www.extnav.cn/acgn' // 假设的下载链接
            // ... 可以添加更多软件信息
          },
          {
            softwareName: '【素材网址】：WORLD68',
            installEnvironment: '【资源类型】：新世界大门',
            downloadLink: 'https://www.world68.com/' // 假设的下载链接
            // ... 可以添加更多软件信息
          },
          {
            softwareName: '【DAZ模型】：RENDER',
            installEnvironment: '【资源类型】：建模模型',
            downloadLink: 'https://render-state.to/ ' // 假设的下载链接
            // ... 可以添加更多软件信息
          },
          {
            softwareName: '【职业网址】：工信',
            installEnvironment: '【网址类型】：计算机',
            downloadLink: 'https://www.ruankao.org.cn/' // 假设的下载链接
            // ... 可以添加更多软件信息
          },
          {
            softwareName: '【有色视频】：岛国动作片',
            installEnvironment: '【深夜链接】：恋人下单',
            downloadLink: 'http://www.banyuetan.org/chcontent/jy/jydt/2018412/248690.shtml' // 假设的下载链接
            // ... 可以添加更多软件信息
          },

        ],
          images: [
          '../imgs/b1.jpg', '../imgs/b2.jpg', '../imgs/b3.jpg', '../imgs/b4.jpg','../imgs/b5.jpg','../imgs/b6.jpg','../imgs/b7.jpg',
          '../imgs/b8.jpg','../imgs/b9.jpg','../imgs/b10.jpg','../imgs/b11.jpg','../imgs/b12.jpg',

          // 添加更多图片路径...
        ],
        block2Images: [
          '../imgs/a1.jpg',
          '../imgs/a2.jpg',
          '../imgs/a3.jpg'
        ],
        highlights: [
          {
            title: '亮点 1 :',
            content: '学习日本动画行业使用的通用的角色建模和着色器设置'
          },
          {
            title: '亮点 2 :',
            content: '学习3ds Max和 Pencil+4的基础知识'
          },
          {
            title: '亮点 3 :',
            content: '卡通人物建模与其他NPR建模和PBR建模的很多不同的思路和方法'
          },
          {
            title: '亮点 4 :',
            content: '拓宽您对 3DCG 的了解，学会不一样的卡通动漫角色制作'
          }
        ],

      }
    },



    mounted() {
      this.createSnowflakes();
    },

    methods: {

      goToBlogPage() {  // 新增返回博客页面的方法
        window.location.href = this.BlogPagepath;
      },

      closeCard() {
        this.showCard = false;
      },
      toggleHover(hovering) {
        this.isHovering = hovering;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
                .then(_ => {
                  done();
                })
                .catch(_ => {});
      },
      handleSelect(index, indexPath) {
        this.currentPage = index;
      },
      // ... 已有的方法
      handlePreview(img) {
        this.previewImage = img;
        this.previewVisible = true;
      },
      // ... 已有的方法

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


  })
