import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>@Watch – Internet Time, on your wrist</title>
    </Head>
    <img
      style={{
        display: 'block',
        width: 256,
        maxWidth: '100%',
        margin: '0 auto'
      }}
      src="/static/apple-watch-hero.png"
      alt="Photograph of Apple Watch running @Watch, showing the time is 10:09, and the internet time is @006"
    />
    <p>@Watch brings Internet Time to your iPhone, iPad and Apple Watch!</p>
    <p>
      <center>
        <a href="TBA!!!">
          <img
            style={{ verticalAlign: 'middle' }}
            src="/static/download-on-the-app-store.svg"
            alt="Download on the App Store"
          />
        </a>
      </center>
    </p>
    <p>
      <small>
        Apple, the Apple logo, Apple Watch, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc.
      </small>
    </p>
  </div>
);
