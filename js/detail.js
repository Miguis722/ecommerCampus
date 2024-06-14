import { galleryCategory } from "./components/gallery.js";
import { getProductId } from "./module/detail.js";

let main__section_gallery = document.querySelector("#main__section_gallery");

addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductId({id})));
    main__section_gallery.innerHTML = await galleryCategory(JSON.parse(localStorage.getItem(id)))
})