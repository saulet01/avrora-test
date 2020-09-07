import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@fortawesome/fontawesome-free/css/all.css";
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "fa",
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
