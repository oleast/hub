import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

import Hub from './components/Hub'

if (process.env.GA_TOKEN !== "") {
    ReactGA.initialize(process.env.GA_TOKEN)
}

function logPageView() {
    console.log('[index.js](logPageView) Pushing: ' + window.location.pathname)
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
}

require('./misc/')

if (typeof window !== 'undefined') {
  render(
    <HashRouter onUpdate={logPageView}>
      <Hub id='hub' />
    </HashRouter>,
		document.getElementById('root')
	)
}
