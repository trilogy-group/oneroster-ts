# GetClassesForCourseResponse

## Example Usage

```typescript
import { GetClassesForCourseResponse } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForCourseResponse = {
  result: {
    classes: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        title: "<value>",
        classCode: "<value>",
        classType: "scheduled",
        location: "<value>",
        course: {
          href: "https://misguided-rule.info/",
          sourcedId: "<id>",
          type: "<value>",
        },
        school: {
          href: "https://hefty-spork.com",
          sourcedId: "<id>",
          type: "<value>",
        },
        terms: [],
      },
    ],
    totalCount: 5455.8,
    pageCount: 8304.11,
    pageNumber: 4468.44,
    offset: 7166.59,
    limit: 5002.58,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.GetClassesForCourseResponseBody](../../models/operations/getclassesforcourseresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |