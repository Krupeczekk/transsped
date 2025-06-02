let page = 'Home'

function ChangePage(name) {
    if (name == page) {
        return
    }

    $(`#${page}`).hide()
    $(`#${name}`).show()
    page = name
}