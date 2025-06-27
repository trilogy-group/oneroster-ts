# GetClassesForTermClass

Represents a class.

## Example Usage

```typescript
import { GetClassesForTermClass } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForTermClass = {
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
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [operations.GetClassesForTermStatus](../../models/operations/getclassesfortermstatus.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `dateLastModified`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `title`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `classCode`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `classType`                                                                                    | [operations.GetClassesForTermClassType](../../models/operations/getclassesfortermclasstype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `location`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `grades`                                                                                       | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `subjects`                                                                                     | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `course`                                                                                       | [operations.GetClassesForTermCourse](../../models/operations/getclassesfortermcourse.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `school`                                                                                       | [operations.GetClassesForTermSchool](../../models/operations/getclassesfortermschool.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `terms`                                                                                        | [operations.GetClassesForTermTerm](../../models/operations/getclassesfortermterm.md)[]         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `subjectCodes`                                                                                 | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `periods`                                                                                      | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `resources`                                                                                    | [operations.GetClassesForTermResource](../../models/operations/getclassesfortermresource.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |