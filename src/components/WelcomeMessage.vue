<template>
  <h1>
    <template v-if="userType === 'freelancer'">Hello there!</template>
    <template v-if="userType === 'agency'">
      Hello,
      <strong>{{ $props.name }}</strong>
    </template>
    <template v-if="userType === 'business'">
      Welcome to our B2B portal
    </template>
    <template v-if="userType === 'freelancer'">
      Hi, <strong>{{ $props.name }},</strong>
      if you have any questions, please contact
      <a :href="`mailto:${$props.supportEmail}`">{{ $props.supportEmail }}</a>
    </template>
  </h1>
</template>

<script>
export default {
  props: {
    userType: {
      type: String,
      required: true,
      validator(userType) {
        return ["business", "freelancer", "agency", "enterprise"].includes(
          userType
        );
      },
    },
    name: {
      type: String,
    },
    supportEmail: {
      type: String,
    },
  },
};
</script>
