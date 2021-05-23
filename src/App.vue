<template>
<router-view/>
</template>

<script>
export default{
  name:'App',
  mounted() {

    this.$store.dispatch("a");
  }
}
</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css2?family=Tajawal&display=swap");
#btn {
  background: #572589;
  color: #fff;
  border: none;
  width: 133px;
  height: 33px;
  padding: 9.6px 31.4px 4.4px 23.6px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  font-family: Tajawal;
  line-height: 1;
  letter-spacing: 0.4px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
