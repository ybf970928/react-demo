const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

const changeLanguage = (language:string) => {
    return {
        type: CHANGE_LANGUAGE,
        language
    }
}
export {
    changeLanguage,
    CHANGE_LANGUAGE
}