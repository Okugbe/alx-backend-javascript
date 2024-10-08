export default function cleanSet(set, startString) {
    // Check if startString is empty
    if (startString === '') {
        return '';
    }

    // Filter and map the set values
    const result = [...set]
        .filter(value => value.startsWith(startString))
        .map(value => value.slice(startString.length))
        .join('-');

    return result;
}