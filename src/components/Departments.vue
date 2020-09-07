<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title class="card-title" :style="{ 'background-color': primaryBackgroundColor }">Организационная структура</v-card-title>
                    <v-card-actions class="pa-4">
                        <div>
                            <v-btn small class="btn-add" @click="addNewDepartment">
                                <v-icon size="small" class="mr-1">fas fa-plus</v-icon>
                                Добавить</v-btn
                            >
                        </div>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-container class="my-0 py-0">
                    <v-row justify="start" :style="{ 'background-color': primaryBackgroundColor }" class="table-header">
                        <v-col cols="7"></v-col>
                        <v-col cols="3" class="table-border-left">Общее количество</v-col>
                        <v-col cols="2" class="table-border-left ">Действия</v-col>
                    </v-row>
                </v-container>
                <tree-item :item="item" v-for="(item, index) in departments" :key="index + 'i'" :depth="1" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-container>
                    <v-img :src="img"></v-img>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TreeItem from "./TreeItem";
import { mapGetters } from "vuex";

export default {
    components: { TreeItem },
    name: "Departments",
    data() {
        return {
            primaryBackgroundColor: this.$vuetify.theme.themes.light.primary,
            isOpen: false,
            img: require("@/assets/images/screen.png"),
        };
    },

    methods: {
        toggle(item) {
            if (item.children && item.children.length) {
                this.isOpen = !this.isOpen;
            }
        },

        addNewDepartment() {
            this.$store.dispatch("AddItem");
        },
    },

    computed: {
        ...mapGetters(["departments"]),
        departments() {
            return this.$store.state.data;
        },
    },
};
</script>

<style scoped>
.card-title {
    color: #fff;
    font-size: 1em !important;
    text-transform: uppercase !important;
}

.card-content {
    padding: 10;
}

.btn-add {
    text-transform: capitalize !important;
}

.items {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.table-header {
    color: #fff;
}
</style>
