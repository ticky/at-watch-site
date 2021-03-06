import React from 'react'

import App from 'next/app'
import Head from 'next/head'
import Link from 'next/link'

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Head>
          <meta name="disabled-adaptations" content="watch" />
        </Head>
        <style global jsx>{`
          * {
            box-sizing: border-box;
            text-rendering: optimizeLegibility;
          }

          body {
            font-family: system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;
            background-color: #fbfbfb;
            color: #515151;
            margin: 0;
            padding: .5em;
            min-height: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .container {
            width: 100%;
            max-width: 34em;
            flex: 1 0 auto;
          }

          nav {
            margin: .5em 0;
            text-align: center;
          }

          nav > ul {
            list-style: none;
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }

          nav > ul a {
            padding: .25em .5em;
          }

          a:link, a:visited {
            color: #893ff4;
            text-decoration: none
          }

          a:hover, a:focus {
            text-decoration: underline
          }

          h1 {
            line-height: 1;
          }

          h1 > .subtitle {
            font-size: .5em;
            font-weight: regular;
          }
        `}</style>
        <div className="container">
          <h1>
            @Watch
            <br />
            <span className="subtitle">Internet Time, on your wrist</span>
          </h1>
          <Component {...pageProps} />
        </div>
        <nav>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/support"><a>Support</a></Link></li>
            <li><Link href="/privacy-policy"><a>Privacy</a></Link></li>
          </ul>
        </nav>
      </React.Fragment>
    )
  }
};
