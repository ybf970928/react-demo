interface LanguageState {
    language: '中文'| 'English',
    languageList: {name: string, type: string }[]
}

const defaultLanguage:LanguageState = {
    language: '中文',
    languageList: [{name: '中文', type: '中文'}, {name: 'English', type: 'English'}]
}

export {
    defaultLanguage
}