import { urlToList } from './tools';

describe('test urlToList function', () => {
  //users/2144/detail => ['/users','/users/2144,'/users/2144/detail']

  it('test 142701199203224545', () => {
    expect(urlToList('users/2144/detail')).toEqual([
      '/users', '/users/2144', '/users/2144/detail'
    ]);
  });

});
