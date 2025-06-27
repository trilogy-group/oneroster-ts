# GetEnrollmentsForSchoolEnrollment

Represents an enrollment.

## Example Usage

```typescript
import { GetEnrollmentsForSchoolEnrollment } from "@superbuilders/oneroster/models/operations";

let value: GetEnrollmentsForSchoolEnrollment = {
  sourcedId: "<id>",
  status: "active",
  role: "teacher",
  primary: false,
  beginDate: "2024-01-01",
  endDate: "2024-01-01",
  user: {
    href: "https://impure-bracelet.biz/",
    sourcedId: "<id>",
    type: "<value>",
  },
  class: {
    href: "https://foolhardy-digestive.net/",
    sourcedId: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `status`                                                                                             | [operations.GetEnrollmentsForSchoolStatus](../../models/operations/getenrollmentsforschoolstatus.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `dateLastModified`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `metadata`                                                                                           | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `role`                                                                                               | [operations.GetEnrollmentsForSchoolRole](../../models/operations/getenrollmentsforschoolrole.md)     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `primary`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `beginDate`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 2024-01-01                                                                                           |
| `endDate`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 2024-01-01                                                                                           |
| `user`                                                                                               | [operations.GetEnrollmentsForSchoolUser](../../models/operations/getenrollmentsforschooluser.md)     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `class`                                                                                              | [operations.GetEnrollmentsForSchoolClass](../../models/operations/getenrollmentsforschoolclass.md)   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |