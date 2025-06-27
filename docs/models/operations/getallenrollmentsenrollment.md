# GetAllEnrollmentsEnrollment

Represents an enrollment.

## Example Usage

```typescript
import { GetAllEnrollmentsEnrollment } from "@superbuilders/oneroster/models/operations";

let value: GetAllEnrollmentsEnrollment = {
  sourcedId: "<id>",
  status: "active",
  role: "administrator",
  primary: true,
  beginDate: "2024-01-01",
  endDate: "2024-01-01",
  user: {
    href: "https://red-flu.net",
    sourcedId: "<id>",
    type: "<value>",
  },
  class: {
    href: "https://neighboring-granny.name/",
    sourcedId: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [operations.GetAllEnrollmentsStatus](../../models/operations/getallenrollmentsstatus.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `role`                                                                                        | [operations.GetAllEnrollmentsRole](../../models/operations/getallenrollmentsrole.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `primary`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `beginDate`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 2024-01-01                                                                                    |
| `endDate`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 2024-01-01                                                                                    |
| `user`                                                                                        | [operations.GetAllEnrollmentsUser](../../models/operations/getallenrollmentsuser.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `class`                                                                                       | [operations.GetAllEnrollmentsClass](../../models/operations/getallenrollmentsclass.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |