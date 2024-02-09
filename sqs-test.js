import AWS from 'aws-sdk';

AWS.config.update({ 
  accessKeyId: 'ghost', 
  secretAccessKey: 'ghost',
});

const sqs = new AWS.SQS({ region: 'eu-central-1' });

const message = {
  something: 'here'
};

// const command = sqs.sendMessage()
sqs.sendMessage({
  MessageBody: JSON.stringify(message),
  QueueUrl: 'http://localhost:9324/queue/ghost-jobs-distributor'
}, function(err, data) {
  console.log('err', err, data);
})