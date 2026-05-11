# GetClassesForTeacherResponse

## Example Usage

```typescript
import { GetClassesForTeacherResponse } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForTeacherResponse = {
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
          href: "https://bowed-sonnet.info/",
          sourcedId: "<id>",
          type: "<value>",
        },
        school: {
          href: "https://sweet-king.com/",
          sourcedId: "<id>",
          type: "<value>",
        },
        terms: [
          {
            href: "https://scornful-elver.com",
            sourcedId: "<id>",
            type: "<value>",
          },
        ],
      },
    ],
    totalCount: 3353.83,
    pageCount: 8700.34,
    pageNumber: 3516.82,
    offset: 4931.49,
    limit: 8890.72,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [operations.GetClassesForTeacherResponseBody](../../models/operations/getclassesforteacherresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |