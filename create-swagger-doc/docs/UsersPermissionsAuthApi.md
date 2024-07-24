# Documentation.UsersPermissionsAuthApi

All URIs are relative to *http://localhost:1337/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authChangePasswordPost**](UsersPermissionsAuthApi.md#authChangePasswordPost) | **POST** /auth/change-password | Update user&#39;s own password
[**authEmailConfirmationGet**](UsersPermissionsAuthApi.md#authEmailConfirmationGet) | **GET** /auth/email-confirmation | Confirm user email
[**authForgotPasswordPost**](UsersPermissionsAuthApi.md#authForgotPasswordPost) | **POST** /auth/forgot-password | Send rest password email
[**authLocalPost**](UsersPermissionsAuthApi.md#authLocalPost) | **POST** /auth/local | Local login
[**authLocalRegisterPost**](UsersPermissionsAuthApi.md#authLocalRegisterPost) | **POST** /auth/local/register | Register a user
[**authProviderCallbackGet**](UsersPermissionsAuthApi.md#authProviderCallbackGet) | **GET** /auth/{provider}/callback | Default Callback from provider auth
[**authResetPasswordPost**](UsersPermissionsAuthApi.md#authResetPasswordPost) | **POST** /auth/reset-password | Rest user password
[**authSendEmailConfirmationPost**](UsersPermissionsAuthApi.md#authSendEmailConfirmationPost) | **POST** /auth/send-email-confirmation | Send confirmation email
[**connectProviderGet**](UsersPermissionsAuthApi.md#connectProviderGet) | **GET** /connect/{provider} | Login with a provider



## authChangePasswordPost

> UsersPermissionsUserRegistration authChangePasswordPost(authChangePasswordPostRequest)

Update user&#39;s own password

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsAuthApi();
let authChangePasswordPostRequest = new Documentation.AuthChangePasswordPostRequest(); // AuthChangePasswordPostRequest | 
apiInstance.authChangePasswordPost(authChangePasswordPostRequest, (error, data, response) => {
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
 **authChangePasswordPostRequest** | [**AuthChangePasswordPostRequest**](AuthChangePasswordPostRequest.md)|  | 

### Return type

[**UsersPermissionsUserRegistration**](UsersPermissionsUserRegistration.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authEmailConfirmationGet

> Error authEmailConfirmationGet(opts)

Confirm user email

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsAuthApi();
let opts = {
  'confirmation': "confirmation_example" // String | confirmation token received by email
};
apiInstance.authEmailConfirmationGet(opts, (error, data, response) => {
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
 **confirmation** | **String**| confirmation token received by email | [optional] 

### Return type

[**Error**](Error.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authForgotPasswordPost

> AuthForgotPasswordPost200Response authForgotPasswordPost(authForgotPasswordPostRequest)

Send rest password email

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsAuthApi();
let authForgotPasswordPostRequest = {"email":"foo.bar@strapi.io"}; // AuthForgotPasswordPostRequest | 
apiInstance.authForgotPasswordPost(authForgotPasswordPostRequest, (error, data, response) => {
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
 **authForgotPasswordPostRequest** | [**AuthForgotPasswordPostRequest**](AuthForgotPasswordPostRequest.md)|  | 

### Return type

[**AuthForgotPasswordPost200Response**](AuthForgotPasswordPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authLocalPost

> UsersPermissionsUserRegistration authLocalPost(authLocalPostRequest)

Local login

Returns a jwt token and user info

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsAuthApi();
let authLocalPostRequest = {"identifier":"foobar","password":"Test1234"}; // AuthLocalPostRequest | 
apiInstance.authLocalPost(authLocalPostRequest, (error, data, response) => {
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
 **authLocalPostRequest** | [**AuthLocalPostRequest**](AuthLocalPostRequest.md)|  | 

### Return type

[**UsersPermissionsUserRegistration**](UsersPermissionsUserRegistration.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authLocalRegisterPost

> UsersPermissionsUserRegistration authLocalRegisterPost(authLocalRegisterPostRequest)

Register a user

Returns a jwt token and user info

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsAuthApi();
let authLocalRegisterPostRequest = {"username":"foobar","email":"foo.bar@strapi.io","password":"Test1234"}; // AuthLocalRegisterPostRequest | 
apiInstance.authLocalRegisterPost(authLocalRegisterPostRequest, (error, data, response) => {
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
 **authLocalRegisterPostRequest** | [**AuthLocalRegisterPostRequest**](AuthLocalRegisterPostRequest.md)|  | 

### Return type

[**UsersPermissionsUserRegistration**](UsersPermissionsUserRegistration.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authProviderCallbackGet

> UsersPermissionsUserRegistration authProviderCallbackGet(provider)

Default Callback from provider auth

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsAuthApi();
let provider = "provider_example"; // String | Provider name
apiInstance.authProviderCallbackGet(provider, (error, data, response) => {
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
 **provider** | **String**| Provider name | 

### Return type

[**UsersPermissionsUserRegistration**](UsersPermissionsUserRegistration.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authResetPasswordPost

> UsersPermissionsUserRegistration authResetPasswordPost(authResetPasswordPostRequest)

Rest user password

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsAuthApi();
let authResetPasswordPostRequest = {"password":"Test1234","passwordConfirmation":"Test1234","code":"zertyoaizndoianzodianzdonaizdoinaozdnia"}; // AuthResetPasswordPostRequest | 
apiInstance.authResetPasswordPost(authResetPasswordPostRequest, (error, data, response) => {
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
 **authResetPasswordPostRequest** | [**AuthResetPasswordPostRequest**](AuthResetPasswordPostRequest.md)|  | 

### Return type

[**UsersPermissionsUserRegistration**](UsersPermissionsUserRegistration.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authSendEmailConfirmationPost

> AuthSendEmailConfirmationPost200Response authSendEmailConfirmationPost(authForgotPasswordPostRequest)

Send confirmation email

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsAuthApi();
let authForgotPasswordPostRequest = new Documentation.AuthForgotPasswordPostRequest(); // AuthForgotPasswordPostRequest | 
apiInstance.authSendEmailConfirmationPost(authForgotPasswordPostRequest, (error, data, response) => {
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
 **authForgotPasswordPostRequest** | [**AuthForgotPasswordPostRequest**](AuthForgotPasswordPostRequest.md)|  | 

### Return type

[**AuthSendEmailConfirmationPost200Response**](AuthSendEmailConfirmationPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## connectProviderGet

> Error connectProviderGet(provider)

Login with a provider

Redirects to provider login before being redirect to /auth/{provider}/callback

### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.UsersPermissionsAuthApi();
let provider = "provider_example"; // String | Provider name
apiInstance.connectProviderGet(provider, (error, data, response) => {
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
 **provider** | **String**| Provider name | 

### Return type

[**Error**](Error.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

