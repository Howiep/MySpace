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
            this.$http.get("https://jsonplaceholder.typicode.com/posts")
                .then(function(res) {
                    this.posts = _.slice(res.data, 0, 3);
                }.bind(this))
        }
    }
})

//
// var InstaFeed = new Vue({
//     el: '#InstaFeed',
//     data: {
//         title: 'Instagram',
//         items: []
//     },
//     mounted: function() {
//         this.$http.get("https://api.instagram.com/v1/users/187419680/media/recent/?access_token=187419680.1677ed0.cd9a2bda5940437597cf5ee41a97b8ac&count=100")
//             .then(function(res) {
//                 console.log(res.data);
//             }.bind(this))
//     }
// })
