# GetUserWithDemographicsRole

## Example Usage

```typescript
import { GetUserWithDemographicsRole } from "@superbuilders/oneroster/models/operations";

let value: GetUserWithDemographicsRole = {
  roleType: "secondary",
  role: "administrator",
  org: {
    href: "https://primary-morbidity.com/",
    sourcedId: "<id>",
    type: "<value>",
  },
  beginDate: "<value>",
  endDate: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `roleType`                                                                                               | [operations.GetUserWithDemographicsRoleType](../../models/operations/getuserwithdemographicsroletype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `role`                                                                                                   | [operations.GetUserWithDemographicsRoleEnum](../../models/operations/getuserwithdemographicsroleenum.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `org`                                                                                                    | [operations.GetUserWithDemographicsOrg](../../models/operations/getuserwithdemographicsorg.md)           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `userProfile`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `beginDate`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `endDate`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |