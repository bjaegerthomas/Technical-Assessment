const typeDefs = `
  type Profile {
    _id: ID
    email: String
    password: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    login(email: String!, password: String!): Auth
  }
`;

export default typeDefs;

