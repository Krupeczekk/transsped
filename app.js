let page = 'Home'

function ChangePage(name) {
    if (name == page) {
        return
    }

    $(`#${page}`).hide()
    $(`#${name}`).show()
    page = name
}

let calculatorType = 'advenced'

$('#normalcalc').on('click', () => {
    $('#advencedcalc').removeClass('selected')
    $('#normalcalc').addClass('selected')
    calculatorType = 'normal'
    //$('#pjllength').show()
    //$('#pjlwidth').show()
    $('#pjlheight').hide()


    $('#packlength').show()
    $('#packwidth').show()
    $('#packheight').hide()

    $('#paletelength').show()
    $('#paletewidth').show()
    $('#paleteheight').hide()

    $('#onelayerpackscount').show()
    $('#allpackscount').hide()
    $('#pjlweightnopalete').hide()
    $('#pjlweightpalete').hide()
})

$('#advencedcalc').on('click', () => {
    $('#normalcalc').removeClass('selected')
    $('#advencedcalc').addClass('selected')
    calculatorType = 'advenced'
    //$('#pjllength').show()
    //$('#pjlwidth').show()
    $('#pjlheight').show()


    $('#packlength').show()
    $('#packwidth').show()
    $('#packheight').show()

    $('#paletelength').show()
    $('#paletewidth').show()
    $('#paleteheight').show()

    $('#onelayerpackscount').show()
    $('#allpackscount').show()
    $('#pjlweightnopalete').show()
    $('#pjlweightpalete').show()
})

$('#policz').on('click', () => {
    let pjllength = parseInt($('#pjllength').val())
    let pjlwidth = parseInt($('#pjlwidth').val())
    let pjlheight = parseInt($('#pjlheight').val())

    let paletelength = parseInt($('#paletelength').val())
    let paletewidth = parseInt($('#paletewidth').val())
    let paleteheight = parseInt($('#paleteheight').val())

    let packlength = parseInt($('#packlength').val())
    let packwidth = parseInt($('#packwidth').val())
    let packheight = parseInt($('#packheight').val())

    if (calculatorType == 'normal') {
        if (packlength > 0 && packwidth > 0) {
            let dldl = paletelength / packlength
            let szerszer = paletewidth / packwidth
            let dlszer = paletelength / packwidth
            let szerdl = paletewidth / packlength

            let way1 = Math.floor(dldl) * Math.floor(szerszer)
            let way2 = Math.floor(dlszer) * Math.floor(szerdl)
            let MaxResult = Math.max(way1, way2)

            $('#onelayerpackscount').html(`Ilość paczek w jednej warstwie na palecie: <span>${MaxResult}</span>`)
        }
    } else if (calculatorType == 'advenced') {

    }
})
