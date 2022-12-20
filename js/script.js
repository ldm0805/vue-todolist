const {createApp} = Vue;

createApp({
    data(){
        return{
            newTask: '',
            search: '',
            todolist:[
                {
                    text:'Fare la lista dei regali di natale;',
                    done: false,

                },
                {
                    text:'Portare a spasso il cane;',
                    done: false,

                },
                {
                    text:'Scegliere quale serie tv seguire;',
                    done: true,

                },
                {
                    text:'Passare l\'aspirapolvere;',
                    done: false,

                },
                {
                    text:'Seguire lo snack pomeridiano;',
                    done: true,

                },
                {
                    text:'Fare l\'esercizio di boolean;',
                    done: false,

                },
            ]
        }
    },

    methods:{
        checkTask(index){
            let task = this.todolist[index];
            if(task.done == true){
                task.done = false;
            }
            else{
                task.done = true;
            }
        }

    }
}).mount('#app');