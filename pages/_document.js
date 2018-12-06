import Document, { Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default class CustomDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <body>
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
            <Main />
          </div>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/support">Support</Link></li>
              <li><Link href="/privacy-policy">Privacy</Link></li>
            </ul>
          </nav>
          <NextScript />
        </body>
      </html>
    )
  }
};
