# GetTermsForSchoolResponse

## Example Usage

```typescript
import { GetTermsForSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetTermsForSchoolResponse = {
  result: {
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
    totalCount: 6831.22,
    pageCount: 4913.78,
    pageNumber: 2775.4,
    offset: 3254.97,
    limit: 565.44,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `result`                                                                                             | [operations.GetTermsForSchoolResponseBody](../../models/operations/gettermsforschoolresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |