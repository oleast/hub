import React from 'react'
import {render} from 'react-dom'

import Hub from './components/Hub'
import HubRouter from './components/HubRouter'

require('./misc/')

import ReactGA from  'react-ga'

ReactGA.initialize('UA-100350887-1')

function logPageView() {
  ReactGA.set({
    page: window.location.pathname + window.location.search
  })
  ReactGA.pageview(window.location.pathname + window.location.search)
}


if (typeof window !== 'undefined') {
  render(
    <Hub />,
		document.getElementById('root')
	)
}
