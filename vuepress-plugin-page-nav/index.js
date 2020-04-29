// [
//   (pluginOptions, context) => ({
//     name: 'my-xxx-plugin',
//     clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
//     updated () {
//       // ...
//     }
//   })
// ],
const path = require('path')
module.exports = (options = {}, context) => ({
  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js')
})
