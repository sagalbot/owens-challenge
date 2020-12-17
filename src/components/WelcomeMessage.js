import { h } from "vue";
import Freelancer from "./WelcomeMessages/Freelancer.vue";
import Business from "./WelcomeMessages/Business.vue";
import Enterprise from "./WelcomeMessages/Enterprise.vue";
import Agency from "./WelcomeMessages/Agency.vue";

const userTypeMessages = {
  business: () => h(Business),
  freelancer: () => h(Freelancer),
  agency: ({ name }) => h(Agency, { name }),
  enterprise: ({ name, supportEmail }) => h(Enterprise, { name, supportEmail }),
};

export default {
  props: {
    userType: {
      type: String,
      required: true,
      validator(userType) {
        return Object.keys(userTypeMessages).includes(userType);
      },
    },
    name: {
      type: String,
    },
    supportEmail: {
      type: String,
    },
  },
  render() {
    return userTypeMessages[this.userType]({
      name: this.name,
      supportEmail: this.supportEmail,
    });
  },
};
