const openDialogs = [];

function _toggleItemClass(item, className) {
    if (item.classList.contains(className)) {
        item.classList.remove(className);
    } else {
        item.classList.add(className);
    }
}

function _toggleButtonText(button) {
    const textToSet = button.isOpen ? 'Prikazi manje' : "Prikazi vise";
    button.innerText = textToSet;
}

function showMore(item) {
    item.isOpen = !item.isOpen;
    const parent = item.parentElement;
    const readmore = parent.querySelector(".readmore");
    _toggleItemClass(readmore, 'hidden')
    _toggleButtonText(item);
}

function openDocDialog() {
    let existingDialog;
    for (const openDialog in openDialogs) {
        if (openDialogs[openDialog].entity === 'DOC') {
            existingDialog = openDialogs[openDialog].instance;
        }
    };
    if (existingDialog) {
        existingDialog.toggleVisibility();
    } else {
        const dialog = new DialogEntity({
            title: 'Dokumentacija',
            text: docs,
            entity: 'DOC',
            actionButtons: ['close']
        }, generatorSingleton);
        openDialogs.push({
            entity: dialog.entity,
            instance: dialog
        })
        const element = dialog.make();
        document.body.appendChild(element);
        setTimeout(function (element) {
            element.focus();
        }, 0, element);
    }


}
