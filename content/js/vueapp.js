
//Vue code
Vue.prototype.$http = axios;

var app = new Vue({
    el: '#app',
    data: {
        title: 'Seneste',
        posts: []
    },
    mounted: 
    function() {
        this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(res) {
            console.log(this);
            this.posts = _.slice(res.data, 0, 6);
        }.bind(this))
    },
    methods: {
        getThree: function() {
            this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(res) {
                console.log(this);
                this.posts = _.slice(res.data, 0, 3);
            }.bind(this))
        }
    }
})