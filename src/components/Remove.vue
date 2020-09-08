<template>
    <div>
        <v-btn text @click.stop="dialog = true">
            <v-icon size="2em">mdi-close-circle</v-icon>
        </v-btn>

        <v-dialog v-model="dialog" max-width="700">
            <v-card>
                <v-card-title class="headline">Вы действительно хотите удалить филиал '{{ name }}'</v-card-title>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn @click="dialog = false">
                        Отменить
                    </v-btn>

                    <v-btn color="success" @click="dialogSubmit">
                        <v-icon class="mr-1" size="1.5em">mdi-check</v-icon>
                        Да
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ["name", "id"],

    data() {
        return {
            dialog: false,
        };
    },
    methods: {
        dialogSubmit() {
            this.$store.dispatch("removeCurrentElement", this.id);
            this.dialog = false;
        },
    },
};
</script>

<style></style>
