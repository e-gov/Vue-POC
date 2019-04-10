Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.nimi }}</li>'
})

new Vue({
  el: '#kandideerimine',
  data: {
    vorm: {
      nimi: ''
    }
  }
});

var app7 = new Vue({
  el: '#kandidaadid',
  data: {
    kandidaatideNimekiri: [
      { ik: 0, nimi: 'Priit' },
      { ik: 1, nimi: 'Jüri' },
      { ik: 2, nimi: 'Mari' }
    ]
  }
});

Vue.config.devtools = true;
