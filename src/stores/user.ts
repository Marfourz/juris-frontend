import { defineStore } from "pinia";
import type { User } from "../types";
import Api from "../api";

export const useUsersStore = defineStore('usersStore',{
    state: ()=>{
        return {
            current_user : null as User | null,
            users : [
                {
                    id:1,
                    lastname : "BOUKARI",
                    firstname : "Marfourz",
                    lastMessage : "Salut tout le monde",
                    online : true
                },
                {
                    id:2,
                    lastname : "BOUKARI",
                    firstname : "Danger",
                    lastMessage : "Salut tout le monde",
                    online : true
                },
                {
                    id:3,
                    lastname : "BOUKARI",
                    firstname : "Alex",
                    lastMessage : "Salut tout le monde",
                    online : false
                }
            ]
        }
    },
    getters: {
        getCurrentUser() : User | null{
            if(this.current_user)
                return this.current_user
            const user = localStorage.getItem('current_user')
            
            if(user)
                return JSON.parse(user)
            return null
        },


        getFullname() : string {
            const user = this.getCurrentUser
            return `${user?.firstname} ${user?.lastname}`
        },

        getInitial() : string {
            const user = this.getCurrentUser
            return `${user?.firstname[0]}${user?.lastname[0]}`
        }
    },
    actions:{
        saveCurrentUser(user : User | null){
            localStorage.setItem('current_user', JSON.stringify(user))
            this.current_user = user
        },

        async findOne(id : string){
            try{
                const response = await Api.get(`users/${id}`)
                return response.data
            }
            catch(error){

            }
        },

        async stats(){
            try{
                const response = await Api.get('admin/stats')
                return response.data
            }
            catch(error){
                throw(error)
            }
        },
  
        async findAll(query : any){
            try{
                const response = await Api.get('users',{params : query})
                return response.data.data
            }
            catch(error){
                throw(error)
            }
        },

        async findByEmail(email : string){
            try{
                const response = await Api.get(`users/search/email/${email}`)
                return response.data
            }
            catch(error){
                throw(error)
            }
        },

        async sendResetPasswordCode(email : string){
            try{
                const response = await Api.post(`auth/password/forgot`,{email:email})
                return response.data
            }
            catch(error){
                throw(error)
            }
        },

        async verifyResetPasswordCode(email : string, code : number){
            try{
                const response = await Api.post(`auth/password/verify-code`,{email, code})
                return response.data
            }
            catch(error){
                throw(error)
            }
        },

        async resetPassword(data : {email : string, code : number, password : string}){
            console.log("ssss",data);
            
            try{
                const response = await Api.post(`auth/password/reset`, data)
            }
            catch(error){
                throw(error)
            }

        },

        async definePassword(data : {token : string, password : string}){
            console.log("ssss",data);
            
            try{
                const response = await Api.post(`auth/password/define`, data)
            }
            catch(error){
                throw(error)
            }

        },


        async create(data : Partial<User>){
            
            try{
                const response = await Api.post('users', data)
                return response
            }
            catch(error){
                throw error
            }
        },

        async delete(id : number){
            try{
                const response = await Api.delete(`users/${id}`)
                return response
            }
            catch(error){
                throw error
            }
        }
    }
})