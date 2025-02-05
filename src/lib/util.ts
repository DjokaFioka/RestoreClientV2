export function currencyFormat(amount: number) {
    return '$' + (amount / 100).toFixed(2)
}

export const formatCurrency = (value: number) => {
    const formattedValue = (value / 100).toFixed(2);

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(parseFloat(formattedValue));
};

export function filterEmptyValues(values: object) {
    return Object.fromEntries(
        Object.entries(values).filter(
            ([, value]) => value !== '' && value !== null 
                && value !== undefined && value.length !== 0
        )
    )
}