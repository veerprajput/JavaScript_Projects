/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable indent */
class ConfirmLink extends HTMLElement {
    connectedCallback() {
        this.addEventListener('click', (event) => {
            if (!confirm('Do you really want to leave?')) {
                event.preventDefault();
            }
        });
    }
}

customElements.define('check-link', ConfirmLink);
