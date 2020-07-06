import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Customers from '../components/customers'
import Orders from '../components/orders'
import { IntlProvider } from 'react-intl'
import lang_en from '../translations/en.json'
import lang_ru from '../translations/ru.json'
import lang_fr from '../translations/fr.json'

const Routes = () => {
  const [lang, setLang] = useState('en')
  const [locale, setLocale] = useState(lang_en)
  const changeLanguage = e => {
    const selectedLocale = e.target.value
    setLang(selectedLocale)
    switch (selectedLocale) {
      case 'en':
        return setLocale(lang_en)
      case 'ru':
        return setLocale(lang_ru)
      case 'fr':
        return setLocale(lang_fr)
      default:
        return setLocale(lang_en)
    }
  }
  const localeList = [
    { name: 'English', code: 'en', lang: 'English' },
    { name: 'русский', code: 'ru', lang: 'Russian' },
    { name: 'Française', code: 'fr', lang: 'French' },
  ]
  return (
    <IntlProvider locale={lang} messages={locale}>
      <Switch>
        <Route path="/" exact render={() => <Customers />} />
        <Route path="/customer/:sender" render={props => <Orders {...props} />} />
      </Switch>
      <div>
        <select onChange={changeLanguage} defaultValue={lang}>
          {localeList.map((locale, index) => (
            <option key={index} value={locale.code}>
              {locale.name}
            </option>
          ))}
        </select>
      </div>
    </IntlProvider>
  )
}

export default Routes
