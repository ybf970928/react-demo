import { createStore, combineReducers } from 'redux'
import { changeLanguage } from './reducers/changeLanguageState'
import { defaultLanguage } from './states/changeLanguageState'
const allReducers = combineReducers({
    changeLanguage: changeLanguage
})
// createStore第一个参数是reducer 第二个是state 
// 如果你使用 combineReducers 创建 reducer，它必须是一个普通对象，与传入的 keys 保持同样的结构
const store = createStore(allReducers, {
    changeLanguage: defaultLanguage
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store