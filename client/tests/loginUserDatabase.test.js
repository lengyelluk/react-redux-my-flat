const {MongoClient} = require('mongodb');

describe('test API of login with registered user', () => {
  let connection;
  let db;


  beforeAll(async () => {
    connection = await MongoClient.connect("mongodb+srv://admin:beatlesPD007@cluster0-dd7zt.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true", {
      useNewUrlParser: true,
    });
    db = await connection.db('test');
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should successfully found registered user', async () => {
    const users = db.collection('users');

    const mockUser = {
            username: 'Mock Test User',
            email: 'mock@test.com',
            password: 'testtest'
      };
    const foundUser = await users.findOne({email: mockUser.email});
    expect(mockUser.email).toEqual(foundUser.email);
    expect(mockUser.username).toEqual(foundUser.username);
    expect(mockUser.password).toEqual(foundUser.password);
  });

  it('should not found user that is not registered', async () => {
    const users = db.collection('users');

    const nonExistingUser = {
            username: 'Mock Test User That Will Not Exist',
            email: 'mockNotExisting@test.com',
            password: 'testtest'
      };
    const foundUser = await users.findOne({email: nonExistingUser.email});
    expect(foundUser).toEqual(null);
  });
});