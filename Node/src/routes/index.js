import { Router } from 'express'
const router = Router();

router.get('/', (req, res) => {
    res.send('Node REST API');
});

export default router;