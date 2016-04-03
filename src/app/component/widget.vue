<template>
  <div class="widget">H
    <div class="ripple-container"></div>
  </div>
</template>

<script>
  import sample from './sample/sample';
  import Vue from 'vue';
  export default Vue.extend({
    replace: false,
  	data() {
      return {
        text: sample()
      }
    }
  })
</script>

<style lang="sass" scoped>
  .widget {

    position: absolute;
    z-index: 20;
    line-height: 56px;
    min-width: 0;
    width: 56px;
    height: 56px;
    vertical-align: middle;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
    border-radius: 50%;
    background-clip: padding-box;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    transition: all .3s cubic-bezier(.55,0,.55,.2);
    background-color: #26a69a;
    color: white;

    &:hover{
      box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);
    }

    .ripple-container{
      border-radius: 50%;
      background-clip: padding-box;
      overflow: hidden;
      color: #aaa;
      -webkit-mask-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC');
    }
  }
</style>
