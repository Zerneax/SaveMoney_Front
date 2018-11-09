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
      ajoutLigne: false,
      iconJauge: 'meh',
      colorIconJauge: 'blue',
      messageJauge: 'La situation est stable',
      typeDepense: [{"text":"Loisir", "value": "Loisir"}, {"text":"Vie Quotidienne", "value":"Vie Quotidienne"}],
      depenses: [
        {"date": '10/10/1980',"montant": 51, "description": 'Transpole', "type": "Transport"},
        {"date": '11/10/1980',"montant": 245, "description": 'Assurance Habitation', "type": "Habitation"},
        {"date": '13/10/1980',"montant": 10, "description": 'Carrefour', "type": "Vie Quotidienne"}],
      revenus: [
        {"date": '10/10/1980',"montant": 2000, "description": 'salaire'},
        {"date": '11/10/1980',"montant": 20, "description": 'mutuelle'},
        {"date": '13/10/1980',"montant": 10, "description": 'virement'}],
      newLigne: {
        "date": '',
        "montant": 0,
        "description": '',
        "type": null
      },
      maxJauge: 2000,
      activeTab: 0,
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
            name: 'Budget',
            type: 'gauge',
            axisLine: {
                lineStyle: {
                    color: [[0.20, 'red'],[0.60, 'blue'],[1, 'green']]
                }
            },
            detail: {formatter: '{value}€'},
            data: [{value: 50, name: 'Budget'}]
          }
        ]
      }
    };
  },
  created() {
    //do something after creating vue instance
    this.jauge.series[0].max = this.maxJauge;
    this.updateJauge();
  },
  methods: {
    updateJauge() {
        let sumDepenses = 0;
        let sumRevenus = 0;
        for(var i = 0; i < this.depenses.length; i ++)
          sumDepenses += Number(this.depenses[i].montant);
        for(var i = 0; i < this.revenus.length; i ++)
          sumRevenus += Number(this.revenus[i].montant);

        let diff = sumRevenus - sumDepenses;
        this.jauge.series[0].data[0].value = diff;

        let pourcent = (diff * 100) / this.maxJauge;
        if(pourcent < 20) {
          this.iconJauge= 'frown';
          this.colorIconJauge= 'red';
          this.messageJauge= 'La situation devient critique';
        } else if (pourcent >=20 && pourcent < 60) {
          this.iconJauge= 'meh';
          this.colorIconJauge= 'blue';
          this.messageJauge= 'La situation est stable';
        } else {
          this.iconJauge= 'smile';
          this.colorIconJauge= 'green';
          this.messageJauge= 'La situation est favorable';
        }

    },
    ajouterLigne() {
      if(this.ajoutLigne == false) {
        // RAZ
        this.newLigne.date='';
        this.newLigne.montant=0;
        this.newLigne.description='';
        this.newLigne.type= null;
        this.ajoutLigne = true;
      }else {
        this.ajoutLigne = false;

        if(this.activeTab == 0)
          this.depenses.push(Object.assign({},this.newLigne));
        else
          this.revenus.push(
            Object.assign({},
              {"date": this.newLigne.date},
              {"montant": this.newLigne.montant},
              {"description": this.newLigne.description}
          ));

        this.updateJauge();
      }

    }
  }
}
