<template>
  <div class="box-container">
    <div class="square-1" :class="{'active':activeIndex===0}" @click="clickFunction(1)"></div>
    <div class="square-2" :class="{'active':activeIndex===1}" @click="clickFunction(2)"></div>
    <div class="square-3" :class="{'active':activeIndex===2}" @click="clickFunction(3)"></div>
  </div>
</template>

<script>
import scrollToElement from 'scroll-to-element';

export default {
  name: 'tracker',
  props: [
    'scrollY',
  ],
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    clickFunction(index) {
      scrollToElement(`.section-${index}`);
    }
  },
  created() {
    console.log('scroll to element');
    console.dir(scrollToElement);
  },
  watch: {
    scrollY(value) {
      console.log(value);
      if (value < 645) {
        this.activeIndex = 0;
      } else if (value >= 645 && value < 2015) {
        this.activeIndex = 1;
      } else if (value >= 2015) {
        this.activeIndex = 2;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.box-container {
  position: fixed;
  top: 0;
  left: 15px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
.square-1, .square-2, .square-3 {
  width: 10px;
  height: 10px;
  background-color: grey;
  display: block;
  margin: 10px auto;
  &:hover {
    cursor: pointer;
  }
}
.active {
  background-color: white;
}
</style>