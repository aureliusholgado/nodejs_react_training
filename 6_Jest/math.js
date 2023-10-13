const calcTotalTip = (total, tipPercent) => {
    let tip = total*tipPercent;
    return total + tip
}

module.exports = calcTotalTip