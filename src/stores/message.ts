import { defineStore } from "pinia";
import { TypeMessage, type Message } from "../types";
import Api from "../api";

export const useMessageStore = defineStore('messageStore',{
    state(){
        return {
            messages : [
                {
                    id: 1,
                    date : "05 October 2011 14:48 UTC",
                    type : TypeMessage.USER,
                    text : 'Le message d’un interlocuteur s’affiche ici. Le message d’un interlocuteur s’affiche ici. Le message d’un interlocuteur s’affiche ici. Le message d’un interlocuteur s’affiche ici. Le message d’un interlocuteur s’affiche iciLe message d’un interlocuteur s’affiche ici. Le message d’un interlocuteur s’affiche ici.'
                },
                {
                    id: 2,
                    date : "05 October 2011 14:48 UTC",
                    type : TypeMessage.CHATBOT,
                    text : `Le message dU CHAT, s’ affichent ici. Le message dU CHAT . 

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
                },
                {
                    id: 3,
                    date : "05 October 2011 14:48 UTC",
                    type : TypeMessage.USER,
                    text : `Le message d’un interlocuteur s’affiche ici. Le message d’un interlocuteur s’affiche ici. Le message d’un interlocuteur s’affiche ici. Le message d’un interlocuteur s’affiche ici. Le message d’un interlocuteur s’affiche iciLe message d’un interlocuteur s’affiche ici. Le message d’un interlocuteur s’affiche ici.`
                },
                {
                    id: 2,
                    date : "05 October 2011 14:48 UTC",
                    type : TypeMessage.CHATBOT,
                    text : `Le message dU CHAT, s’ affichent ici. Le message dU CHAT . 

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
                },
                
            ] as Array<Message>
        }
    },
    actions:{
        async create(message: string, discussionId: string){
            
            try{
                const response = await Api.post('messages', {
                    discussionId: discussionId,
                    text : message
                })
                return response
            }
            catch(error){
                throw error
            }
        },

        async fetchForDiscussion(discussionId : string){
            try{
                const response = await Api.get('messages', {
                  params:{
                    discussionId: discussionId
                  }
                })
                return response.data
            }
            catch(error){
                throw error
            }
        }
    }
})