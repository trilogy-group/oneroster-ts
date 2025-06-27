# PutAcademicSessionAcademicSession

## Example Usage

```typescript
import { PutAcademicSessionAcademicSession } from "@superbuilders/oneroster/models/operations";

let value: PutAcademicSessionAcademicSession = {
  sourcedId: "<id>",
  status: "tobedeleted",
  title: "<value>",
  startDate: "<value>",
  endDate: "<value>",
  type: "schoolYear",
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
| `status`                                                                                      | [operations.PutAcademicSessionStatus](../../models/operations/putacademicsessionstatus.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endDate`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [operations.PutAcademicSessionType](../../models/operations/putacademicsessiontype.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `parent`                                                                                      | [operations.PutAcademicSessionParent](../../models/operations/putacademicsessionparent.md)    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `schoolYear`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `org`                                                                                         | [operations.PutAcademicSessionOrg](../../models/operations/putacademicsessionorg.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |