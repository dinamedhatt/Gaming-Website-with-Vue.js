<template>
  <div id="container" class='col-lg-7 col-md-9 col-sm-10'>
    <div class="text">
      <div class="header">Most Recommendation</div>
      <div class="seeAll">SEE ALL <i class="fas fa-chevron-right"></i></div>
    </div>
<!-- {{filteringData}} -->
      <div class="game" v-for="game in filteringData" :key="game.id">
        <img class="thumbnail" :src="game.thumbnail" :alt="game.title" />
        <p class="games-title">{{ game.title }}</p>
        <MoreInfo :id="game.id"/>
      </div>
  </div>
</template>

<script>
import MoreInfo from './MoreInfo'
export default {
  name: "Recommend",
  components:{
    MoreInfo
  },
  computed: {
    filteringData() {
    //  console.log(this.$store.state.games);
       return this.$store.state.games.filter(
          (game) => game.type==="Full Game"
        );
   }
  }
};
</script>
