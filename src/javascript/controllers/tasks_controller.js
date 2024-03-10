import { Controller } from "stimulus"
import axios from "axios"

export default class extends Controller {
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
