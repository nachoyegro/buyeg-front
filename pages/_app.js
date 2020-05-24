import React from 'react'
import App from 'next/app'
import Page from '../components/Page';

/**
const MyApp = ({ Component, pageProps }) => {
    return (<div>
            <p>Hola, estoy en todos lados</p>
            <Component {...pageProps} />
            </div>);
}

export default MyApp
*/

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    )
  }
}

export default MyApp
