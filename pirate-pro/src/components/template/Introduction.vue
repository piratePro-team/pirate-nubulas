<template>
  <div class="tab-introduction">
    <div class="introduce" :style="{'height':introduceheight}">{{msg.msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  data () {
    return {
      introduceheight: document.documentElement.clientWidth/ 1920 * 760 + "px"
    }
  },
  created () {
    console.log("实例创建完毕")
    this.$store.dispatch("showheader");
  },
  mounted () {
    var _this = this;
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      _this.introduceheight = val / 1920 * 760 + "px";
    })
  },
  computed: {
    msg () {
      return {
        msg:this.$t("message.tabhome")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-introduction{
  width: 100%;
  height: auto;
  background: transparent;
  color: #fff;
}
.introduce{
  width: 100%;
  background: url("../../assets/introduce.png") left top no-repeat;
  background-size: cover;
}
</style>