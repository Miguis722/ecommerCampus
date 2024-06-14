import { galleryCategory } from "./components/gallery.js";
import { getProductId } from "./module/detail.js";
import { titleProductDetail } from "./components/section.js";

let main__section_gallery = document.querySelector("#main__section_gallery");
let main__section__title = document.querySelector("#main__section__title");

addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductId({id})));
    
    let info = JSON.parse(localStorage.getItem(id));
    main__section_gallery.innerHTML = await galleryCategory(info);
    main__section_gallery.innerHTML = await titleProductDetail(info);
    // main__section_gallery.innerHTML = await galleryCategory(JSON.parse(localStorage.getItem(id)))
})