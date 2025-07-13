import type { Schema } from "../../data/resource"

export const handler: Schema["sayHello"]["functionHandler"] = async (event) => {
  console.log('event', event)
    const { name } = event.arguments
    console.log('name', name)
    return `Hello, ${name}!`
}