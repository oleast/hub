import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'

import Hub from './components/Hub'

require('./misc/')

global.ACCENT_COLOR = 'blue'

if (typeof window !== 'undefined') {
  render(
    <HashRouter>
      <Hub id='hub' />
    </HashRouter>,
		document.getElementById('root')
	)
}
