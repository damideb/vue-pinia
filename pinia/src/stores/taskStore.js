import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {

    state:()=>({
        tasks:[
            {id:1, title:'buy milk', isFav: false},
            {id:2, title:'Learn vue Pinia', isFav: true}
        ],
    }),
    // getters get the state and compute values based on the state in the store
    getters:{ 
        Favs: (state)=>{
            return state.tasks.filter(task =>task.isFav)
        },
        favCount:(state)=>{
                return state.tasks.reduce((previous, current)=>{
                    return current.isFav? previous + 1 : previous
                },0)
        },
        totalCount(){
          return  this.tasks.length
        }
    },
    actions:{
        addTask(task){
            this.tasks.push(task)
        },
        deleteTask(id){
           this.tasks = this.tasks.filter(t=>{
             return  t.id !== id
            })
        },
        toggleFav(id){
            const task = this.tasks.find(task => task.id === id)

            task.isFav = !task.isFav
        }
    }
})