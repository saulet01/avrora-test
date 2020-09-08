<template>
    <v-container class="my-0 py-0 table-col item">
        <v-hover v-slot:default="{ hover }">
            <v-row :class="activeElement === currentEl ? 'active' : 'noactive'" @click="setActive(item)" class="simple table-border-bottom" justify="start" :style="hover ? { backgroundColor: '#A4C3FA' } : {}">
                <v-col cols="7" lg="7" md="7" class="col2-color table-col" @click="toggleOpen(item)">
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
                <v-col cols="3" lg="3" md="2" class="col1-color table-border-left">{{ item.count }}</v-col>
                <v-col cols="2" lg="2" md="3" class="d-flex table-border-left">
                    <Settings :name="item.name" :count="item.count" :btnType="true" typeSubmit="edit" :id="item.id" title="Изменить">
                        <v-icon size="2em">mdi-pencil</v-icon>
                    </Settings>

                    <v-btn text @click="removeDepartment(item)">
                        <v-icon size="2em">mdi-close-circle</v-icon>
                    </v-btn>
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
export default {
    name: "TreeItem",
    components: {
        Settings,
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
        // removeDepartment(item) {
        //     this.$store.dispatch("removeCurrentElement", item);
        // },
        setActive(element) {
            if (element.id == this.currentEl) {
                this.activeElement = this.currentEl;
            }
        },
    },
};
</script>

<style scoped>
/* .col-color {
    background-color: tomato;
} */

/* .col1-color {
    background-color: green;
}

.col2-color {
    background-color: yellow;
} */

/* .noactive {
    background-color: #fff;
} */

.active {
    background-color: #cadcfb;
}

.simple {
    display: flex;
    flex-direction: row;
    /* border: 1px solid black; */
}

.dep-name {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}
/* .item {
    cursor: pointer;
}
.bold {
    font-weight: bold;
}
ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
} */

.item {
    cursor: pointer;
}
</style>
