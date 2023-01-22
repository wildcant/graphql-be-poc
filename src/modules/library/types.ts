/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* eslint-disable */

import * as Types from "../graphql-types";
export namespace LibraryModule {
  interface DefinedFields {
    Library: 'id' | 'name' | 'address' | 'books';
    Query: 'library';
  };
  
  export type Library = Pick<Types.Library, DefinedFields['Library']>;
  export type Book = Types.Book;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type LibraryResolvers = Pick<Types.LibraryResolvers, DefinedFields['Library'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    Library?: LibraryResolvers;
    Query?: QueryResolvers;
  };
}