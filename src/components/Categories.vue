<template>
  <div class="cat">
      <input type='button' v-for="game in filteringData" :key="game" :value="game"/>
  </div>
</template>

<script>
export default {
  name: "Categories",
  computed: {
    filteringData() {
      // return this.$store.state.games.filter((game) => game.platforms != null);
      var categories = []
      this.$store.state.games.forEach(game => {
        if(!categories.includes(game.platforms)){
          categories.push(game.platforms);
        }        
      });
      // console.log(categories);
      return categories;
    },
  },
};
</script>

<style scoped>
input {
  border-radius: 20px;
  border: 2px solid #d2d2d2;
  padding: 2px 10px;
  margin: 5px 10px;
  /* flex-direction: ; */
}

.cat{
    display: flex;
    flex-shrink: 0;
    width: 100%;
    background-color: white;
    overflow:scroll;
    box-shadow: 0px 5px 5px #88888836;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

</style>