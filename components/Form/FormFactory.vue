<template>
  <form class="form">
    <div v-for="field in fields" :key="field.name">
      <div class="form-group">
        <component
          v-model="data[field.name]"
          :is="field.component"
          v-bind="{...field.options.attrs}"
        />
      </div>
    </div>
    <div class="form-group"><button class="btn" :class="`btn-${btn.type}`">{{btn.title}}</button></div>
  </form>
</template>

<script>

export default {
  name: 'FormFactory',
  props: {
    btn: {
      type: Object,
      default: () => ({})
    },
    fields: {
      default: () => [],
      type: Array
    },
  },
  data () {
    return {
      data: {}
    }
  }
}
</script>
<style>
.form-group {
  margin: 15px
}
</style>