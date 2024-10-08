export default function updateUniqueItems(map) {
    // Check if the argument is a map
    if (!(map instanceof Map)) {
        throw new Error('Cannot process');
    }

    // Iterate over the map entries
    for (const [key, value] of map) {
        // Update the quantity to 100 if it is initially 1
        if (value === 1) {
            map.set(key, 100);
        }
    }

    return map;
}