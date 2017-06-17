//Vue code
Vue.prototype.$http = axios;


var app = new Vue({
    el: '#app',
    data: {
        title: 'Seneste',
        posts: []
    },
    mounted: function() {
        this.$http.get("content/Posts.json")
            .then(function(res) {
                this.posts = _.slice(res.data, 0, 6);
            }.bind(this))
    },
    methods: {
        getThree: function() {
            this.$http.get("content/Posts.json")
                .then(function(res) {
                    this.posts = _.slice(res.data, 0, 3);
                }.bind(this))
        }
    }
})