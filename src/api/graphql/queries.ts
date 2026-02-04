import { gql } from "@apollo/client";


export const GET_CHARACTER_DETAIL = gql`
  query GetCharacterDetail($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      status
      occupation
    }
  }
`;

export const GET_CHARACTERS = gql`
  query GetCharacters($name: String, $species: String) {
    characters(filter: { name: $name, species: $species }) {
      results {
        id
        name
        image
        species
        status
        gender
      }
    }
  }
`;
