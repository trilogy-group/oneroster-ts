# GetAllCategoriesResponse

## Example Usage

```typescript
import { GetAllCategoriesResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllCategoriesResponse = {
  result: {
    categories: [
      {
        status: "tobedeleted",
        title: "<value>",
      },
    ],
    totalCount: 2052.29,
    pageCount: 9695.55,
    pageNumber: 2350.42,
    offset: 4685.79,
    limit: 64.68,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [operations.GetAllCategoriesResponseBody](../../models/operations/getallcategoriesresponsebody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |