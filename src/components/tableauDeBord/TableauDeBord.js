import IEcharts from 'vue-echarts-v3/src/full.js'

export default {
  name: 'TableauDeBord',
  props: {
    msg: String
  },
  components: {
    IEcharts
  },
  data() {
    return {
      depenses: [
        {"date": '10/10/1980',"montant": 20, "description": 'test 1'},
        {"date": '11/10/1980',"montant": 60, "description": 'test 2'},
        {"date": '13/10/1980',"montant": 10, "description": 'test 3'}],
      revenus: [
        {"date": '10/10/1980',"montant": 2000, "description": 'salaire'},
        {"date": '11/10/1980',"montant": 20, "description": 'mutuelle'},
        {"date": '13/10/1980',"montant": 10, "description": 'virement'}],
      maxJauge: 2000,
      jauge: {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}€'
        },
        toolbox: {
          show: false,
          feature: {
            mark: {show: true},
            restore: {show: false},
            saveAsImage: {show: false}
          }
        },
        series: [
          {
            name: 'Temp',
            type: 'gauge',
            axisLine: {
                lineStyle: {
                    color: [[0.20, 'red'],[0.60, 'blue'],[1, 'green']]
                }
            },
            detail: {formatter: '{value}€'},
            data: [{value: 50, name: 'Temperature'}]
          }
        ]
      }
    };
  },
  created() {
    //do something after creating vue instance
    this.jauge.series[0].max = this.maxJauge;
    this.initJauge();
  },
  methods: {
    initJauge() {
        let sumDepenses = 0;
        let sumRevenus = 0;
        for(var i = 0; i < this.depenses.length; i ++)
        {
          sumDepenses += this.depenses[i].montant;
        }
        for(var i = 0; i < this.revenus.length; i ++)
          sumRevenus += this.revenus[i].montant;

        this.jauge.series[0].data[0].value = sumRevenus - sumDepenses;
    }
  }
}
