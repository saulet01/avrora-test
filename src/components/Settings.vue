<template>
    <div>
        <v-btn small @click.stop="dialog = true" :text="btnType"> <slot></slot> </v-btn>
        <v-dialog v-model="dialog" max-width="700">
            <v-card>
                <v-card-title class="headline">{{ title }}</v-card-title>
                <v-card-text>
                    <v-form ref="form" v-model="valid" lazy-validation class="mt-4">
                        <v-text-field prepend-inner-icon="mdi-office-building" outlined v-model="mutableName" :counter="50" label="Имя филиала" required :rules="nameRules"></v-text-field>
                        <v-text-field prepend-inner-icon="mdi-account-group" outlined v-model="mutableCount" label="Количество сотрудников" required :rules="countRules"></v-text-field>
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn @click="dialog = false">
                        Отменить
                    </v-btn>

                    <v-btn color="success" @click="dialogSubmit">
                        <v-icon class="mr-1" size="1.5em">mdi-check</v-icon>
                        Ок
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ["name", "count", "btnType", "typeSubmit", "id", "title"],

    data() {
        return {
            dialog: false,
            valid: false,
            mutableName: this.name,
            mutableCount: this.count,
            nameRules: [(v) => !!v || "Имя филиала обязательно!"],
            countRules: [(v) => !!v || "Количество сотрудников обязательно", (v) => !isNaN(v) || "Введите только цифры!"],
        };
    },
    methods: {
        dialogSubmit() {
            if (this.$refs.form.validate()) {
                if (this.typeSubmit === "edit") {
                    let updateDepartment = {
                        id: this.id,
                        name: this.mutableName,
                        count: this.mutableCount,
                    };

                    this.$store.dispatch("editCurrentElement", updateDepartment);
                    this.dialog = false;
                } else {
                    let randomID = Math.random()
                        .toString(36)
                        .substring(7);

                    let newDepartment = {
                        id: randomID,
                        name: this.mutableName,
                        count: this.mutableCount,
                    };

                    this.$store.dispatch("AddItem", newDepartment);
                    this.clear();
                }
            }
        },
        clear() {
            this.dialog = false;
            this.mutableName = "";
            this.mutableCount = "";
            this.$refs.form.reset();
        },
    },
};
</script>

<style></style>
