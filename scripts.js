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
                name: "",
                active: true
            }
        }
    },
    methods: {
        addTask: function() {
            this.tasks.push(this.newTask);
            this.newTask = {};
            this.newTask.active = true;
        },
        clearTasks: function() {
            this.tasks = []
        }
    }
}

Vue.createApp(TodoList).mount('#app');
