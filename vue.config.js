module.exports={
  publicPath: './',
  // assetsPublicPath:'./',
  outputDir: 'dist',
  lintOnSave: true,
  runtimeCompiler: true, 
  chainWebpack: () => {},
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null,
    before: app => {}
  },
    configureWebpack:{
      resolve:{
        alias:{
          'assets':'@/assets',
          'common':'@/common',
          'components':'@/components',
          'network':'@/network',
          'views':'@/views',
          'images':'@/assets/images',
          'css':'@assets/css'
        }
      }
    },
  }
  