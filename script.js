let page = 1
let products = []
const getProduto = () => {
  $.get(
    `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`,
    data => {
      products = [...products, ...data.products]
      document.getElementById('nomeBrabo').innerHTML = products
        .map(
          produto =>
            `
          <div class="container">
           <div class="card-deck">
            <div class="card">
                <img
                  class="card-img-top"
                  src="${produto.image}"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">${produto.name}</h5>
                  <p class="card-text display-7">
                  ${produto.description}
                  </p>
                  <p class="card-text display-10">De: R$${produto.oldPrice},99</p>
                  <p class="card-text display-8">Por: R$${produto.price},99</p>
                  <button type="button" class="btn btn-secondary btn-lg">
                    Comprar
                  </button>
                </div>
              </div>
           </div>
           <br>
          </div>    `
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
