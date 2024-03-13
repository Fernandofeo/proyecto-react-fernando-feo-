const products = [
    {
        id:1,
        name: 'Chocolate',
        price: 1500,
        category: 'Chocolate',
        stock: 150,
        img: 'https://bonafide.com.ar/media/2020/08/940711-BOCADITO-DDL-_8-X-24-X-16g_oct.jp'
    },
    {
        id:2,
        name: 'Vizzio ',
        price: 20,
        category: 'Chocolate ',
        stock: 15,
        img: 'https://bonafide.com.ar/media/2021/06/VIZZIO-Laminas-1024x1024_0000s_0011_RENDERS-VIZZIO-MANI-165g-510x510.jpg'
    },
    {
        id:3,
        name: 'Budin',
        price: 500,
        category: 'Budin ',
        stock: 10,
        img: 'https://bonafide.com.ar/media/2020/07/Render_Budin_VainillaN1024-510x510.jpg'
    },
    {
        id:4,
        name: 'Cafe',
        price: 3500,
        category: 'Cafe ',
        stock: 100,
        img: 'https://bonafide.com.ar/media/2022/05/Sensaciones-Suave-125g-2-1-1-1-1-1-1-1-510x754.png'
    }
]
export const getProducts = () =>{
    return new Promise  ((resolve ) => { 
        setTimeout (() => { 
            resolve ( products )
        }, 100 )
    } )
}

export const getProductsById =(productId) => {
    return new Promise ((resolve) => { 
        setTimeout(() => { 
            resolve(products.find( prod=> prod.id === productId))
        } , 50)
    })
}