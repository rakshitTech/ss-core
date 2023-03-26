import { STSClient, AssumeRoleCommand } from "@aws-sdk/client-sts"

const client = new STSClient({
	credentials: {
                accessKeyId: global.Config.aws.access_key_id,
                secretAccessKey: global.Config.aws.secret_access_key
        },
        region: global.Config.aws.region
})

export const stsAssumeRole = async () => {
	const params = {
		RoleArn: global.Config.aws.assume_role_arn,
		RoleSessionName: `assumerole-session-${Date.now()}`,
		DurationSeconds: 43100
	}
	const command = new AssumeRoleCommand(params)
	
	try {
		const data = await client.send(command)
		global.Config.aws.session = {
			access_key_id: data.Credentials.AccessKeyId,
			secret_access_key: data.Credentials.SecretAccessKey,
			token: data.Credentials.SessionToken,
			expiration: data.Credentials.Expiration
		}
	  console.log('process data.', data)
	} catch (error) {
	  console.error('error handling.', error)
	} finally {
	  console.log('finally.')
	}
}
