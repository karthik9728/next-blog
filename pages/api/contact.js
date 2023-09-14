import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@') || !name || !message) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    //store in database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.password}@${process.env.mongodb_cluster_name}.pyrvzdk.mongodb.net/${process.env.mongodb_batabase}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Something went worng while connecting database' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Something went worng' });
      return;
    }

    client.close();
    res
      .status(201)
      .json({ message: 'message sent successfully', data: newMessage });
  }
}

export default handler;
