import Head from 'next/head'

export default ({ title }) => (
  <Head>
    <title>{title}</title>
    <link href="/static/style.css" rel="stylesheet" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-109318900-3"></script>
    <link rel="icon" href="../static/favicon/.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="../static/favicon/.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" sizes="57x57" href="../static/favicon/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="../static/favicon/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="../static/favicon/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="../static/favicon/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="../static/favicon/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="../static/favicon/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="../static/favicon/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="../static/favicon/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="../static/favicon/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="../static/favicon/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon/favicon-16x16.png" />
    <link rel="manifest" href="../static/favicon/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="../static/favicon/ms-icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />
    <script dangerouslySetInnerHTML={{__html:
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-109318900-3');`}} />
  </Head>
)