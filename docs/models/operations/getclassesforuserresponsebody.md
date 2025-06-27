# GetClassesForUserResponseBody

Successful response containing a collection of classes for the user

## Example Usage

```typescript
import { GetClassesForUserResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForUserResponseBody = {
  classes: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      classCode: "<value>",
      classType: "homeroom",
      location: "<value>",
      course: {
        href: "https://yellowish-dredger.biz/",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: null,
      terms: [],
    },
  ],
  totalCount: 1281.61,
  pageCount: 4251.16,
  pageNumber: 2305.55,
  offset: 7241.92,
  limit: 7412.4,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `classes`                                                                                | [operations.GetClassesForUserClass](../../models/operations/getclassesforuserclass.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `totalCount`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pageCount`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pageNumber`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `offset`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `limit`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |