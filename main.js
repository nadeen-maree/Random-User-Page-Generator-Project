const apiManager = createAPIManager()
const renderer = new Renderer()

$('#load-user-data').on('click', function() {
    Promise.all([
        apiManager.fetchUserData(),
        apiManager.fetchKanyeQuote(),
        apiManager.fetchRandomPokemon(),
        apiManager.fetchMeatText()
    ])
    .then(function([userData, quote, pokemonData, meatText]) {
        renderer.renderUserData(userData)
        renderer.renderQuote(quote)
        renderer.renderPokemon(pokemonData)
        renderer.renderMeatText(meatText)
    })
    .catch(function(error) {
        console.error('Error fetching data:', error)
    })
})



