import { defineStore } from 'pinia'
import Api from '@/api'
import { useUsersStore } from './user.ts'


export const useAuthStore = defineStore('authStore',{
    actions: {
        async me(){
            try{
                const response = await Api.get('auth/me')
                useUsersStore().saveCurrentUser(response.data)
            }
            catch(error){
                throw error
            }
        },
        async login(data : {username :string, password : string}){
            try{
                const response = await Api.post('auth/login',data)
                if(response.data.access_token && Api.setToken)
                    Api.setToken(response.data.access_token)
              
                    useUsersStore().saveCurrentUser(response.data.user)
            }
            catch(error){
                throw error
            }
        },
        async logout(){
            try{
                useUsersStore().saveCurrentUser(null)
                if(Api.setToken)
                    Api.setToken("")
            }
            catch(error){
                throw error
            }
        }
    }
})