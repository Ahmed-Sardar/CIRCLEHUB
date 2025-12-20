import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import {inngest, functions} from './inngest/index.js'
import {serve} from 'inngest/express'

const app = express();

await connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> res.send('Server is running'))
app.use('/api/inngest', serve({ client: inngest, functions }));

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))

// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import connectDB from './configs/db.js';
// import { inngest, functions } from './inngest/index.js';
// import { serve } from 'inngest/express';

// const app = express();

// app.use(express.json());
// app.use(cors());

// let isDBConnected = false;

// app.get('/', async (req, res, next) => {
//   try {
//     if (!isDBConnected) {
//       await connectDB();
//       isDBConnected = true;
//     }
//     res.send('Server is running');
//   } catch (err) {
//     next(err);
//   }
// });

// app.use(
//   '/api/inngest',
//   async (req, res, next) => {
//     try {
//       if (!isDBConnected) {
//         await connectDB();
//         isDBConnected = true;
//       }
//       return serve({ client: inngest, functions })(req, res, next);
//     } catch (err) {
//       next(err);
//     }
//   }
// );

// // Optional error handler
// app.use((err, req, res, next) => {
//   console.error('Server error:', err);
//   res.status(500).json({ message: 'Internal Server Error' });
// });

// // Export the handler for Vercel
// export default app;
