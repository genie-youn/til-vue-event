<template>
  <div class="icon-container">
    <AlertButton/>
    <CheckButton @checked="onChecked"/>
  </div>
</template>

<script>
import AlertButton from '@/components/AlertButton.vue';
import CheckButton from '@/components/CheckButton.vue';

export default {
  name: 'CardHeader',
  components: {
    CheckButton,
    AlertButton,
  },
  methods: {
    onChecked() {
      this.$emit('checked');
    },
  },
};
</script>

<style scoped lang="scss">
  .icon-container {
    text-align: end;
  }
</style>
