<template>
<span class="icon" :class="{checked: checked}" @click="check">
      <i class="fas fa-check btn-check"></i>
    </span>
</template>
<script>
export default {
  name: 'CheckButton',
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    check() {
      this.checked = !this.checked;
      this.$emit('checked');
    },
  },
};
</script>
<style lang="scss">
  .icon.checked {
    color: #2f9e4d;
  }
</style>
