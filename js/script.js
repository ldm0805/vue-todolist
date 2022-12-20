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
                    edit: false

                },
                {
                    text:'Portare a spasso il cane;',
                    done: false,
                    edit: false

                },
                {
                    text:'Scegliere quale serie tv seguire;',
                    done: true,
                    edit: false

                },
                {
                    text:'Passare l\'aspirapolvere;',
                    done: false,
                    edit: false

                },
                {
                    text:'Seguire lo snack pomeridiano;',
                    done: true,
                    edit: false

                },
                {
                    text:'Fare l\'esercizio di boolean;',
                    done: false,
                    edit: false

                },
            ]
        }
    },

    methods:{
        addTask(){
            let object = {
                text: this.newTask,
                done: false,
            }
            this.todolist.push(object);
            this.newTask = '';
        },
        removeTask(index){
            this.todolist.splice(index, 1);
        },
        checkTask(index){
            let task = this.todolist[index];
            if(task.done == true){
                task.done = false;
            }
            else{
                task.done = true;
            }
        },
        showEdit(index){
            let task = this.todolist[index];

            if(task.edit == true){
                task.edit = false;
            }
            else{
                task.edit = true;
            }
        },

    }
}).mount('#app');