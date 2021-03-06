export default {
    namespace: "home",
    state: {
        lists: [],//首页商品类型
        brands:[],//首页品牌商品
        sellLists:[],//首页热销榜单
        pops:[],//人气商品
        limits:[]//限时商品
    },

    effects: {
        //获取首页商品类型
        *getList(action, { put }) {
            let response = yield fetch("http://localhost:3000/list");
            let res = yield response.json();
            yield put({ type:"setList",list: res })
        },
        //获取首页品牌商品
        *getBrand(action,{ put }) {
            let response = yield fetch("http://localhost:3000/brand");
            let res = yield response.json();
            yield put({ type:"setBrand",brand: res })
        },
        //获取首页热销榜单
        *getSellList(action,{ put }) {
            let response = yield fetch("http://localhost:3000/sellList");
            let res = yield response.json();
            yield put({ type:"setSellList",sellList: res })
        },
        //获取人气商品
        *getPop(action,{ put }) {
            let response = yield fetch("http://localhost:3000/pop");
            let res = yield response.json();
            yield put({ type:"setPop",pop: res })
        },
        //获取限时商品
        *getLimit(action,{ put }) {
            let response = yield fetch("http://localhost:3000/limitTime");
            let res = yield response.json();
            yield put({ type:"setLimit",limit: res })
        },
    },
    reducers: {
       setList(state,action) {
           return{...state,...{ lists: action.list }}
       },
       setBrand(state,action) {
           return{...state,...{ brands: action.brand }}
       },
       setSellList(state,action) {
        return{...state,...{ sellLists: action.sellList }}
       },
       setPop(state,action) {
        return{...state,...{ pops: action.pop }}
       },
       setLimit(state,action) {
           return{...state,...{ limits: action.limit }}
       }
    }
}