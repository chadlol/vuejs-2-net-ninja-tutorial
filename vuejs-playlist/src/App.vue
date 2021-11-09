<template>
  <form-helper>
    <div slot="form-header">
      <h2>Form Header</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi consequuntur corporis cupiditate deserunt dolore illo iste magni maxime, perspiciatis quam quo, saepe similique vero voluptatem. Consequatur molestiae quibusdam tempora.</p>
    </div>

    <div slot="form-fields">
      <input type="text" placeholder="Name">
      <input type="password" placeholder="Password">
    </div>

    <div slot="form-controls">
      <button v-on:click="handleSubmit">Submit</button>
    </div>
  </form-helper>

</template>


<script>
import FormHelper from './components/FormHelper';

export default {
  components: {
    'form-helper': FormHelper,
  },
  data () {
    return {
      title: 'I am a dynamic slot title!'
    }
  },
  methods: {
    handleSubmit() {
      alert('Form Submitted');
    }
  }
}
</script>

<style>

</style>
