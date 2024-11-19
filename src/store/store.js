import { createStore } from "vuex";
import auth from './module/auth/index.js'

const store = createStore({
    modules:{
        auth,
    }
});

export default store;