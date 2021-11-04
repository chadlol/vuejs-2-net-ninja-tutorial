new Vue ({
    el: '#app',
    data: {
        name: "",
        age: ""
    },
    methods: {
        logName() {
            console.log("You've entered your name");
        },
        logAge() {
            console.log("You've entered your age");
        }
    }

})