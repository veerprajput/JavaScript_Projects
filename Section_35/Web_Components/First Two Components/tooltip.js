/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable constructor-super */
/* eslint-disable require-jsdoc */
class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <style>
            div {
                background-color: black;
                color: white;
                position: absolute;
                z-index: 10;
                padding: 0.15rem;
                top: 1.5rem;
                left: 0.75rem;
                border-radius: 5px;
                box-shadow: 15px 6px 8px rgba(0,0,0,0.28);
            }

            .icon {
                background: black;
                color: white;
                padding: 0.15rem 0.5rem;
                text-align: center;
                border-radius: 50%
            }

            :host {
                background: #a4fcda;
            }
        </style>
        <strong><slot></slot></strong><span class="icon">?</span>
        `;
    }

    connectedCallback() {
        if (this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text');
        }
        let tooltipIcon = document.createElement('span');
        tooltipIcon = this.shadowRoot.querySelector('span');
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        this.shadowRoot.appendChild(tooltipIcon);
        this.style.position = 'relative';
    }

    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._tooltipText || 'Veer is cool and awesome!!!';
        this.shadowRoot.appendChild(this._tooltipContainer);
    }

    _hideTooltip() {
        this.shadowRoot .removeChild(this._tooltipContainer);
    }
}

customElements.define('my-tooltip', Tooltip);
