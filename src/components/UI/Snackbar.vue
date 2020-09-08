<template>
    <v-snackbar v-model="getSnackbar" top right timeout="2000" color="success">
        {{ getSnackbarMessage }}

        <template v-slot:action="{ attrs }">
            <v-btn color="" small text v-bind="attrs" @click="closeSnack">
                Закрыть
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            snackState: "",
        };
    },
    methods: {
        closeSnack() {
            this.$store.commit("closeSnackbar");
        },
    },
    computed: {
        ...mapGetters(["getSnackbarMessage"]),
        getSnackbar: {
            get() {
                return this.$store.state.snackbar;
            },
            set(newValue) {
                this.$store.commit("closeSnackbar");
            },
        },
    },
};
</script>

<style></style>
