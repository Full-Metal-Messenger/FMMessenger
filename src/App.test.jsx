// import { ChakraProvider } from '@chakra-ui/react';
// import { render, screen } from '@testing-library/react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import { MemoryRouter } from 'react-router-dom';
// import App from './App';
// import { AuthProvider } from './context/AuthContext';
// import { MessageProvider } from './context/MessageContext';
// import userEvent from '@testing-library/user-event';
// import { mockUser } from './services/testInfo';
// // const Mock = {
// //   results: {
// //     id: 1,
// //     // username: 'Jordan',
// //     // created_at: 01 / 21 / 2022,
// //     posts: 'Nice',
// //     profile_id: 2,
// //   },
// // };

// const server = setupServer(
//   rest.post(
//     `https://kplqqqfafshaldfzhgir.supabase.co/auth/v1/token`,
//     (req, res, ctx) => res(ctx.json(mockUser))
//   )
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// describe('Sign up Test', () => {
//   it('Sign up user', async () => {
//     render(
//       <ChakraProvider>
//         <AuthProvider>
//           <MessageProvider>
//             <MemoryRouter>
//               <App />
//             </MemoryRouter>
//           </MessageProvider>
//         </AuthProvider>
//       </ChakraProvider>
//     );

//     const clickSignUp = await screen.findByText('Sign Up');
//     userEvent.click(clickSignUp);

//     const email = await screen.findByPlaceholderText('user email');
//     userEvent.type(email, 'tom@tom.com');

//     const password = await screen.findByPlaceholderText('password');
//     userEvent.type(password, '111111');

//     const name = await screen.findByPlaceholderText('username');
//     userEvent.type(name, 'Tom');

//     const button = await screen.findByLabelText('submit');
//     userEvent.click(button);

//     const user = {
//       id: 1,
//       created_at: '2022-05-27T19:48:05.861137Z',
//       content: 'test',
//       guest_id: '1',
//     };

//     const addedMessage = [
//       {
//         id: 2,
//         created_at: '2022-05-27T19:48:05.861137Z',
//         content: 'test2',
//         guest_id: '1',
//       },
//       {
//         id: 3,
//         created_at: '2022-05-27T19:48:05.861137Z',
//         content: 'test',
//         guest_id: '1',
//       },
//     ];
//     const newEntry = [
//       {
//         id: 4,
//         created_at: '2022-05-27T19:48:05.861137Z',
//         content: 'fake entry',
//         guest_id: '1',
//       },
//     ];
//     server.use(
//       rest.options(
//         `https://kplqqqfafshaldfzhgir.supabase.co/rest/v1/profiles`,
//         (req, res, ctx) => res(ctx.json([user]))
//       )
//     );

//     const entry = await screen.findByLabelText(
//       'message'
//       // {},
//       // { timeout: 3000 }
//     );
//     userEvent.type(entry, 'fake entry');

//     const add = await screen.findByLabelText('Add New Entry');
//     server.use(
//       rest.post(
//         `https://kplqqqfafshaldfzhgir.supabase.co/rest/v1/profiles`,
//         (req, res, ctx) => res(ctx.json(newEntry))
//       )
//     );
//     server.use(
//       rest.get(
//         `https://kplqqqfafshaldfzhgir.supabase.co/rest/v1/profiles`,
//         (req, res, ctx) => res(ctx.json(addedMessage))
//       )
//     );
//     userEvent.click(add);

//     const data = await screen.findByText('fake entry');
//     expect(data).toBeInTheDocument();
//     screen.debug();
//   });
// });

describe('example test', () => {
  it('first test', () => {
    return;
  });
});

// describe('example test', () => {
//   it('first test', () => {
//     return;
//   });
// });
// //test file
