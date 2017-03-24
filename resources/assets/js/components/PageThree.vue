<template>
  <section class="section-3">
    <!-- dis should be green -->
    <div class="box-3">
    <h1>{{scrollY}}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'pageThree',
  props: [
    'scrollY'
  ],
};
</script>

<style lang="scss" scoped>
  .section-3 {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
  }
  .box-3 {
    background-color: red;
    width: 600px;
    height: 400px;
  }
  h1 {
    color: white;
  }
</style>
<!-- <template>
  <div class="pageThree">
    <h1>Page 3</h1>
    <div class="img">
      <img src="https://www.canadadrives.ca/uploads/2017/1/5887af94b0530.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageThree',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.pageThree {
    height: 800px;
    margin: 150px 0;
    background-color: green;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  .img {
    width: 780px;
    margin: auto;
    img{
      width: 100%;
    }
  }
}
</style>
 -->