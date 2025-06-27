# GetClassesForCourseClass

Represents a class.

## Example Usage

```typescript
import { GetClassesForCourseClass } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForCourseClass = {
  sourcedId: "<id>",
  status: "active",
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
  terms: [
    {
      href: "https://nimble-pocket-watch.info/",
      sourcedId: "<id>",
      type: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [operations.GetClassesForCourseStatus](../../models/operations/getclassesforcoursestatus.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `dateLastModified`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `metadata`                                                                                         | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `title`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `classCode`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `classType`                                                                                        | [operations.GetClassesForCourseClassType](../../models/operations/getclassesforcourseclasstype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `location`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `grades`                                                                                           | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `subjects`                                                                                         | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `course`                                                                                           | [operations.GetClassesForCourseCourse](../../models/operations/getclassesforcoursecourse.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `school`                                                                                           | [operations.GetClassesForCourseSchool](../../models/operations/getclassesforcourseschool.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `terms`                                                                                            | [operations.GetClassesForCourseTerm](../../models/operations/getclassesforcourseterm.md)[]         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `subjectCodes`                                                                                     | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `periods`                                                                                          | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `resources`                                                                                        | [operations.GetClassesForCourseResource](../../models/operations/getclassesforcourseresource.md)[] | :heavy_minus_sign:                                                                                 | N/A                                                                                                |