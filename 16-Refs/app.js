
new Vue ({
    el: '#vue-app',
    data: {
        output: 'Nothing Yet.'
    },
    methods: {
        readRefs() {
            var myInputVal = this.$refs.myInput.value;
            var mySubmitBtn = this.$refs.mySubmit;
            this.output = myInputVal;

            mySubmitBtn.innerText = "Submitted";
            mySubmitBtn.setAttribute('disabled', 'disabled')

            console.log(this.$refs);
        }
    },
    computed: {

    }
})
