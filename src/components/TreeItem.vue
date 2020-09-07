<template>
    <v-container class="my-0 py-0 table-col item">
        <v-row class="simple table-border-bottom " justify="start">
            <v-col cols="7" class="col2-color table-col" @click="toggleOpen(item)">
                <div class="dep-name">
                    <p :style="indent">{{ item.name }}</p>
                    <span v-if="isFolder">[{{ isOpen ? "-" : "+" }}]</span>
                </div>
            </v-col>
            <v-col cols="3" class="col1-color table-border-left">
                {{ item.count }}
            </v-col>
            <v-col cols="2" class="col-color table-border-left">
                <v-btn small text @click="editDepartment(item)">
                    <v-icon small>fas fa-pen</v-icon>
                </v-btn>
                <v-btn small text @click="removeDepartment(item)">
                    <v-icon small>fas fa-trash</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-row v-if="isFolder" v-show="isOpen">
            <!-- <v-col> -->
            <tree-item v-for="(child, index) in item.children" :key="child.name + index" :item="child" :depth="depth + 1" />
            <!-- </v-col> -->
        </v-row>
    </v-container>

    <!-- </li> -->
</template>

<script>
export default {
    name: "TreeItem",
    props: {
        item: {
            type: Object,
            default: () => {},
        },
        depth: {
            type: Number,
        },
    },
    data() {
        return {
            isOpen: false,
        };
    },
    computed: {
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
        editDepartment(item) {
            this.$store.dispatch("editCurrentElement", item);
        },
        removeDepartment(item) {
            this.$store.dispatch("removeCurrentElement", item);
        },
    },
};
</script>

<style scoped>
/* .col-color {
    background-color: tomato;
}

.col1-color {
    background-color: green;
}

.col2-color {
    background-color: yellow;
} */

.simple {
    display: flex;
    flex-direction: row;
    /* border: 1px solid black; */
}

.dep-name {
    display: flex;
    justify-content: space-between;
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
