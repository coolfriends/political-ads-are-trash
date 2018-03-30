/**
 * Import the Express application and wrap it with serverless to enable use
 * with AWS lambda.
 */
import serverless from "serverless-http";
import app from "./app";

module.exports.handler = serverless(app);
