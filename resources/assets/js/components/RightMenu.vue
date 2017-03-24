<template>
  <div class="menu">
    <div class="right-menu"  >
      <div class="x-container" :class="{ open : isOpen }" @click="show= !show; isOpen= !isOpen">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="modal-container" ref="container">
      <div v-show="show" class="modal-backdrop" @click="show= !show; isOpen= !isOpen"></div>
      <transition name="modal">
        <div class="modal card" v-show="show">
          <div class="modal-title">
            <ul>
              <li><a href="/link">Link to next page</a></li>
              <li>2</li>
              <li>3</li>
            </ul>
            <span class="modal-close-button" @click="show= !show; isOpen= !isOpen">
              <i class="material-icons">close</i>
            </span>
          </div>
          <div class="modal-content">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  // Name
  name: 'right-menu',
  // Components
  components: {},
  // Props
  props: [],
  // Data
  data () {
    return {
      show: false,
      isOpen: false
    }
  },
  // Created
  created () {},
  // Mounted
  mounted () {},
  // Methods
  methods: {},
  // Computed
  computed: {},
  // Watch
  watch: {}
}
</script>

<style scoped lang="scss">
.right-menu {
  color: white;
  width: 150px;
  height: 45px;
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
 .x-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60px;
  height: 100px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
}


 .x-container span {
  display: block;
  // position: absolute;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 9px;
  width: 100%;
  background: white; // #d3531a;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: all .25s ease-in-out;
}



// /* Icon 4


.x-container span:nth-child(1) {
  // top: 0px;
  -webkit-transform-origin: 4% 0%;
  -moz-transform-origin: 4% 0%;
  -o-transform-origin: 4% 0%;
  transform-origin: 4% 0%;
}

.x-container span:nth-child(2) {
  // top: 18px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.x-container span:nth-child(3) {
//   top: 36px;
  -webkit-transform-origin: 4% 75%;
  -moz-transform-origin: 4% 75%;
  -o-transform-origin: 4% 75%;
  transform-origin: 4% 75%;

}
.x-container.open span {
  width: 63px;
}
.x-container.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: -3px;
  left: 8px;
}

.x-container.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

.x-container.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 39px;
  left: 8px;
}
.x-container.open:hover {
  width: 100px;
  height: 100px;
  transform: rotate(180deg);
  transform-origin: 40% 50%;
  // span:nth-child(1) {
  //     transform: rotate(405deg);
  // // transform-origin: center;
  //   background: green;
  // }
  // span:nth-child(3) {
  //   background: green;
  // }
}
// @import '../../colors/sass-material-colors';

.modal-backdrop {
  position: fixed;
  pointer-events: auto;
  top: 0;
  left: 0;
  width: 80vw;
  height: 100vh;
  background: rgba(0, 0, 0, .45);
  backface-visibility: hidden;
  z-index: -1;
}

.modal-container {
  display: flex;
  align-items: center;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 80vw;
  height: 100vh;
  backface-visibility: hidden;
  &.medium .modal {
    width: 800px;
  }
  &.large .modal {
    width: 1000px;
  }
  &.image-modal .modal {
    width: 1200px;
  }
}

.modal {
  overflow-y: auto;
  pointer-events: auto;


  height: 100%;
  width: 100%;
  z-index: 5;
  margin: auto;
  padding: 0;
  // border: 1px solid material-color('grey', '400');
  background: rgba(255,0,0,0.5);
  textarea {
    max-height: 500px;
  }
}

.expanded-image {
  width: 100%;
}

.image-modal-buttons {
  display: inline-block;
  button.top {
    margin-top: 0;
  }
  button.bottom {
    margin-bottom: 0;
  }
}

.modal-title {
  padding: 10px 20px;
  // border-bottom: 1px solid material-color('grey', '400');
}

.modal-content {
  padding: 20px;
}

.modal-close-button {
  cursor: pointer;
  float: right;
}

.modal-title {
  z-index: 5;
  // background-color: material-color('grey', '50');
}

/*
* Fade in / out
*/
.modal-enter-active, .modal-leave-active {
  transform: scale(1) translate3d(0, 0, 0);
  transition: all 365ms cubic-bezier(0.4, 0.0, 0.2, 1);

  // transition-delay: 500ms;
}
.modal-enter, .modal-leave-active {
  opacity: 0;
  transform: scale(.85) translate3d(0, 0, 0);
}
</style>
