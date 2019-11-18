<template>
    <div class="home">
        <h1>All Destination</h1>
        <div class="destination">
        <div class="destination-dt" v-for="destination in destinations" :key="destination.name">
            <router-link :to="{name:'DestinationDetails', params: {slug: destination.slug}}">
                <h2>{{destination.name}}</h2>
            </router-link>
        <figure>
            <router-link :to="{name:'DestinationDetails', params: {slug: destination.slug}}">
                <img :src="require(`@/assets/${destination.image}`)" alt="destination.name">
            </router-link>
        </figure>
        </div>
        </div>
    </div>
</template>

<script>
import store from '@/store.js';
export default {
    name:"home",
    components:{},
    data(){
        return{
            destinations: store.destinations
        }
    }
};
</script>
<style scoped>
.home {
    max-width: 1200px;
    margin: 0 auto;
}

.destination{
    display: flex;
    justify-content: space-between;
}

a:hover,
a:visited
{
    text-decoration: underline;
}

img{
    width: 75%;
    height: 75%;
}
</style>