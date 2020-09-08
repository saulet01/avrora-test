<template>
    <v-app>
        <v-app-bar app color="primary" dark class="d-flex align-center">
            <v-toolbar-title>Саулет Ыскак (Тестовое задание)</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <Snackbar />
            <Departments />
        </v-main>
    </v-app>
</template>

<script>
import Departments from "./components/Departments";
import Snackbar from "./components/UI/Snackbar";

export default {
    name: "App",

    components: {
        Departments,
        Snackbar,
    },

    data: () => ({
        //
    }),
};
</script>

<style scoped>
.app-bar-title {
    font-size: 1.5em;
}
</style>
