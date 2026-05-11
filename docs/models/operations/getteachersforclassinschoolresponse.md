# GetTeachersForClassInSchoolResponse

## Example Usage

```typescript
import { GetTeachersForClassInSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetTeachersForClassInSchoolResponse = {
  result: {
    users: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        enabledUser: true,
        givenName: "<value>",
        familyName: "<value>",
        roles: [
          {
            roleType: "secondary",
            role: "administrator",
            org: {
              href: "https://timely-underneath.com",
              sourcedId: "<id>",
              type: "<value>",
            },
            beginDate: "<value>",
            endDate: "<value>",
          },
        ],
        agents: [
          {
            href: "https://everlasting-hope.info/",
            sourcedId: "<id>",
            type: "term",
          },
        ],
      },
    ],
    totalCount: 9650.3,
    pageCount: 6383.1,
    pageNumber: 9236.53,
    offset: 2955.05,
    limit: 6749.43,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                 | [operations.GetTeachersForClassInSchoolResponseBody](../../models/operations/getteachersforclassinschoolresponsebody.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |