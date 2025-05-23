/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { classesManagementAddStudentToClass } from "../funcs/classesManagementAddStudentToClass.js";
import { classesManagementAddTeacherToClass } from "../funcs/classesManagementAddTeacherToClass.js";
import { classesManagementCreateClass } from "../funcs/classesManagementCreateClass.js";
import { classesManagementDeleteClass } from "../funcs/classesManagementDeleteClass.js";
import { classesManagementGetAllClasses } from "../funcs/classesManagementGetAllClasses.js";
import { classesManagementGetCategoriesForClass } from "../funcs/classesManagementGetCategoriesForClass.js";
import { classesManagementGetClass } from "../funcs/classesManagementGetClass.js";
import { classesManagementGetClassesForSchool } from "../funcs/classesManagementGetClassesForSchool.js";
import { classesManagementGetClassesForStudent } from "../funcs/classesManagementGetClassesForStudent.js";
import { classesManagementGetClassesForTeacher } from "../funcs/classesManagementGetClassesForTeacher.js";
import { classesManagementGetClassesForTerm } from "../funcs/classesManagementGetClassesForTerm.js";
import { classesManagementGetClassesForUser } from "../funcs/classesManagementGetClassesForUser.js";
import { classesManagementGetLineItemsForClass } from "../funcs/classesManagementGetLineItemsForClass.js";
import { classesManagementGetResultsForClass } from "../funcs/classesManagementGetResultsForClass.js";
import { classesManagementGetResultsForLineItemForClass } from "../funcs/classesManagementGetResultsForLineItemForClass.js";
import { classesManagementGetResultsForStudentForClass } from "../funcs/classesManagementGetResultsForStudentForClass.js";
import { classesManagementGetScoreScalesForClass } from "../funcs/classesManagementGetScoreScalesForClass.js";
import { classesManagementGetStudentsForClass } from "../funcs/classesManagementGetStudentsForClass.js";
import { classesManagementGetTeachersForClass } from "../funcs/classesManagementGetTeachersForClass.js";
import { classesManagementPostResultsForAcademicSessionForClass } from "../funcs/classesManagementPostResultsForAcademicSessionForClass.js";
import { classesManagementUpdateClass } from "../funcs/classesManagementUpdateClass.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class ClassesManagement extends ClientSDK {
  /**
   * Create Results for an Academic Session for a Class
   *
   * @remarks
   * To create a set of results for a specific academic session and specific class. The responding system must return the set of sourcedIds that have been allocated to the newly created result records. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class or academic session not found.'
   */
  async postResultsForAcademicSessionForClass(
    request: operations.PostResultsForAcademicSessionForClassRequest,
    options?: RequestOptions,
  ): Promise<operations.PostResultsForAcademicSessionForClassResponse> {
    return unwrapAsync(classesManagementPostResultsForAcademicSessionForClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Results for a Line Item for a Class
   *
   * @remarks
   * Get the set of results on the service provider for a specific lineItem and for a specific class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class or line item not found.'
   */
  async getResultsForLineItemForClass(
    request: operations.GetResultsForLineItemForClassRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.GetResultsForLineItemForClassResponse,
      { offset: number }
    >
  > {
    return unwrapResultIterator(classesManagementGetResultsForLineItemForClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Results for a Student for a Class
   *
   * @remarks
   * Get the set of results on the service provider for a specific student and for a specific class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class or student not found.'
   */
  async getResultsForStudentForClass(
    request: operations.GetResultsForStudentForClassRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.GetResultsForStudentForClassResponse,
      { offset: number }
    >
  > {
    return unwrapResultIterator(classesManagementGetResultsForStudentForClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Categories for a Class
   *
   * @remarks
   * Get the set of categories on the service provider for a specific class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'
   */
  async getCategoriesForClass(
    request: operations.GetCategoriesForClassRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetCategoriesForClassResponse, { offset: number }>
  > {
    return unwrapResultIterator(classesManagementGetCategoriesForClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Line Items for a Class
   *
   * @remarks
   * Get the set of lineItems on the service provider for a specific class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'
   */
  async getLineItemsForClass(
    request: operations.GetLineItemsForClassRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetLineItemsForClassResponse, { offset: number }>
  > {
    return unwrapResultIterator(classesManagementGetLineItemsForClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Results for a Class
   *
   * @remarks
   * Get the set of results on the service provider for a specific class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'
   */
  async getResultsForClass(
    request: operations.GetResultsForClassRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetResultsForClassResponse, { offset: number }>
  > {
    return unwrapResultIterator(classesManagementGetResultsForClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Score Scales for a Class
   *
   * @remarks
   * Get the set of scoreScales on the service provider for a specific class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'
   */
  async getScoreScalesForClass(
    request: operations.GetScoreScalesForClassRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetScoreScalesForClassResponse, { offset: number }>
  > {
    return unwrapResultIterator(classesManagementGetScoreScalesForClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all Classes
   *
   * @remarks
   * To get all Classes on the service provider.
   */
  async getAllClasses(
    request: operations.GetAllClassesRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetAllClassesResponse, { offset: number }>
  > {
    return unwrapResultIterator(classesManagementGetAllClasses(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a new Class
   *
   * @remarks
   * To create a new Class. The responding system must return the set of sourcedIds that have been allocated to the newly created class record.
   */
  async createClass(
    request?: operations.CreateClassRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateClassResponse> {
    return unwrapAsync(classesManagementCreateClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a specific class
   *
   * @remarks
   * Get a specific Class on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'
   */
  async getClass(
    request: operations.GetClassRequest,
    options?: RequestOptions,
  ): Promise<operations.GetClassResponse> {
    return unwrapAsync(classesManagementGetClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a Class
   *
   * @remarks
   * To update an existing Class. The sourcedId for the record to be updated is supplied by the requesting system.
   */
  async updateClass(
    request: operations.UpdateClassRequest,
    options?: RequestOptions,
  ): Promise<components.Class> {
    return unwrapAsync(classesManagementUpdateClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a Class
   *
   * @remarks
   * Perform a soft delete on a specific Class on the service provider. This operation changes the status of the Class to 'tobedeleted'.
   */
  async deleteClass(
    request: operations.DeleteClassRequest,
    options?: RequestOptions,
  ): Promise<{ [k: string]: any }> {
    return unwrapAsync(classesManagementDeleteClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all Classes for a School
   *
   * @remarks
   * To get all Classes for a School on the service provider. If the specified school cannot be identified within the service provider, the api will return a 404 error code and message 'School not found.'
   */
  async getClassesForSchool(
    request: operations.GetClassesForSchoolRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetClassesForSchoolResponse, { offset: number }>
  > {
    return unwrapResultIterator(classesManagementGetClassesForSchool(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Classes for a User
   *
   * @remarks
   * To get the set of Classes a User is enrolled in.
   */
  async getClassesForUser(
    request: operations.GetClassesForUserRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetClassesForUserResponse, { offset: number }>
  > {
    return unwrapResultIterator(classesManagementGetClassesForUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Classes for a Term
   *
   * @remarks
   * To get the set of Classes related to a specific Term. If the specified term cannot be identified within the service provider, the api will return a 404 error code and message 'Term not found.'
   */
  async getClassesForTerm(
    request: operations.GetClassesForTermRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetClassesForTermResponse, { offset: number }>
  > {
    return unwrapResultIterator(classesManagementGetClassesForTerm(
      this,
      request,
      options,
    ));
  }

  /**
   * Get teachers for a Class
   *
   * @remarks
   * To get all teachers assigned to a specific Class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'
   */
  async getTeachersForClass(
    request: operations.GetTeachersForClassRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetTeachersForClassResponse, { offset: number }>
  > {
    return unwrapResultIterator(classesManagementGetTeachersForClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a teacher to a Class
   *
   * @remarks
   * Enrolls a teacher to a specific Class. The responding system must return the set of sourcedIds that have been allocated to the newly created enrollment record.
   */
  async addTeacherToClass(
    request: operations.AddTeacherToClassRequest,
    options?: RequestOptions,
  ): Promise<operations.AddTeacherToClassResponse> {
    return unwrapAsync(classesManagementAddTeacherToClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Classes for a Teacher
   *
   * @remarks
   * To get the set of Classes a Teacher is enrolled in. If the specified teacher cannot be identified within the service provider, the api will return a 404 error code and message 'Teacher not found.'
   */
  async getClassesForTeacher(
    request: operations.GetClassesForTeacherRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetClassesForTeacherResponse, { offset: number }>
  > {
    return unwrapResultIterator(classesManagementGetClassesForTeacher(
      this,
      request,
      options,
    ));
  }

  /**
   * Get students for a Class
   *
   * @remarks
   * To get all students enrolled in a specific Class. If the corresponding record cannot be located, the api will return a 404 error code and message 'Class not found.'
   */
  async getStudentsForClass(
    request: operations.GetStudentsForClassRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetStudentsForClassResponse, { offset: number }>
  > {
    return unwrapResultIterator(classesManagementGetStudentsForClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a student to a Class
   *
   * @remarks
   * Enrolls a student in a specific Class. The responding system must return the set of sourcedIds that have been allocated to the newly created enrollment record.
   */
  async addStudentToClass(
    request: operations.AddStudentToClassRequest,
    options?: RequestOptions,
  ): Promise<operations.AddStudentToClassResponse> {
    return unwrapAsync(classesManagementAddStudentToClass(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Classes for a Student
   *
   * @remarks
   * To get the set of Classes related to a specific Student. If the specified student cannot be identified within the service provider, the api will return a 404 error code and message 'Student not found.'
   */
  async getClassesForStudent(
    request: operations.GetClassesForStudentRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetClassesForStudentResponse, { offset: number }>
  > {
    return unwrapResultIterator(classesManagementGetClassesForStudent(
      this,
      request,
      options,
    ));
  }
}
