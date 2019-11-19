<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <Card/>
      </div>
      <div class="column">
        <Card/>
      </div>
      <div class="column">
        <Card/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'HelloWorld',
  components: { Card },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
  }

</style>
