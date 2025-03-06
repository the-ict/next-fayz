export default function format(price: number, currency: string): string {
    const formattedPrice = new Intl.NumberFormat('uz-UZ', {
        style: 'currency',
        currency: currency,  // currency parametrini ishlatamiz
        minimumFractionDigits: 0,
    }).format(price);

    // "loading..." holatini boshqa shart bilan tekshirish
    if (isNaN(price)) return "loading...";  // Agar qiymat noto'g'ri bo'lsa, "loading..." qaytarish

    return formattedPrice;
}
