# GetAllGradingPeriodsResponseBody

Success

## Example Usage

```typescript
import { GetAllGradingPeriodsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllGradingPeriodsResponseBody = {
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
  totalCount: 77.23,
  pageCount: 9407.1,
  pageNumber: 3452.94,
  offset: 6269.52,
  limit: 1363.06,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `gradingPeriods`                                                                                               | [operations.GetAllGradingPeriodsGradingPeriod](../../models/operations/getallgradingperiodsgradingperiod.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `totalCount`                                                                                                   | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `pageCount`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `pageNumber`                                                                                                   | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `offset`                                                                                                       | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `limit`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |