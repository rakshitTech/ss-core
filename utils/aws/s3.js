import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const s3Download = async (bucket, key, downloadPath) => {
	const client = new S3Client({
        	credentials: {
                	accessKeyId: global.Config.aws.session.access_key_id,
	                secretAccessKey: global.Config.aws.session.secret_access_key,
        	        sessionToken: global.Config.aws.session.token
	        },
        	region: global.Config.aws.session.region
	})

	const command = new GetObjectCommand({
		Bucket: bucket,
		Key: key
	});

	try {
		const response = await client.send(command);
		// The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
		const str = await response.Body.transformToString();
		console.log(str && str.length);
	} catch (err) {
		console.error(err);
	}
};
