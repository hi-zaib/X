/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createTweet($payload: TweetContent!) {\n    createTweet(payload: $payload) {\n      id\n    }\n  }\n": types.CreateTweetDocument,
    "\n  query GetAllTweets {\n    getAllTweets {\n      content\n      id\n      imageURL\n      author {\n        firstName\n        lastName\n        profileImageURL\n        username\n      }\n    }\n  }\n": types.GetAllTweetsDocument,
    "\n  query verifyGoogleOauthToken($token: String!) {\n    GoogleVarification(token: $token)\n  }\n": types.VerifyGoogleOauthTokenDocument,
    "\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      firstName\n      email\n      username\n      profileImageURL\n      lastName\n    }\n  }\n": types.GetCurrentUserDocument,
    "\n  query GetUserByUsername($username: String) {\n    getUserByUsername(username: $username) {\n      firstName\n      lastName\n      profileImageURL\n      username\n      createdAt\n      tweets {\n        content\n        imageURL\n        id\n        author {\n          firstName\n          lastName\n          profileImageURL\n          username\n        }\n      }\n    }\n  }\n": types.GetUserByUsernameDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createTweet($payload: TweetContent!) {\n    createTweet(payload: $payload) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation createTweet($payload: TweetContent!) {\n    createTweet(payload: $payload) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllTweets {\n    getAllTweets {\n      content\n      id\n      imageURL\n      author {\n        firstName\n        lastName\n        profileImageURL\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllTweets {\n    getAllTweets {\n      content\n      id\n      imageURL\n      author {\n        firstName\n        lastName\n        profileImageURL\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query verifyGoogleOauthToken($token: String!) {\n    GoogleVarification(token: $token)\n  }\n"): (typeof documents)["\n  query verifyGoogleOauthToken($token: String!) {\n    GoogleVarification(token: $token)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      firstName\n      email\n      username\n      profileImageURL\n      lastName\n    }\n  }\n"): (typeof documents)["\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      firstName\n      email\n      username\n      profileImageURL\n      lastName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserByUsername($username: String) {\n    getUserByUsername(username: $username) {\n      firstName\n      lastName\n      profileImageURL\n      username\n      createdAt\n      tweets {\n        content\n        imageURL\n        id\n        author {\n          firstName\n          lastName\n          profileImageURL\n          username\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserByUsername($username: String) {\n    getUserByUsername(username: $username) {\n      firstName\n      lastName\n      profileImageURL\n      username\n      createdAt\n      tweets {\n        content\n        imageURL\n        id\n        author {\n          firstName\n          lastName\n          profileImageURL\n          username\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;