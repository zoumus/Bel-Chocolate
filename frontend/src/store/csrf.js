async function csrfFetch(url, options = {}) {
  console.log('cserfetch')
    
    options.method = options.method || 'GET';
    options.headers = options.headers || {};
  
    if (options.method.toUpperCase() !== 'GET') {
      options.headers['Content-Type'] =
        options.headers['Content-Type'] || 'application/json';
        // options.headers['Accept'] = 'application/json'
      options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
    }
    const res = await fetch(url, options);
    // console.log(url)
    // console.log(options)
    
    // console.log(res, 'res')
    if (res.status >= 400) throw res;
    
    return res;
  }

export function storeCSRFToken(response) {
  console.log(response, 'response from storecsrftoken')
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}
  
export async function restoreCSRF() {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    return response;
}

export default csrfFetch