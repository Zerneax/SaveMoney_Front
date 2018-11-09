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
      typeDepense: [
        {"text":"Loisir", "value": "Loisir"},
        {"text":"Vie Quotidienne", "value":"Vie Quotidienne"},
        {"text":"Habitation", "value": "Habitation"},
        {"text":"Santé", "value": "Santé"},
        {"text":"Transport", "value": "Transport"},
        {"text":"Animaux", "value": "Animaux"}
        ],
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
      },
      bar: {
        title: {
          text: 'Type de dépense'
        },
        xAxis: {
          type: 'category',
          data: ['Loi', 'Vie', 'Hab', 'San', 'Tra', 'Ani']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [],
          type: 'bar'
        }]
      }
    };
  },
  created() {
    //do something after creating vue instance
    this.jauge.series[0].max = this.maxJauge;
    this.updateJauge();
    this.updateBar();
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
    updateBar() {
      this.bar.series[0].data= [];
      let loisir = 0, vieQutodienne = 0, habitation = 0, sante = 0, transport = 0, animaux = 0;
      for(var i = 0; i < this.depenses.length; i ++) {
        if("Loisir" === this.depenses[i].type)
          loisir += Number(this.depenses[i].montant);
        else if ("Vie Quotidienne" === this.depenses[i].type)
          vieQutodienne += Number(this.depenses[i].montant);
        else if ("Habitation" === this.depenses[i].type)
          habitation += Number(this.depenses[i].montant);
        else if ("Santé" === this.depenses[i].type)
          sante += Number(this.depenses[i].montant);
        else if ("Transport" === this.depenses[i].type)
          transport += Number(this.depenses[i].montant);
        else
          animaux += Number(this.depenses[i].montant);
      }

      this.bar.series[0].data.push(loisir);
      this.bar.series[0].data.push(vieQutodienne);
      this.bar.series[0].data.push(habitation);
      this.bar.series[0].data.push(sante);
      this.bar.series[0].data.push(transport);
      this.bar.series[0].data.push(animaux);

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

        if(this.activeTab == 0) {
          this.depenses.push(Object.assign({},this.newLigne));
          this.updateBar();
        } else
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
