export const formatMoney = (
    amount: number,
    decimalCount = 0,
    decimal: string = '.',
    thousands: string = ',',
    currencyStr: string = 'đ'
): string => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = Number.isNaN(decimalCount) ? 2 : decimalCount;
        const negativeSign = amount < 0 ? '-' : '';
        const i = parseInt(
            (Math.abs(Number(amount) || 0).toFixed(decimalCount))
        ).toString();
        const j = i.length > 3 ? i.length % 3 : 0;
        return (
            negativeSign +
            (j ? i.slice(0, j) + thousands : '') +
            i.slice(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) +
            (decimalCount
                ? decimal +
                Math.abs(amount - Number.parseInt(i))
                    .toFixed(decimalCount)
                    .slice(2)
                : '') +
            `${currencyStr}`
        );
    } catch (e) {
        return `0${currencyStr}`;
    }
};