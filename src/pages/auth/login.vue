<template>
    <Form class="space-y-6" @submit="onSubmit">
            <BaseInput name="Email" placeholder="Adresse mail" rules="required|email" v-model="username"></BaseInput>
            <BaseInput name="password" placeholder="Mot de passe" v-model="password" rules="required"></BaseInput>
            <BaseButton type="submit" :loading="loading" :expand="true" >Se connecter</BaseButton>
           
            <div class="flex justify-center" >
                <a href="" @click.prevent="goToRegistration">S'inscrire</a>
            </div>
        </Form>
</template>

<script setup lang="ts">
import { ref,computed } from 'vue';
import { useRouter } from 'vue-router';
import { Form } from 'vee-validate';
import { useToast } from 'vue-toastification';
import { useAuthStore } from '../../stores/auth-store';
import { useUsersStore } from '../../stores/user';

const toast = useToast()

const username = ref('')
const password = ref('')

const loading = ref(false)

const router = useRouter()

const userStore = useUsersStore()

const currentUser = computed(()=>{
    return userStore.getCurrentUser
})

function goToRegistration(){
    router.push({
        name : 'register'
    })
}


function goToChat(){
    router.push({
        name: 'welcome'
    })
}

function goToDashboard(){
    router.push({
        name: 'dashboard'
    })
}

const authStore = useAuthStore()

async function onSubmit(){
    loading.value = true
    try{
        const response = await authStore.login({
            username : username.value,
            password : password.value
        })
        loading.value = false
        if(!currentUser.value?.isAdmin)
            goToChat()
        else
            goToDashboard()


    }
    catch(error){
        toast.error("Vos identifiants sont incorrectes")
        loading.value = false
    }
    
   
        
   
}


</script>

<style scoped>

</style>