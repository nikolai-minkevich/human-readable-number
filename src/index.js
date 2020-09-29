module.exports = function toReadable(number) {
    let arr = number.toString().split('')
    let dec1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let decTeen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let dec10 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let output = ''
    let decimalplace = 0

    for (let i = arr.length - 1; i >= 0; i--) {
        switch (decimalplace) {
            case 0:
                if (arr[i - 1] == '1') break;
                if (arr[i] == '0' && arr[i - 1] !== undefined) break;
                output = dec1[arr[i]]
                break;
            case 1:
                if (arr[i] == '1') {
                    output = decTeen[arr[i + 1]]
                    break
                }
                if (arr[i] == '0') break;
                output = dec10[arr[i]] + ' ' + output
                break;
            case 2:
                output = dec1[arr[i]] + ' hundred ' + output
                break;
            default: break;
        }
        decimalplace++;
    }
    return output.trim()
}