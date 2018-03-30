import express from "express";
let router = express.Router();

router.get('/', (req, res) => {
  res.json({
    hello: 'world'
  });
});

export default router;
