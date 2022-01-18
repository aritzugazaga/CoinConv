import express, { urlencoded, json } from 'express'

const app = express();

// Importing Routes
import IndexRoutes from './routes/index'
import CurrenciesRoutes from './routes/currencies'

// settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(urlencoded({ extended: false }));
app.use(json());

// Routes
app.use(IndexRoutes);
app.use('/currencies', CurrenciesRoutes);

export default app;