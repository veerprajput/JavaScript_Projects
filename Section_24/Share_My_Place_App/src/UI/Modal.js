/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
export class Modal {
    constructor(contentId) {
        this.contentTemplateEl = document.getElementById(contentId);
        this.modalTemplateEl = document.getElementById('modal-template');
    }
    show() {
        if ('content' in document.createElement('template')) {
            // eslint-disable-next-line max-len
            const modalContent = document.importNode(this.modalTemplateEl.content, true);
            this.modalElement = modalContent.querySelector('.modal');
            this.backdropElement = modalContent.querySelector('.backdrop');
            // eslint-disable-next-line max-len
            const contentElement = document.importNode(this.contentTemplateEl.content, true);

            this.modalElement.appendChild(contentElement);
            document.body.insertAdjacentElement('afterbegin', this.modalElement);
            document.body.insertAdjacentElement('afterbegin', this.backdropElement);
        } else {
            alert('Loading...');
        }
    }

    hide() {
        if (this.modalElement) {
            document.body.removeChild(this.modalElement);
            document.body.removeChild(this.backdropElement);
            this.modalElement = null;
            this.backdropElement = null;
        }
    }
}
