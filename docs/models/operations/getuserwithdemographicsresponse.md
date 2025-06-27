# GetUserWithDemographicsResponse

Successful response with the user with demographics

## Example Usage

```typescript
import { GetUserWithDemographicsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetUserWithDemographicsResponse = {
  user: {
    sourcedId: "<id>",
    status: "active",
    enabledUser: true,
    givenName: "<value>",
    familyName: "<value>",
    roles: [
      {
        roleType: "primary",
        role: "teacher",
        org: {
          href: "https://primary-morbidity.com/",
          sourcedId: "<id>",
          type: "<value>",
        },
        beginDate: "<value>",
        endDate: "<value>",
      },
    ],
    agents: [
      {
        href: "https://rural-mantua.net/",
        sourcedId: "<id>",
        type: "courseComponent",
      },
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `user`                                                                                           | [operations.GetUserWithDemographicsUser](../../models/operations/getuserwithdemographicsuser.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |