import LocalizedStrings from 'react-localization'
import * as LangHelper from '../common/LangHelper'

const strings = new LocalizedStrings({
  fr: {
    SIGN_IN_HEADING: 'Connexion',
    SIGN_IN: 'Se connecter',
    SIGN_UP: "S'inscrire",
    ERROR_IN_SIGN_IN: 'E-mail ou mot de passe incorrect.',
    IS_BLACKLISTED: 'Votre compte est suspendu.',
    RESET_PASSWORD: 'Mot de passe oublié ?',
    STAY_CONNECTED: 'Rester connecté',
  },
 
  en: {
    SIGN_IN_HEADING: 'Sign in',
    SIGN_IN: 'Sign in',
    SIGN_UP: 'Sign up',
    ERROR_IN_SIGN_IN: 'Incorrect email or password.',
    IS_BLACKLISTED: 'Your account is suspended.',
    RESET_PASSWORD: 'Forgot password?',
    STAY_CONNECTED: 'Stay connected',
  },
  ar: {
    SIGN_IN_HEADING: 'اتصال',
    SIGN_IN: 'يتصل',
    SIGN_UP: "يسجل",
    ERROR_IN_SIGN_IN: 'بريد أو كلمة مرورغير صحيحة.',
    IS_BLACKLISTED:'تم تعليق حسابك',
    RESET_PASSWORD: 'نسيت كلمة السر ؟',
    STAY_CONNECTED: 'ابق على اتصال',
  },
})

LangHelper.setLanguage(strings)
export { strings }
