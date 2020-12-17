<template>
  <h1>
    Hi, <strong>{{ $props.name }},</strong>
    if you have any questions, please contact
    <a :href="`mailto:${$props.supportEmail}`">{{ $props.supportEmail }}</a>
  </h1>
</template>

<script>
export default {
  props: ["name", "supportEmail"],
};
</script>
