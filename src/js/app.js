export default function reorderObj(obj, order) {
    let entries = Object.entries(obj);
    const reversedOrder = order.reverse();

    entries.sort((a, b) => {
        if (a[0] > b[0]) {
            return 1;
        }
        return -1;
    });

    reversedOrder.forEach((key) => {
        const index = entries.findIndex((prop) => prop[0] === key);
        if (index > -1) {
            const foundProp = entries[index];

            entries.splice(index, 1);
            entries.unshift(foundProp);
        }
    });

    entries = entries.map((element) => {
        const entryObj = {
            key: element[0],
            value: element[1],
        };
        return entryObj;
    });

    return entries;
}

// function orderByProps(obj, order) {
//     for (const [key, value] of Object.entries(obj)) {
//         console.log(`${key}: ${value}`);
//     }
// }
