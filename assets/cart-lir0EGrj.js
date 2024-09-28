import{g as a}from"./utils-twQD2Llt.js";function c(){const t=a("so-cart");let e;t!=null&&(e=t.map(r=>i(r)),document.querySelector(".product-list").innerHTML=e.join(""))}function o(){if(a("so-cart")!=null)return!0}function l(){let t=0;for(const e of a("so-cart"))t+=e.FinalPrice;return t}function n(){if(o()){let t=l();document.querySelector(".cart-total").innerHTML=`<b>Total: $${t}</b>`,document.querySelector(".cart-footer-hide").style.visibility="visible"}}function i(t){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${t.Image}"
      alt="${t.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${t.FinalPrice}</p>
</li>`}c();n();
