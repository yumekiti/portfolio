/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type CreatePortfolioInput = {
  date: Scalars['String']['input'];
  description: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['Upload']['input']>>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
};

export type CreateStackInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateTimelineInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateWritingInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPortfolio: Portfolio;
  createStack: Stack;
  createTimeline: Timeline;
  createWriting: Writing;
  removePortfolio: Portfolio;
  removeStack: Stack;
  removeTimeline: Timeline;
  removeWriting: Writing;
  updatePortfolio: Portfolio;
  updateStack: Stack;
  updateTimeline: Timeline;
  updateWriting: Writing;
};


export type MutationCreatePortfolioArgs = {
  createPortfolioInput: CreatePortfolioInput;
  images: Array<Scalars['Upload']['input']>;
  thumbnail: Scalars['Upload']['input'];
};


export type MutationCreateStackArgs = {
  createStackInput: CreateStackInput;
};


export type MutationCreateTimelineArgs = {
  createTimelineInput: CreateTimelineInput;
};


export type MutationCreateWritingArgs = {
  createWritingInput: CreateWritingInput;
};


export type MutationRemovePortfolioArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveStackArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTimelineArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveWritingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdatePortfolioArgs = {
  updatePortfolioInput: UpdatePortfolioInput;
};


export type MutationUpdateStackArgs = {
  updateStackInput: UpdateStackInput;
};


export type MutationUpdateTimelineArgs = {
  updateTimelineInput: UpdateTimelineInput;
};


export type MutationUpdateWritingArgs = {
  updateWritingInput: UpdateWritingInput;
};

export type Portfolio = {
  __typename?: 'Portfolio';
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  images: Array<PortfolioImage>;
  links?: Maybe<Array<PortfolioLink>>;
  thumbnail: Scalars['Upload']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  views: Scalars['Int']['output'];
};

export type PortfolioImage = {
  __typename?: 'PortfolioImage';
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  portfolio: Portfolio;
};

export type PortfolioLink = {
  __typename?: 'PortfolioLink';
  emoji: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  link: Scalars['String']['output'];
  portfolio: Portfolio;
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  portfolio: Portfolio;
  portfolios: Array<Portfolio>;
  stack: Stack;
  stacks: Array<Stack>;
  timeline: Timeline;
  timelines: Array<Timeline>;
  writing: Writing;
  writings: Array<Writing>;
};


export type QueryPortfolioArgs = {
  id: Scalars['Int']['input'];
};


export type QueryStackArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTimelineArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWritingArgs = {
  id: Scalars['Int']['input'];
};

export type Stack = {
  __typename?: 'Stack';
  category: Scalars['String']['output'];
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  link: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Timeline = {
  __typename?: 'Timeline';
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  emoji: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type UpdatePortfolioInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  images?: InputMaybe<Array<Scalars['Upload']['input']>>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStackInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateTimelineInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateWritingInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type Writing = {
  __typename?: 'Writing';
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  uuid: Scalars['String']['output'];
  views: Scalars['Int']['output'];
};

export type CreatePortfolioMutationVariables = Exact<{
  createPortfolioInput: CreatePortfolioInput;
  thumbnail: Scalars['Upload']['input'];
  images: Array<Scalars['Upload']['input']> | Scalars['Upload']['input'];
}>;


export type CreatePortfolioMutation = { __typename?: 'Mutation', createPortfolio: { __typename?: 'Portfolio', id: number, title: string, description: string, date: string, thumbnail: any, images: Array<{ __typename?: 'PortfolioImage', id: number, image: string }> } };


export const CreatePortfolioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePortfolio"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createPortfolioInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePortfolioInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thumbnail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"images"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPortfolio"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPortfolioInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createPortfolioInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"thumbnail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thumbnail"}}},{"kind":"Argument","name":{"kind":"Name","value":"images"},"value":{"kind":"Variable","name":{"kind":"Name","value":"images"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePortfolioMutation, CreatePortfolioMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type CreatePortfolioInput = {
  date: Scalars['String']['input'];
  description: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['Upload']['input']>>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
};

export type CreateStackInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateTimelineInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateWritingInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPortfolio: Portfolio;
  createStack: Stack;
  createTimeline: Timeline;
  createWriting: Writing;
  removePortfolio: Portfolio;
  removeStack: Stack;
  removeTimeline: Timeline;
  removeWriting: Writing;
  updatePortfolio: Portfolio;
  updateStack: Stack;
  updateTimeline: Timeline;
  updateWriting: Writing;
};


export type MutationCreatePortfolioArgs = {
  createPortfolioInput: CreatePortfolioInput;
  images: Array<Scalars['Upload']['input']>;
  thumbnail: Scalars['Upload']['input'];
};


export type MutationCreateStackArgs = {
  createStackInput: CreateStackInput;
};


export type MutationCreateTimelineArgs = {
  createTimelineInput: CreateTimelineInput;
};


export type MutationCreateWritingArgs = {
  createWritingInput: CreateWritingInput;
};


export type MutationRemovePortfolioArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveStackArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTimelineArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveWritingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdatePortfolioArgs = {
  updatePortfolioInput: UpdatePortfolioInput;
};


export type MutationUpdateStackArgs = {
  updateStackInput: UpdateStackInput;
};


export type MutationUpdateTimelineArgs = {
  updateTimelineInput: UpdateTimelineInput;
};


export type MutationUpdateWritingArgs = {
  updateWritingInput: UpdateWritingInput;
};

export type Portfolio = {
  __typename?: 'Portfolio';
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  images: Array<PortfolioImage>;
  links?: Maybe<Array<PortfolioLink>>;
  thumbnail: Scalars['Upload']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  views: Scalars['Int']['output'];
};

export type PortfolioImage = {
  __typename?: 'PortfolioImage';
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  portfolio: Portfolio;
};

export type PortfolioLink = {
  __typename?: 'PortfolioLink';
  emoji: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  link: Scalars['String']['output'];
  portfolio: Portfolio;
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  portfolio: Portfolio;
  portfolios: Array<Portfolio>;
  stack: Stack;
  stacks: Array<Stack>;
  timeline: Timeline;
  timelines: Array<Timeline>;
  writing: Writing;
  writings: Array<Writing>;
};


export type QueryPortfolioArgs = {
  id: Scalars['Int']['input'];
};


export type QueryStackArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTimelineArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWritingArgs = {
  id: Scalars['Int']['input'];
};

export type Stack = {
  __typename?: 'Stack';
  category: Scalars['String']['output'];
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  link: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Timeline = {
  __typename?: 'Timeline';
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  emoji: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type UpdatePortfolioInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  images?: InputMaybe<Array<Scalars['Upload']['input']>>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStackInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateTimelineInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateWritingInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type Writing = {
  __typename?: 'Writing';
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  uuid: Scalars['String']['output'];
  views: Scalars['Int']['output'];
};

export type CreatePortfolioMutationVariables = Exact<{
  createPortfolioInput: CreatePortfolioInput;
  thumbnail: Scalars['Upload']['input'];
  images: Array<Scalars['Upload']['input']> | Scalars['Upload']['input'];
}>;


export type CreatePortfolioMutation = { __typename?: 'Mutation', createPortfolio: { __typename?: 'Portfolio', id: number, title: string, description: string, date: string, thumbnail: any, images: Array<{ __typename?: 'PortfolioImage', id: number, image: string }> } };


export const CreatePortfolioDocument = gql`
    mutation CreatePortfolio($createPortfolioInput: CreatePortfolioInput!, $thumbnail: Upload!, $images: [Upload!]!) {
  createPortfolio(
    createPortfolioInput: $createPortfolioInput
    thumbnail: $thumbnail
    images: $images
  ) {
    id
    title
    description
    date
    thumbnail
    images {
      id
      image
    }
  }
}
    `;
export type CreatePortfolioMutationFn = Apollo.MutationFunction<CreatePortfolioMutation, CreatePortfolioMutationVariables>;

/**
 * __useCreatePortfolioMutation__
 *
 * To run a mutation, you first call `useCreatePortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPortfolioMutation, { data, loading, error }] = useCreatePortfolioMutation({
 *   variables: {
 *      createPortfolioInput: // value for 'createPortfolioInput'
 *      thumbnail: // value for 'thumbnail'
 *      images: // value for 'images'
 *   },
 * });
 */
export function useCreatePortfolioMutation(baseOptions?: Apollo.MutationHookOptions<CreatePortfolioMutation, CreatePortfolioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePortfolioMutation, CreatePortfolioMutationVariables>(CreatePortfolioDocument, options);
      }
export type CreatePortfolioMutationHookResult = ReturnType<typeof useCreatePortfolioMutation>;
export type CreatePortfolioMutationResult = Apollo.MutationResult<CreatePortfolioMutation>;
export type CreatePortfolioMutationOptions = Apollo.BaseMutationOptions<CreatePortfolioMutation, CreatePortfolioMutationVariables>;