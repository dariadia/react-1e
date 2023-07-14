// runs in the background
// do not defer other processes
// useful: large contentful paints

// Await examples
function foo() {
  return Promise.resolve(1).then(() => undefined)
}
  
async function foo2() {
  await 1
}

function resolveLater() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved')
    }, 2000)
  })
}
  
async function asyncCall() {
  console.log('calling')
  const result = await resolveLater()
  console.log(result) // "resolved"
}
  
// asyncCall()
  