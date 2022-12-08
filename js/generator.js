class Generator {
    makeElement(tag, styles, classNames) {
        let element = document.createElement(tag);
        element = this._applyElementStyles(element, styles);
        for (const className in classNames) {
            _utilAddClass(element, classNames[className])
        }
        element.internalId = idGenerator().next().value;
        return element
    }

    _applyElementStyles(element, styles) {
        for (const style in styles) {
            element.style[style] = styles[style]
        }
        return element;
    }
}

function* idGenerator() {
    yield Date.now();
}