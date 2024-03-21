import { I18n } from 'i18n-js'
import { en } from './en'
import { fr } from './fr'
import { Ar } from './Ar'

const i18n = new I18n({ en, fr,Ar })
i18n.enableFallback = true

export default i18n
