# GetAllTermsResponse

## Example Usage

```typescript
import { GetAllTermsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllTermsResponse = {
  result: {
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
    totalCount: 32.53,
    pageCount: 6564.25,
    pageNumber: 4766.6,
    offset: 7211.05,
    limit: 695.42,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [operations.GetAllTermsResponseBody](../../models/operations/getalltermsresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |