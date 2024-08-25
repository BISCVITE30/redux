export const LANGUAGE_SET = 'LANGUAGE/SET'

export const setLanguage = (lang) => {
    return {
        type: LANGUAGE_SET,
        payload: lang,
    }
}