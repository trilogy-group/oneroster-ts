# GetAllTermsResponseBody

Successful response containing a collection of terms

## Example Usage

```typescript
import { GetAllTermsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllTermsResponseBody = {
  terms: [
    {
      sourcedId: "<id>",
      status: "tobedeleted",
      title: "<value>",
      startDate: "<value>",
      endDate: "<value>",
      type: "schoolYear",
      schoolYear: 1784.96,
      org: {
        href: "https://crowded-sanity.com",
        sourcedId: "<id>",
        type: "student",
      },
    },
  ],
  totalCount: 2079.98,
  pageCount: 930.57,
  pageNumber: 3677.24,
  offset: 9384.34,
  limit: 4900.33,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `terms`                                                                    | [operations.GetAllTermsTerm](../../models/operations/getalltermsterm.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalCount`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageCount`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `pageNumber`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `offset`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |