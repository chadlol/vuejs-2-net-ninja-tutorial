new Vue ({
    el: '#app',
    data: {
        age: 28,
        x: 0,
        y: 0
    },
    methods: {
        add(inc) {
            return this.age += inc;
        },
        subtract(dec) {
            return this.age -= dec;
        },
        updateXY(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})