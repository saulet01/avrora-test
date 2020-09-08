import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdi", // default - only for display purposes
    },
    theme: {
        themes: {
            light: {
                primary: "#2F3E4E",
                secondary: "#b0bec5",
                accent: "#8c9eff",
                error: "#b71c1c",
            },
        },
    },
});
