  export function parseToken(token) {
    return JSON.parse(window.atob(token.split('.')[1]));
  }
