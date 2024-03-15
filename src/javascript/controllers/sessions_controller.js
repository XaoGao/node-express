
import { Controller } from "stimulus"
import axios from "axios"

export default class extends Controller {
    delete() {
        axios.delete(
            '/logout',
            {}
        )
    }
}
