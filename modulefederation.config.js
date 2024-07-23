const deps = require('./package.json').dependencies

module.exports = {
  name: 'oil_tanks_reactapp',
  filename: 'oil_tanks_reactapp.js',
  exposes: {
    './Calculator': './src/Pages/Calculator.jsx',
    './CalculatorV2': './src/Pages/CalculatorV2.jsx',
    './Cistern': './src/Pages/Cistern.jsx',
    './Home': './src/Pages/Home.jsx',
    './Park': './src/Pages/Park.jsx',
    './ParkV2': './src/Pages/ParkV2.jsx',
    './StructuralAnalysis': './src/Pages/StructuralAnalysis.jsx'
  },
  shared: {
    ...deps,
    react: { singleton: true, requiredVersion: deps.react },
    'react-dom': { singleton: true, requiredVersion: deps['react-dom'] }
  }
}
