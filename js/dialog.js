
class DialogEntity {
    constructor(dialogData, elementGenerator) {
        this.entity = dialogData.entity;
        this.title = dialogData.title;
        this.text = dialogData.text;
        this.actionButtons = dialogData.actionButtons;
        this.GeneratorInstance = elementGenerator;
    }

    toggleVisibility() {
        this.visibility = !this.visibility;
        this.visibility ? _toggleItemClass(this.elementRef, 'hidden') : _toggleItemClass(this.elementRef, 'visible')
    }


    make() {
        const element = this.GeneratorInstance.makeElement('div', {
            border: '1px solid black',
            height: '700px',
            width: '600px',
            position: 'fixed',
            top: '20%',
            left: '30%',
            background: 'white',
            opacity: '0.95',
            overflow: 'scroll'
        });
        const title = this.GeneratorInstance.makeElement('div', {

        });
        title.innerText = 'Dokumentacija';
        const body = this.GeneratorInstance.makeElement('div', {
            position: 'relative',
            width: 'inherit',
            "max-width": '470px',
            "word-break": "break-word",
        });
        body.innerText = this.text;
        const closeButton = this.GeneratorInstance.makeElement('button', {});
        closeButton.innerText = 'Zatvori dokumentaciju';
        closeButton.addEventListener('click', this.toggleVisibility.bind(this));
        element.appendChild(title);
        element.appendChild(body);
        element.appendChild(closeButton);

        this.internalId = element.internalId
        this.elementRef = element;

        return element;
    }


}