export function getString(params) {
    if (typeof params === 'string') {
        return params;
    }

    if (Array.isArray(params)) {
        const result = params.toString().replace(',', ' ');
        console.log(result)
        return result;
    }

    return 'Invalid Type'
}