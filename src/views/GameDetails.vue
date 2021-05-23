<template>
  <div class="gameDetails">
    <Header class="head" />
    
    <div v-for="game in filteringData" :key="game.id">
      <div id="imgDiv" class="col-lg-7 col-md-9 col-sm-10 row">
        <div :style="{ backgroundImage: `url(${game.image})` }" />
      </div>
      <div id="singleCon" class="col-lg-7 col-md-9 col-sm-10">
        <p class="g-header">{{ game.title }}</p>
        <p class="gtype">{{ game.type }}</p>
        <p class="users">{{ game.users }} Users</p>
        <p class="gtype">{{ game.description }}<br/> {{ game.instructions }}</p>
        <p class='read'>Read more</p>
      </div>
    </div>
    <Recommend />
  </div>
</template>

<script>
import Header from "../components/Header";
import Recommend from "../components/Recommend";

export default {
  name: "GameDetails",
  components: {
    Header,
    Recommend,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    filteringData() {
      //  console.log(this.$store.state.games);
      return this.$store.state.games.filter(
        (game) => game.id == this.$route.params.id
      );
    },
  },
  // mounted() {
  //   console.log(this.$route.params);
  // },
};
</script>

<style scoped>
.head {
  box-shadow: 0px 5px 5px #88888836;
}

#singleCon {
  text-align: left;
  height:280px;
  overflow: visible;
}

#imgDiv {
  height: 240px;
  padding: 0px;
}
#imgDiv div {
  background-repeat: round;
  background-size: cover;
}

p{
    color: #232222;
  font-family: Tajawal;
}
.g-header{
  font-size: 19px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: -0.2px;
  margin-bottom: 0px;
}
.g-type {
  font-size: 14px;
  font-weight: normal;
}

.read{
  font-size: 12px;
  font-weight: bold;
  color: #572589;
  cursor: pointer;
}
</style>