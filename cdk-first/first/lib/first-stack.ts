import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FirstStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'FirstQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const bucket = new Bucket(this, 'FirstBucket', {
      versioned: true,
      lifecycleRules: [{
        expiration: cdk.Duration.days(30)
      }]
    })

    new cdk.CfnOutput(this, 'BucketName', {
      value: bucket.bucketName
    });
  }
}
