import React from 'react'
import MarketingApp from './components/MarketingApp';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName} >
      <div>
        <div>Container!</div>
        <MarketingApp />
      </div>
    </StylesProvider>
  )
}