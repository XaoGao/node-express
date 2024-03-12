import { Controller } from "stimulus"
import axios from "axios"

export default class extends Controller {
    connect() {
        // const allCookies = document.cookie; // получить все куки
        // const usernameCookie = allCookies.split('; ').find(cookie => cookie.startsWith('user_email='));
    }

    create() {
        axios.post(
            '/tasks',
            {
                title: this.title
            })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.error(error.response.data))
    }

    get title() {
        return this.inputElement.value
    }

    get inputElement() {
        return this.targets.find("title")
    }
}       
