class Renderer {
    renderUserData(userData) {
        const userTemplate = Handlebars.compile($('#user-template').html())
        const userContainer = $('.user-container')
        userContainer.html(userTemplate(userData))
    }

    renderFriends(friendsData) {
        const friendsTemplate = Handlebars.compile($('#friends-template').html())
        const friendsContainer = $('.friends-container')
        friendsContainer.html(friendsTemplate({ friends: friendsData }))
    }

    renderQuote(quote) {
        const quoteTemplate = Handlebars.compile($('#quote-template').html())
        const quoteContainer = $('.quote-container')
        quoteContainer.html(quoteTemplate({ quote }))
    }

    renderPokemon(pokemonData) {
        const pokemonTemplate = Handlebars.compile($('#pokemon-template').html())
        const pokemonContainer = $('.pokemon-container')
        pokemonContainer.html(pokemonTemplate(pokemonData))
    }

    renderMeatText(meatText) {
        const meatTemplate = Handlebars.compile($('#meat-template').html())
        const meatContainer = $('.meat-container')
        meatContainer.html(meatTemplate({ meatText }))
    }
}

