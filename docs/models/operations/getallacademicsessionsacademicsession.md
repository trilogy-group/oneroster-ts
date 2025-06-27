# GetAllAcademicSessionsAcademicSession

Represents an academic session.

## Example Usage

```typescript
import { GetAllAcademicSessionsAcademicSession } from "@superbuilders/oneroster/models/operations";

let value: GetAllAcademicSessionsAcademicSession = {
  sourcedId: "<id>",
  status: "tobedeleted",
  title: "<value>",
  startDate: "<value>",
  endDate: "<value>",
  type: "schoolYear",
  schoolYear: 9874.02,
  org: {
    href: "https://silent-commercial.net",
    sourcedId: "<id>",
    type: "course",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [operations.GetAllAcademicSessionsStatus](../../models/operations/getallacademicsessionsstatus.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `dateLastModified`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `metadata`                                                                                         | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `title`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `startDate`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `endDate`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [operations.GetAllAcademicSessionsType](../../models/operations/getallacademicsessionstype.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `parent`                                                                                           | [operations.GetAllAcademicSessionsParent](../../models/operations/getallacademicsessionsparent.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `schoolYear`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `org`                                                                                              | [operations.GetAllAcademicSessionsOrg](../../models/operations/getallacademicsessionsorg.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                |