const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/order/main-es2015.js',
    './dist/order/main-es5.js',
    './dist/order/polyfills-es2015.js',
    './dist/order/polyfills-es5.js',
    './dist/order/runtime-es2015.js',
    './dist/order/runtime-es5.js'
  ]

  await fs.ensureDir('order')

  await concat(files, 'order/order.js')
  console.log('order got created');
})()
