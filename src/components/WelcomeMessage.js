import { h } from "vue";

const userTypeMessages = {
    freelancer: () => h("h1", "Hello there!"),
    business: () => h("h1", "Welcome to our B2B portal"),
    agency: ({ name }) => h("h1", ["Hello ", h("strong", name)]),
    enterprise: ({ name, supportEmail }) =>
        h("h1", [
            "Hi, ",
            h("strong", name),
            ", if you have any questions, please contact ",
            h("a", { href: `mailto:${supportEmail}` }, supportEmail),
        ]),
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
            default: "",
        },
        supportEmail: {
            type: String,
            default: "",
        },
    },
    render() {
        return userTypeMessages[this.userType]({
            name: this.name,
            supportEmail: this.supportEmail,
        });
    },
};
