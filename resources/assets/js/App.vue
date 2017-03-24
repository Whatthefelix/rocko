<template>
  <div @scroll="scrollFunction">
  <!-- @scroll == v-on:scroll="scrollFunction" -->
    <landing :scroll-y="scrolled" ref="landing"></landing>
    <page-two :scroll-y="scrolled"></page-two>
    <page-three :scroll-y="scrolled"></page-three>
    <tracker :scroll-y="scrolled"></tracker>
    <right-menu></right-menu>
  </div>
</template>

<script>
import Landing from './components/Landing';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import Tracker from './components/Tracker';
import RightMenu from './components/RightMenu';

export default {
  name: 'app',
  data() {
    return {
      scrolled: false,
    };
  },
  components: {
    Landing,
    PageTwo,
    PageThree,
    Tracker,
    RightMenu
  },
  methods: {
    scrollFunction() {
      // console.log('landing');
      // console.dir(this.$refs.landing.$refs.box);
  //    console.log(window.innerHeight); // size of browser
//      console.log(document.body.clientHeight); // size of document
      this.scrolled = window.scrollY;
      let percentage = (window.scrollY + window.innerHeight) / document.body.clientHeight
      // 1 = bottom
      // 0 = top
      console.log(percentage)

      if (percentage >= 0.55) {
        document.getElementById('app').style.backgroundColor = 'yellow';
        document.getElementById('app').style.transition = 'background-color 900ms linear';
      } if (percentage >= 0.84) {
        document.getElementById('app').style.backgroundColor = '#f8eee1';
        document.getElementById('app').style.transition = 'background-color 900ms linear';
      } else if (percentage < 0.55) {
        document.getElementById('app').style.backgroundColor = 'black';
        document.getElementById('app').style.transition = 'background-color 900ms linear';
      }

      // if (this.scrolled >= 645) {
      //   document.getElementById('app').style.backgroundColor = 'yellow';
      //   document.getElementById('app').style.transition = 'background-color 900ms linear';
      // } if (this.scrolled >= 2015) {
      //   document.getElementById('app').style.backgroundColor = '#f8eee1';
      //   document.getElementById('app').style.transition = 'background-color 900ms linear';
      // } else if (this.scrolled < 645) {
      //   document.getElementById('app').style.backgroundColor = 'black';
      //   document.getElementById('app').style.transition = 'background-color 900ms linear';
      // }
    },
  },
  mounted() { // on ready
    window.addEventListener('scroll', this.scrollFunction);
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
}
</style>
