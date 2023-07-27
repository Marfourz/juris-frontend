<template>
   <Form class="space-y-6" @submit="onSubmit">
            <BaseInput placeholder="Nom d'utilisateur" name="Nom d'utilisateur" v-model="data.username" rules="required"></BaseInput>
            <BaseInput placeholder="Nom" name="Nom" v-model="data.lastname" rules="required"></BaseInput>
            <BaseInput placeholder="Prénom(s)" name="Prenom" v-model="data.firstname" rules="required"></BaseInput>
            <BaseInput placeholder="Adresse mail" name="Email" v-model="data.email" rules="required"></BaseInput>
            <BaseInput placeholder="Mot de passe" name="password" type="password" v-model="data.password" rules="required"></BaseInput>
            <BaseButton type="submit" :loading="loading" :expand="true">S'inscrire</BaseButton>
            <div class="flex justify-center" >
                <a href="" @click.prevent="goToLogin">Se connecter</a>
            </div>
        </Form>
</template>

<script setup>

import { reactive,ref } from 'vue';
import { useRouter } from 'vue-router';
import { Form } from 'vee-validate';
import { useUsersStore } from '../../stores/user';

const router = useRouter()
const usersStore = useUsersStore()

const data = reactive({
    username : "",
    firstname : "",
    lastname : "",
    email: "",
    password : ""
})

const loading = ref(false)

async function onSubmit(){
    try{
        loading.value = true
        const response = await usersStore.create(data)
        loading.value = false
        goToLogin()
    }
    catch(error){
        toast.error("Oups on rencontre une difficulté. Contactez l'administrateur.Merci.")
        loading.value = false
    }
}

function goToLogin(){
    router.push({
        name : 'login'
    })
}

</script>

<style lang="scss" scoped>

</style>