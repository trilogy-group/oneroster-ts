# UpdateGradingPeriodAcademicSession

## Example Usage

```typescript
import { UpdateGradingPeriodAcademicSession } from "@superbuilders/oneroster/models/operations";

let value: UpdateGradingPeriodAcademicSession = {
  sourcedId: "<id>",
  status: "active",
  title: "<value>",
  startDate: "<value>",
  endDate: "<value>",
  schoolYear: "<value>",
  org: {
    sourcedId: "<id>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [operations.UpdateGradingPeriodStatus](../../models/operations/updategradingperiodstatus.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endDate`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `parent`                                                                                      | [operations.UpdateGradingPeriodParent](../../models/operations/updategradingperiodparent.md)  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `schoolYear`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `org`                                                                                         | [operations.UpdateGradingPeriodOrg](../../models/operations/updategradingperiodorg.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |