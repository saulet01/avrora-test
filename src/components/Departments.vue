<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title class="card-title" :style="{ 'background-color': primaryBackgroundColor }">Организационная структура</v-card-title>
                    <v-card-actions class="pa-4">
                        <Settings name="" count="" typeSubmit="add" title="Добавить">
                            <v-icon size="small" class="mr-1">mdi-plus-thick</v-icon>
                            Добавить
                        </Settings>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="table-all">
                <v-card>
                    <v-container class="my-0 py-0">
                        <v-row justify="start" :style="{ 'background-color': primaryBackgroundColor }" class="table-header">
                            <v-col cols="7" lg="7" md="7"></v-col>
                            <v-col cols="3" lg="3" md="2" class="table-border-left">Общее количество</v-col>
                            <v-col cols="2" lg="2" md="3" class="table-border-left">Действия</v-col>
                        </v-row>
                    </v-container>
                    <tree-item :item="item" v-for="(item, index) in departments" :key="index + 'b'" :depth="1" :class="{ active: index === activeItem }" @setCurrentClass="setActiveClass" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TreeItem from "./TreeItem";
import { mapGetters } from "vuex";
import Settings from "./Settings";

export default {
    components: { TreeItem, Settings },
    name: "Departments",
    data() {
        return {
            primaryBackgroundColor: this.$vuetify.theme.themes.light.primary,
            isOpen: false,
            activeItem: null,
        };
    },

    methods: {
        toggle(item) {
            if (item.children && item.children.length) {
                this.isOpen = !this.isOpen;
            }
        },

        setActiveClass(activeElelemnt) {
            this.activeItem = activeElelemnt;
        },
    },

    computed: {
        ...mapGetters(["departments"]),
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

.items {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.table-header {
    color: #fff;
}
</style>
