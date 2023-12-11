const AMOUNT_OF_USERS = 7
const CURRENT_POKEMON_RECORDED = 949
const API_QUOTE =  "https://api.kanye.rest"
const API_MEAT = "https://baconipsum.com/api/?type=meat-and-filler"
const API_POKEMON = "https://pokeapi.co/api/v2/pokemon/randomNum/"
const API_USER = "https://randomuser.me/api/?page=3&results="+AMOUNT_OF_USERS

class APIManager {
    constructor() {
        this.data = {
            mainUser: {},
            friends: [],
            kanyeQuote: '',
            randomPokemon: {},
            meatText: ''
        }
        this.randomUserUrl = API_USER
        this.kanyeQuoteUrl = API_QUOTE
        this.pokeApiUrl = API_POKEMON
        this.baconIpsumUrl = API_MEAT
    }

    savingUserData(data){
        let [mainUser, ...friends] = data.results

        let mainUserData = {
            picture: mainUser.picture.large,
            firstName: mainUser.name.first,
            lastName: mainUser.name.last,
            city: mainUser.location.city,
            state: mainUser.location.state
        }

        let friendsData = friends.map(friend => ({
            firstName: friend.name.first,
            lastName: friend.name.last
        }))

        this.data.mainUser = mainUserData
        this.data.friends = friendsData
    }

    savingQuoteData(data){
        this.data.kanyeQuote = data.quote
    }

    savingPokemonData(data){
        let pokemonData = {
            name: data.name,
            image: data.sprites.front_default
        }
        this.data.randomPokemon = pokemonData
    }

    savingTextData(data){
        this.data.meatText = data[0]
    }

    fetch(url) {
        return $.get(url)
    }
    getMeatAPI(){
        return this.fetch(API_MEAT)
    }
    getQuoteAPI(){
        return this.fetch(API_QUOTE)
    }
    getUserAPI(){
        return this.fetch(API_USER)
    }
    getPokemonAPI(){
        return this.fetch(API_POKEMON.replace("randomNum", Math.floor(Math.random() * CURRENT_POKEMON_RECORDED) + 1))
    }

    promisingAll(renderer){
        const allPromoises = [
            this.getQuoteAPI(),this.getMeatAPI(), this.getPokemonAPI(),this.getUserAPI()
        ]

        Promise.all(allPromoises).then((Data)=>{
            console.log(Data)
            let [quoteData, meatData, pokemonData, allUsers] = Data
            this.savingUserData(allUsers)
            this.savingQuoteData(quoteData)
            this.savingPokemonData(pokemonData)
            this.savingTextData(meatData)
            
            renderer.render(this.data.mainUser, this.data.friends, this.data.kanyeQuote, this.data.randomPokemon, this.data.meatText)
        })

    }
}

