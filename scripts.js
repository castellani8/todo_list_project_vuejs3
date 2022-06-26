var tasks = [
    {
        name: "testando",
        active: true
    }
];

const TodoList = {
    data() {
        return {
            tasks: window.tasks,
            newTask: {
                active: true
            }
        }
    },
    methods: {
        addTask: function() {
            if(this.newTask.name){
                this.tasks.push(this.newTask);
                this.newTask = {};
                this.newTask.active = true;
                localStorage.setItem("todos", JSON.stringify(this.tasks));
            } else {
                alert("Todos os campos são obrigatórios!");
            }
        },
        clearTasks: function() {
            this.tasks = []
        }
    }
}

Vue.createApp(TodoList).mount('#app');
