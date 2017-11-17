// This Lambda function is called by the `process_postcodes.py` script.
// It inserts an entry (postcode, latitude, longitude, price, date) in the table.
//
// The price-paid data table can be viewed here:
// https://eu-west-2.console.aws.amazon.com/dynamodb/home?region=eu-west-2#tables:selected=price_paid_data


var doc = require('dynamodb-doc');
var dynamodb = new doc.DynamoDB();

// Name of the locations table in DynamoDB.
let k_TABLE_NAME = "price_paid_data";

// This function is called when the Lambda function is invoked.
exports.handler = (event, context, callback) => {
    let jsonPayload = JSON.parse(event.body);

    for (var index in jsonPayload.entries) {
        let entry = jsonPayload.entries[index];

        // Create the new price-paid entry item.
        var pricePaidItem = {
            postcode    : entry.postcode,
            longitude   : parseFloat(entry.longitude),
            latitude    : parseFloat(entry.latitude),
            price       : entry.price,
            date        : entry.date
        };

        // Insert a new record into the `price_paid_data` DynamoDB table.
        dynamodb.putItem({
            "TableName" : k_TABLE_NAME,
            "Item"      : pricePaidItem
        }, function (result) {
            console.log(result);
        });
    }

    callback(null, {
        "statusCode" : 200,
        "headers" : { "Content-Type" : "application/json" },
        "body" : JSON.stringify({
            "status" : "success",
            "message" : "Done ✅"
        })
    });
};
