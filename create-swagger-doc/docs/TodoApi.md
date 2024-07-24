# Documentation.TodoApi

All URIs are relative to *http://localhost:1337/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTodosId**](TodoApi.md#deleteTodosId) | **DELETE** /todos/{id} | 
[**getTodos**](TodoApi.md#getTodos) | **GET** /todos | 
[**getTodosId**](TodoApi.md#getTodosId) | **GET** /todos/{id} | 
[**postTodos**](TodoApi.md#postTodos) | **POST** /todos | 
[**putTodosId**](TodoApi.md#putTodosId) | **PUT** /todos/{id} | 



## deleteTodosId

> Number deleteTodosId(id)



### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.TodoApi();
let id = 3.4; // Number | 
apiInstance.deleteTodosId(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

**Number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTodos

> TodoListResponse getTodos(opts)



### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.TodoApi();
let opts = {
  'sort': "sort_example", // String | Sort by attributes ascending (asc) or descending (desc)
  'paginationWithCount': true, // Boolean | Return page/pageSize (default: true)
  'paginationPage': 56, // Number | Page number (default: 0)
  'paginationPageSize': 56, // Number | Page size (default: 25)
  'paginationStart': 56, // Number | Offset value (default: 0)
  'paginationLimit': 56, // Number | Number of entities to return (default: 25)
  'fields': "fields_example", // String | Fields to return (ex: title,author)
  'populate': "populate_example", // String | Relations to return
  'filters': {key: null}, // {String: Object} | Filters to apply
  'locale': "locale_example" // String | Locale to apply
};
apiInstance.getTodos(opts, (error, data, response) => {
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
 **sort** | **String**| Sort by attributes ascending (asc) or descending (desc) | [optional] 
 **paginationWithCount** | **Boolean**| Return page/pageSize (default: true) | [optional] 
 **paginationPage** | **Number**| Page number (default: 0) | [optional] 
 **paginationPageSize** | **Number**| Page size (default: 25) | [optional] 
 **paginationStart** | **Number**| Offset value (default: 0) | [optional] 
 **paginationLimit** | **Number**| Number of entities to return (default: 25) | [optional] 
 **fields** | **String**| Fields to return (ex: title,author) | [optional] 
 **populate** | **String**| Relations to return | [optional] 
 **filters** | [**{String: Object}**](Object.md)| Filters to apply | [optional] 
 **locale** | **String**| Locale to apply | [optional] 

### Return type

[**TodoListResponse**](TodoListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTodosId

> TodoResponse getTodosId(id)



### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.TodoApi();
let id = 3.4; // Number | 
apiInstance.getTodosId(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

[**TodoResponse**](TodoResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postTodos

> TodoResponse postTodos(todoRequest)



### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.TodoApi();
let todoRequest = new Documentation.TodoRequest(); // TodoRequest | 
apiInstance.postTodos(todoRequest, (error, data, response) => {
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
 **todoRequest** | [**TodoRequest**](TodoRequest.md)|  | 

### Return type

[**TodoResponse**](TodoResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putTodosId

> TodoResponse putTodosId(id, todoRequest)



### Example

```javascript
import Documentation from 'documentation';
let defaultClient = Documentation.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Documentation.TodoApi();
let id = 3.4; // Number | 
let todoRequest = new Documentation.TodoRequest(); // TodoRequest | 
apiInstance.putTodosId(id, todoRequest, (error, data, response) => {
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
 **id** | **Number**|  | 
 **todoRequest** | [**TodoRequest**](TodoRequest.md)|  | 

### Return type

[**TodoResponse**](TodoResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

