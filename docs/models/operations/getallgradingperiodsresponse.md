# GetAllGradingPeriodsResponse

## Example Usage

```typescript
import { GetAllGradingPeriodsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllGradingPeriodsResponse = {
  result: {
    gradingPeriods: [
      {
        sourcedId: "<id>",
        status: "active",
        title: "<value>",
        startDate: "<value>",
        endDate: "<value>",
        type: "gradingPeriod",
        schoolYear: 5914.59,
        org: {
          href: "https://red-draw.net/",
          sourcedId: "<id>",
          type: "teacher",
        },
      },
    ],
    totalCount: 8517.66,
    pageCount: 9004.29,
    pageNumber: 1825.43,
    offset: 595.74,
    limit: 9071.31,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [operations.GetAllGradingPeriodsResponseBody](../../models/operations/getallgradingperiodsresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |