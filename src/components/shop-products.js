/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html }           from '@polymer/lit-element';
import { connect }                    from 'pwa-helpers/connect-mixin.js';

// This element is connected to the redux store.
import { store }                      from '../store.js';
import { getAllProducts, addToCart }  from '../actions/shop.js';
import { addToCartIcon }              from './my-icons.js';
import { ButtonSharedStyles }         from './button-shared-styles.js';

class ShopProducts extends connect(store)(LitElement) {
  _render({_products}) {
    return html`
      ${ButtonSharedStyles}
      <style>
        :host { display: block; }
      </style>
      ${Object.keys(_products).map((key) => {
        const item = _products[key];
        return html`
          <div>
            <shop-item name="${item.title}" amount="${item.inventory}" price="${item.price}"></shop-item>
            <button
                disabled="${item.inventory === 0}"
                on-click="${(e) => store.dispatch(addToCart(e.currentTarget.dataset['index']))}"
                data-index$="${item.id}"
                title="${item.inventory === 0 ? 'Sold out' : 'Add to cart' }">
              ${item.inventory === 0 ? 'Sold out': addToCartIcon }
            </button>
          </div>
        `
      })}
    `;
  }

  static get properties() { return {
    _products: Object
  }}

  _firstRendered() {
    store.dispatch(getAllProducts());
  }

  // This is called every time something is updated in the store.
  _stateChanged(state) {
    this._products = state.shop.products;
  }
}

window.customElements.define('shop-products', ShopProducts);
