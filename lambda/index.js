const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "ap-south-1" });
const dynamodb = DynamoDBDocumentClient.from(client);

exports.handler = async (event) => {

  const changeId = Date.now().toString();

  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      change_id: changeId,
      description: event.description || "Deployment change",
      requested_by: event.requested_by || "CI/CD",
      branch: event.branch || "unknown",
      timestamp: new Date().toISOString(),
      status: "PENDING"
    }
  };

  await dynamodb.send(new PutCommand(params));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Change record created",
      change_id: changeId
    })
  };
};
