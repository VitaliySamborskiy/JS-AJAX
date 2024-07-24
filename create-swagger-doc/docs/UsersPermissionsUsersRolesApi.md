# Documentation.UsersPermissionsUsersRolesApi

All URIs are relative to *http://localhost:1337/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersCountGet**](UsersPermissionsUsersRolesApi.md#usersCountGet) | **GET** /users/count | Get user count
[**usersGet**](UsersPermissionsUsersRolesApi.md#usersGet) | **GET** /users | Get list of users
[**usersIdDelete**](UsersPermissionsUsersRolesApi.md#usersIdDelete) | **DELETE** /users/{id} | Delete a user
[**usersIdGet**](UsersPermissionsUsersRolesApi.md#usersIdGet) | **GET** /users/{id} | Get a user
[**usersIdPut**](UsersPermissionsUsersRolesApi.md#usersIdPut) | **PUT** /users/{id} | Update a user
[**usersMeGet**](UsersPermissionsUsersRolesApi.md#usersMeGet) | **GET** /users/me | Get authenticated user info
[**usersPermissionsPermissionsGet**](UsersPermissionsUsersRolesApi.md#usersPermissionsPermissionsGet) | **GET** /users-permissions/permissions | Get default generated permissions
[**usersPermissionsRolesGet**](UsersPermissionsUsersRolesApi.md#usersPermissionsRolesGet) | **GET** /users-permissions/roles | List roles
[**usersPermissionsRolesIdGet**](UsersPermissionsUsersRolesApi.md#usersPermissionsRolesIdGet) | **GET** /users-permissions/roles/{id} | Get a role
[**usersPermissionsRolesPost**](UsersPermissionsUsersRolesApi.md#usersPermissionsRolesPost) | **POST** /users-permissions/roles | Create a role
[**usersPermissionsRolesRoleDelete**](UsersPermissionsUsersRolesApi.md#usersPermissionsRolesRoleDelete) | **DELETE** /users-permissions/roles/{role} | Delete a role
[**usersPermissionsRolesRolePut**](UsersPermissionsUsersRolesApi.md#usersPermissionsRolesRolePut) | **PUT** /users-permissions/roles/{role} | Update a role
[**usersPost**](UsersPermissionsUsersRolesApi.md#usersPost) | **POST** /users | Create a user



## usersCountGet

> Number usersCountGet()

Get user count

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsUsersRolesApi();
apiInstance.usersCountGet((error, data, response) => {
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

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersGet

> [UsersPermissionsUser] usersGet()

Get list of users

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsUsersRolesApi();
apiInstance.usersGet((error, data, response) => {
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

[**[UsersPermissionsUser]**](UsersPermissionsUser.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersIdDelete

> UsersPermissionsUser usersIdDelete(id)

Delete a user

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsUsersRolesApi();
let id = "id_example"; // String | user Id
apiInstance.usersIdDelete(id, (error, data, response) => {
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
 **id** | **String**| user Id | 

### Return type

[**UsersPermissionsUser**](UsersPermissionsUser.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersIdGet

> UsersPermissionsUser usersIdGet(id)

Get a user

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsUsersRolesApi();
let id = "id_example"; // String | user Id
apiInstance.usersIdGet(id, (error, data, response) => {
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
 **id** | **String**| user Id | 

### Return type

[**UsersPermissionsUser**](UsersPermissionsUser.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersIdPut

> UsersPost201Response usersIdPut(id, usersPostRequest)

Update a user

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsUsersRolesApi();
let id = "id_example"; // String | user Id
let usersPostRequest = {"username":"foo","email":"foo@strapi.io","password":"foo-password"}; // UsersPostRequest | 
apiInstance.usersIdPut(id, usersPostRequest, (error, data, response) => {
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
 **id** | **String**| user Id | 
 **usersPostRequest** | [**UsersPostRequest**](UsersPostRequest.md)|  | 

### Return type

[**UsersPost201Response**](UsersPost201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersMeGet

> UsersPermissionsUser usersMeGet()

Get authenticated user info

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsUsersRolesApi();
apiInstance.usersMeGet((error, data, response) => {
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

[**UsersPermissionsUser**](UsersPermissionsUser.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersPermissionsPermissionsGet

> UsersPermissionsPermissionsGet200Response usersPermissionsPermissionsGet()

Get default generated permissions

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsUsersRolesApi();
apiInstance.usersPermissionsPermissionsGet((error, data, response) => {
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

[**UsersPermissionsPermissionsGet200Response**](UsersPermissionsPermissionsGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersPermissionsRolesGet

> UsersPermissionsRolesGet200Response usersPermissionsRolesGet()

List roles

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsUsersRolesApi();
apiInstance.usersPermissionsRolesGet((error, data, response) => {
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

[**UsersPermissionsRolesGet200Response**](UsersPermissionsRolesGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersPermissionsRolesIdGet

> UsersPermissionsRolesIdGet200Response usersPermissionsRolesIdGet(id)

Get a role

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsUsersRolesApi();
let id = "id_example"; // String | role Id
apiInstance.usersPermissionsRolesIdGet(id, (error, data, response) => {
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
 **id** | **String**| role Id | 

### Return type

[**UsersPermissionsRolesIdGet200Response**](UsersPermissionsRolesIdGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersPermissionsRolesPost

> AuthForgotPasswordPost200Response usersPermissionsRolesPost(usersPermissionsRolesPostRequest)

Create a role

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsUsersRolesApi();
let usersPermissionsRolesPostRequest = {"name":"foo","description":"role foo","permissions":{"api::content-type.content-type":{"controllers":{"controllerA":{"find":{"enabled":true}}}}}}; // UsersPermissionsRolesPostRequest | 
apiInstance.usersPermissionsRolesPost(usersPermissionsRolesPostRequest, (error, data, response) => {
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
 **usersPermissionsRolesPostRequest** | [**UsersPermissionsRolesPostRequest**](UsersPermissionsRolesPostRequest.md)|  | 

### Return type

[**AuthForgotPasswordPost200Response**](AuthForgotPasswordPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersPermissionsRolesRoleDelete

> AuthForgotPasswordPost200Response usersPermissionsRolesRoleDelete(role)

Delete a role

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsUsersRolesApi();
let role = "role_example"; // String | role Id
apiInstance.usersPermissionsRolesRoleDelete(role, (error, data, response) => {
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
 **role** | **String**| role Id | 

### Return type

[**AuthForgotPasswordPost200Response**](AuthForgotPasswordPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersPermissionsRolesRolePut

> AuthForgotPasswordPost200Response usersPermissionsRolesRolePut(role, usersPermissionsRolesPostRequest)

Update a role

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsUsersRolesApi();
let role = "role_example"; // String | role Id
let usersPermissionsRolesPostRequest = {"name":"foo","description":"role foo","permissions":{"api::content-type.content-type":{"controllers":{"controllerA":{"find":{"enabled":true}}}}}}; // UsersPermissionsRolesPostRequest | 
apiInstance.usersPermissionsRolesRolePut(role, usersPermissionsRolesPostRequest, (error, data, response) => {
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
 **role** | **String**| role Id | 
 **usersPermissionsRolesPostRequest** | [**UsersPermissionsRolesPostRequest**](UsersPermissionsRolesPostRequest.md)|  | 

### Return type

[**AuthForgotPasswordPost200Response**](AuthForgotPasswordPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersPost

> UsersPost201Response usersPost(usersPostRequest)

Create a user

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsUsersRolesApi();
let usersPostRequest = {"username":"foo","email":"foo@strapi.io","password":"foo-password"}; // UsersPostRequest | 
apiInstance.usersPost(usersPostRequest, (error, data, response) => {
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
 **usersPostRequest** | [**UsersPostRequest**](UsersPostRequest.md)|  | 

### Return type

[**UsersPost201Response**](UsersPost201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

