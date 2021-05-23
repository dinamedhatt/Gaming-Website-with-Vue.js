<template>
  <div class="headerDiv row col-12">
      <router-link to="/" class="logo col-3 offset-sm-1 offset-md-2">
        <img :src="require('../assets/logo.png')" />
      </router-link>
    <div class="icons col-3 mt-5 offset-md-4 offset-sm-5">
      <i
        :class="searchStatus ? 'fas fa-times' : 'fas fa-search'"
        @click="showSearch()"
      ></i>
      <i class="fas fa-ellipsis-v" @click="showForm()"></i>
    </div>
    <Form v-if="menuStatus"/>
    <div class='col-lg-7 col-md-9 col-sm-10 mb-4' id='search'>
      <input v-if="searchStatus" type="text" class='col-12 form-control' v-model="searchVal" placeholder="Search for anything.." />
    </div>
  </div>
</template>

<script>
import Form from './Form'
export default {
  name: "Header",
  components: {
    Form
  },
  data() {
    return {
      searchStatus: false,
      menuStatus:false
    };
  },
  methods: {
    showSearch() {
      this.searchStatus = !this.searchStatus;
    },
    showForm(){
            this.menuStatus = !this.menuStatus;
    }
  },
};
</script>

<style scoped>
.headerDiv {
  background: white;
  height: fit-content;
  margin-left:0px;
  width: 100%;
  /* display: flex; */
}

img {
  width: 259px;
  margin: auto;
}

.fas {
  color: #572589;
  margin: 10px;
  cursor: pointer;
}

#search{
  margin:auto;
}

.icons{
  text-align: left;
}

a{
  text-decoration: none;
}
</style>