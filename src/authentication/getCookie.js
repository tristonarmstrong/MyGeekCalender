export default function getCookie(name) {
    const cookie = document.cookie
    const cookieArray = cookie.split(';')
    const anothercookiearray = cookieArray.map(cookie => cookie.split('='))
    let realCookie = ''
    anothercookiearray.forEach(cookie => {
        if (cookie[0] === name) {
            realCookie = cookie[1]
        }
    })
    return realCookie
}