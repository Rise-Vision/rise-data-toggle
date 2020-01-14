import { RiseElement } from "rise-common-component/src/rise-element.js";
import { version } from "./rise-data-toggle-version.js";

export default class RiseDataToggle extends RiseElement {

  static get properties() {
    return {
      value: {
        type: String,
        observer: "_valueChanged"
      }
    }
  }

  // Event name constants
  static get EVENT_DATA_UPDATE() {
    return "data-update";
  }

  constructor() {
    super();

    this._setVersion( version );
  }

  _valueChanged(newValue) {
    const value = newValue == "true";

    super._sendEvent( RiseDataToggle.EVENT_DATA_UPDATE, {value});
  }
}

customElements.define("rise-data-toggle", RiseDataToggle);
