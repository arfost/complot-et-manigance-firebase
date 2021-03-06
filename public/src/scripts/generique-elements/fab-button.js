import {
    BaseCemElement
} from '../abstract-elements/cem-base-element.js'
import {
    html,
    css
} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

export class FabButton extends BaseCemElement {
    static get is() {
        return 'fab-button'
    }
    //we need to init values in constructor
    constructor() {
        super();
    }

    get selfStyles() {
        return `
        .fab {
            width: 70px;
            height: 70px;
            background-color: red;
            border-radius: 50%;
            box-shadow: 0 6px 10px 0 #666;
            transition: all 0.1s ease-in-out;
          
            font-size: 50px;
            color: white;
            text-align: center;
            line-height: 70px;
          
            position: fixed;
            right: 50px;
            bottom: 50px;
         }
          
         .fab:hover {
            box-shadow: 0 6px 14px 0 #666;
            transform: scale(1.05);
         }`
    }

    render() {
        return html `
        ${this.styles}
        <div class="fab"> + </div>`
    }
}