<template>
  <div class="card">
    <CardHeader @checked="onChecked"/>
    <CardImage/>
    <CardContent/>
  </div>
</template>
<script>
import CardImage from '@/components/CardImage.vue';
import CardContent from '@/components/CardContent.vue';
import CardHeader from '@/components/CardHeader.vue';

export default {
  name: 'Card',
  components: {
    CardContent,
    CardImage,
    CardHeader,
  },
  methods: {
    onChecked() {
      this.$el.style.border = '1px solid #2f9e4d';
    },
  },
};
</script>
