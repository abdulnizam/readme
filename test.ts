import { getMessages } from '@/app/utils/api';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ messages: [] }),
  })
) as jest.Mock;

beforeEach(() => {
  const sessionStorageMock = (() => {
    let store: Record<string, string> = {
      session_id: 'mock-session-id-456',
    };
    return {
      getItem: jest.fn((key: string) => store[key] || null),
      setItem: jest.fn((key: string, value: string) => {
        store[key] = value;
      }),
      clear: jest.fn(() => {
        store = {};
      }),
    };
  })();

  Object.defineProperty(window, 'sessionStorage', {
    value: sessionStorageMock,
    configurable: true,
  });
});

test('includes session_id in headers', async () => {
  await getMessages();

  expect(fetch).toHaveBeenCalledWith('/api/messages', expect.objectContaining({
    headers: expect.objectContaining({
      'session_id': 'mock-session-id-456',
    }),
  }));
});