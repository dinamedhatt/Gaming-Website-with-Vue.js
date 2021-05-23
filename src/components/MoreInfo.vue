<template>
           <router-link :to="`/games/${id}`"> 
           <button id="btn" class='mb-4'>MORE INFO</button>
           </router-link>
</template>

<script>
export default {
    name:'MoreInfo',
    props:{
        id:Number
    },
    // updated(){
    //     console.log(id)
    // }
}
</script>