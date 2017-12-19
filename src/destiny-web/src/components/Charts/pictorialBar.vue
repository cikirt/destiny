<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart_now'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      var self = this
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.showLoading()
      var d = {
        count: 20,
        start: 0,
        total: 37,
        subjects: [
          {
            rating: {
              max: 10,
              average: 7.9,
              stars: '40',
              min: 0
            },
            genres: ['剧情', '历史', '战争'],
            title: '芳华',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1276105/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1403053084.22.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1403053084.22.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1403053084.22.jpg'
                },
                name: '黄轩',
                id: '1276105'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1366978/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512871367.97.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512871367.97.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512871367.97.jpg'
                },
                name: '苗苗',
                id: '1366978'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1357009/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1504775118.88.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1504775118.88.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1504775118.88.jpg'
                },
                name: '钟楚曦',
                id: '1357009'
              }
            ],
            collect_count: 111424,
            original_title: '芳华',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1274255/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45667.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45667.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45667.jpg'
                },
                name: '冯小刚',
                id: '1274255'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2507361925.jpg',
              large:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2507361925.jpg',
              medium:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2507361925.jpg'
            },
            alt: 'https://movie.douban.com/subject/26862829/',
            id: '26862829'
          },
          {
            rating: {
              max: 10,
              average: 0,
              stars: '00',
              min: 0
            },
            genres: ['剧情', '爱情'],
            title: '悔恨',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1384562/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511424154.2.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511424154.2.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511424154.2.jpg'
                },
                name: '张乃歌',
                id: '1384562'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1384563/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511424168.55.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511424168.55.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511424168.55.jpg'
                },
                name: '赵今夏',
                id: '1384563'
              }
            ],
            collect_count: 9,
            original_title: '悔恨',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1384561/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511424128.98.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511424128.98.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511424128.98.jpg'
                },
                name: '张耀光',
                id: '1384561'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2506914852.jpg',
              large:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2506914852.jpg',
              medium:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2506914852.jpg'
            },
            alt: 'https://movie.douban.com/subject/27205063/',
            id: '27205063'
          },
          {
            rating: {
              max: 10,
              average: 4.9,
              stars: '25',
              min: 0
            },
            genres: ['动作', '奇幻'],
            title: '奇门遁甲',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1324043/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1490342249.11.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1490342249.11.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1490342249.11.jpg'
                },
                name: '大鹏',
                id: '1324043'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1315861/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1368598869.24.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1368598869.24.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1368598869.24.jpg'
                },
                name: '倪妮',
                id: '1315861'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1274292/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10299.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10299.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10299.jpg'
                },
                name: '李治廷',
                id: '1274292'
              }
            ],
            collect_count: 15610,
            original_title: '奇门遁甲',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1275026/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9332.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9332.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9332.jpg'
                },
                name: '袁和平',
                id: '1275026'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2507566212.jpg',
              large:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2507566212.jpg',
              medium:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2507566212.jpg'
            },
            alt: 'https://movie.douban.com/subject/26661191/',
            id: '26661191'
          },
          {
            rating: {
              max: 10,
              average: 9.1,
              stars: '45',
              min: 0
            },
            genres: ['喜剧', '动画', '冒险'],
            title: '寻梦环游记',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1370411/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489594517.9.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489594517.9.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489594517.9.jpg'
                },
                name: '安东尼·冈萨雷斯',
                id: '1370411'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1041009/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510634028.69.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510634028.69.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510634028.69.jpg'
                },
                name: '盖尔·加西亚·贝纳尔',
                id: '1041009'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1036383/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416762292.89.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416762292.89.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416762292.89.jpg'
                },
                name: '本杰明·布拉特',
                id: '1036383'
              }
            ],
            collect_count: 288162,
            original_title: 'Coco',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1022678/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p13830.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p13830.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p13830.jpg'
                },
                name: '李·昂克里奇',
                id: '1022678'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1370425/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497195148.21.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497195148.21.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497195148.21.jpg'
                },
                name: '阿德里安·莫利纳',
                id: '1370425'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503997609.jpg',
              large:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503997609.jpg',
              medium:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503997609.jpg'
            },
            alt: 'https://movie.douban.com/subject/20495023/',
            id: '20495023'
          },
          {
            rating: {
              max: 10,
              average: 8.3,
              stars: '45',
              min: 0
            },
            genres: ['喜剧', '动画', '家庭'],
            title: '帕丁顿熊2',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1025149/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1397997449.99.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1397997449.99.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1397997449.99.jpg'
                },
                name: '本·卫肖',
                id: '1025149'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1003493/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1871.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1871.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1871.jpg'
                },
                name: '休·格兰特',
                id: '1003493'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1041224/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416053013.86.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416053013.86.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416053013.86.jpg'
                },
                name: '休·博内威利',
                id: '1041224'
              }
            ],
            collect_count: 42171,
            original_title: 'Paddington 2',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1313689/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425285993.52.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425285993.52.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425285993.52.jpg'
                },
                name: '保罗·金',
                id: '1313689'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506466229.jpg',
              large:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506466229.jpg',
              medium:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506466229.jpg'
            },
            alt: 'https://movie.douban.com/subject/26340419/',
            id: '26340419'
          },
          {
            rating: {
              max: 10,
              average: 8.6,
              stars: '45',
              min: 0
            },
            genres: ['剧情', '传记', '动画'],
            title: '至爱梵高·星空之谜',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1314461/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43221.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43221.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43221.jpg'
                },
                name: '道格拉斯·布斯',
                id: '1314461'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1376200/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554583.31.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554583.31.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554583.31.jpg'
                },
                name: '罗伯特·古拉奇克',
                id: '1376200'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1275043/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360941730.7.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360941730.7.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360941730.7.jpg'
                },
                name: '埃莉诺·汤姆林森',
                id: '1275043'
              }
            ],
            collect_count: 65568,
            original_title: 'Loving Vincent',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1326282/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1393488180.49.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1393488180.49.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1393488180.49.jpg'
                },
                name: '多洛塔·科别拉',
                id: '1326282'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1306202/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554460.64.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554460.64.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554460.64.jpg'
                },
                name: '休·韦尔什曼',
                id: '1306202'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506935748.jpg',
              large:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506935748.jpg',
              medium:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506935748.jpg'
            },
            alt: 'https://movie.douban.com/subject/25837262/',
            id: '25837262'
          },
          {
            rating: {
              max: 10,
              average: 6.9,
              stars: '35',
              min: 0
            },
            genres: ['喜剧', '家庭'],
            title: '圣诞奇妙公司',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1009332/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39998.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39998.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p39998.jpg'
                },
                name: '格什菲·法拉哈尼',
                id: '1009332'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1004860/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1973.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1973.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1973.jpg'
                },
                name: '奥黛丽·塔图',
                id: '1004860'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1036749/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4917.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4917.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4917.jpg'
                },
                name: '阿兰·夏巴',
                id: '1036749'
              }
            ],
            collect_count: 1092,
            original_title: 'Santa & Cie',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1036749/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4917.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4917.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4917.jpg'
                },
                name: '阿兰·夏巴',
                id: '1036749'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2505778884.jpg',
              large:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2505778884.jpg',
              medium:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2505778884.jpg'
            },
            alt: 'https://movie.douban.com/subject/27011205/',
            id: '27011205'
          },
          {
            rating: {
              max: 10,
              average: 8.6,
              stars: '45',
              min: 0
            },
            genres: ['剧情', '传记', '历史'],
            title: '至暗时刻',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1010507/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33896.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33896.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33896.jpg'
                },
                name: '加里·奥德曼',
                id: '1010507'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1021997/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512573236.06.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512573236.06.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512573236.06.jpg'
                },
                name: '克里斯汀·斯科特·托马斯',
                id: '1021997'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1318674/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1426508419.1.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1426508419.1.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1426508419.1.jpg'
                },
                name: '莉莉·詹姆斯',
                id: '1318674'
              }
            ],
            collect_count: 44436,
            original_title: 'Darkest Hour',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1275041/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1424001982.32.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1424001982.32.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1424001982.32.jpg'
                },
                name: '乔·赖特',
                id: '1275041'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2504277551.jpg',
              large:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2504277551.jpg',
              medium:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2504277551.jpg'
            },
            alt: 'https://movie.douban.com/subject/26761416/',
            id: '26761416'
          },
          {
            rating: {
              max: 10,
              average: 6.2,
              stars: '30',
              min: 0
            },
            genres: ['惊悚', '冒险'],
            title: '鲨海',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1000013/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23017.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23017.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23017.jpg'
                },
                name: '曼迪·摩尔',
                id: '1000013'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1232340/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46657.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46657.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46657.jpg'
                },
                name: '克莱尔·霍尔特',
                id: '1232340'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1050080/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p11804.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p11804.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p11804.jpg'
                },
                name: '克里斯·J.约翰逊',
                id: '1050080'
              }
            ],
            collect_count: 10319,
            original_title: '47 Meters Down',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1019388/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498455992.67.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498455992.67.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498455992.67.jpg'
                },
                name: '约翰内斯·罗伯茨',
                id: '1019388'
              }
            ],
            year: '2016',
            images: {
              small:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2504892832.jpg',
              large:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2504892832.jpg',
              medium:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2504892832.jpg'
            },
            alt: 'https://movie.douban.com/subject/26845362/',
            id: '26845362'
          },
          {
            rating: {
              max: 10,
              average: 5.9,
              stars: '30',
              min: 0
            },
            genres: ['剧情', '犯罪'],
            title: '巨额来电',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1326363/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508145845.01.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508145845.01.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508145845.01.jpg'
                },
                name: '陈学冬',
                id: '1326363'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1014743/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19418.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19418.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19418.jpg'
                },
                name: '张孝全',
                id: '1014743'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1215287/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50270.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50270.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50270.jpg'
                },
                name: '桂纶镁',
                id: '1215287'
              }
            ],
            collect_count: 4281,
            original_title: '猜猜我是誰',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1280774/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17763.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17763.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17763.jpg'
                },
                name: '彭顺',
                id: '1280774'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505456879.jpg',
              large:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505456879.jpg',
              medium:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505456879.jpg'
            },
            alt: 'https://movie.douban.com/subject/26985857/',
            id: '26985857'
          },
          {
            rating: {
              max: 10,
              average: 6.6,
              stars: '35',
              min: 0
            },
            genres: ['剧情', '冒险'],
            title: '七十七天',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1274286/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p823.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p823.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p823.jpg'
                },
                name: '江一燕',
                id: '1274286'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1326525/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509791481.95.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509791481.95.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509791481.95.jpg'
                },
                name: '赵汉唐',
                id: '1326525'
              }
            ],
            collect_count: 15071,
            original_title: '七十七天',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1326525/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509791481.95.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509791481.95.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509791481.95.jpg'
                },
                name: '赵汉唐',
                id: '1326525'
              }
            ],
            year: '2014',
            images: {
              small:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2503551480.jpg',
              large:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2503551480.jpg',
              medium:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2503551480.jpg'
            },
            alt: 'https://movie.douban.com/subject/26426026/',
            id: '26426026'
          },
          {
            rating: {
              max: 10,
              average: 8.4,
              stars: '45',
              min: 0
            },
            genres: ['剧情', '传记', '灾难'],
            title: '勇往直前',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1004568/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19753.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19753.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19753.jpg'
                },
                name: '乔什·布洛林',
                id: '1004568'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1313408/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1412746295.33.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1412746295.33.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1412746295.33.jpg'
                },
                name: '迈尔斯·特勒',
                id: '1313408'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1036313/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p387.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p387.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p387.jpg'
                },
                name: '杰夫·布里吉斯',
                id: '1036313'
              }
            ],
            collect_count: 7129,
            original_title: 'Only the Brave',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1313149/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p16126.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p16126.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p16126.jpg'
                },
                name: '约瑟夫·科辛斯基',
                id: '1313149'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506348908.jpg',
              large:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506348908.jpg',
              medium:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506348908.jpg'
            },
            alt: 'https://movie.douban.com/subject/26718828/',
            id: '26718828'
          },
          {
            rating: {
              max: 10,
              average: 6.7,
              stars: '35',
              min: 0
            },
            genres: ['动作', '科幻', '奇幻'],
            title: '正义联盟',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1054417/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7622.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7622.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7622.jpg'
                },
                name: '本·阿弗莱克',
                id: '1054417'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1044713/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371934661.95.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371934661.95.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371934661.95.jpg'
                },
                name: '亨利·卡维尔',
                id: '1044713'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1044996/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467908677.92.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467908677.92.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467908677.92.jpg'
                },
                name: '盖尔·加朵',
                id: '1044996'
              }
            ],
            collect_count: 109415,
            original_title: 'Justice League',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1031904/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23346.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23346.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23346.jpg'
                },
                name: '扎克·施奈德',
                id: '1031904'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2504027804.jpg',
              large:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2504027804.jpg',
              medium:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2504027804.jpg'
            },
            alt: 'https://movie.douban.com/subject/2158490/',
            id: '2158490'
          },
          {
            rating: {
              max: 10,
              average: 4.9,
              stars: '25',
              min: 0
            },
            genres: ['喜剧', '犯罪'],
            title: '这就是命',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1317139/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371453539.51.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371453539.51.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371453539.51.jpg'
                },
                name: '王迅',
                id: '1317139'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1002862/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1161.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1161.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1161.jpg'
                },
                name: '曾志伟',
                id: '1002862'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1340702/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1402633807.18.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1402633807.18.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1402633807.18.jpg'
                },
                name: '梁超',
                id: '1340702'
              }
            ],
            collect_count: 1304,
            original_title: '这就是命',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1335838/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1507906324.74.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1507906324.74.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1507906324.74.jpg'
                },
                name: '王丹',
                id: '1335838'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506823369.jpg',
              large:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506823369.jpg',
              medium:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506823369.jpg'
            },
            alt: 'https://movie.douban.com/subject/27037539/',
            id: '27037539'
          },
          {
            rating: {
              max: 10,
              average: 6.9,
              stars: '35',
              min: 0
            },
            genres: ['剧情'],
            title: '老兽',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1316856/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513070386.81.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513070386.81.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513070386.81.jpg'
                },
                name: '涂们',
                id: '1316856'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1372916/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512833235.0.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512833235.0.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512833235.0.jpg'
                },
                name: '王超北',
                id: '1372916'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1318468/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43893.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43893.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43893.jpg'
                },
                name: '王子子',
                id: '1318468'
              }
            ],
            collect_count: 3939,
            original_title: '老兽',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1376419/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501142966.89.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501142966.89.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501142966.89.jpg'
                },
                name: '周子阳',
                id: '1376419'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2507370070.jpg',
              large:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2507370070.jpg',
              medium:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2507370070.jpg'
            },
            alt: 'https://movie.douban.com/subject/26957500/',
            id: '26957500'
          },
          {
            rating: {
              max: 10,
              average: 7,
              stars: '35',
              min: 0
            },
            genres: ['剧情', '犯罪', '悬疑'],
            title: '东方快车谋杀案',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1036342/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43581.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43581.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43581.jpg'
                },
                name: '肯尼思·布拉纳',
                id: '1036342'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1005774/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2373.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2373.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2373.jpg'
                },
                name: '佩内洛普·克鲁兹',
                id: '1005774'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1010539/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9206.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9206.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9206.jpg'
                },
                name: '威廉·达福',
                id: '1010539'
              }
            ],
            collect_count: 100510,
            original_title: 'Murder on the Orient Express',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1036342/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43581.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43581.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43581.jpg'
                },
                name: '肯尼思·布拉纳',
                id: '1036342'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2502165084.jpg',
              large:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2502165084.jpg',
              medium:
                'http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2502165084.jpg'
            },
            alt: 'https://movie.douban.com/subject/25790761/',
            id: '25790761'
          },
          {
            rating: {
              max: 10,
              average: 0,
              stars: '00',
              min: 0
            },
            genres: ['剧情'],
            title: '邹碧华',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1276103/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29367.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29367.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29367.jpg'
                },
                name: '佟瑞欣',
                id: '1276103'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1313725/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20132.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20132.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20132.jpg'
                },
                name: '王诗槐',
                id: '1313725'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1314315/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pTI9kXjAMGTwcel_avatar_uploaded1353221024.96.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pTI9kXjAMGTwcel_avatar_uploaded1353221024.96.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pTI9kXjAMGTwcel_avatar_uploaded1353221024.96.jpg'
                },
                name: '刘小锋',
                id: '1314315'
              }
            ],
            collect_count: 78,
            original_title: '邹碧华',
            subtype: 'movie',
            directors: [],
            year: '2017',
            images: {
              small:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506257419.jpg',
              large:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506257419.jpg',
              medium:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506257419.jpg'
            },
            alt: 'https://movie.douban.com/subject/26866174/',
            id: '26866174'
          },
          {
            rating: {
              max: 10,
              average: 7.2,
              stars: '40',
              min: 0
            },
            genres: ['喜剧', '奇幻'],
            title: '羞羞的铁拳',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1350408/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437031126.82.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437031126.82.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437031126.82.jpg'
                },
                name: '艾伦',
                id: '1350408'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1319032/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1444800807.11.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1444800807.11.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1444800807.11.jpg'
                },
                name: '马丽',
                id: '1319032'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1325700/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356510694.28.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356510694.28.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356510694.28.jpg'
                },
                name: '沈腾',
                id: '1325700'
              }
            ],
            collect_count: 232902,
            original_title: '羞羞的铁拳',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1350407/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437031175.04.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437031175.04.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437031175.04.jpg'
                },
                name: '宋阳',
                id: '1350407'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1381643/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508159049.11.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508159049.11.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1508159049.11.jpg'
                },
                name: '张吃鱼',
                id: '1381643'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2499793218.jpg',
              large:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2499793218.jpg',
              medium:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2499793218.jpg'
            },
            alt: 'https://movie.douban.com/subject/27038183/',
            id: '27038183'
          },
          {
            rating: {
              max: 10,
              average: 0,
              stars: '00',
              min: 0
            },
            genres: ['历史', '纪录片'],
            title: '北平以北',
            casts: [],
            collect_count: 93,
            original_title: '北平以北',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1354567/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510059446.89.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510059446.89.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510059446.89.jpg'
                },
                name: '艾辛',
                id: '1354567'
              }
            ],
            year: '2017',
            images: {
              small:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506935277.jpg',
              large:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506935277.jpg',
              medium:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506935277.jpg'
            },
            alt: 'https://movie.douban.com/subject/27180871/',
            id: '27180871'
          },
          {
            rating: {
              max: 10,
              average: 8.2,
              stars: '40',
              min: 0
            },
            genres: ['剧情'],
            title: '不成问题的问题',
            casts: [
              {
                alt: 'https://movie.douban.com/celebrity/1051526/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1480174773.98.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1480174773.98.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1480174773.98.jpg'
                },
                name: '范伟',
                id: '1051526'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1275049/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1471171854.57.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1471171854.57.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1471171854.57.jpg'
                },
                name: '殷桃',
                id: '1275049'
              },
              {
                alt: 'https://movie.douban.com/celebrity/1325810/',
                avatars: {
                  small:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1415547909.6.jpg',
                  large:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1415547909.6.jpg',
                  medium:
                    'http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1415547909.6.jpg'
                },
                name: '张超',
                id: '1325810'
              }
            ],
            collect_count: 20896,
            original_title: '不成问题的问题',
            subtype: 'movie',
            directors: [
              {
                alt: 'https://movie.douban.com/celebrity/1275132/',
                avatars: {
                  small:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494087960.03.jpg',
                  large:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494087960.03.jpg',
                  medium:
                    'http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494087960.03.jpg'
                },
                name: '梅峰',
                id: '1275132'
              }
            ],
            year: '2016',
            images: {
              small:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504993947.jpg',
              large:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504993947.jpg',
              medium:
                'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504993947.jpg'
            },
            alt: 'https://movie.douban.com/subject/26657126/',
            id: '26657126'
          }
        ],
        title: '正在上映的电影-北京'
      }
      var setData = (function() {
        console.log('setData')
        var option = {
          title: {
            text: '你的书架',
            left: '50%',
            textAlign: 'center'
          },
          grid: {
            left: 0,
            right: 20,
            bottom: 100,
            top: 30
          },
          tooltip: {
            formatter: function(params) {
              if (params.componentSubType === 'pictorialBar') {
                return (
                  '书名：' +
                  params.name +
                  '</br> 书本Stars：' +
                  (params.value * 1 + 10).toFixed(1)
                )
              }
            }
          },
          xAxis: {
            data: []
          },
          yAxis: {
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            }
          },
          series: [
            {
              type: 'bar',
              barWidth: 1,
              data: [],
              animationDelay: function(idx) {
                return idx * 100
              }
            },
            {
              type: 'pictorialBar',
              symbolPosition: 'end',
              symbolRotate: 165,
              symbolOffset: ['20%', '100%'],
              data: [],
              animationDelay: function(idx) {
                return idx * 100 + 500
              }
            },
            {
              type: 'graph',
              data: [
                {
                  x: 0,
                  y: 0,
                  symbolSize: 0
                },
                {
                  name: 'btn',
                  x: 0,
                  y: 10,
                  symbolSize: 30
                }
              ],
              itemStyle: {
                normal: {
                  color: 'transparent',
                  borderWidth: 1,
                  borderColor: '#555'
                }
              }
            }
          ]
        }
        var mark = 1
        return function() {
          var pics = []
          for (var i = 0; i < d.subjects.length; i++) {
            pics.push({
              value: ((d.subjects[i].rating.average || 0.1) - 10).toFixed(1),
              symbol:
                'image://http://img3' + d.subjects[i].images.small.substr(11),
              symbolSize: ['48.75', '75'],
              name: d.subjects[i].title
            })
          }
          if (mark % 2 === 0) {
            pics.sort(function(a, b) {
              return ((mark / 2) | 0) % 2 === 0
                ? b.value - a.value
                : a.value - b.value
            })
          }
          option.series[0].data = pics
          option.series[1].data = pics
          self.chart.hideLoading()
          self.chart.setOption(option)
          mark++
        }
      })()
      setData()
      this.chart.on('click', function(params) {
        console.log(params)
        if (params.name === 'btn') {
          setData()
        }
      })
    }
  }
}
</script>
