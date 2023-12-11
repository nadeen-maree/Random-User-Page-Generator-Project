class Renderer {

    render(userData, friendsData, quote, pokemonData, meatText){
        this.emptying()
        this.commonSection('user-template', userData, 'user-container')
        this.commonSection('friends-template', { friends: friendsData }, 'friends-container')
        this.commonSection('quote-template', { quote }, 'quote-container')
        this.commonSection('pokemon-template', pokemonData, 'pokemon-container')
        this.commonSection('meat-template', { meatText }, 'meat-container')
    }

    commonSection(templateName , data, aimDiv){
        let source = $(`#${templateName}`).html()
        let template = Handlebars.compile(source)
        let HTMLToAdd = template(data)
        $(`.${aimDiv}`).append(HTMLToAdd)
    }

    emptying(){
        $('.user-container').empty()
        $('.friends-container').empty()
        $('.quote-container').empty()
        $('.pokemon-container').empty()
        $('.meat-container').empty()
    }
}

Handlebars.registerHelper('properCase', function(str) {
    return str.replace(/\b\w/g, function(match) {
        return match.toUpperCase()
    })
})

