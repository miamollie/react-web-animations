import {defaults} from './defaults.js'

export const darkTheme = {
    primary: {
        backgroundColor: `${defaults.colors.orange}`,
        borderColor: `${defaults.colors.orange}`,
        color: `${defaults.colors.white}`,
    },
    secondary: {
        backgroundColor: `${defaults.colors.white}`,
        borderColor: `${defaults.colors.orange}`,
        color: `${defaults.colors.orange}`,
    }
}

export const lightTheme = {
    primary: {
        backgroundColor: `${defaults.colors.lightGrey}`,
        borderColor: `${defaults.colors.lightGrey}`,
        color: `${defaults.colors.white}`,
    },
    secondary: {
        backgroundColor: `${defaults.colors.white}`,
        borderColor: `${defaults.colors.lightGrey}`,
        color: `${defaults.colors.lightGrey}`,
    }
}
