module.exports = {
  plugins: [{ plugin: require('./CracoFederationPlugin') }],
  devServer: {
    port: 3001,
    proxy: { 
      '/api': { 
        target: 'http://backend.tank:101', 
        secure: false 
      } 
    }
  }
}
