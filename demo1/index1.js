new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: [
            {text: 'add some todos'}
        ]
    },
    methods: {
        addTodo: function(){
            var text = this.newTodo.trim();
            if(text){
                this.todos.push({text:text});
                this.newTodo = '';
            }
        },
        removeTodo: function(index){
            this.todos.splice(index,1); //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
        }
    }
});
