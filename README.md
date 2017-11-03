# MARTIN-server

## Introduction
This repository holds the code and documentation for the server-side material developed as part **947G5 Advanced Software Engineering** Task 4.

The AWS [Lambda Management Console](https://eu-west-2.console.aws.amazon.com/lambda/home?region=eu-west-2#/functions/HandleLocationUpdate?tab=configuration) hosts the **JavaScript** code that powers the server-side of the project.

Entries are made in the `locations` [DynamoDB table](https://eu-west-2.console.aws.amazon.com/dynamodb/home?region=eu-west-2#tables:selected=locations).

##### Why AWS?

Amazon Web Services was chosen as the platform to host the server-side of our project because it is very reputable, has very good documentation, and has a suitable 'free' tier.

More specifically, we chose to develop using **AWS Lambda** over, say Elastic Beanstalk, as it provided a conceptually elegant way of dealing with requests. Instances of our Node.js application are spawned to handle each request.

Each instance happens in an ad-hoc manner and can operate in a self-contained way, making it extremely scalable (and therefore able to deal with multiple requests at the same time).

##### Why `Node.js`?

The Lambda Management Console offered a lot of flexibility in terms of which programming language we would like to use. We chose `Node.js` as a number of us are familiar with JavaScript and those who are not felt they could learn it quickly.

##### Why DynamoDB?

AWS offer DynamoDB as a scalable, fast, and flexible NoSQL database service, which was perfect for our app. DynamoDB is lightweight and simple to use.

> Note: for Task 4 we may not be using DynamoDB anymore.

If we do continue to use it, then we should document why we chose this NoSQL approach over a traditional relational approach.

Also, why did we decide to write to a database rather than, say, text files on the server.

##### Testing

###### Lambda Management Console Tests

The Lambda Management Console offers built-in testing services that pass specified parameters to the Node.js program and evaluate the response (including logging).

###### User Testing

Perhaps the most common form of testing we carried out was user testing where the team working on the client-side made requests to the server-side to test the functionality. Specifically, boundary cases were tested to ensure the server-side could deal with them appropriately (reporting an error back to the user), rather than corrupting the database.

> Note: it would be good to have some unit testing happening here in the future.

---

###### To Do:

* Configure GitHub to push code changes automatically to AWS Lambda Management Console. Then document about the **build automation**.