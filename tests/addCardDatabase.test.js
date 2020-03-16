const {MongoClient} = require('mongodb');

describe('insert', () => {
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

  it('should insert a doc into collection', async () => {
    const cards = db.collection('cards');

    const mockCard = {
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
    //await cards.insertOne(mockCard);

    //const insertedCard = await cards.findOne({title: 'Title test'});
    expect(mockCard).toEqual(mockCard);
  });
});