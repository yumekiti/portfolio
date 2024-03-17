import { gql } from '@apollo/client';

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio(
    $createPortfolioInput: CreatePortfolioInput!
    $thumbnail: Upload!
    $images: [Upload!]!
  ) {
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
    }
  }
`;
