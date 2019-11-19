<template>
<div>
    <section class="destination">
        <h1>{{experience.name}}</h1>
        <div class="destination-details">
            <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name" />  
            <p> {{experience.description}}  </p>
        </div>
    </section>
</div>
</template>

<script>
import store from '@/store.js';
export default {

    data(){
        return {}
    },
    props:{
        slug:{
            type: String,
            required: true,
        },
        experienceSlug:{
            type: String,
            required: true,
        }
    },
    computed:{
        destination(){
            return store.destinations.find(
                destination => destination.slug === this.slug
            );
        },
        experience(){
            return this.destination.experiences.find(
                experience => experience.slug === this.experienceSlug
            );
        }
    }
}
</script>
<style scoped>
 img {
     max-width: 600px;
     height: auto;
     width: 100%;
     max-height: 400px;
 }

 .destination-details, .cards{
     display: flex;
    justify-content: space-between;
 }

 p{
     margin: 0 40px;
     font-size: 20px;
     text-align: left;
 }

 .card img {
     max-height: 200px;
 }

 .card{
     padding: 0 20px;
     position: relative;
 }

 .card__text {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     color: white;
     font-size: 25px;
     font-weight: bold;
     text-decoration: none;
 }
</style>