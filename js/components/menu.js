export const menuListCategoryIndex = async (res)=>{
    let {data} = res;
    let plantilla = "";
    data.forEach((element) => {
        plantilla += /*html*/`
        <li title="${element.name}">
            <a href="?id=${element.id}" >
                <img src="storage/img/category.svg" >
                <span>${element.name}</span>
            </a>
        </li>
        `;
    });
    return plantilla;
}