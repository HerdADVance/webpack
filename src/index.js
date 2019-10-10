import { run } from "./app/app"
import "./main.scss"
import { AlertService } from "./app/alert.service"

const alertService = new AlertService()

run(alertService)

console.log("Test")