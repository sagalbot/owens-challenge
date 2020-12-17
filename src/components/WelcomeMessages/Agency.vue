<template>
  <h1>
    Hello, <strong>{{ $props.name }}</strong>
  </h1>
</template>

<script>
export default {
  props: ["name"],
};
</script>
