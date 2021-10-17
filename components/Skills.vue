<template>
  <v-word-cloud
    style='
    height: 480px;
    width: 640px;
  '
    :words="[['aws', 19], ['cloud', 3], ['mobile', 7], ['swift', 3], ['kotlin', 3], ['ios', 3, ['android', 3]]]"
    :color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
    font-family='Roboto'
  />
</template>

<script>
import VWordCloud from 'vuewordcloud'

export default {
  name: 'Skills',
  components: {
    VWordCloud
  }
}
</script>
