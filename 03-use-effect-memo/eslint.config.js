import neostandard from 'neostandard'

export default neostandard({
  // Configuración para React
  env: ['browser'],
  // Ignora archivos de build y node_modules
  ignores: ['dist/**', 'build/**', 'node_modules/**']
})
