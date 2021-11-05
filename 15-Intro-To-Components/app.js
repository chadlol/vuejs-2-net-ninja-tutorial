Vue.component('greeting', {
    template: '<p>Hello! I am {{name}}! <button v-on:click="changeName">Change name</button></p>',
    data() {
        return {
            name: 'Yoshi'
        }
    },
    methods: {
        changeName() {
            this.name = 'Mario'
        }
    }
})

new Vue ({
    el: '#vue-app-one',
    data: {

    },
    methods: {

    },
    computed: {

    }
})

new Vue ({
    el: '#vue-app-two',
    data: {

    },
    methods: {

    },
    computed: {

    }
})
