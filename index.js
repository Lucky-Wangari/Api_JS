
const product =document.getElementById('products');

const getProducts=()=>{
    return fetch('https://dummyjson.com/products?limit=8')
    .then(response=>response.json())
    .then(respose=>respose)
    .catch(error=>error)
}
const displayProducts=async()=>{
    const products=await getProducts();
    products.products.map(item=>{
        let div=document.createElement('div');
        let image=document.createElement('img');
        let title=document.createElement('h3');
        let rating=document.createElement('p')
        let price=document.createElement('p');
        let button=document.createElement('button');
        image.src=item.thumbnail;
        title.innerHTML=item.title;
        rating.innerHTML=item.rating;
        price.innerHTML=item.price;
        button.innerHTML=`ADD TO CART`
        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(rating);
        div.appendChild(price);
        div.appendChild(button)
        div.setAttribute('key',item.id);
        div.setAttribute('class','prods');
        product.appendChild(div);
    })
}
displayProducts();