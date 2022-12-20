const {
    createApp
} = Vue;
// Array di oggetti
createApp({
    data(){
        return{
            newTask: '',
            todolist:[
                {
                    text:'Creare un sito che permetta agli utenti di fare una lista di regali per natale;',
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
// Metodi
    methods:{
        // Aggiunge elementi alla lista 
        addTask(){
            let object = {
                text: this.newTask,
                done: false,
            }
            this.todolist.push(object);
            this.newTask = '';
        },
        // Rimuove elementi dalla lista
        removeTask(index){
            this.todolist.splice(index, 1);
        },
        // Controlla se gli elementi nella lista hanno done = true.
        checkTask(index){
            let task = this.todolist[index];
            if(task.done == true){
                task.done = false;
            }
            else{
                task.done = true;
            }
        },
    }
}).mount('#app');