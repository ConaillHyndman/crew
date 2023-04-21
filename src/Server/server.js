async function connectToDb() {
    const uri = 'mongodb+srv://conaillhyndman:Cromlough14@crewpluscluster.iptdgiv.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    return client.db('sample_airbnb');
  }
  