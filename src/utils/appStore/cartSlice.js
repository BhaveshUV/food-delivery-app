import { createSlice } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {},
        freq: {},
    },
    reducers: {
        addItem: (state, action) => {
            let key = action.payload.card.info.id;
            if(state.items[key]){
                // console.log(current(state.items[key]));
                // console.log(action.payload);
                if(JSON.stringify(state.items[key]) !== JSON.stringify(action.payload)) {
                    window.alert("Two dishes are having same id, maybe of different restaurants");
                }
                state.freq[key]++;
                // console.log(state.freq[key]);
            } else {
                state.items[key] = action.payload;
                state.freq[key] = 1;
            }
        },
        removeItem: (state, action) => {
            let key = action.payload.card.info.id;
            if(state.freq[key] === 1) {
                delete state.freq[key];
                delete state.items[key];
            } else {
                state.freq[key]--;
            }
        },
        clearCart: (state) => {
            state.items = {};
            state.freq = {};
        },
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;