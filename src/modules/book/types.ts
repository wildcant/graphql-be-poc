/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* eslint-disable */

import * as Types from "../graphql-types";
export namespace BookModule {
  interface DefinedFields {
    Book: 'id' | 'author' | 'computedProperty' | 'computedPropertyDoubled' | 'editorial' | 'title';
    Query: 'books' | 'book';
  };
  
  export type Book = Pick<Types.Book, DefinedFields['Book']>;
  export type Author = Types.Author;
  export type Editorial = Types.Editorial;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type BookResolvers = Pick<Types.BookResolvers, DefinedFields['Book'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    Book?: BookResolvers;
    Query?: QueryResolvers;
  };
}