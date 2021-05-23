<template>
  <div class='col-12'>
    
     <Featured/>
    <Recommend/>
    <Popular/>

  </div>
</template>

<script>
import Featured from "../components/Featured";
import Recommend from "../components/Recommend";
import Popular from "../components/Popular";
export default {
  name: "Games",
  components: {
    Featured,
    Recommend,
    Popular
  },
};
</script>

<style>
#container,#singleCon,#imgDiv{
  height: 295px;
  margin: 20px auto;
  padding: 15px 15px 35px 15px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.027), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  overflow:hidden;
}

.text {
  text-align: left;
  margin-bottom: 10px;
}

.text div {
  display: inline;
  font-family: Tajawal;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: -0.2px;
}

.header {
  color: #232222;
  margin: 15px 0px 15px 15px;
}

.seeAll {
  float: right;
  margin-right: 15px;
  color: #572589;
  cursor: pointer;
}

.game {
  width: 134px;
  height: fit-content;
  display: inline-block;
  background: white;
  margin:0px 7px 30px 7px;
  box-sizing: content-box;
  border-radius: 5px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.027), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}

.thumbnail {
  width: 134px;
  height: 134px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px;
}

.games-title {
  width: 133px;
  height: 38px;
  font-family: Tajawal;
  font-size: 14.4px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: normal;
  text-align: left;
  color: #444242;
  overflow: hidden;
  text-align: center;
}
</style>