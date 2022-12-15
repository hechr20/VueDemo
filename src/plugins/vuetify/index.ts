import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import theme from "@/plugins/vuetify/theme";
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

const opts = {
    theme: {
        icons: {
            iconfont: 'mdi',
        },
        dark: false,
        themes: {
            light: {
                primary: '#590909',
                secondary: '#1f1f1f',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#0b450d',
                warning: '#FFC107',          
            },
            dark: {
                primary: '#ffffff',
            },
        },
    },
};

export default new Vuetify(opts);