# GetAllOrgsOrg

Represents an organization.

## Example Usage

```typescript
import { GetAllOrgsOrg } from "@superbuilders/oneroster/models/operations";

let value: GetAllOrgsOrg = {
  sourcedId: "<id>",
  status: "active",
  name: "<value>",
  type: "state",
  identifier: "<value>",
  children: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [operations.GetAllOrgsStatus](../../models/operations/getallorgsstatus.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [operations.GetAllOrgsType](../../models/operations/getallorgstype.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `identifier`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `parent`                                                                                      | [operations.GetAllOrgsParent](../../models/operations/getallorgsparent.md)                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `children`                                                                                    | [operations.GetAllOrgsChild](../../models/operations/getallorgschild.md)[]                    | :heavy_check_mark:                                                                            | N/A                                                                                           |