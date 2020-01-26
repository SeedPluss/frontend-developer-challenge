let page = 1
let products = []
const getProduto = () => {
  $.get(
    `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`,
    data => {
      products = [...products, ...data.products]
      document.getElementById('card').innerHTML = products
        .map(
          produto =>
            `
           <div class="col-sm-3 text-center">
                <img
                  class="card-img"
                  src="${produto.image}"
                  alt="Card image cap"
                />
                <div class="card-body pnomeproduto">
                  <p class="card-title">${produto.name}</p>
                  <p class="card-text display-7">
                  ${produto.description}
                  </p>
                  <p class="card-text display-10">De: R$${produto.oldPrice},99</p>
                  <p class="card-text display-8 pnegrito">Por: R$${produto.price},99</p>
                  <button type="button" class="btn btn-outline-secondary btn-lg btncompra">
                    Comprar
                  </button>
                </div>
           </div>

              `
        )
        .join('')
    }
  )
}

$(document).ready(() => {
  getProduto()
})

$('#idBrabo').click(() => {
  page++
  getProduto(page)
})
