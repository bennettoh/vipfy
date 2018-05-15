/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html }             from '@polymer/lit-element';
import { SharedStyles }     from './shared-styles.js';
import { PageViewElement }  from './page-view-element.js';

export class MyView1 extends PageViewElement {
    
    count {
        
    }
    
  _render(props) {
    return html`
      ${SharedStyles}
<style>
h1 {color:pink;}
</style>

<h1>Hello</h1>
<p>PEOPLE</p>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
