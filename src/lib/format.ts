export default function format(price: number, currency: string): string {
    const formattedPrice = new Intl.NumberFormat('uz-UZ', {
        style: 'currency',
        currency: currency,  
        minimumFractionDigits: 0,
    }).format(price);

    if (isNaN(price)) return "loading..."; 

    return formattedPrice;
}
