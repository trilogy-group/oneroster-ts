# GetAllSchoolsResponseBody

Collection of schools successfully retrieved

## Example Usage

```typescript
import { GetAllSchoolsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllSchoolsResponseBody = {
  orgs: [
    {
      sourcedId: "<id>",
      status: "active",
      name: "<value>",
      type: "department",
      identifier: "<value>",
      children: [
        {
          href: "https://staid-retrospectivity.info",
          sourcedId: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
  totalCount: 132.16,
  pageCount: 1486.03,
  pageNumber: 4204.32,
  offset: 596.33,
  limit: 4749.77,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `orgs`                                                                       | [operations.GetAllSchoolsOrg](../../models/operations/getallschoolsorg.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `totalCount`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `pageCount`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `pageNumber`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `offset`                                                                     | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `limit`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |