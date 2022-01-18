import MongoClient from 'mongodb'
import { Router } from 'express'
const router = Router();

// DB Connection
import { connect } from '../database'

router.get('/', async (req, res) => {
    const result = await connect();
    console.log(result);
    res.json(result);
});

export default router;