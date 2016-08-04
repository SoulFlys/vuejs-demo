new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js'
    }
});
new Vue({
    el: '#test',
    data: {
        todos: [
            {text: '1'},
            {text: '2'},
            {text: '3'},
        ]
    }
});
new Vue({
    el: '#app1',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function(){
            console.log(this.message.split(''));        //split() 方法用于把一个字符串分割成字符串数组
            console.log(this.message.split('').reverse());
            console.log(this.message.split('').reverse().join('')); //join() 方法用于把数组中的所有元素放入一个字符串。
            this.message = this.message.split('').reverse().join('');
        }
    }
});
