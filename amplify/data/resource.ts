import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { sayHello } from "../functions/say-hello/resource";

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  sayHello: a
    .query()
    .arguments({
      name: a.string(),
    })
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(sayHello)),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
