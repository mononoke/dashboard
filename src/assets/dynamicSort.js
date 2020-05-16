export default function dynamicSort(type, property) {
    return function(a, b) {
        if (type === 'inverse') {
            return (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0
        } else {
            // direct
            return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
        }
    }
}


