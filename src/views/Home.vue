<template>
  <div class="home">
    <Header/>
    <Categories/>
    <Games/>
  </div>
</template>

<script>
import Games from '../components/Games'
import Header from '../components/Header'
import Categories from '../components/Categories'

export default {
  name: 'Home',
  // props:{
  //   games: Array
  // },
  // updated(){
  //   console.log('Home',this.games);
  // },
  components: {
    Games,
    Header,
    Categories,
  }
}
</script>

<style scoped>
.home{
  padding: 0 0 45px;
  background-color: #f5f5f5;
}
</style>
