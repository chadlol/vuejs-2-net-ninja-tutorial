var one = new Vue ({
    el: '#vue-app-one',
    data: {
        title: "This is Vue Instance One"
    },
    methods: {

    },
    computed: {
        greet(){
            return 'This is Vue Two saying hello!'
        }
    }
})

var two = new Vue ({
    el: '#vue-app-two',
    data: {
        title: "This is Vue Instance Two",
        text: 'l33t h4x0r'
    },
    methods: {
        changeVueOneTitle() {
            one.title = this.text;
        }

    },
    computed: {
        greet(){
            return 'This is Vue Two saying hello!'
        }
    }
})