import { ChakraProvider } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { MessageProvider } from './context/MessageContext';
import userEvent from '@testing-library/user-event';
import { mockUser } from './Tests.js/testInfo';
import { user, addedMessage, roomResp } from './Tests.js/fixtures';

const server = setupServer(
  rest.get(
    `https://kplqqqfafshaldfzhgir.supabase.co/realtime/v1/websocket`,
    (req, res, ctx) => res(ctx.json(mockUser))
  ),
  rest.post(
    `https://kplqqqfafshaldfzhgir.supabase.co/auth/v1/signup`,
    (req, res, ctx) => res(ctx.json(mockUser))
  ),
  rest.options(
    `https://kplqqqfafshaldfzhgir.supabase.co/rest/v1/rooms`,
    (req, res, ctx) => res(ctx.json(roomResp))
  ),
  rest.options(
    `https://kplqqqfafshaldfzhgir.supabase.co/rest/v1/messages`,
    (req, res, ctx) => res(ctx.json([user]))
  ),
  rest.options(
    `https://kplqqqfafshaldfzhgir.supabase.co/rest/v1/profiles`,
    (req, res, ctx) => res(ctx.json([user]))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Sign up Test', () => {
  it('Sign up user', async () => {
    render(
      <ChakraProvider>
        <AuthProvider>
          <MessageProvider>
            <MemoryRouter
              initialEntries={[`/21649a82-c86b-4b10-a230-f4f20bdfd5fa`]}
            >
              <App />
            </MemoryRouter>
          </MessageProvider>
        </AuthProvider>
      </ChakraProvider>
    );
    const clickSignUp = await screen.findByText('Sign Up');
    userEvent.click(clickSignUp);

    const email = await screen.findByPlaceholderText('user email');
    userEvent.type(email, 'tom@tom.com');

    const password = await screen.findByPlaceholderText('password');
    userEvent.type(password, '111111');

    const name = await screen.findByPlaceholderText('username');
    userEvent.type(name, 'Tom');

    const signUp = screen.queryByRole('button', 'Sign Up');
    userEvent.click(signUp);

    // const chat = screen.queryAllByRole('button', 'Chat Rooms');
    const chat = await screen.findByText('Chat Rooms');
    userEvent.click(chat);
    await screen.findByText('loading');
  });
});
