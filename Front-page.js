$('.optin-close').on('click', function (e) {
    console.log(e)
    $('textarea').val("")
    $('input[type = text]').val('')
    $('input[type = email]').val('')
    $('input[type = tel]').val('')
})