/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      username
      name
      university
      skills {
        indiv_skills
      }
      interests {
        indiv_interests
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      username
      name
      university
      skills {
        indiv_skills
      }
      interests {
        indiv_interests
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      username
      name
      university
      skills {
        indiv_skills
      }
      interests {
        indiv_interests
      }
      id
      createdAt
      updatedAt
    }
  }
`;
