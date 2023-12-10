function updateDropdownMenu(users) {
    const dropdownMenu = $('#user-dropdown-template')

    Object.keys(users).forEach(userId => {
        dropdownMenu.append(`<option value="${userId}">${userId}</option>`)
    })
}


$('#save-user-page').on('click', function() {
    const userData = $('.user-container').html()
    const quote = $('.quote-container').html()
    const pokemonData = $('.pokemon-container').html()
    const meatText = $('.meat-container').html()
    const friendsData = $('.friends-container').html()

    const userSnapshot = {
        userData: userData,
        quote: quote,
        pokemonData: pokemonData,
        meatText: meatText,
        friendsData: friendsData
    }
    const users = JSON.parse(localStorage.getItem('users')) || {}
    const userId = 'user ' + Object.keys(users).length
    users[userId] = userSnapshot
    localStorage.setItem('users', JSON.stringify(users))

    updateDropdownMenu(users)
})

$('#load-user-page').on('click', function() {
    const selectedUserId = $('#user-dropdown-template').val()
    const users = JSON.parse(localStorage.getItem('users'))

    if (users && selectedUserId in users) {
        const selectedUser = users[selectedUserId]
        $('.user-container').html(selectedUser.userData)
        $('.quote-container').html(selectedUser.quote)
        $('.pokemon-container').html(selectedUser.pokemonData)
        $('.meat-container').html(selectedUser.meatText)
        $('.friends-container').html(selectedUser.friendsData)
    }
})
