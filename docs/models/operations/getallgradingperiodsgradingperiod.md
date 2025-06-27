# GetAllGradingPeriodsGradingPeriod

Represents an academic session.

## Example Usage

```typescript
import { GetAllGradingPeriodsGradingPeriod } from "@superbuilders/oneroster/models/operations";

let value: GetAllGradingPeriodsGradingPeriod = {
  sourcedId: "<id>",
  status: "tobedeleted",
  title: "<value>",
  startDate: "<value>",
  endDate: "<value>",
  type: "semester",
  schoolYear: 918.75,
  org: {
    href: "https://red-draw.net/",
    sourcedId: "<id>",
    type: "teacher",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [operations.GetAllGradingPeriodsStatus](../../models/operations/getallgradingperiodsstatus.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `dateLastModified`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `title`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `startDate`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `endDate`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [operations.GetAllGradingPeriodsType](../../models/operations/getallgradingperiodstype.md)     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `parent`                                                                                       | [operations.GetAllGradingPeriodsParent](../../models/operations/getallgradingperiodsparent.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `schoolYear`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `org`                                                                                          | [operations.GetAllGradingPeriodsOrg](../../models/operations/getallgradingperiodsorg.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |