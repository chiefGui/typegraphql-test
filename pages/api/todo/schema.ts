import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class Todo {
  @Field()
  _id: string

  @Field()
  text: string
}
