$('#save-user-page').on('click', function() {
    const userData = $('.user-container').html()
    const quote = $('.quote-container').html()
    const pokemonData = $('.pokemon-container').html()
    const meatText = $('.meat-container').html()
    const friendsData = $('.friends-container').html()

    const snapshot = {
        userData: userData,
        quote: quote,
        pokemonData: pokemonData,
        meatText: meatText,
        friendsData: friendsData
    }

    localStorage.setItem('userSnapshot', JSON.stringify(snapshot))
})


$('#load-user-page').on('click', function() {
    const snapshot = JSON.parse(localStorage.getItem('userSnapshot'))

    $('.user-container').html(snapshot.userData)
    $('.quote-container').html(snapshot.quote)
    $('.pokemon-container').html(snapshot.pokemonData)
    $('.meat-container').html(snapshot.meatText)
    $('.friends-container').html(snapshot.friendsData)
})
