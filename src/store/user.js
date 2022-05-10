const user = {
    state: {
        token: sessionStorage.getItem('token'),
        userInfo: {
            username: sessionStorage.getItem('username'),
            id: sessionStorage.getItem('id'),
        },
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
        },
        logout (state) {
            state.token = ''
            state.userInfo = {
                username: '',
                nickname: '',
                id: null,
            }
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('username')
            sessionStorage.removeItem('id')
        },
    },
    getters: {
        TokenStored: state => state.token,
        Name: state => state.userInfo.name,
        Id: state => state.userInfo.id,
    },
}

export default user

