<template>
  <div>
    <div class="text-xs-center mb-2">
      <v-chip label class="teal darken-1 white--text">Aradığınız ürünler aşağıdadır.</v-chip>
    </div>
    <List />
  </div>
</template>

<script>
import List from '../components/List'

  export default {
    components: {
      List
    }
  }
</script>
