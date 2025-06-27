# GetGradingPeriodsForTermGradingPeriod

Represents an academic session.

## Example Usage

```typescript
import { GetGradingPeriodsForTermGradingPeriod } from "@superbuilders/oneroster/models/operations";

let value: GetGradingPeriodsForTermGradingPeriod = {
  sourcedId: "<id>",
  status: "active",
  title: "<value>",
  startDate: "<value>",
  endDate: "<value>",
  type: "semester",
  schoolYear: 543.42,
  org: {
    href: "https://our-fellow.info",
    sourcedId: "<id>",
    type: "term",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `sourcedId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `status`                                                                                               | [operations.GetGradingPeriodsForTermStatus](../../models/operations/getgradingperiodsfortermstatus.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `dateLastModified`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | Record<string, *any*>                                                                                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `title`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `startDate`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `endDate`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.GetGradingPeriodsForTermType](../../models/operations/getgradingperiodsfortermtype.md)     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `parent`                                                                                               | [operations.GetGradingPeriodsForTermParent](../../models/operations/getgradingperiodsfortermparent.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `schoolYear`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `org`                                                                                                  | [operations.GetGradingPeriodsForTermOrg](../../models/operations/getgradingperiodsfortermorg.md)       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |