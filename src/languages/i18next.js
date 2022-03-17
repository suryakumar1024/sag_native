import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import commonEn from './english/commonEn';
import commonFr from './french/commonFr';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
        common:commonEn
    //   translation: {
    //     "title": "your town's empty"
    // },
    },
    fr: {
        common:commonFr
    //   translation: {
    //     title: 'ta ville est vide',
    //   },
    },
  },
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

export default i18n;
