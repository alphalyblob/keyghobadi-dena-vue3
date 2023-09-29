<script setup>


import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'


const API_ENDPOINT = "https://metallo.ew.r.appspot.com/monsters"

const localMonsters = ref([])
const router = useRouter()

const isLoaded = ref(false) //statut initial du chargement de la page

onBeforeMount(async () => {
    const monsters = await axios.get(API_ENDPOINT)
    const { data, status } = monsters
    if (status === 200) {
        localMonsters.value = data
        isLoaded.value = true
        console.log(data)
    }
    else {
        console.log("erreur onbeforemount status != 200")
    }

})

const toDetail = (monsterId) => {
    console.log("click")
    router.push({ name: 'detail', params: { _id: monsterId } })
}

</script>
<template>
    
    <section data-bs-version="5.1" class="features05 cid-sRQcud4Jjb" id="features05-2">

        <div class="container-fluid">
            <div class="wrapper">
                <div class="row title-section">
                    <h2 class="mbr-section-title mbr-fonts-style display-2"><strong>Monsters</strong></h2>
                </div>
                <div class="row justify-content-center">

                    <div class="col-4 col-md-2 mb-2 mb-md-5" v-for="monster in localMonsters">
                        <div class="card">
                            <img :src="monster.image" alt="" class="card-img-top h-100">
                            <div class="card-body">
                                <h3 class="card-title mbr-section-subtitle mbr-fonts-style"><strong>{{ monster.name }}
                                    </strong></h3>
                                <ul class="list mbr-fonts-style display-7">
                                    <li v-for="drop in monster.drops">{{ monster.drop }}</li>
                                </ul>
                                <div class="mbr-section-btn"><button @click="toDetail(monster._id)"
                                        class="justify-content-center btn btn-primary display-4">
                                        VOIR</button></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>