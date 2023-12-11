const apiManager = new APIManager()

const renderer = new Renderer()

$('#load-user-data').on('click', function() {
    apiManager.promisingAll(renderer)
})



