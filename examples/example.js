import scriptload from '../index'

const scripts = [
    {
        src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A053bd947d462cc1a45aeba4070defff75501905071c0eaf68436ac9976ec698c&amp;width=514&amp;height=326&amp;id=mymap"
    },
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

scriptload(scripts)