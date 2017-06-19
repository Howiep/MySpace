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
    }
})

//her laver vi et nyt vue app
var related = new Vue({
    //her peger vi på html elementet med ID
    el: '#related',
    //her definere vi hvilken slags data der skal være
    data: {
        title: 'Relaterede artikler',
        posts: []
    },
    //mounted bliver kørt første gang man loader siden
    mounted: function() {
        // her buger vi axios til at lave et HTTP kald til en fil hvor dataen er gemt
        this.$http.get("content/Posts.json")
            .then(function(res) {
                //herefter bruger vi svaret fra denne funktion til at udtrække den data vi skal bruge og filtrere det.
                this.posts = _.slice(_.filter(res.data, { 'category': 'Events'}), 0, 3);
            }.bind(this))
    }
})