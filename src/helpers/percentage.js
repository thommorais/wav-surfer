// Math
function percentage(part, total, fixed = 2) {
    if (typeof part !== "number" && typeof total !== "number") {
        throw new Error("Parameter is not a number!")
    }

    return Number(((100 * part) / total).toFixed(fixed))
}


export default percentage
