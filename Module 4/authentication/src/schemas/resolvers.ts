import { Profile } from '../models/index.js';
import { signToken, AuthenticationError } from '../utils/auth.js';

interface Profile {
  _id: string;
  email: string;
  password: string;
}

interface ProfileArgs {
  profileId: string;
}

interface Context {
  user?: Profile;
}

const resolvers = {
  Query: {
    profiles: async (): Promise<Profile[]> => {
      return await Profile.find();
    },

    profile: async (_parent: unknown, { profileId }: ProfileArgs): Promise<Profile | null> => {
      return await Profile.findOne({ _id: profileId });
    },

    me: async (_parent: unknown, _args: unknown, context: Context): Promise<Profile | null> => {
      if (context.user) {
        return await Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('Not Authenticated');
    },
  },

  Mutation: {

    login: async (_parent: unknown, { email, password }: { email: string; password: string }): Promise<{ token: string; profile: Profile }> => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw AuthenticationError;
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Not Authenticated');
      }

      const token = signToken(profile.email, profile._id);
      return { token, profile };
    },
  },
};

export default resolvers;
