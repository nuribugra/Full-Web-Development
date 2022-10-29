/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

    sipariş id: 102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

*/

let order1 = {
    "orderId": 101,
    "orderDate": "31.12.2022",
    "paymentMethod": "Credit Card",
    "deliveryAddress": "Üç Kuyular Meydanı İzmir/Buca",
    "products": [
        product1 = {
            "productId": 5,
            "productTitle": "Iphone 13 Pro",
            "productUrl": "http://abc.com/iphone-13-pro",
            "productPrice": 25000,
        },
        product2 = {
            "productId": 6,
            "productTitle": "Iphone 13 Pro Max",
            "productUrl": "http://abc.com/iphone-13-pro-max",
            "productPrice": 30000,
        }
    ],
    "costumer": [costumerId= 12],
    "vendor": [
        companyId = 34,
        companyName = "Apple Turkey",
    ]
}
let order2 = {
    "orderId": 102,
    "orderDate": "30.12.2022",
    "paymentMethod": "Credit Card",
    "deliveryAddress": "Üç Kuyular Meydanı İzmir/Buca",
    "products": [
        product1 = {
            "productId": 6,
            "productTitle": "Iphone 13 Pro",
            "productUrl": "http://abc.com/iphone-13-pro",
            "productPrice": 25000,
        }
    ],
    "costumer": [costumerId= 12],
    "vendor": [
        companyId = 34,
        companyName = "Apple Turkey",
    ]
}

let receipt1 = order1.products[0].productPrice * 1.18 + order1.products[1].productPrice * 1.18;
let receipt2 = order2.products[0].productPrice * 1.18;


console.log(receipt1);
console.log(receipt2);
console.log(`Total Amount = ${receipt1+receipt2}`);
