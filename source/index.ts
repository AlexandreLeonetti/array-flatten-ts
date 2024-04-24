// Define the type for the input array
type FlatArrayInput = any[];

// Define the type for the result array
type FlatArrayResult = any[];

// Rewrite the function with TypeScript syntax
export function flatArray(arr: FlatArrayInput): FlatArrayResult {
 return flat(arr, []);
}

function flat(arr: FlatArrayInput, res: FlatArrayResult): FlatArrayResult {
 for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    Array.isArray(cur) ? flat(cur, res) : res.push(cur);
 }
 return res;
}
