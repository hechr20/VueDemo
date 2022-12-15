<template>
    <div>
      <v-container>
        <v-row>
          <!-- mini statistic start -->
          <v-col :cols="12" :sm="6" :lg="3">
          <mini-statistic-card
            icon="mdi-facebook"
            title="100+"
            sub-title="Likes"
            color="indigo"
          />
          </v-col>
          <v-col :cols="12" :sm="6" :lg="3">
          <mini-statistic-card
            icon="mdi-google"
            title="150+"
            sub-title="Connections"
            color="red"
          />
          </v-col>
          <v-col :cols="12" :sm="6" :lg="3">
          <mini-statistic-card
            icon="mdi-twitter"
            title="200+"
            sub-title="Followers"
            color="light-blue"
          />
          </v-col>
          <v-col :cols="12" :sm="6" :lg="3">
          <mini-statistic-card
            icon="mdi-linkedin"
            title="50+"
            sub-title="connections"
            color="black"
          />
          </v-col>
          <!-- mini statistic  end -->
          <!-- charts  -->
          <v-col :lg="8" :sm="12" :cols="12">
            <v-card tile>
              <v-toolbar flat>
                <v-toolbar-title>Site Traffic</v-toolbar-title>
                <v-btn slot="widget-header-action" icon>
                  <v-icon class="text--secondary">mdi-refresh</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <bar-line-chart style="height:300px;width:100%;"
                :option="graphData"
                />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col :lg="4" :sm="12" :cols="12">
            <v-card tile>
              <v-toolbar flat>
                <v-toolbar-title>Top Location</v-toolbar-title>
                <v-btn slot="widget-header-action" icon>
                  <v-icon class="text--secondary">mdi-refresh</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <pie-chart 
                  style="height:300px;width:100%;"
                  :option="pieData"
                />
              </v-card-text>
            </v-card>
          </v-col>
          <!-- charts end -->
          </v-row>  
          <v-row>
          <!-- statistic section -->
          <v-col
            v-for="(item, index) in linearTrending"
            :key="'l-trending' + index"
            :lg="3"
            :sm="12"
            :cols="12"
          >
            <linear-statistic-card
              :title="item.subheading"
              :sub-title="item.caption"
              :icon="item.icon.label"
              :color="item.icon.color"
              :value="item.linear.value"
            />
          </v-col>
          </v-row>  
          <v-row>
          <!-- statistic section end -->
          <!-- Circle statistic -->
          <v-col
            v-for="(item, index) in trending"
            :key="'c-trending' + index"
            :lg="4"
            :sm="6"
            :cols="12"
          >
            <circle-statistic-card
              :title="item.subheading"
              :sub-title="item.headline"
              :caption="item.caption"
              :icon="item.icon.label"
              :color="item.linear.color"
              :value="item.linear.value"
            />
          </v-col>
          <!-- acitivity -->
          <v-col :lg="12" :sm="12" :cols="12">
            <v-card tile>
              <v-card-title>Activities</v-card-title>
              <v-divider />
              <v-card-text>
                <v-timeline align-top dense>
                  <v-timeline-item
                    v-for="(item, index) in activity"
                    :key="index"
                    :color="item.color"
                    small
                  >
                    <v-row class="pt-1">
                      <v-col cols="3">
                        <strong>{{ item.timeString }}</strong>
                      </v-col>
                      <v-col>
                        <strong>{{item.headline}}</strong>
                        <div>{{ item.text }}</div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  //https://github.com/tookit/vue-material-admin/tree/master/src/api

  import DemoData from '@/demodata'
  import AccountCard from '@/components/card/AccountCard.vue';
  import PieChart from '@/components/charts/PieChart.vue';
  import BarLineChart from '@/components/charts/BarLineChart.vue';
  import Material from 'vuetify/lib/util/colors'
  import MiniStatisticCard from '@/components/card/MiniStatisticCard'
  import CircleStatisticCard from '@/components/card/CircleStatisticCard'
  import LinearStatisticCard from '@/components/card/LinearStatisticCard'

  export default {
  name: 'PageDashboard',
  components: {
    AccountCard,
    PieChart,
    BarLineChart,
    MiniStatisticCard,
    CircleStatisticCard,
    LinearStatisticCard
  },
  data: () => ({
    graphData:{
    },
    pieData:{
    },
    color: Material,
    linearTrending: [
    ],
    trending: [
    ]
  }),
  computed: {
    activity() {
      return [
        {
          timeString: '10-10-2022',
          color: 'primary',
          headline:'Project 1, task 2',
          text: 'Task ended.'
        },
        {
          timeString: '09-10-2022',
          color: 'teal',
          headline:'Project 1, task 2',
          text: 'Task started.'
        },
        {
          timeString: '09-10-2022',
          color: 'indigo',
          headline:'Project 2, task 1',
          text: 'Task ended.'
        },
        {
          timeString: '09-10-2022',
          color: 'pink',
          headline:'Project 2, task 1',
          text: 'Task started.'
        },
        {
          timeString: '01-10-2022',
          color: 'cyan',
          headline:'Project 2, task 2',
          text: 'Task ended'
        }
      ]
    },
    siteTrafficData() {
      return DemoData.getMonthVisit
    },
    locationData() {
      return DemoData.getLocation
    }
  },
  methods:{
    setGraphdata(){
      let xAxisData =DemoData.getMonths
      let uniqueData = DemoData.getMonthUniqueVisit
      let allData = DemoData.getMonthVisit
      const allMin = this.getMin(allData)
      const allMax = this.getMax(allData)
      this.graphData= {
            title: {
            text: 'Traffic',
            subtext: 'Fake Data'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['All', 'Unique']
          },
          toolbox: {
            show: true,
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          xAxis: [
            {
              type: 'category',
              // prettier-ignore
              data: xAxisData
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          calculable: true,
          series: [
            {
              name: 'Unique',
              type: 'bar',
              data: uniqueData,
              markPoint: {
                data: [
                  { type: 'max', name: 'Max' },
                  { type: 'min', name: 'Min' }
                ]
              },
              markLine: {
                data: [{ type: 'average', name: 'Avg' }]
              }
            },
            {
              name: 'All',
              type: 'bar',
              data: allData,
              markPoint: {
                data: [
                  { name: 'Max', value: 11, xAxis: 7, yAxis: allMax+10 },
                  { name: 'Min', value: allMin, xAxis: 11, yAxis: allMin }
                ]
              },
              markLine: {
                data: [{ type: 'average', name: 'Avg' }]
              }
            }
          ]      
      }      
    },
    getMin(data){
      return Math.max.apply(Math, data);
    },
    getMax(data){
      return Math.min.apply(Math, data);
    },
    setPieData(){
      this.pieData= {
      title: {
        text: "",
        left: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "horizontal",
        left: "left",
        data: [
          "Denmark",
          "Sweden",
          "Norway",
          "Finland",
          "Others"
        ]
      },
      series: [
        {
          name: "Traffic Sources",
          type: "pie",
          radius: "50%",
          center: ["50%", "60%"],
          data: [
            { value: 335, name: "Norway" },
            { value: 310, name: "Sweden" },
            { value: 234, name: "Finland" },
            { value: 135, name: "Others" },
            { value: 1548, name: "Denmark" }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    }

    },
    setLinearData(){
      const salesData =  Math.floor(Math.random() * 100)
      const revenueData =  Math.floor(Math.random() * 100)
      const ordersData =  Math.floor(Math.random() * 100)
      const costData =  Math.floor(Math.random() * 100)
      this.linearTrending= [
      {
        subheading: 'Sales',
        caption: 'increase',
        percent: salesData,
        icon: {
          label: 'mdi-trending-up',
          color: 'success'
        },
        linear: {
          value: salesData,
          color: 'success'
        }
      },
      {
        subheading: 'Revenue',
        caption: 'increase',
        percent: revenueData,
        icon: {
          label: 'mdi-trending-down',
          color: 'error'
        },
        linear: {
          value: revenueData,
          color: 'error'
        }
      },
      {
        subheading: 'Orders',
        caption: 'increase',
        percent: ordersData,
        icon: {
          label: 'mdi-arrow-up',
          color: 'info'
        },
        linear: {
          value: ordersData,
          color: 'info'
        }
      },
      {
        subheading: 'Cost',
        caption: 'increase',
        percent: costData,
        icon: {
          label: 'mdi-trending-down',
          color: 'error'
        },
        linear: {
          value: costData,
          color: 'error'
        }
      },
    ]
    },
    setTrending(){
      const riskData =  Math.floor(Math.random() * 100)
      const taskData =  Math.floor(Math.random() * 100)
      const issueData =  Math.floor(Math.random() * 100)
      this.trending= [
      {
        subheading: 'Risks',
        headline: '15+',
        caption: 'Risks opens',
        percent: riskData,
        icon: {
          label: 'mdi-alert',
          color: 'info'
        },
        linear: {
          value: riskData,
          color: 'info'
        }
      },
      {
        subheading: 'Tasks',
        headline: '90%',
        caption: 'tasks completed.',
        percent: taskData,
        icon: {
          label: 'mdi-view-list',
          color: 'primary'
        },
        linear: {
          value: taskData,
          color: 'success'
        }
      },
      {
        subheading: 'Issues',
        headline: '100%',
        caption: 'issues fixed.',
        percent: issueData,
        icon: {
          label: 'mdi-bug',
          color: 'primary'
        },
        linear: {
          value: issueData,
          color: 'error'
        }
      }
    ]
    }
  },
  created() {
      this.setGraphdata();
      this.setPieData();
      this.setLinearData();
      this.setTrending();
  },
}

  </script>