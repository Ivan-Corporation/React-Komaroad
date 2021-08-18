import React, {Component} from 'react'

// Якобы отдельный JSON
const products = [
    {
      "availableSizes": ["S", "XS"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "4 MSL",
      "id": 12,
      "installments": 9,
      "isFreeShipping": true,
      "price": 10.9,
      "sku": 12064273040195392,
      "style": "Black with custom print",
      "title": "Cat Tee Black T-Shirt"
    },
    {
      "availableSizes": ["M"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "",
      "id": 13,
      "installments": 5,
      "isFreeShipping": true,
      "price": 29.45,
      "sku": 51498472915966370,
      "style": "Front print and paisley print",
      "title": "Dark Thug Blue-Navy T-Shirt"
    },
    {
      "availableSizes": ["X", "L", "XL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "GPX Poly 1",
      "id": 14,
      "installments": 3,
      "isFreeShipping": true,
      "price": 9,
      "sku": 10686354557628304,
      "style": "Front tie dye print",
      "title": "Sphynx Tie Dye Wine T-Shirt"
    },
    {
      "availableSizes": ["X", "L", "XL", "XXL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "Treino 2014",
      "id": 15,
      "installments": 5,
      "isFreeShipping": true,
      "price": 14,
      "sku": 11033926921508488,
      "style": "Black T-Shirt with front print",
      "title": "Skuul"
    },
    {
      "availableSizes": ["X", "L"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "",
      "id": 11,
      "installments": 3,
      "isFreeShipping": true,
      "price": 13.25,
      "sku": 39876704341265610,
      "style": "Wine",
      "title": "Wine Skul T-Shirt"
    },
    {
      "availableSizes": ["X", "L", "XL", "XXL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "14/15 s/nº",
      "id": 0,
      "installments": 9,
      "isFreeShipping": true,
      "price": 10.9,
      "sku": 8552515751438644,
      "style": "Branco com listras pretas",
      "title": "Cat Tee Black T-Shirt"
    },
    {
      "availableSizes": ["X", "L", "XL", "XXL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "14/15 s/nº",
      "id": 1,
      "installments": 9,
      "isFreeShipping": true,
      "price": 10.9,
      "sku": 18644119330491310,
      "style": "Preta com listras brancas",
      "title": "Sphynx Tie Dye Grey T-Shirt"
    },
    {
      "availableSizes": ["X", "L"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "14/15 s/nº",
      "id": 2,
      "installments": 7,
      "isFreeShipping": true,
      "price": 14.9,
      "sku": 11854078013954528,
      "style": "Branco com listras pretas",
      "title": "Danger Knife Grey"
    },
    {
      "availableSizes": ["X", "L"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "2014 s/nº",
      "id": 3,
      "installments": 7,
      "isFreeShipping": true,
      "price": 14.9,
      "sku": 876661122392077,
      "style": "Preto com listras brancas",
      "title": "White DGK Script Tee"
    },
    {
      "availableSizes": ["XL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "14/15 s/nº - Jogador",
      "id": 4,
      "installments": 12,
      "isFreeShipping": false,
      "price": 25.9,
      "sku": 9197907543445676,
      "style": "Branco com listras pretas",
      "title": "Born On The Streets"
    },
    {
      "availableSizes": ["X", "L", "XL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "14/15 + Camiseta 1º Mundial",
      "id": 5,
      "installments": 9,
      "isFreeShipping": false,
      "price": 10.9,
      "sku": 10547961582846888,
      "style": "Preto",
      "title": "Tso 3D Short Sleeve T-Shirt A"
    },
    {
      "availableSizes": ["L", "XL"],
      "currencyFormat": "$",
      "currencyId": "USD",
      "description": "",
      "id": 10,
      "installments": 9,
      "isFreeShipping": true,
      "price": 49,
      "sku": 27250082398145996,
      "style": "",
      "title": "On The Streets Black T-Shirt"
    }
  ]
  /////////////////////////////////////////////////////////////
  
  const ProductCard = props => {
    return (
      <div>
        <hr />
        <p>
          <b>Название:</b> {props.title}
        </p>
        <p>
          <b>Стиль:</b> {props.style}
        </p>
        <p>
          <b>Цена:</b> {props.price}
        </p>
        <p>
          <b>Описание:</b> {props.description}
        </p>
        <p>
          <b>Валюта:</b> {props.currencyId}
        </p>
        <hr />
      </div>
    );
  };
  
  const filterProducts = (searchTerm) => {
    searchTerm = searchTerm.toUpperCase()
    return products.filter(product => {
      let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
      return str.indexOf(searchTerm) >= 0;
    })
  }
  
  const ProductsList = (props) => {
    const { searchTerm } = props
    let filteredProducts = filterProducts(searchTerm);
    return (
      <div >
        <div>
          <div>
            <h2>Товары</h2>
          </div>
        </div>
        <div>
          {filteredProducts.map((product) => <ProductCard key={product.id} {...product} />)}
        </div>
      </div>
    )
  }
  
  // Сам Компонент высшего порядка здесь withSearch
  const withSearch = WrappedComponent => {
    return class extends React.Component {
      state = {
        searchTerm: ""
      };
      handleSearch = event => {
        this.setState({ searchTerm: event.target.value });
      };
  
      render() {
        let { searchTerm } = this.state;
        return (
          <div  className="App-header">
            <div>
              <input
                onChange={this.handleSearch}
                value={searchTerm}
                type="text"
                placeholder="Поиск"
              />
            </div>
            <WrappedComponent searchTerm={searchTerm} />
          </div>
        );
      }
    };
  };

  
  const HOC = withSearch(ProductsList);
  
  export default HOC
  
