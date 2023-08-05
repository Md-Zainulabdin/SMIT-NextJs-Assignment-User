import { write } from "../../../utils/handlers";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(404).send();
  }

  try {
    write(req.body);
    return res.status(201).send()
  }
  catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }

  
}
