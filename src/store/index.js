import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: [
            {
                id: 1,
                name: "Нур-Султан",
                count: 100,
                children: [{ id: 2, name: "Центр 1", count: 125 }],
            },
            {
                id: 3,
                name: "Алматы",
                count: 125,
                children: [
                    { id: 4, name: "Центр 1", count: 125, children: [{ id: 5, name: "Управление 1", count: 125 }] },
                    { id: 6, name: "Центр 2", count: 125 },
                ],
            },
        ],
        currentElement: {},
    },
    mutations: {
        assignCurrentElement: (state, payload) => {
            state.currentElement = payload;
        },
        addNewDepartment: (state, payload) => {
            if (state.currentElement.children && state.currentElement.children.length) {
                state.currentElement.children.push(payload);
            } else if (Object.keys(state.currentElement).length === 0) {
                state.data.push(payload);
            } else {
                Vue.set(state.currentElement, "children", []);
                state.currentElement.children.push(payload);
            }
        },
        editDeparment: (state, payload) => {
            const findItemNested = (arr, itemId, nestingKey) =>
                arr.reduce((a, item) => {
                    if (a) return a;
                    if (item.id === itemId) return item;
                    if (item[nestingKey]) return findItemNested(item[nestingKey], itemId, nestingKey);
                }, null);

            const res = findItemNested(state.data, payload.id, "children");
            res.name = payload.name;
            res.count = payload.count;
        },
        removeDeparment: (state, payload) => {
            // const findItemNested = (arr, itemId, nestingKey) =>
            //     arr.reduce((a, item) => {
            //         if (a) return a;
            //         if (item.id === itemId) return item;
            //         if (item[nestingKey]) return findItemNested(item[nestingKey], itemId, nestingKey);
            //     }, null);
            // const res = findItemNested(array, 959, "children");
        },
    },
    actions: {
        setCurrentElement: ({ commit }, payload) => {
            commit("assignCurrentElement", payload);
        },
        AddItem: ({ commit }, payload) => {
            commit("addNewDepartment", payload);
        },
        editCurrentElement: ({ commit }, payload) => {
            commit("editDeparment", payload);
        },
        removeCurrentElement: ({ commit }, payload) => {
            commit("removeDeparment", payload);
        },
    },
    modules: {},
    getters: {
        departments: (state) => {
            return state.data;
        },
        currentEl: (state) => {
            return state.currentElement.id;
        },
    },
});
