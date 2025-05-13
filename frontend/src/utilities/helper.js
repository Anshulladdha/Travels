import axios from "axios";

class Helper {
  /**
   *  get presignedUrl for image upload
   */
  uploadFileOnS3 = async (file, filePath) => {
    let body = {
      filePath: "",
      fileFormat: "",
    };
    body = {
      filePath,
      fileFormat: file.type,
    };
    let signedUrl;
    const presignedUrl = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/generate-presigned-url`,
      body
    );

    console.log("presignedUrl====>>>>>", presignedUrl);

    if (presignedUrl && presignedUrl.data) {
      try {
        const response = await this.pushFileToS3(presignedUrl.data.data, file);
        console.log("response====>>>>>>", response)
        if (response?.url) {
          signedUrl = response?.url.split("?X-Amz")?.[0];
        } 
      } catch (error) {
        console.log("error=====", error)
      }
    }

    return signedUrl;
  };

  /**
   *  Upload file on presignedUrl of S3
   */
  pushFileToS3 = async (signedUrl, file) => {
    const myHeaders = new Headers({
      "Content-Type": file.type,
      // "x-amz-acl": "public-read",
    });
    return fetch(signedUrl, {
      method: "PUT",
      headers: myHeaders,
      body: file,
    });
  };
}

const helperInstance = new Helper();

export default helperInstance;
