/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
class Element extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                #info-box {
                    display: none;
                }
            </style>
            <p><slot>DEFAULT</slot></p>
            <button>Hide</button>
        `;
    }

    connectedCallback() {
        this.button = document.createElement('div');
        this.item = this.shadowRoot.querySelector('p');
        this.show = true;
        this.button = this.shadowRoot.querySelector('button');
        this.button.addEventListener('click', this._showItOrHideIt.bind(this));
    }

    _showItOrHideIt() {
        // eslint-disable-next-line prefer-const
        if (this.show === true) {
            this.show = false;
            this.item.innerHTML = '';
            this.button.textContent = 'Show';
        } else {
            this.show = true;
            this.item.innerHTML = '<p><slot>DEFAULT</slot></p>';
            this.button.textContent = 'Hide';
        }
    }
}

customElements.define('element-show', Element);
