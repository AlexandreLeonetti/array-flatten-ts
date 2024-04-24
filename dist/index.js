// Rewrite the function with TypeScript syntax
export function flatArray(arr) {
    return flat(arr, []);
}
function flat(arr, res) {
    for (let i = 0; i < arr.length; i++) {
        const cur = arr[i];
        Array.isArray(cur) ? flat(cur, res) : res.push(cur);
    }
    return res;
}
