# GetAllComponentResourcesResponse

## Example Usage

```typescript
import { GetAllComponentResourcesResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllComponentResourcesResponse = {
  result: {
    componentResources: [
      {
        sourcedId: "<id>",
        status: "active",
        courseComponent: {
          sourcedId: "<id>",
        },
        resource: {
          sourcedId: "<id>",
        },
        title: "<value>",
      },
    ],
    totalCount: 3845.59,
    pageCount: 132.64,
    pageNumber: 5836.4,
    offset: 2165.27,
    limit: 1212.98,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                           | [operations.GetAllComponentResourcesResponseBody](../../models/operations/getallcomponentresourcesresponsebody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |