<template>
    <v-app>
        <v-app-bar app color="primary" dark class="d-flex align-center">
            <v-toolbar-title>Саулет Ыскак (Тестовое задание)</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <Departments />
        </v-main>
    </v-app>
</template>

<script>
    import Departments from "./components/Departments";

    export default {
        name: "App",

        components: {
            Departments,
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
