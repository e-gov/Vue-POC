
var yhisolek = {
  debug: true,
  olek: {
    etapp: {
      nr: 0,
      nimetus: 'valimisi ei ole välja kuulutatud'
    },
    kandidaadid: []
    /*
      {
        nr: number,
        eesnimi: string,
        pnimi: string,
        ik: number,
        epost: epost,
        haali: number
      },
    */
  },
  lisaKandidaat(k) {
    if (this.debug) {
      console.log('lisaKandidaat: ', JSON.stringify(k));
    }
    var abi = k;
    abi.haali = 0;
    this.olek.kandidaadid.push(abi);
  },
  kustutaKandidaadid() {
    if (this.debug) console.log('kustutaKandidaadid:')
    this.olek.kandidaadid = [];
  },
  suleYlesseadmine() {
    this.olek.etapp = etapid.e3;
    console.log('kandidaatide ülesseadmine suletud');
  }
}

/* Sündmustesiin. Praegu ei kasuta.
*/
const eventBus = new Vue();

/* Juhtriba */
var vmJ = new Vue({
  el: '#juhtriba',
  data: {
    minuyhisolek: yhisolek,
    etapid: {
      0: 'valimisi ei ole välja kuulutatud',
      1: 'valimised on väljakuulutatud',
      2: 'käib kandidaatide ülesseadmine',
      3: 'kandidaatide ülesseadmine on lõppenud',
      4: 'käib hääletamine',
      5: 'hääletamine on lõppenud',
      6: 'valimistulemus on avaldatud',
      7: 'valimised on tühistatud'
    },
    toimingud: [
      {
        nr: 0, nimetus: 'Kuuluta valimised välja',
        lubatud: true, avab: [1, 6], etapp: 1
      },
      {
        nr: 1, nimetus: 'Ava kandidaatide ülesseadmine',
        lubatud: true, avab: [2], etapp: 2
      },
      {
        nr: 2, nimetus: 'Sule kandidaatide ülesseadmine',
        lubatud: false, avab: [3], etapp: 3
      },
      {
        nr: 3, nimetus: 'Ava hääletamine',
        lubatud: false, avab: [4], etapp: 4
      },
      {
        nr: 4, nimetus: 'Sule hääletamine',
        lubatud: false, avab: [5], etapp: 5
      },
      {
        nr: 5, nimetus: 'Avalda tulemused',
        lubatud: false, avab: [0], etapp: 6
      },
      {
        nr: 6, nimetus: 'Tühista valimised',
        lubatud: false, avab: [0], etapp: 7
      }
    ]
  },
  methods: {
    teeToiming: function (toiming) {
      if (toiming.lubatud) {
        toiming.lubatud = false;
        console.log('Keelan toimingu: ', toiming.nr);
        /* Erijuht: Tühista valimised */
        if (toiming.nr == 6) {
          this.$data.toimingud.forEach((t, i) => { 
            // console.log(JSON.stringify(t));
            this.$data.toimingud[i].lubatud = false;
          });  
        }
        this.$data.toimingud[toiming.nr].avab.forEach((t) => {
          this.$data.toimingud[t].lubatud = true;
          console.log('Luban toimingu: ', t);
        });
        yhisolek.olek.etapp = {
          nr: toiming.etapp,
          nimetus: this.$data.etapid[toiming.etapp]
        };
      }
    }
  }
});

/* Etapp */
var vmE = new Vue({
  el: '#etapp',
  data: {
    minuyhisolek: yhisolek
  }
});

/* Kandidaadi kirje */
Vue.component('kandidaadi-kirje', {
  props: ['k'],
  template: '<li class="card-panel grey lighten-5 z-depth-1">' +
    '{{ k.nr }} {{ k.eesnimi }} {{ k.pnimi }} ' +
    '{{ k.ik }} {{ k.epost }}</li>'
})

var vmA = new Vue({
  el: '#lisaKandidaat',
  data: {
    loendur: 0,
    yhisolek: yhisolek
  },
  methods: {
    lisaKandidaat: function () {
      this.$data.loendur += 1;
      var en = document.getElementById('eesnimi').value;
      var pn = document.getElementById('pnimi').value;
      var ik = document.getElementById('isikukood').value;
      var epost = document.getElementById('epost').value;
      yhisolek.lisaKandidaat(
        {
          nr: this.$data.loendur,
          eesnimi: en,
          pnimi: pn,
          ik: ik,
          epost: epost
        }
      );
    },
    suleYlesseadmine: function () {
      yhisolek.suleYlesseadmine();
    }
  }
})

var vmB = new Vue({
  el: '#kuvaKandidaadid',
  data: {
    privateolek: {},
    yhisolek: yhisolek
  },
  methods: {
    kustutaKandidaadid: function () {
      yhisolek.kustutaKandidaadid();
    }
  }
})
