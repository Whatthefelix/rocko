<template>
  <section class="section-2">
    <!-- dis should be green -->
    <div class="box-2">
    <h1> {{scrollY}}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'pageTwo',
  props: [
    'scrollY'
  ],
};
</script>

<style lang="scss" scoped>
  .section-2 {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
  }
  .box-2 {
    background-color: blue;
    width: 600px;
    height: 400px;
  }
  h1{
    color: white;
  }
</style>
<!-- <template>
  <div class="pageTwo" ref="page">
    <div class="parallax" ref="parallax">
      <h1>Page 2</h1>
      {{scrollY}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'pageTwo',
  props: [
    'scrollY'
  ],
  data() {
    return {
      offset: 0
    };
  },
  mounted() {
    // const rect = this.$refs.page.getBoundingClientRect();
    // console.dir(rect);
    // this.offset = this.$refs.page.offsetTop - this.$refs.page.offsetHeight;
    // this.offset = this.$refs.page.getBoundingClientRect();
    this.offset = this.$refs.page.offsetTop - this.$refs.page.offsetHeight;
    // this.offset = 200;
    console.dir(this.$refs.page);
  },
  watch: {
    scrollY(value) {
      // this is what controls the scroll
      this.$refs.parallax.style.backgroundPositionY = `${((value / 2) * -1) + this.offset}px`;
      // this.$refs.parallax.style.backgroundPositionY = `${value + (this.offset / 2)}`;
      // this.$refs.parallax.style.backgroundPositionY = `${((value) * -1) + 800 + this.offset}px`;
    }
  },
};

</script>

<style lang="scss" scoped>

.pageTwo {
  position: relative;
  height: 400px;
  margin: 850px 0;
  margin-top: 0px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: green;
  .parallax{
    background-image: url("../assets/images/homepage-dieci.jpg");
    background-repeat: repeat;
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