<script setup>

import {ref} from 'vue'
import { onBeforeMount } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';


const route = useRoute()
console.log("useRoute -> route -> route.params.id =")
console.log(route.params.id)


const localMonster = ref([])





const API_ENDPOINT = 'https://metallo.ew.r.appspot.com/monsters/'

onBeforeMount(async()=>{
    const monster = await axios.get(API_ENDPOINT+route.params._id)    //CHARGER les data de l'API dans une constante monster
    const {data,status} = monster                    //EXTRAIRE uniquement les propriétés qui nous interessent ici data et status dans characters (data = objet json -- status = code http)
    if(status===200){
        localMonster.value = data
        
    }
    else{
        console.error("erreur")
    }
    
})

console.log('test')
console.log(route.params)



</script>


<template>
   
    <section data-bs-version="5.1" class="cid-sRQoPK3EDs">

        <div class="container-fluid d-flex align-items-center justify-content-center">
            <div class="mx-auto">
                <div class="card border-primary mb-3" style="max-width: 32rem;">
                    <div class="card-header">{{localMonster._id}}</div>
                    <img :src="localMonster.image"
                        alt="Generic placeholder image">
                    <div class="card-body text-primary">
                        <h5 class="card-title">{{localMonster.name}}</h5>
                        <p class="card-text">{{ localMonster.description }}</p>

                        <ul class="list mt-2">
                            <li v-for="drop in localMonster.drops">{{ localMonster.drop }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    </section>












  

</template>


<style scoped></style>