<template>
  <header class="flex space-x-5 p-5 border-b border-gray-200">
    <div class="space-x-2">
      <label for="name">Name</label>
      <input
        class="border border-gray-200 rounded px-2 py-1"
        type="text"
        id="name"
        v-model="name"
      />
    </div>

    <div class="space-x-2">
      <label for="supportEmail">Email</label>
      <input
        class="border border-gray-200 rounded px-2 py-1"
        type="email"
        id="supportEmail"
        v-model="supportEmail"
      />
    </div>

    <div class="space-x-2">
      <label for="userType">User Type</label>
      <select
        class="border border-gray-200 rounded px-2 py-1"
        id="userType"
        v-model="userType"
      >
        <option value="freelancer">freelancer</option>
        <option value="agency">agency</option>
        <option value="business">business</option>
        <option value="enterprise">enterprise</option>
      </select>
    </div>
  </header>

  <div class="px-10 py-20">
    <WelcomeMessage
      :user-type="userType"
      :name="name"
      :support-email="supportEmail"
    />
  </div>
</template>

<script>
import WelcomeMessage from "./components/WelcomeMessage.js";
export default {
  components: { WelcomeMessage },
  data() {
    return {
      name: "Owen Conti",
      userType: "freelancer",
      supportEmail: "owen@ohseemedia.com",
    };
  },
};
</script>
