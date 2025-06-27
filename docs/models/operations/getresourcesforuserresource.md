# GetResourcesForUserResource

Represents a digital resource of some kind.

## Example Usage

```typescript
import { GetResourcesForUserResource } from "@superbuilders/oneroster/models/operations";

let value: GetResourcesForUserResource = {
  sourcedId: "<id>",
  status: "tobedeleted",
  title: "<value>",
  vendorResourceId: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [operations.GetResourcesForUserStatus](../../models/operations/getresourcesforuserstatus.md)         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `dateLastModified`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `title`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `roles`                                                                                              | [operations.GetResourcesForUserRole](../../models/operations/getresourcesforuserrole.md)[]           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `importance`                                                                                         | [operations.GetResourcesForUserImportance](../../models/operations/getresourcesforuserimportance.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `vendorResourceId`                                                                                   | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `vendorId`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `applicationId`                                                                                      | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |