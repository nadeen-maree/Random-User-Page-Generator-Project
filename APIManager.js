const AMOUNT_OF_USERS = 7
const AMOUNT_OF_SENTENCES = 4
const CURRENT_POKEMON_RECORDED = 949
const USER_API_URL = 'https://randomuser.me/api/?results='+AMOUNT_OF_USERS
const QUOTE_API_URL = 'https://api.kanye.rest'
const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const BACON_IPSUM_API_URL = 'https://baconipsum.com/api/?type=all-meat&sentences='+AMOUNT_OF_SENTENCES

class APIManager {
    constructor() {
        this.data = {
            mainUser: {},
            friends: [],
            kanyeQuote: '',
            randomPokemon: {},
            meatText: ''
        }
        this.randomUserUrl = USER_API_URL
        this.kanyeQuoteUrl = QUOTE_API_URL
        this.pokeApiUrl = POKEMON_API_URL
        this.baconIpsumUrl = BACON_IPSUM_API_URL
    }

    fetchUserData() {
        return fetch(this.randomUserUrl)
            .then(response => response.json())
            .then(data => {
                const [mainUser, ...friends] = data.results

                const mainUserData = {
                    picture: mainUser.picture.large,
                    firstName: mainUser.name.first,
                    lastName: mainUser.name.last,
                    city: mainUser.location.city,
                    state: mainUser.location.state
                }

                const friendsData = friends.map(friend => ({
                    firstName: friend.name.first,
                    lastName: friend.name.last
                }))

                this.data.mainUser = mainUserData
                this.data.friends = friendsData

                renderer.renderFriends(friendsData)

                return mainUserData
            })
            .catch(error => {
                console.error('Error fetching user data:', error)
                throw error
            })
    }

    fetchKanyeQuote() {
        return fetch(this.kanyeQuoteUrl)
            .then(response => response.json())
            .then(data => {
                this.data.kanyeQuote = data.quote
                return data.quote
            })
            .catch(error => {
                console.error('Error fetching Kanye quote:', error)
                throw error
            })
    }

    fetchRandomPokemon() {
        const randomPokemonId = Math.floor(Math.random() * CURRENT_POKEMON_RECORDED) + 1
        const randomPokemonUrl = `${this.pokeApiUrl}${randomPokemonId}/`

        return fetch(randomPokemonUrl)
            .then(response => response.json())
            .then(data => {
                const pokemonData = {
                    name: data.name,
                    image: data.sprites.front_default
                }
                this.data.randomPokemon = pokemonData
                return pokemonData
            })
            .catch(error => {
                console.error('Error fetching random Pokemon:', error)
                throw error
            })
    }

    fetchMeatText() {
        return fetch(this.baconIpsumUrl)
            .then(response => response.json())
            .then(data => {
                this.data.meatText = data[0]
                return data[0]
            })
            .catch(error => {
                console.error('Error fetching meat text:', error)
                throw error
            })
    }
}

function createAPIManager() {
    return new APIManager()
}
