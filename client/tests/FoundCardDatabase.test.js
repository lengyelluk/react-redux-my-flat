const {MongoClient} = require('mongodb');

describe('test API of finding existing listings', () => {
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

  it('should found existing listing in the database', async () => {
    const cards = db.collection('cards');

    const existingCard = {
            title: 'Title test 1',
            district: 'District test 1',
            street: 'Street test 1',
            price: 400,
            availabilityDate: '2002-02-24',
            minStay: 5,
            flatmatesMale: 1,
            flatmatesFemale: 2,
            prefFlatmatesMale: true,
            prefFlatmatesFemale: true,
            prefFlatmatesCouple: true,
            petAllowed: true,
            smokingAllowed: true,
        };
    const foundCard = await cards.findOne({title: existingCard.title});
    expect(foundCard.title).toEqual(existingCard.title);
  });

  it('should not found non-existing listing in the database', async () => {
    const cards = db.collection('cards');

    const nonExistingCard = {
            title: 'Title that will never exist',
            district: 'District test 1',
            street: 'Street test 1',
            price: 400,
            availabilityDate: '2002-02-24',
            minStay: 5,
            flatmatesMale: 1,
            flatmatesFemale: 2,
            prefFlatmatesMale: true,
            prefFlatmatesFemale: true,
            prefFlatmatesCouple: true,
            petAllowed: true,
            smokingAllowed: true,
        };
    const missingCard = await cards.findOne({title: nonExistingCard.title});
    expect(missingCard).toEqual(null);
  });
});