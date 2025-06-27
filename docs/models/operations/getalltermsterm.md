# GetAllTermsTerm

Represents an academic session.

## Example Usage

```typescript
import { GetAllTermsTerm } from "@superbuilders/oneroster/models/operations";

let value: GetAllTermsTerm = {
  sourcedId: "<id>",
  status: "active",
  title: "<value>",
  startDate: "<value>",
  endDate: "<value>",
  type: "semester",
  schoolYear: 2030.81,
  org: {
    href: "https://crowded-sanity.com",
    sourcedId: "<id>",
    type: "student",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [operations.GetAllTermsStatus](../../models/operations/getalltermsstatus.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endDate`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [operations.GetAllTermsType](../../models/operations/getalltermstype.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `parent`                                                                                      | [operations.GetAllTermsParent](../../models/operations/getalltermsparent.md)                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `schoolYear`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `org`                                                                                         | [operations.GetAllTermsOrg](../../models/operations/getalltermsorg.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |