

// @ts-ignore
export default (phase, { defaultConfig }) => {

    return {
        // i18n,
        swcMinify: true,
        reactStrictMode: true,
        productionBrowserSourceMaps: true,
        // sassOptions: {
        //   includePaths: [path.join(__dirname, 'src'),path.join(__dirname, 'components')],
        // },
        pageExtensions: ['tsx', 'ts', 'js', 'jsx'],
        experimental: {
            // instrumentationHook: true,
            //optimizeFonts: true,
            // swcPlugins: [['next-superjson-plugin', {}]],
            // nextScriptWorkers: true
        },
        transpilePackages: ['geist'],
        // dangerouslyAllowSVG: true,
        images: {
            remotePatterns: [
                {
                    protocol: 'http',
                    hostname: 'localhost',
                    port: '3000',
                    pathname: '/**'
                },
                {
                    protocol: 'https',
                    hostname: 'tailwindui.com',
                    port: '',
                    pathname: '/img/logos/**'
                },
            ]
        }
    }
};
