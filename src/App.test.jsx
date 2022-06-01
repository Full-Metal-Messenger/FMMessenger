import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { MessageProvider } from './context/MessageContext';

const Mock = {
  results: {
    id: 1,
    username: 'Bill',
    // created_at: 01 / 21 / 2022,
    posts: 'Nice',
    profile_id: 2,
  },
};

const server = setupServer(
  rest.get(`${process.env.SUPABASE_URL}/auth`, (req, res, ctx) =>
    res(ctx.json(Mock))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Login Test', () => {
  it('Log user', async () => {
    render(
      <ChakraProvider>
        <AuthProvider>
          <MessageProvider>
            <MemoryRouter>
              <App />
            </MemoryRouter>
          </MessageProvider>
        </AuthProvider>
      </ChakraProvider>
    );

    const emails = await screen.findByPlaceholderText('user email');
    expect(emails).toBeInTheDocument();
    screen.debug();
  });
});

// describe('example test', () => {
//   it('first test', () => {
//     return;
//   });
// });
// //test file
