import { galleryIndex } from "./components/gallery.js";
import { getAllproductName } from "./module/app.js";

let input__search = document.querySelector("#input__search");
let main__article = document.querySelector(".main__article");

input__search.addEventListener("change", async e => {
    let data = { search : e.target.value}
    input__search.value = null;

    let res = await getAllproductName(data)
    main__article.innerHTML = galleryIndex(res);
});