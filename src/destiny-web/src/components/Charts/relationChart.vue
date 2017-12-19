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
      default: 'chart_relation'
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
      this.chart = echarts.init(document.getElementById(this.id))
      var option = {
        title: {
          text: '上古官二代'
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 18
            }
          }
        },
        legend: {
          x: 'center',
          data: ['三皇五帝', '夏', '商', '周', '春秋战国', '秦汉']
        },
        series: [
          {
            type: 'graph',
            layout: 'force',
            symbolSize: 60,
            focusNodeAdjacency: true,
            roam: true,
            categories: [
              {
                name: '三皇五帝'
              },
              {
                name: '夏'
              },
              {
                name: '商'
              },
              {
                name: '周'
              },
              {
                name: '春秋战国'
              },
              {
                name: '秦汉'
              }
            ],
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 18
                }
              }
            },
            force: {
              repulsion: 2000
            },
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 18
                },
                formatter: '{c}'
              }
            },
            data: [
              {
                name: '神农',
                category: 0
              },
              {
                name: '伏羲',
                category: 0
              },
              {
                name: '蚩尤',
                category: 0
              },
              {
                name: '黄帝',
                category: 0,
                symbol:
                  'image://http://louruyue.notbad.cn/uploadimage/pic_201251143747.jpg'
              },

              {
                name: '颛顼',
                category: 0,
                draggable: true
              },
              {
                name: '帝喾',
                category: 0,
                draggable: true
              },
              {
                name: '尧',
                category: 0,
                draggable: true
              },

              {
                name: '舜',
                category: 0,
                draggable: true
              },
              {
                name: '禹',
                category: 1,
                draggable: true
              },

              {
                name: '夏桀',
                category: 1,
                draggable: true
              },
              {
                name: '契',
                category: 2,
                draggable: true
              },
              {
                name: '商汤',
                category: 2,
                draggable: true
              },
              {
                name: '纣王',
                category: 2,
                draggable: true
              },
              {
                name: '姬发',
                category: 3,
                draggable: true
              },
              {
                name: '姬昌',
                category: 3,
                draggable: true
              },
              {
                name: '后稷',
                category: 3,
                draggable: true
              }
            ],
            links: [
              {
                source: '黄帝',
                target: '颛顼',
                value: '孙子',
                lineStyle: {
                  normal: {
                    color: 'red'
                  }
                }
              },
              {
                source: '黄帝',
                target: '帝喾',
                value: '太孙'
              },
              {
                source: '颛顼',
                target: '禹',
                value: '爷孙'
              },
              {
                source: '颛顼',
                target: '舜',
                value: '8世孙'
              },
              {
                source: '颛顼',
                target: '帝喾',
                value: '让位',
                lineStyle: {
                  normal: {
                    color: 'red',
                    type: 'dotted'
                  }
                }
              },
              {
                source: '帝喾',
                target: '尧',
                value: '儿子',
                lineStyle: {
                  normal: {
                    color: 'red'
                  }
                }
              },
              {
                source: '尧',
                target: '舜',
                value: '禅让',
                lineStyle: {
                  normal: {
                    color: 'red',
                    type: 'dotted'
                  }
                }
              },
              {
                source: '舜',
                target: '禹',
                value: '禅让',
                lineStyle: {
                  normal: {
                    color: 'red',
                    type: 'dotted'
                  }
                }
              },
              {
                source: '禹',
                target: '夏桀',
                value: 'n代世袭',
                lineStyle: {
                  normal: {
                    color: 'red'
                  }
                }
              },
              {
                source: '商汤',
                target: '夏桀',
                value: '商汤灭夏',
                lineStyle: {
                  normal: {
                    color: 'red',
                    type: 'dotted'
                  }
                }
              },
              {
                source: '商汤',
                target: '纣王',
                value: 'n代世袭',
                lineStyle: {
                  normal: {
                    color: 'red'
                  }
                }
              },
              {
                source: '姬发',
                target: '纣王',
                value: '武王伐纣',
                lineStyle: {
                  normal: {
                    color: 'red',
                    type: 'dotted'
                  }
                }
              },
              {
                source: '帝喾',
                target: '后稷',
                value: '父子,'
              },
              {
                source: '后稷',
                target: '姬昌',
                value: '16世孙,'
              },
              {
                source: '姬昌',
                target: '姬发',
                value: '父子'
              },

              {
                source: '黄帝',
                target: '神农',
                value: '使臣服'
              },
              {
                source: '黄帝',
                target: '蚩尤',
                value: '战胜'
              },
              {
                source: '黄帝',
                target: '伏羲',
                value: '?'
              },
              {
                source: '帝喾',
                target: '契',
                value: '父子'
              },
              {
                source: '契',
                target: '商汤',
                value: '14世孙'
              }
            ],
            lineStyle: {
              normal: {
                opacity: 0.7,
                width: 1,
                curveness: 0.1
              }
            }
          }
        ]
      }
      this.chart.setOption(option)
    }
  }
}
</script>
