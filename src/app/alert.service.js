import { TestUtility } from "./utils/test-utility"
const testUtility = new TestUtility()

export class AlertService {
	
	constructor() {
		this.abc = "ABC"
		this.utilityText = testUtility.stringTest()
	}

	handleTest() {
		console.log(this.utilityText)
	}

}