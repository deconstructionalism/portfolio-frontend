const parallax = require("./parallax")
// @ponicode
describe("parallax.default", () => {
    test("0", () => {
        let callFunction = () => {
            parallax.default({ state: "Alabama" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            parallax.default({ state: ["Abruzzo", "Abruzzo", "Florida", "Abruzzo", "Île-de-France"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            parallax.default({ state: "Florida" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            parallax.default({ state: ["Florida", "Abruzzo", "Île-de-France", "Alabama", "Alabama"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            parallax.default({ state: ["Abruzzo", "Abruzzo", "Abruzzo", "Florida", "Florida"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            parallax.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
