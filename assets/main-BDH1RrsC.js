import{r as c}from"./utils-twQD2Llt.js";import{P as n}from"./ProductData-Dx0C3TkS.js";function o(t){return`<li class="product-card">
      <a href="product_pages/index.html?product=${t.Id}">
        <img src="${t.Image}" alt="Image of ${t.Image}">
        <h3 class="card__brand">${t.Brand.Name}</h3>
        <h2 class="card__name">${t.Name}</h2>
        <p class="product-card__price">$${t.ListPrice}</p>
      </a>
    </li>`}class l{constructor(a,e,s){this.category=a,this.dataSource=e,this.listElement=s}async init(){const a=await this.dataSource.getData(),e=await this.filterProducts(a);c(o,this.listElement,e,"afterbegin",!1)}async filterProducts(a){const e=await fetch("/json/imageFiles.json");if(!e.ok)throw new Error("Failed to fetch image files");const s=await e.json();return a.filter(i=>{const r=i.Image.split("/").pop();return s.includes(r)})}}const d=new n("tents"),m=new l("tents",d,document.querySelector(".product-list"));m.init();
