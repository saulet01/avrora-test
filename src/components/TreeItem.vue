<template>
    <v-container class="my-0 py-0 table-col item">
        <v-hover v-slot:default="{ hover }">
            <v-row :class="activeElement === currentEl ? 'active' : 'noactive'" @click="setActive(item)" class="simple table-border-bottom" justify="start" :style="hover ? { backgroundColor: '#A4C3FA' } : {}">
                <v-col cols="7" lg="7" md="7" class="table-col" @click="toggleOpen(item)">
                    <div class="dep-name">
                        <div :style="indent">
                            {{ item.name }}
                        </div>
                        <span v-if="isFolder">
                            <v-icon v-if="isOpen" size="1.8em">mdi-chevron-down</v-icon>
                            <v-icon v-else size="1.8em">mdi-chevron-right</v-icon>
                        </span>
                    </div>
                </v-col>
                <v-col cols="3" lg="3" md="2" class="table-border-left">{{ item.count }}</v-col>
                <v-col cols="2" lg="2" md="3" class="d-flex table-border-left">
                    <Settings :name="item.name" :count="item.count" :btnType="true" typeSubmit="edit" :id="item.id" title="Изменить">
                        <v-icon size="2em">mdi-pencil</v-icon>
                    </Settings>
                    <Remove :name="item.name" :id="item.id" />
                </v-col>
            </v-row>
        </v-hover>

        <v-row v-if="isFolder" v-show="isOpen">
            <tree-item v-for="(child, index) in item.children" :key="child.name + index" :item="child" :depth="depth + 1" />
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Settings from "./Settings";
import Remove from "./Remove";
export default {
    name: "TreeItem",
    components: {
        Settings,
        Remove,
    },
    props: {
        item: {
            type: Object,
            default: () => {},
        },
        depth: {
            type: Number,
        },
        index: {
            type: Number,
        },
    },
    data() {
        return {
            isOpen: false,
            activeElement: false,
        };
    },
    computed: {
        ...mapGetters(["currentEl"]),

        isFolder() {
            return this.item.children && this.item.children.length;
        },

        indent() {
            return { transform: `translate(${this.depth * 20}px)` };
        },
    },
    methods: {
        toggleOpen(item) {
            this.$store.dispatch("setCurrentElement", item);
            this.isOpen = !this.isOpen;
        },
        setActive(element) {
            if (element.id == this.currentEl) {
                this.activeElement = this.currentEl;
            }
        },
    },
};
</script>

<style scoped>
.active {
    background-color: #cadcfb;
}

.simple {
    display: flex;
    flex-direction: row;
}

.dep-name {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}

.item {
    cursor: pointer;
}
</style>
