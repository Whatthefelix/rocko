<template>
  <section class="section-1">
    <!-- dis should be blue -->
    <div class="box-1" @mouseover="show = true" @mouseleave="show = false" ref="box">
    <div class="second-name"> Second Name transition</div>
    <span class="name">name</span>


<!--       <transition name="fade">
        <div class="hovered-content" v-if="show">
          <div class="fade-to-middle">Second Name</div>
        </div>
      </transition> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'landing',
  data () {
    return {
      show: true
    };
  }
};
</script>

<style lang="scss" scoped>
  .section-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .box-1 {
    background-color: green;
    width: 600px;
    height: 400px;
    display: flex;
    flex-wrap: wrap;

    &:hover {
      .name {
        transform: translateY(-175px);
      }
      .second-name {
        opacity: 1;
        transform: translateY(200px);
      }
    }
  }
  .name, .second-name {
    width: 100%;
    transition: all 2s ease;
  }
  .hovered-content {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;

  }

  .second-name {
    opacity: 0;
  }
  // .name-enter-active, .fade-leave-active {
  //   transition: opacity .5s ease;
  // }
  // .name-enter, .name-leave-to {
  //   opacity: 0;
  // }
  // .fade-enter-active, .fade-leave-active {
  //   transition: opacity .5s ease;
  // }
  // .fade-enter, .fade-leave-to
  // /* .component-fade-leave-active for <2.1.8 */ {
  //   opacity: 0;
  // }
</style>
<!-- <template>
  <div class="landing">
    <div class="parallax" ref="parallax">
      <h1>Page 1</h1>
      {{scrollY}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'landing',
  props: [
    'scrollY'
  ],
  watch: {
    scrollY(value) {
      this.$refs.parallax.style.backgroundPositionY = `${(value / 2) * -1}px`;
    }
  },
};

</script>


<style lang="scss" scoped>

.landing {
  position: relative;
  height: 400px;
  margin: 600px 0;
  margin-top: 0px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: green;
  .parallax{
    background-image: url("../assets/images/homepage-dieci.jpg");
    background-repeat: no-repeat;
    background-position: center cover;
    background-size: 100%;
    background-attachment: fixed;
    top: 0;
    width: 100vw;
    height: 100vw;
    z-index: 3;
    opacity: .75;
  }
}

</style>
 -->