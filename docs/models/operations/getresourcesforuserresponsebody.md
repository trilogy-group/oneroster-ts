# GetResourcesForUserResponseBody

Successful response containing a collection of resources for the user

## Example Usage

```typescript
import { GetResourcesForUserResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetResourcesForUserResponseBody = {
  resources: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      title: "<value>",
      vendorResourceId: "<id>",
    },
  ],
  totalCount: 852.44,
  pageCount: 4556.33,
  pageNumber: 3106.24,
  offset: 4765.46,
  limit: 7401.11,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `resources`                                                                                        | [operations.GetResourcesForUserResource](../../models/operations/getresourcesforuserresource.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `totalCount`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `pageCount`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `pageNumber`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `offset`                                                                                           | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `limit`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |