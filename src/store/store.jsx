import { configureStore } from "@reduxjs/toolkit";
import eventRuducer from './eventSlice';

const store = configureStore({
    reducer: {
        event: eventRuducer
    },
});
export default store;