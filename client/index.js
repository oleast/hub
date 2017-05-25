import React from 'react'
import {render} from 'react-dom'

import Hub from './components/Hub'

if (typeof window !== 'undefined') {
  render(
    <Hub id='hub' />,
		document.getElementById('root')
	)
}
