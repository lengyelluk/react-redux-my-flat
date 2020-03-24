const {MongoClient} = require('mongodb');

describe('test API of adding new/registering new users', () => {
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

  /*it('should register a new user', async () => {
    const users = db.collection('users');

    const mockUser = {
            username: 'Mock Test User',
            email: 'mock@test.com',
            password: 'testtest'
        };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({email: 'mock@test.com'});
    expect(mockUser).toEqual(insertedUser);
  });*/

  it('should not register a new user as user already exists', async () => {
    const users = db.collection('users');

    const mockUser = {
            username: 'Mock Test User',
            email: 'mock@test.com',
            password: 'testtest'
        };

      let errorThrown = false;
      try {
        const response = await users.insertOne(mockUser);
      } catch (error) {
          errorThrown = true;
      }
      expect(errorThrown).toBe(true);
  });
});