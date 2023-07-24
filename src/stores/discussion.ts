import { defineStore } from "pinia";
import Api from "../api";


export const useDiscussionStore = defineStore('discussionStore',{
    state: ()=>{
        return {
            discussions : [
              
            ]
        }
    },
    actions:{
        async myDiscussions(){
            try{
                const response = await Api.get("discussions/myDiscussions")
                console.log("my response", response.data)
                this.discussions = response.data
                return response.data
            }
            catch(error){
                throw error
            }
        },

        async fetchAll(){
            try{
                const response = await Api.get("discussions")
                console.log("my response", response.data)
                return response.data
            }
            catch(error){
                throw error
            }
        },

        async create(name: string){
            
            try{
                const response = await Api.post('discussions', {
                    name
                })
                return response.data
            }
            catch(error){
                throw error
            }
        },
    }
})