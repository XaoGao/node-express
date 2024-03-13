import { Controller } from "stimulus"
import axios from "axios"

export default class extends Controller {
    static values = {
        id: String
    }
    static targets = [
        "title"
    ]

    create() {
        axios.post(
            '/tasks',
            {
                title: this.title
            }
        ).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.error(error.response.data)
        })
    }

    delete() {
        axios.delete(
            `/tasks/${this.idValue}`, {}
        ).then(response => {
            this.element.remove()
        }).catch(error => {
            console.error(error.response.data)
        })
    }

    toggleComplit() {
        axios.put(
            `/tasks/${this.idValue}`, {}
        ).then(response => {
            if (response.data.complited) {
                this.titleTarget.classList.add("text-decoration-line-through")
            } else {
                this.titleTarget.classList.remove("text-decoration-line-through")
            }
        }).catch(errer => {
            console.error(error)
        })
    }

    get title() {
        return this.inputElement.value
    }

    get inputElement() {
        return this.targets.find("title")
    }
}       
