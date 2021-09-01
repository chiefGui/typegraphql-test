import {
  FieldResolver,
  Query,
  Resolver,
  ResolverInterface,
  Root,
} from "type-graphql"

import { Todo } from "./schema"

@Resolver(Todo)
export class TodoResolver implements ResolverInterface<Todo> {
  @Query((returns) => [Todo])
  async todos(): Promise<Todo[]> {
    return await [{ _id: Math.random().toString(), text: "hi!" }]
  }

  @FieldResolver((type) => Number)
  async text(@Root() todo: Todo): Promise<string> {
    console.log(todo) // never logs

    return await "hello world"
  }
}
