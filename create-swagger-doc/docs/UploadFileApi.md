# Documentation.UploadFileApi

All URIs are relative to *http://localhost:1337/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**uploadFilesGet**](UploadFileApi.md#uploadFilesGet) | **GET** /upload/files | 
[**uploadFilesIdDelete**](UploadFileApi.md#uploadFilesIdDelete) | **DELETE** /upload/files/{id} | 
[**uploadFilesIdGet**](UploadFileApi.md#uploadFilesIdGet) | **GET** /upload/files/{id} | 
[**uploadIdPost**](UploadFileApi.md#uploadIdPost) | **POST** /upload/id | 
[**uploadPost**](UploadFileApi.md#uploadPost) | **POST** /upload | 



## uploadFilesGet

> [UploadFile] uploadFilesGet()



### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UploadFileApi();
apiInstance.uploadFilesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[UploadFile]**](UploadFile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadFilesIdDelete

> UploadFile uploadFilesIdDelete(id)



### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UploadFileApi();
let id = "id_example"; // String | 
apiInstance.uploadFilesIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**UploadFile**](UploadFile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadFilesIdGet

> UploadFile uploadFilesIdGet(id)



### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UploadFileApi();
let id = "id_example"; // String | 
apiInstance.uploadFilesIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**UploadFile**](UploadFile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadIdPost

> [UploadFile] uploadIdPost(id, opts)



Upload file information

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UploadFileApi();
let id = "id_example"; // String | File id
let opts = {
  'fileInfo': new Documentation.UploadIdPostRequestFileInfo(), // UploadIdPostRequestFileInfo | 
  'files': "/path/to/file" // File | 
};
apiInstance.uploadIdPost(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| File id | 
 **fileInfo** | [**UploadIdPostRequestFileInfo**](UploadIdPostRequestFileInfo.md)|  | [optional] 
 **files** | **File**|  | [optional] 

### Return type

[**[UploadFile]**](UploadFile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## uploadPost

> [UploadFile] uploadPost(files, opts)



Upload files

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UploadFileApi();
let files = ["null"]; // [File] | 
let opts = {
  'path': "path_example", // String | The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3).
  'refId': "refId_example", // String | The ID of the entry which the file(s) will be linked to
  'ref': "ref_example", // String | The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant).
  'field': "field_example" // String | The field of the entry which the file(s) will be precisely linked to.
};
apiInstance.uploadPost(files, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **[File]**|  | 
 **path** | **String**| The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3). | [optional] 
 **refId** | **String**| The ID of the entry which the file(s) will be linked to | [optional] 
 **ref** | **String**| The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant). | [optional] 
 **field** | **String**| The field of the entry which the file(s) will be precisely linked to. | [optional] 

### Return type

[**[UploadFile]**](UploadFile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

