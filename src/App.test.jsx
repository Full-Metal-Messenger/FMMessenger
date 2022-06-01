import { screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const Mock = {
  results: [
    {
      id: 1,
      username: 'Bill',
      // created_at: 01 / 21 / 2022,
      posts: 'Nice',
      profile_id: 2,
    },
  ],
};

const server = setupServer(
  rest.post(
    'https://kplqqqfafshaldfzhgir.supabase.co/auth/v1/token?grant_type=refresh_token',
    (req, res, ctx) => res(ctx.json(Mock))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('example test', () => {
  it('first test', () => {
    return;
    screen.debug();
  });
});
//test file
