const getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
}

export const extractInfoFromHash = () => {
  // if (process.SERVER_BUILD) return
  const { id_token, state } = getQueryParams()
  return {
    token: id_token,
    secret: state
  }
}

export const setToken = (token) => {
  // if (process.SERVER_BUILD) return
  window.localStorage.setItem('token', token)
}

export const unsetToken = () => {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('user');
  // window.localStorage.removeItem('secret');
  window.localStorage.setItem('logout', Date.now())
}


export const getUserFromLocalStorage = () => {
  const json = window.localStorage.user
  return json ? JSON.parse(json) : undefined
}

// export const setSecret = (secret) => window.localStorage.setItem('secret', secret)

// export const checkSecret = (secret) => window.localStorage.secret === secret
