const user = {
    state: {
        //token: sessionStorage.getItem('token'),
        token: localStorage.getItem('token'),
        userInfo: {
            username: sessionStorage.getItem('username'),
            id: sessionStorage.getItem('id'),
        },
        mapName: sessionStorage.getItem('mapName')
    },
    mutations: {
        setUser (state, info) {
            state.userInfo = info
            sessionStorage.setItem('username', info.username)
            sessionStorage.setItem('id', info.id)
        },
        setToken (state, tokenIn) {
            state.token = tokenIn
            sessionStorage.setItem('token', tokenIn)
            localStorage.setItem('token', tokenIn)
        },
        setMapName (state, mapName) {
            state.mapName = mapName
            sessionStorage.setItem('mapName', mapName)
        },
        removeMapName (state) {
            sessionStorage.removeItem('mapName')
            state.mapName = ""
        },
        logout (state) {
            state.token = ''
            state.userInfo = {
                username: '',
                id: null,
            }
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('username')
            sessionStorage.removeItem('id')
            sessionStorage.removeItem('mapName')

            localStorage.removeItem('token')
        },
    },
    getters: {
        TokenStored: state => state.token,
        Name: state => state.userInfo.name,
        Id: state => state.userInfo.id,
        MapName: state => state.mapName,
    },
}

export default user

