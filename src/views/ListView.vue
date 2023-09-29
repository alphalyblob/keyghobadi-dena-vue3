<script setup>

import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'


const API_ENDPOINT = "https://metallo.ew.r.appspot.com/monsters"

const localMonsters = ref([])
const router = useRouter()

const isLoaded = ref(false) //statut initial du chargement de la page

onBeforeMount(async () => {
    const monsters = await axios.get(API_ENDPOINT);
    const {data,status} = monsters;
    if(status===200){
        localMonsters.value = data
        isLoaded.value = true
        console.log(data)
    }
    else{
        console.log("erreur onbeforemount status != 200")
    }
    console.log(monsters.data);
    console.log(localMonsters.value)
})

const toDetail = (monsterId)=>{
    console.log("click")
    router.push({ name: 'detail', params: { _id: monsterId } })
}

</script>
<template>


    <section data-bs-version="5.1" class="features05 cid-sRQcud4Jjb mt-6" id="features05-2">

        <div class="container-fluid">
            <div class="wrapper">
                <div class="row title-section">
                    <h2 class="mbr-section-title mbr-fonts-style display-2"><strong>Monsters</strong></h2>
                </div>
                <div class="row justify-content-center">
                    <div class="card">
                        <h3 v-if="!isLoaded">Loading...</h3>
                        <table class="table table-sm" v-else>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr v-for="monster in localMonsters"
                                :key="monster._id">
                                    <th scope="row">{{ monster._id }}</th>
                                    <td>{{monster.name}}</td>
                                    <td>{{monster.category}}</td>
                                    <td><button type="button" class="btn btn-primary btn-sm m-0" @click="toDetail(monster._id)">Voir 👀</button> </td>
                                </tr>

                                <!-- <tr>
                                    <th scope="row">651088132f75197b24892744</th>
                                    <td>Chuchu</td>
                                    <td>Monsters</td>
                                    <td><button type="button" class="btn btn-primary btn-sm m-0">Voir 👀</button> </td>
                                </tr>
                                <tr>
                                    <th scope="row">2651088132f75197b24892744</th>
                                    <td>Chuchu</td>
                                    <td>Monsters</td>
                                    <td><button type="button" class="btn btn-primary btn-sm m-0">Voir 👀</button> </td>
                                </tr> -->

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>







 </template>
<style scoped></style>