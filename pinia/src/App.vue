<template>
  <div>
    <header>
      <h1>Pinia Task</h1>
    </header>

    <div class="new-task-form">
      <TaskForm/>
    </div>

       <!-- filter -->

    <nav class="filter">
      <button @click="filter='all'">All Tasks</button>
      <button @click="filter='favs'">Fav Tasks</button>

    </nav>

    <div class="loading" v-if="loading">
      Loading Tasks...
    </div>

    <!-- task list -->

    <div class="task-list" v-if="filter ==='all'">
      <p>You have {{ totalCount }} task left to do</p>
      <div v-for="task in tasks">
        <TasksDetails :task="task"/>

      </div>  
    </div>

 

    <div class="task-list" v-if="filter ==='favs'">
           <p>You have {{ favCount }} favs left to do</p>
      <div v-for="task in Favs">
        <TasksDetails :task="task"/>

      </div>  
    </div>
    
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {storeToRefs} from 'pinia'
  import {useTaskStore} from './stores/taskStore.js'
  import TasksDetails from './components/TasksDetails.vue'
  import TaskForm from './components/TaskForm.vue'
   
  const taskStore = useTaskStore()
  taskStore.getTasks()

  const filter = ref('all')

  const {tasks, loading, Favs, totalCount, favCount} = storeToRefs(taskStore) // this converts state and getters to refs making them reactive. Cant be used for actions
     
</script>


