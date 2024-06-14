export const menuListCategoryIndex = async(res) => {
    let {data} = res;
    let plantilla = "";
    data.forEach(element => {
        plantilla += /*HTML*/`
        <li title="${element.name}">
            <a href="?id=${element.id}">
                <img src="storage/img/category.svg" alt="">
                <span>${element.name}</span>
            </a>
        </li>`
    });
    return plantilla
};