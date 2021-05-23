<template>
<div>
  <div id="featured" class='row col-lg-7 col-md-9 col-sm-10' v-for="game in filteringData" :key="game.id">
      <div class='f-img d-inline-block col-md-7 col-sm-5' :style="{backgroundImage: `url(${game.image})`}"></div>
    <div class='f-game d-inline-block col-md-5 col-sm-7'>
      <div class="f-header">{{ game.title }}</div>
      <div class='mb-1 g-title'>{{ game.type }}</div>
      <div class='g-desc mb-3'>{{ game.description }}</div>
      <div class='users mb-2'>{{ game.users }} Users</div>
      <MoreInfo :id="game.id"/>
    </div>
  </div>
  </div>
</template>
<script>
import MoreInfo from './MoreInfo';
export default {
  name: "Featured",
  computed: {
    filteringData() {
       return this.$store.state.games.filter(
          (game) => game.title==="Doodle God (PC)"
        );
   }},
  components:{
    MoreInfo
  }
};
</script>


<style >
#featured {
    text-align: left;
  height: max-content;
  margin: 20px auto;
  margin-top:40px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.027), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
}

.f-img{
    background-repeat:round;
    background-size:cover;
}

.f-game{
    padding:10px 30px 0px 30px;
}

.g-desc,.g-title{
    font-family: Tajawal;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: #444242;
}

.g-title{
    font-size: 15px;
    margin-bottom: 5px;
}

.f-header{
  font-family: Tajawal;
  font-size: 19px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: -0.2px;
    color: #232222;
}

.users{
    font-family: Tajawal;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: 0.22px;
  text-align: left;
  color: #3c3c3d;
}

</style>