export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
    // Check if the endpoint is already in the weakMap
    if (weakMap.has(endpoint)) {
        // Increment the count
        const count = weakMap.get(endpoint) + 1;
        weakMap.set(endpoint, count);

        // Throw an error if the count is >= 5
        if (count >= 5) {
            throw new Error('Endpoint load is high');
        }
    } else {
        // Initialize the count to 1
        weakMap.set(endpoint, 1);
    }
}