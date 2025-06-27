# GetClassesForTermResponseBody

Successful response containing a collection of classes for the term

## Example Usage

```typescript
import { GetClassesForTermResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForTermResponseBody = {
  classes: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      classCode: "<value>",
      classType: "homeroom",
      location: "<value>",
      course: {
        href: "https://educated-kettledrum.com",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://free-daughter.net/",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [
        {
          href: "https://bitter-allegation.org/",
          sourcedId: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
  totalCount: 2996.07,
  pageCount: 2344.72,
  pageNumber: 6222.34,
  offset: 4519.75,
  limit: 9493.85,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `classes`                                                                                | [operations.GetClassesForTermClass](../../models/operations/getclassesfortermclass.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `totalCount`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pageCount`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pageNumber`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `offset`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `limit`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |