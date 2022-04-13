import Head from 'next/head'

function SEO() {

    return (
        <Head>
            <title>ADMINLTE 3</title>
            <meta name="description" content="ADMINLTE 3" />
            <meta charSet="utf-8" />
            <link rel="icon" href={`favicon.ico`} />

            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link rel="stylesheet" href={`/assets/template/plugins/fontawesome-free/css/all.min.css`} />
            <link rel="stylesheet" href={`/assets/template/dist/css/adminlte.min.css`} />

            <script async src={`/assets/template/plugins/jquery/jquery.min.js`} />
            <script async src={`/assets/template/plugins/bootstrap/js/bootstrap.bundle.min.js`} />
            <script async src={`/assets/template/dist/js/adminlte.min.js`} />
        </Head>
    )
}

export default SEO