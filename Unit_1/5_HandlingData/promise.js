var is_printer_on = false
let take_print = (printText) => {
    return new Promise((resolve, reject) => {
        if (is_printer_on) {
            setTimeout(() => {
                resolve('Printed :' + printText)
            }, 2000)
        } else {
            reject('Printer is off')
        }
    })
}
take_print('hello world')
    .then((res) => {
        console.log('Success : ', res)
    })
    .catch((err) => {
        console.log('oops!,', err)
    })
    .finally(() => {
        console.log('Have a good day')
    })