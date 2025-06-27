# GetClassesForSchoolClass

Represents a class.

## Example Usage

```typescript
import { GetClassesForSchoolClass } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForSchoolClass = {
  sourcedId: "<id>",
  status: "tobedeleted",
  title: "<value>",
  classCode: null,
  classType: "homeroom",
  location: "<value>",
  course: null,
  school: {
    href: "https://pale-forgery.org/",
    sourcedId: "<id>",
    type: "<value>",
  },
  terms: [],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [operations.GetClassesForSchoolStatus](../../models/operations/getclassesforschoolstatus.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `dateLastModified`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `metadata`                                                                                         | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `title`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `classCode`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `classType`                                                                                        | [operations.GetClassesForSchoolClassType](../../models/operations/getclassesforschoolclasstype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `location`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `grades`                                                                                           | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `subjects`                                                                                         | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `course`                                                                                           | [operations.GetClassesForSchoolCourse](../../models/operations/getclassesforschoolcourse.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `school`                                                                                           | [operations.GetClassesForSchoolSchool](../../models/operations/getclassesforschoolschool.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `terms`                                                                                            | [operations.GetClassesForSchoolTerm](../../models/operations/getclassesforschoolterm.md)[]         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `subjectCodes`                                                                                     | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `periods`                                                                                          | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `resources`                                                                                        | [operations.GetClassesForSchoolResource](../../models/operations/getclassesforschoolresource.md)[] | :heavy_minus_sign:                                                                                 | N/A                                                                                                |