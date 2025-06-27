# GetEnrollmentsForClassInSchoolEnrollment

Represents an enrollment.

## Example Usage

```typescript
import { GetEnrollmentsForClassInSchoolEnrollment } from "@superbuilders/oneroster/models/operations";

let value: GetEnrollmentsForClassInSchoolEnrollment = {
  sourcedId: "<id>",
  status: "tobedeleted",
  role: "student",
  primary: false,
  beginDate: "2024-01-01",
  endDate: "2024-01-01",
  user: {
    href: "https://short-giant.net",
    sourcedId: "<id>",
    type: "<value>",
  },
  class: {
    href: "https://sneaky-comestible.net/",
    sourcedId: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `sourcedId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `status`                                                                                                           | [operations.GetEnrollmentsForClassInSchoolStatus](../../models/operations/getenrollmentsforclassinschoolstatus.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `dateLastModified`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `metadata`                                                                                                         | Record<string, *any*>                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `role`                                                                                                             | [operations.GetEnrollmentsForClassInSchoolRole](../../models/operations/getenrollmentsforclassinschoolrole.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `primary`                                                                                                          | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `beginDate`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | 2024-01-01                                                                                                         |
| `endDate`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | 2024-01-01                                                                                                         |
| `user`                                                                                                             | [operations.GetEnrollmentsForClassInSchoolUser](../../models/operations/getenrollmentsforclassinschooluser.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `class`                                                                                                            | [operations.GetEnrollmentsForClassInSchoolClass](../../models/operations/getenrollmentsforclassinschoolclass.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |