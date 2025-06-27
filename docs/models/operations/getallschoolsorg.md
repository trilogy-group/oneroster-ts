# GetAllSchoolsOrg

Represents an organization.

## Example Usage

```typescript
import { GetAllSchoolsOrg } from "@superbuilders/oneroster/models/operations";

let value: GetAllSchoolsOrg = {
  sourcedId: "<id>",
  status: "active",
  name: "<value>",
  type: "district",
  identifier: "<value>",
  children: [
    {
      href: "https://staid-retrospectivity.info",
      sourcedId: "<id>",
      type: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [operations.GetAllSchoolsStatus](../../models/operations/getallschoolsstatus.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [operations.GetAllSchoolsType](../../models/operations/getallschoolstype.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `identifier`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `parent`                                                                                      | [operations.GetAllSchoolsParent](../../models/operations/getallschoolsparent.md)              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `children`                                                                                    | [operations.GetAllSchoolsChild](../../models/operations/getallschoolschild.md)[]              | :heavy_check_mark:                                                                            | N/A                                                                                           |