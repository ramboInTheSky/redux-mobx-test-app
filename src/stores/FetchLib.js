
export class FetchLib {
    static fetchUser(userName){
        return fetch('https://api.github.com/users/' + userName).then(data => data.json())
    }
}
