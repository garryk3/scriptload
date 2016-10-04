function ScriptLoad(path)  {

    const fragment = document.createDocumentFragment();
    let scriptPath = null;

    const scriptAdd = (scriptPath) => {
        let scriptItem = document.createElement('script');
        scriptItem.src = scriptPath;

        fragment.appendChild(scriptItem);

        return new Promise( (resolve, reject) => {
            scriptItem.onload = () => {
                resolve(scriptItem);
            };

            scriptItem.onerror = ()=> {
                console.log('error in load', scriptPath);
                reject(new Error());
                document.body.removeChild(scriptItem);
            };

        }).catch((error) => {
            console.error(error);
            throw error;
        })
    };

    if ( typeof path === 'string' ) {
            scriptPath = path;
            scriptAdd(scriptPath);
        }

    else if ( Array.isArray(path) ) {
            path.map( function (item) {
                scriptPath = item;
                scriptAdd(scriptPath);
            } );

        }

    else {
        console.log("Неправильный формат данных! Требуется строка или массив, получено: ", typeof path, path)
    }

    document.body.appendChild(fragment);

    return path;
}

export {ScriptLoad as default};


