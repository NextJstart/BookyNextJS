import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';

import { allRooms } from '../../../controllers/roomController';

const handler = nc();

dbConnect();

handler.get(allRooms);

export default handler;
