export const titleProductDetail = async ({ data: dataUpdate } = res) => {
    return/*HTML*/`
        <article class="article__detail">
            <div class="detail__head">
                <h1>${dataUpdate.product_title}</h1>
                <div class="product_select">
                    <img src="../storage/img/minus.svg" alt="">
                    <span>1</span>
                    <img src="../storage/img/plus.svg" alt="">
                </div>
            </div>
            <div class="detail__score">
                ${new Array(parseInt(dataUpdate.product_star_rating)).fill(`<img src="../storage/img/star.svg" alt="">`).join('')}
                    <span>${dataUpdate.product_star_rating}</span>
                    <a href="${dataUpdate.product_url}">(${dataUpdate.product_num_ratings} reviews)</a>
            </div>
        </article>`
}