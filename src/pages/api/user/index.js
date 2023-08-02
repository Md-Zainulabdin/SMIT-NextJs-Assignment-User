import { write } from "../../../../utils/handlers";

export default  function handler(req, res) {
    // res.status(200).json({ name: 'User' })

    if (req.method === 'POST') {
      write(req.body)
      res.status(201)
    }
  }
  