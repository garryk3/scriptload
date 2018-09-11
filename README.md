## Использование

**scriptload(array[{}] || {});**

## Example
_import scriptload from '~/scriptload'


const scripts = [
    {
        src: 'test.js',
        onerror: () => console.warn('test.js not found')
    },
    {
        src: './loaded-script-async.js',
        async: true
    },
    {
        src: './loaded-script-with-onload-handler.js',
        defer: true,
        onload: () => console.log('loaded-script-with-onload-handler.js was loaded')
    }
]

**scriptload(scripts)


