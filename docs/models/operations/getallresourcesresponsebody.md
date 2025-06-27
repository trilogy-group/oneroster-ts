# GetAllResourcesResponseBody

Successful response containing a collection of resources

## Example Usage

```typescript
import { GetAllResourcesResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllResourcesResponseBody = {
  resources: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      title: "<value>",
      vendorResourceId: "<id>",
    },
  ],
  totalCount: 7499.78,
  pageCount: 4595.28,
  pageNumber: 3589.94,
  offset: 1257.24,
  limit: 2873.23,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `resources`                                                                                | [operations.GetAllResourcesResource](../../models/operations/getallresourcesresource.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `totalCount`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `pageCount`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `pageNumber`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `offset`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `limit`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |