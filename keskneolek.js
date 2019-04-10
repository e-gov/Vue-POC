var yhisolek = {
  debug: true,
  olek: {
    kandidaadid: []
  },
  lisaKandidaat (nr, k) {
    if (this.debug) console.log('lisaKandidaat: ', k)
    this.olek.kandidaadid.push({ nr: nr, nimi: k});
  },
  kustutaKandidaadid () {
    if (this.debug) console.log('kustutaKandidaadid:')
    this.olek.kandidaadid = [];
  }
}

/* Sündmustesiin
   Praegu ei kasuta.
*/
const eventBus = new Vue();

Vue.component('kandidaadi-kirje', {
  props: ['k'],
  template: '<li class="card-panel grey lighten-5 z-depth-1">{{ k.nr }} {{ k.nimi }}</li>'
})

var vmA = new Vue({
  el: '#lisaKandidaat',
  data: {
    loendur: 0,
    yhisOlek: yhisolek.olek
  },
  methods: {
    lisaKandidaat: function () {
      this.$data.loendur += 1;
      yhisolek.lisaKandidaat(this.$data.loendur, 'Priit');
    }
  }
})

var vmB = new Vue({
  el: '#kuvaKandidaadid',
  data: {
    privateolek: {},
    kandidaadid: yhisolek.olek.kandidaadid
  },
  methods: {
    kustutaKandidaadid: function () {
      yhisolek.kustutaKandidaadid();
    }
  }
})
