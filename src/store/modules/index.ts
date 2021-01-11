const files = import.meta.globEager('./*.ts')

// eslint-disable-next-line
const modules: VuexMoudle = {}

Object.keys(files).forEach((key) => {
	modules[key.replace(/(\.\/|\.ts)/g, '')] = files[key].default
})

console.log('modules', modules)
export default modules
