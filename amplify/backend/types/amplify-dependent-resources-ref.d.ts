export type AmplifyDependentResourcesAttributes = {
  "api": {
    "corsproxy": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    }
  },
  "function": {
    "amplifycorsproxyaxiosLayer": {
      "Arn": "string"
    },
    "corsproxyFunction": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}