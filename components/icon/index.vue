<template>
  <div v-if="type === 'chevron-left'" class="icon-components">
    <svg
      viewBox="0 0 407.436 407.436"
      xml:space="preserve"
    >
      <polygon
        points="315.869,21.178 294.621,0 91.566,203.718 294.621,407.436 315.869,386.258 133.924,203.718 "
      ></polygon>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
      required: true
    }
  }
};
</script>
