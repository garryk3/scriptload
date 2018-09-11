const scriptAdder = (attributes) => {
    const $script = document.createElement('script');

    for (let item in attributes) {
        if(attributes.hasOwnProperty(item)) {
            if(item !== 'onerror') {
                $script[item] = attributes[item];
            }

            $script.onerror = () => {
                console.log(`error to load script: ${$script.src}`);
                document.head.removeChild($script);

                attributes.onerror && attributes.onerror();
            };
        }
    }

    return $script
};

const ScriptLoad = (attributes) =>  {
    const fragment = document.createDocumentFragment();

    if(Array.isArray(attributes)) {
        attributes.forEach((attribute) => {
            fragment.appendChild(scriptAdder(attribute))
        })
    } else if (typeof attributes === 'object') {
        fragment.appendChild(scriptAdder(attributes))
    } else {
        console.log("Неправильный формат данных! Требуется объект с атрибутами скрипта или массив объектов, получено: ", typeof attributes)
    }

    document.head.appendChild(fragment);
}

export { ScriptLoad as default };


