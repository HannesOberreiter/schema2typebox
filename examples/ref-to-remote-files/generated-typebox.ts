/**
 * ATTENTION. This code was AUTO GENERATED by schema2typebox version 1.3.0.
 * While I don't know your use case, there is a high chance that direct changes
 * to this file get lost. Consider making changes to the underlying JSON schema
 * you use to generate this file instead. The default file is called
 * "schema.json", perhaps have a look there! :]
 */

import { Type, Static } from "@sinclair/typebox";

export type T = Static<typeof T>;
export const T = Type.Union([
  Type.Object({
    type: Type.Literal("cat"),
    name: Type.String({ maxLength: 100 }),
  }),
  Type.Object({
    type: Type.Literal("dog"),
    name: Type.String({ maxLength: 100 }),
  }),
]);
