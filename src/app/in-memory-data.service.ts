import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 0,  name: 'Zero', email: '1@gmail.com', password: '11111'},
      { id: 11, name: 'Mr. Nice', email: '2@gmail.com', password: '22222'},
      { id: 12, name: 'Narco', email: '3@gmail.com', password: '33333'}
    ];
    return {users};
  }
}
