import Cookies from 'js-cookie'
const TokenKey = 'User-Token'
const NameKey = 'User-Name'
const UIDKey = 'User-ID'
const ImageKey = 'User-Image'
export default {
    setUser(token, nickName, uid, image) {
        Cookies.set(TokenKey, token)
        Cookies.set(NameKey, nickName)
        Cookies.set(UIDKey, uid)
        Cookies.set(ImageKey, image)
    },
    getUser() {
        return {
            token: Cookies.get(TokenKey),
            nickName: Cookies.get(NameKey),
            uid: Cookies.get(UIDKey),
            image: Cookies.get(ImageKey)
        }
    },
    removeUser() {
        Cookies.remove(TokenKey)
        Cookies.remove(NameKey)
        Cookies.remove(UIDKey)
        Cookies.remove(ImageKey)
    }
}
