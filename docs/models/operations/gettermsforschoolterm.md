# GetTermsForSchoolTerm

Represents an academic session.

## Example Usage

```typescript
import { GetTermsForSchoolTerm } from "@superbuilders/oneroster/models/operations";

let value: GetTermsForSchoolTerm = {
  sourcedId: "<id>",
  status: "tobedeleted",
  title: "<value>",
  startDate: "<value>",
  endDate: "<value>",
  type: "schoolYear",
  schoolYear: 2685.03,
  org: {
    href: "https://secondary-crocodile.biz",
    sourcedId: "<id>",
    type: "lineItem",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [operations.GetTermsForSchoolStatus](../../models/operations/gettermsforschoolstatus.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endDate`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [operations.GetTermsForSchoolType](../../models/operations/gettermsforschooltype.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `parent`                                                                                      | [operations.GetTermsForSchoolParent](../../models/operations/gettermsforschoolparent.md)      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `schoolYear`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `org`                                                                                         | [operations.GetTermsForSchoolOrg](../../models/operations/gettermsforschoolorg.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |