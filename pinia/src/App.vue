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

    <!-- task list -->

    <div class="task-list" v-if="filter ==='all'">
      <p>You have {{ taskStore.totalCount }} task left to do</p>
      <div v-for="task in taskStore.tasks">
        <TasksDetails :task="task"/>

      </div>  
    </div>

 

    <div class="task-list" v-if="filter ==='favs'">
           <p>You have {{ taskStore.favCount }} favs left to do</p>
      <div v-for="task in taskStore.Favs">
        <TasksDetails :task="task"/>

      </div>  
    </div>
    
  </div>
</template>

<script>
import {ref} from 'vue'
  import {useTaskStore} from './stores/taskStore.js'
  import TasksDetails from './components/TasksDetails.vue'
  import TaskForm from './components/TaskForm.vue'
  
  export default {
    components :{TasksDetails, TaskForm},
   
    setup(){
      const taskStore = useTaskStore()

      const filter = ref('all')
      return {taskStore, filter}
    }
    
  }
</script>


