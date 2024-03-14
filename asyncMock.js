const products = [
    {
        id: '1',
        name: 'Chocolate',
        price: '750',
        category: 'chocolate',
        stock: '20',
        img: 'https://bonafide.com.ar/media/2022/03/VIZZIO-Laminas-1024x1024_0000s_0008_RENDERS-VIZZIO-RELLENOS-NUGATON-100g-510x510.jpg',
        description : ` chocolate bocadito ` 
    },
    {
        id:'2',
        name: 'Vizzio ',
        price: '450',
        category: 'chocolate ',
        stock: '25',
        img: 'https://bonafide.com.ar/media/2021/06/VIZZIO-Laminas-1024x1024_0000s_0011_RENDERS-VIZZIO-MANI-165g-510x510.jpg',
        description : `Chocolate vizzio `
    },
    {
        id:'3',
        name: 'Budin',
        price: '1500',
        category: 'budin ',
        stock: '30',
        img: 'https://bonafide.com.ar/media/2020/07/Render_Budin_VainillaN1024-510x510.jpg' , 
        description : `budines `
    },
    {
        id:'4',
        name: 'Cafe',
        price: '2500',
        category: 'cafe ',
        stock: '50',
        img: 'https://bonafide.com.ar/media/2022/05/Sensaciones-Suave-125g-2-1-1-1-1-1-1-1-510x754.png',
        description : ` tipo de cafe  ` 
    }
]
export const getProducts = () =>{
    return new Promise  ((resolve ) => { 
        setTimeout (() => { 
            resolve ( products )
        }, 1000 )
    } )
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductsById =(itemId) => {
    return new Promise ((resolve) => { 
        setTimeout(() => { 
            resolve(products.find( prod=> prod.id === itemId))
        } , 1000)
    })
}