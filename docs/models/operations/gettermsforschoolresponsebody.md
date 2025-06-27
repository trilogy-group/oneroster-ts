# GetTermsForSchoolResponseBody

Collection of terms successfully retrieved

## Example Usage

```typescript
import { GetTermsForSchoolResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetTermsForSchoolResponseBody = {
  terms: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      startDate: "<value>",
      endDate: "<value>",
      type: "term",
      schoolYear: 9932.39,
      org: {
        href: "https://secondary-crocodile.biz",
        sourcedId: "<id>",
        type: "lineItem",
      },
    },
  ],
  totalCount: 9446.72,
  pageCount: 9625.88,
  pageNumber: 3627.1,
  offset: 1672.48,
  limit: 4635.61,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `terms`                                                                                | [operations.GetTermsForSchoolTerm](../../models/operations/gettermsforschoolterm.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `totalCount`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pageCount`                                                                            | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pageNumber`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `offset`                                                                               | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `limit`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |