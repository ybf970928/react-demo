import { defaultLanguage } from '../states/changeLanguageState'
import { CHANGE_LANGUAGE } from '../actions/changeLanguageState'

const changeLanguage = (state = defaultLanguage, action: any ) => {
    if (action.type === CHANGE_LANGUAGE) {
        return {
            ...state,
            language: action.language
        }
    }
    return state
}
export {
    changeLanguage
}