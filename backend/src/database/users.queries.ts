/** Types generated for queries found in "backend/src/database/users.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'QueryAllUsers' parameters type */
export type IQueryAllUsersParams = void;

/** 'QueryAllUsers' return type */
export interface IQueryAllUsersResult {
  id: number;
  name: string;
  email: string;
}

/** 'QueryAllUsers' query type */
export interface IQueryAllUsersQuery {
  params: IQueryAllUsersParams;
  result: IQueryAllUsersResult;
}

const queryAllUsersIR: any = {"name":"QueryAllUsers","params":[],"usedParamSet":{},"statement":{"body":"SELECT * FROM users","loc":{"a":26,"b":44,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM users
 * ```
 */
export const queryAllUsers = new PreparedQuery<IQueryAllUsersParams,IQueryAllUsersResult>(queryAllUsersIR);


/** 'GetUserById' parameters type */
export interface IGetUserByIdParams {
  userId: number | null | void;
}

/** 'GetUserById' return type */
export interface IGetUserByIdResult {
  id: number;
  name: string;
  email: string;
}

/** 'GetUserById' query type */
export interface IGetUserByIdQuery {
  params: IGetUserByIdParams;
  result: IGetUserByIdResult;
}

const getUserByIdIR: any = {"name":"GetUserById","params":[{"name":"userId","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":110,"b":115,"line":5,"col":38}]}}],"usedParamSet":{"userId":true},"statement":{"body":"SELECT * FROM users WHERE users.id = :userId","loc":{"a":72,"b":115,"line":5,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM users WHERE users.id = :userId
 * ```
 */
export const getUserById = new PreparedQuery<IGetUserByIdParams,IGetUserByIdResult>(getUserByIdIR);


/** 'AddUser' parameters type */
export interface IAddUserParams {
  user: {
    name: string | null | void,
    email: string | null | void
  };
}

/** 'AddUser' return type */
export interface IAddUserResult {
  id: number;
  name: string;
  email: string;
}

/** 'AddUser' query type */
export interface IAddUserQuery {
  params: IAddUserParams;
  result: IAddUserResult;
}

const addUserIR: any = {"name":"AddUser","params":[{"name":"user","codeRefs":{"defined":{"a":149,"b":152,"line":9,"col":9},"used":[{"a":213,"b":216,"line":11,"col":39}]},"transform":{"type":"pick_tuple","keys":["name","email"]}}],"usedParamSet":{"user":true},"statement":{"body":"INSERT INTO users(name, email) VALUES :user\nRETURNING *","loc":{"a":174,"b":228,"line":11,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO users(name, email) VALUES :user
 * RETURNING *
 * ```
 */
export const addUser = new PreparedQuery<IAddUserParams,IAddUserResult>(addUserIR);


