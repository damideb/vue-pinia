import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {

    state:()=>({
        tasks:[
            {id:1, title:'buy milk', Fav: false},
            {id:2, title:'Cook', Fav: true}
        ],
        name:'Dami'
    })
})