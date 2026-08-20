
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model waitlistEntry
 * 
 */
export type waitlistEntry = $Result.DefaultSelection<Prisma.$waitlistEntryPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model savings_circles
 * 
 */
export type savings_circles = $Result.DefaultSelection<Prisma.$savings_circlesPayload>
/**
 * Model circle_members
 * 
 */
export type circle_members = $Result.DefaultSelection<Prisma.$circle_membersPayload>
/**
 * Model circle_invitations
 * 
 */
export type circle_invitations = $Result.DefaultSelection<Prisma.$circle_invitationsPayload>
/**
 * Model savings_schedules
 * 
 */
export type savings_schedules = $Result.DefaultSelection<Prisma.$savings_schedulesPayload>
/**
 * Model contributions
 * 
 */
export type contributions = $Result.DefaultSelection<Prisma.$contributionsPayload>
/**
 * Model payouts
 * 
 */
export type payouts = $Result.DefaultSelection<Prisma.$payoutsPayload>
/**
 * Model payment_transactions
 * 
 */
export type payment_transactions = $Result.DefaultSelection<Prisma.$payment_transactionsPayload>
/**
 * Model payment_status_history
 * 
 */
export type payment_status_history = $Result.DefaultSelection<Prisma.$payment_status_historyPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model audit_log
 * 
 */
export type audit_log = $Result.DefaultSelection<Prisma.$audit_logPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  UNSUBSCRIBED: 'UNSUBSCRIBED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Frequency: {
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type Frequency = (typeof Frequency)[keyof typeof Frequency]


export const Role: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Circle_Status: {
  INVITED: 'INVITED',
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  LEFT: 'LEFT',
  REMOVED: 'REMOVED'
};

export type Circle_Status = (typeof Circle_Status)[keyof typeof Circle_Status]


export const Contribution_status: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type Contribution_status = (typeof Contribution_status)[keyof typeof Contribution_status]


export const Payout: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type Payout = (typeof Payout)[keyof typeof Payout]


export const Provider: {
  PAYSTACK: 'PAYSTACK',
  STRIPE: 'STRIPE'
};

export type Provider = (typeof Provider)[keyof typeof Provider]


export const Payment_type: {
  CONTRIBUTION: 'CONTRIBUTION',
  PAYOUT: 'PAYOUT'
};

export type Payment_type = (typeof Payment_type)[keyof typeof Payment_type]


export const Notifications: {
  CONTRIBUTION_DUE: 'CONTRIBUTION_DUE',
  CONTRIBUTION_SUCCESS: 'CONTRIBUTION_SUCCESS',
  CONTRIBUTION_OVERDUE: 'CONTRIBUTION_OVERDUE',
  PAYOUT_AVAILABLE: 'PAYOUT_AVAILABLE',
  PAYOUT_SUCCESS: 'PAYOUT_SUCCESS',
  CIRCLE_INVITATION: 'CIRCLE_INVITATION',
  CIRCLE_UPDATE: 'CIRCLE_UPDATE'
};

export type Notifications = (typeof Notifications)[keyof typeof Notifications]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Frequency = $Enums.Frequency

export const Frequency: typeof $Enums.Frequency

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Circle_Status = $Enums.Circle_Status

export const Circle_Status: typeof $Enums.Circle_Status

export type Contribution_status = $Enums.Contribution_status

export const Contribution_status: typeof $Enums.Contribution_status

export type Payout = $Enums.Payout

export const Payout: typeof $Enums.Payout

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

export type Payment_type = $Enums.Payment_type

export const Payment_type: typeof $Enums.Payment_type

export type Notifications = $Enums.Notifications

export const Notifications: typeof $Enums.Notifications

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more WaitlistEntries
 * const waitlistEntries = await prisma.waitlistEntry.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more WaitlistEntries
   * const waitlistEntries = await prisma.waitlistEntry.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.waitlistEntry`: Exposes CRUD operations for the **waitlistEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaitlistEntries
    * const waitlistEntries = await prisma.waitlistEntry.findMany()
    * ```
    */
  get waitlistEntry(): Prisma.waitlistEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savings_circles`: Exposes CRUD operations for the **savings_circles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Savings_circles
    * const savings_circles = await prisma.savings_circles.findMany()
    * ```
    */
  get savings_circles(): Prisma.savings_circlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.circle_members`: Exposes CRUD operations for the **circle_members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Circle_members
    * const circle_members = await prisma.circle_members.findMany()
    * ```
    */
  get circle_members(): Prisma.circle_membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.circle_invitations`: Exposes CRUD operations for the **circle_invitations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Circle_invitations
    * const circle_invitations = await prisma.circle_invitations.findMany()
    * ```
    */
  get circle_invitations(): Prisma.circle_invitationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savings_schedules`: Exposes CRUD operations for the **savings_schedules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Savings_schedules
    * const savings_schedules = await prisma.savings_schedules.findMany()
    * ```
    */
  get savings_schedules(): Prisma.savings_schedulesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contributions`: Exposes CRUD operations for the **contributions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contributions
    * const contributions = await prisma.contributions.findMany()
    * ```
    */
  get contributions(): Prisma.contributionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payouts`: Exposes CRUD operations for the **payouts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payouts
    * const payouts = await prisma.payouts.findMany()
    * ```
    */
  get payouts(): Prisma.payoutsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment_transactions`: Exposes CRUD operations for the **payment_transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_transactions
    * const payment_transactions = await prisma.payment_transactions.findMany()
    * ```
    */
  get payment_transactions(): Prisma.payment_transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment_status_history`: Exposes CRUD operations for the **payment_status_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_status_histories
    * const payment_status_histories = await prisma.payment_status_history.findMany()
    * ```
    */
  get payment_status_history(): Prisma.payment_status_historyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audit_log`: Exposes CRUD operations for the **audit_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_logs
    * const audit_logs = await prisma.audit_log.findMany()
    * ```
    */
  get audit_log(): Prisma.audit_logDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    waitlistEntry: 'waitlistEntry',
    users: 'users',
    sessions: 'sessions',
    savings_circles: 'savings_circles',
    circle_members: 'circle_members',
    circle_invitations: 'circle_invitations',
    savings_schedules: 'savings_schedules',
    contributions: 'contributions',
    payouts: 'payouts',
    payment_transactions: 'payment_transactions',
    payment_status_history: 'payment_status_history',
    notifications: 'notifications',
    audit_log: 'audit_log'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "waitlistEntry" | "users" | "sessions" | "savings_circles" | "circle_members" | "circle_invitations" | "savings_schedules" | "contributions" | "payouts" | "payment_transactions" | "payment_status_history" | "notifications" | "audit_log"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      waitlistEntry: {
        payload: Prisma.$waitlistEntryPayload<ExtArgs>
        fields: Prisma.waitlistEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.waitlistEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.waitlistEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistEntryPayload>
          }
          findFirst: {
            args: Prisma.waitlistEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.waitlistEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistEntryPayload>
          }
          findMany: {
            args: Prisma.waitlistEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistEntryPayload>[]
          }
          create: {
            args: Prisma.waitlistEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistEntryPayload>
          }
          createMany: {
            args: Prisma.waitlistEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.waitlistEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistEntryPayload>[]
          }
          delete: {
            args: Prisma.waitlistEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistEntryPayload>
          }
          update: {
            args: Prisma.waitlistEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistEntryPayload>
          }
          deleteMany: {
            args: Prisma.waitlistEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.waitlistEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.waitlistEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistEntryPayload>[]
          }
          upsert: {
            args: Prisma.waitlistEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistEntryPayload>
          }
          aggregate: {
            args: Prisma.WaitlistEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaitlistEntry>
          }
          groupBy: {
            args: Prisma.waitlistEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaitlistEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.waitlistEntryCountArgs<ExtArgs>
            result: $Utils.Optional<WaitlistEntryCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      savings_circles: {
        payload: Prisma.$savings_circlesPayload<ExtArgs>
        fields: Prisma.savings_circlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.savings_circlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_circlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.savings_circlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_circlesPayload>
          }
          findFirst: {
            args: Prisma.savings_circlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_circlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.savings_circlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_circlesPayload>
          }
          findMany: {
            args: Prisma.savings_circlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_circlesPayload>[]
          }
          create: {
            args: Prisma.savings_circlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_circlesPayload>
          }
          createMany: {
            args: Prisma.savings_circlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.savings_circlesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_circlesPayload>[]
          }
          delete: {
            args: Prisma.savings_circlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_circlesPayload>
          }
          update: {
            args: Prisma.savings_circlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_circlesPayload>
          }
          deleteMany: {
            args: Prisma.savings_circlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.savings_circlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.savings_circlesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_circlesPayload>[]
          }
          upsert: {
            args: Prisma.savings_circlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_circlesPayload>
          }
          aggregate: {
            args: Prisma.Savings_circlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavings_circles>
          }
          groupBy: {
            args: Prisma.savings_circlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Savings_circlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.savings_circlesCountArgs<ExtArgs>
            result: $Utils.Optional<Savings_circlesCountAggregateOutputType> | number
          }
        }
      }
      circle_members: {
        payload: Prisma.$circle_membersPayload<ExtArgs>
        fields: Prisma.circle_membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.circle_membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.circle_membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_membersPayload>
          }
          findFirst: {
            args: Prisma.circle_membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.circle_membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_membersPayload>
          }
          findMany: {
            args: Prisma.circle_membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_membersPayload>[]
          }
          create: {
            args: Prisma.circle_membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_membersPayload>
          }
          createMany: {
            args: Prisma.circle_membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.circle_membersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_membersPayload>[]
          }
          delete: {
            args: Prisma.circle_membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_membersPayload>
          }
          update: {
            args: Prisma.circle_membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_membersPayload>
          }
          deleteMany: {
            args: Prisma.circle_membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.circle_membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.circle_membersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_membersPayload>[]
          }
          upsert: {
            args: Prisma.circle_membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_membersPayload>
          }
          aggregate: {
            args: Prisma.Circle_membersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCircle_members>
          }
          groupBy: {
            args: Prisma.circle_membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Circle_membersGroupByOutputType>[]
          }
          count: {
            args: Prisma.circle_membersCountArgs<ExtArgs>
            result: $Utils.Optional<Circle_membersCountAggregateOutputType> | number
          }
        }
      }
      circle_invitations: {
        payload: Prisma.$circle_invitationsPayload<ExtArgs>
        fields: Prisma.circle_invitationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.circle_invitationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_invitationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.circle_invitationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_invitationsPayload>
          }
          findFirst: {
            args: Prisma.circle_invitationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_invitationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.circle_invitationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_invitationsPayload>
          }
          findMany: {
            args: Prisma.circle_invitationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_invitationsPayload>[]
          }
          create: {
            args: Prisma.circle_invitationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_invitationsPayload>
          }
          createMany: {
            args: Prisma.circle_invitationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.circle_invitationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_invitationsPayload>[]
          }
          delete: {
            args: Prisma.circle_invitationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_invitationsPayload>
          }
          update: {
            args: Prisma.circle_invitationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_invitationsPayload>
          }
          deleteMany: {
            args: Prisma.circle_invitationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.circle_invitationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.circle_invitationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_invitationsPayload>[]
          }
          upsert: {
            args: Prisma.circle_invitationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$circle_invitationsPayload>
          }
          aggregate: {
            args: Prisma.Circle_invitationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCircle_invitations>
          }
          groupBy: {
            args: Prisma.circle_invitationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Circle_invitationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.circle_invitationsCountArgs<ExtArgs>
            result: $Utils.Optional<Circle_invitationsCountAggregateOutputType> | number
          }
        }
      }
      savings_schedules: {
        payload: Prisma.$savings_schedulesPayload<ExtArgs>
        fields: Prisma.savings_schedulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.savings_schedulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_schedulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.savings_schedulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_schedulesPayload>
          }
          findFirst: {
            args: Prisma.savings_schedulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_schedulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.savings_schedulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_schedulesPayload>
          }
          findMany: {
            args: Prisma.savings_schedulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_schedulesPayload>[]
          }
          create: {
            args: Prisma.savings_schedulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_schedulesPayload>
          }
          createMany: {
            args: Prisma.savings_schedulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.savings_schedulesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_schedulesPayload>[]
          }
          delete: {
            args: Prisma.savings_schedulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_schedulesPayload>
          }
          update: {
            args: Prisma.savings_schedulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_schedulesPayload>
          }
          deleteMany: {
            args: Prisma.savings_schedulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.savings_schedulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.savings_schedulesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_schedulesPayload>[]
          }
          upsert: {
            args: Prisma.savings_schedulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savings_schedulesPayload>
          }
          aggregate: {
            args: Prisma.Savings_schedulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavings_schedules>
          }
          groupBy: {
            args: Prisma.savings_schedulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Savings_schedulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.savings_schedulesCountArgs<ExtArgs>
            result: $Utils.Optional<Savings_schedulesCountAggregateOutputType> | number
          }
        }
      }
      contributions: {
        payload: Prisma.$contributionsPayload<ExtArgs>
        fields: Prisma.contributionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contributionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contributionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contributionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contributionsPayload>
          }
          findFirst: {
            args: Prisma.contributionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contributionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contributionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contributionsPayload>
          }
          findMany: {
            args: Prisma.contributionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contributionsPayload>[]
          }
          create: {
            args: Prisma.contributionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contributionsPayload>
          }
          createMany: {
            args: Prisma.contributionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.contributionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contributionsPayload>[]
          }
          delete: {
            args: Prisma.contributionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contributionsPayload>
          }
          update: {
            args: Prisma.contributionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contributionsPayload>
          }
          deleteMany: {
            args: Prisma.contributionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contributionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.contributionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contributionsPayload>[]
          }
          upsert: {
            args: Prisma.contributionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contributionsPayload>
          }
          aggregate: {
            args: Prisma.ContributionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContributions>
          }
          groupBy: {
            args: Prisma.contributionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContributionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.contributionsCountArgs<ExtArgs>
            result: $Utils.Optional<ContributionsCountAggregateOutputType> | number
          }
        }
      }
      payouts: {
        payload: Prisma.$payoutsPayload<ExtArgs>
        fields: Prisma.payoutsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payoutsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payoutsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payoutsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payoutsPayload>
          }
          findFirst: {
            args: Prisma.payoutsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payoutsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payoutsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payoutsPayload>
          }
          findMany: {
            args: Prisma.payoutsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payoutsPayload>[]
          }
          create: {
            args: Prisma.payoutsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payoutsPayload>
          }
          createMany: {
            args: Prisma.payoutsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.payoutsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payoutsPayload>[]
          }
          delete: {
            args: Prisma.payoutsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payoutsPayload>
          }
          update: {
            args: Prisma.payoutsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payoutsPayload>
          }
          deleteMany: {
            args: Prisma.payoutsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.payoutsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.payoutsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payoutsPayload>[]
          }
          upsert: {
            args: Prisma.payoutsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payoutsPayload>
          }
          aggregate: {
            args: Prisma.PayoutsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayouts>
          }
          groupBy: {
            args: Prisma.payoutsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayoutsGroupByOutputType>[]
          }
          count: {
            args: Prisma.payoutsCountArgs<ExtArgs>
            result: $Utils.Optional<PayoutsCountAggregateOutputType> | number
          }
        }
      }
      payment_transactions: {
        payload: Prisma.$payment_transactionsPayload<ExtArgs>
        fields: Prisma.payment_transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payment_transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payment_transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_transactionsPayload>
          }
          findFirst: {
            args: Prisma.payment_transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payment_transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_transactionsPayload>
          }
          findMany: {
            args: Prisma.payment_transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_transactionsPayload>[]
          }
          create: {
            args: Prisma.payment_transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_transactionsPayload>
          }
          createMany: {
            args: Prisma.payment_transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.payment_transactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_transactionsPayload>[]
          }
          delete: {
            args: Prisma.payment_transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_transactionsPayload>
          }
          update: {
            args: Prisma.payment_transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_transactionsPayload>
          }
          deleteMany: {
            args: Prisma.payment_transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.payment_transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.payment_transactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_transactionsPayload>[]
          }
          upsert: {
            args: Prisma.payment_transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_transactionsPayload>
          }
          aggregate: {
            args: Prisma.Payment_transactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment_transactions>
          }
          groupBy: {
            args: Prisma.payment_transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Payment_transactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.payment_transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<Payment_transactionsCountAggregateOutputType> | number
          }
        }
      }
      payment_status_history: {
        payload: Prisma.$payment_status_historyPayload<ExtArgs>
        fields: Prisma.payment_status_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payment_status_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_status_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payment_status_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_status_historyPayload>
          }
          findFirst: {
            args: Prisma.payment_status_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_status_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payment_status_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_status_historyPayload>
          }
          findMany: {
            args: Prisma.payment_status_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_status_historyPayload>[]
          }
          create: {
            args: Prisma.payment_status_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_status_historyPayload>
          }
          createMany: {
            args: Prisma.payment_status_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.payment_status_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_status_historyPayload>[]
          }
          delete: {
            args: Prisma.payment_status_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_status_historyPayload>
          }
          update: {
            args: Prisma.payment_status_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_status_historyPayload>
          }
          deleteMany: {
            args: Prisma.payment_status_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.payment_status_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.payment_status_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_status_historyPayload>[]
          }
          upsert: {
            args: Prisma.payment_status_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_status_historyPayload>
          }
          aggregate: {
            args: Prisma.Payment_status_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment_status_history>
          }
          groupBy: {
            args: Prisma.payment_status_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Payment_status_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.payment_status_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Payment_status_historyCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      audit_log: {
        payload: Prisma.$audit_logPayload<ExtArgs>
        fields: Prisma.audit_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.audit_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.audit_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          findFirst: {
            args: Prisma.audit_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.audit_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          findMany: {
            args: Prisma.audit_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>[]
          }
          create: {
            args: Prisma.audit_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          createMany: {
            args: Prisma.audit_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.audit_logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>[]
          }
          delete: {
            args: Prisma.audit_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          update: {
            args: Prisma.audit_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          deleteMany: {
            args: Prisma.audit_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.audit_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.audit_logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>[]
          }
          upsert: {
            args: Prisma.audit_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          aggregate: {
            args: Prisma.Audit_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit_log>
          }
          groupBy: {
            args: Prisma.audit_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Audit_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.audit_logCountArgs<ExtArgs>
            result: $Utils.Optional<Audit_logCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    waitlistEntry?: waitlistEntryOmit
    users?: usersOmit
    sessions?: sessionsOmit
    savings_circles?: savings_circlesOmit
    circle_members?: circle_membersOmit
    circle_invitations?: circle_invitationsOmit
    savings_schedules?: savings_schedulesOmit
    contributions?: contributionsOmit
    payouts?: payoutsOmit
    payment_transactions?: payment_transactionsOmit
    payment_status_history?: payment_status_historyOmit
    notifications?: notificationsOmit
    audit_log?: audit_logOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model waitlistEntry
   */

  export type AggregateWaitlistEntry = {
    _count: WaitlistEntryCountAggregateOutputType | null
    _min: WaitlistEntryMinAggregateOutputType | null
    _max: WaitlistEntryMaxAggregateOutputType | null
  }

  export type WaitlistEntryMinAggregateOutputType = {
    id: string | null
    email: string | null
    status: $Enums.Status | null
    verification_token_hash: string | null
    verification_expires_at: Date | null
    verified_at: Date | null
    userId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WaitlistEntryMaxAggregateOutputType = {
    id: string | null
    email: string | null
    status: $Enums.Status | null
    verification_token_hash: string | null
    verification_expires_at: Date | null
    verified_at: Date | null
    userId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WaitlistEntryCountAggregateOutputType = {
    id: number
    email: number
    status: number
    verification_token_hash: number
    verification_expires_at: number
    verified_at: number
    userId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WaitlistEntryMinAggregateInputType = {
    id?: true
    email?: true
    status?: true
    verification_token_hash?: true
    verification_expires_at?: true
    verified_at?: true
    userId?: true
    created_at?: true
    updated_at?: true
  }

  export type WaitlistEntryMaxAggregateInputType = {
    id?: true
    email?: true
    status?: true
    verification_token_hash?: true
    verification_expires_at?: true
    verified_at?: true
    userId?: true
    created_at?: true
    updated_at?: true
  }

  export type WaitlistEntryCountAggregateInputType = {
    id?: true
    email?: true
    status?: true
    verification_token_hash?: true
    verification_expires_at?: true
    verified_at?: true
    userId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WaitlistEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which waitlistEntry to aggregate.
     */
    where?: waitlistEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitlistEntries to fetch.
     */
    orderBy?: waitlistEntryOrderByWithRelationInput | waitlistEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: waitlistEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitlistEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitlistEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned waitlistEntries
    **/
    _count?: true | WaitlistEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaitlistEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaitlistEntryMaxAggregateInputType
  }

  export type GetWaitlistEntryAggregateType<T extends WaitlistEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateWaitlistEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaitlistEntry[P]>
      : GetScalarType<T[P], AggregateWaitlistEntry[P]>
  }




  export type waitlistEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: waitlistEntryWhereInput
    orderBy?: waitlistEntryOrderByWithAggregationInput | waitlistEntryOrderByWithAggregationInput[]
    by: WaitlistEntryScalarFieldEnum[] | WaitlistEntryScalarFieldEnum
    having?: waitlistEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaitlistEntryCountAggregateInputType | true
    _min?: WaitlistEntryMinAggregateInputType
    _max?: WaitlistEntryMaxAggregateInputType
  }

  export type WaitlistEntryGroupByOutputType = {
    id: string
    email: string
    status: $Enums.Status
    verification_token_hash: string | null
    verification_expires_at: Date
    verified_at: Date | null
    userId: string | null
    created_at: Date
    updated_at: Date
    _count: WaitlistEntryCountAggregateOutputType | null
    _min: WaitlistEntryMinAggregateOutputType | null
    _max: WaitlistEntryMaxAggregateOutputType | null
  }

  type GetWaitlistEntryGroupByPayload<T extends waitlistEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaitlistEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaitlistEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaitlistEntryGroupByOutputType[P]>
            : GetScalarType<T[P], WaitlistEntryGroupByOutputType[P]>
        }
      >
    >


  export type waitlistEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    status?: boolean
    verification_token_hash?: boolean
    verification_expires_at?: boolean
    verified_at?: boolean
    userId?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | waitlistEntry$userArgs<ExtArgs>
  }, ExtArgs["result"]["waitlistEntry"]>

  export type waitlistEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    status?: boolean
    verification_token_hash?: boolean
    verification_expires_at?: boolean
    verified_at?: boolean
    userId?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | waitlistEntry$userArgs<ExtArgs>
  }, ExtArgs["result"]["waitlistEntry"]>

  export type waitlistEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    status?: boolean
    verification_token_hash?: boolean
    verification_expires_at?: boolean
    verified_at?: boolean
    userId?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | waitlistEntry$userArgs<ExtArgs>
  }, ExtArgs["result"]["waitlistEntry"]>

  export type waitlistEntrySelectScalar = {
    id?: boolean
    email?: boolean
    status?: boolean
    verification_token_hash?: boolean
    verification_expires_at?: boolean
    verified_at?: boolean
    userId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type waitlistEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "status" | "verification_token_hash" | "verification_expires_at" | "verified_at" | "userId" | "created_at" | "updated_at", ExtArgs["result"]["waitlistEntry"]>
  export type waitlistEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | waitlistEntry$userArgs<ExtArgs>
  }
  export type waitlistEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | waitlistEntry$userArgs<ExtArgs>
  }
  export type waitlistEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | waitlistEntry$userArgs<ExtArgs>
  }

  export type $waitlistEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "waitlistEntry"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      status: $Enums.Status
      verification_token_hash: string | null
      verification_expires_at: Date
      verified_at: Date | null
      userId: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["waitlistEntry"]>
    composites: {}
  }

  type waitlistEntryGetPayload<S extends boolean | null | undefined | waitlistEntryDefaultArgs> = $Result.GetResult<Prisma.$waitlistEntryPayload, S>

  type waitlistEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<waitlistEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaitlistEntryCountAggregateInputType | true
    }

  export interface waitlistEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['waitlistEntry'], meta: { name: 'waitlistEntry' } }
    /**
     * Find zero or one WaitlistEntry that matches the filter.
     * @param {waitlistEntryFindUniqueArgs} args - Arguments to find a WaitlistEntry
     * @example
     * // Get one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends waitlistEntryFindUniqueArgs>(args: SelectSubset<T, waitlistEntryFindUniqueArgs<ExtArgs>>): Prisma__waitlistEntryClient<$Result.GetResult<Prisma.$waitlistEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaitlistEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {waitlistEntryFindUniqueOrThrowArgs} args - Arguments to find a WaitlistEntry
     * @example
     * // Get one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends waitlistEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, waitlistEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__waitlistEntryClient<$Result.GetResult<Prisma.$waitlistEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaitlistEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistEntryFindFirstArgs} args - Arguments to find a WaitlistEntry
     * @example
     * // Get one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends waitlistEntryFindFirstArgs>(args?: SelectSubset<T, waitlistEntryFindFirstArgs<ExtArgs>>): Prisma__waitlistEntryClient<$Result.GetResult<Prisma.$waitlistEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaitlistEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistEntryFindFirstOrThrowArgs} args - Arguments to find a WaitlistEntry
     * @example
     * // Get one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends waitlistEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, waitlistEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__waitlistEntryClient<$Result.GetResult<Prisma.$waitlistEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaitlistEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaitlistEntries
     * const waitlistEntries = await prisma.waitlistEntry.findMany()
     * 
     * // Get first 10 WaitlistEntries
     * const waitlistEntries = await prisma.waitlistEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waitlistEntryWithIdOnly = await prisma.waitlistEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends waitlistEntryFindManyArgs>(args?: SelectSubset<T, waitlistEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaitlistEntry.
     * @param {waitlistEntryCreateArgs} args - Arguments to create a WaitlistEntry.
     * @example
     * // Create one WaitlistEntry
     * const WaitlistEntry = await prisma.waitlistEntry.create({
     *   data: {
     *     // ... data to create a WaitlistEntry
     *   }
     * })
     * 
     */
    create<T extends waitlistEntryCreateArgs>(args: SelectSubset<T, waitlistEntryCreateArgs<ExtArgs>>): Prisma__waitlistEntryClient<$Result.GetResult<Prisma.$waitlistEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaitlistEntries.
     * @param {waitlistEntryCreateManyArgs} args - Arguments to create many WaitlistEntries.
     * @example
     * // Create many WaitlistEntries
     * const waitlistEntry = await prisma.waitlistEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends waitlistEntryCreateManyArgs>(args?: SelectSubset<T, waitlistEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaitlistEntries and returns the data saved in the database.
     * @param {waitlistEntryCreateManyAndReturnArgs} args - Arguments to create many WaitlistEntries.
     * @example
     * // Create many WaitlistEntries
     * const waitlistEntry = await prisma.waitlistEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaitlistEntries and only return the `id`
     * const waitlistEntryWithIdOnly = await prisma.waitlistEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends waitlistEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, waitlistEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaitlistEntry.
     * @param {waitlistEntryDeleteArgs} args - Arguments to delete one WaitlistEntry.
     * @example
     * // Delete one WaitlistEntry
     * const WaitlistEntry = await prisma.waitlistEntry.delete({
     *   where: {
     *     // ... filter to delete one WaitlistEntry
     *   }
     * })
     * 
     */
    delete<T extends waitlistEntryDeleteArgs>(args: SelectSubset<T, waitlistEntryDeleteArgs<ExtArgs>>): Prisma__waitlistEntryClient<$Result.GetResult<Prisma.$waitlistEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaitlistEntry.
     * @param {waitlistEntryUpdateArgs} args - Arguments to update one WaitlistEntry.
     * @example
     * // Update one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends waitlistEntryUpdateArgs>(args: SelectSubset<T, waitlistEntryUpdateArgs<ExtArgs>>): Prisma__waitlistEntryClient<$Result.GetResult<Prisma.$waitlistEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaitlistEntries.
     * @param {waitlistEntryDeleteManyArgs} args - Arguments to filter WaitlistEntries to delete.
     * @example
     * // Delete a few WaitlistEntries
     * const { count } = await prisma.waitlistEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends waitlistEntryDeleteManyArgs>(args?: SelectSubset<T, waitlistEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaitlistEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaitlistEntries
     * const waitlistEntry = await prisma.waitlistEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends waitlistEntryUpdateManyArgs>(args: SelectSubset<T, waitlistEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaitlistEntries and returns the data updated in the database.
     * @param {waitlistEntryUpdateManyAndReturnArgs} args - Arguments to update many WaitlistEntries.
     * @example
     * // Update many WaitlistEntries
     * const waitlistEntry = await prisma.waitlistEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaitlistEntries and only return the `id`
     * const waitlistEntryWithIdOnly = await prisma.waitlistEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends waitlistEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, waitlistEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaitlistEntry.
     * @param {waitlistEntryUpsertArgs} args - Arguments to update or create a WaitlistEntry.
     * @example
     * // Update or create a WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.upsert({
     *   create: {
     *     // ... data to create a WaitlistEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaitlistEntry we want to update
     *   }
     * })
     */
    upsert<T extends waitlistEntryUpsertArgs>(args: SelectSubset<T, waitlistEntryUpsertArgs<ExtArgs>>): Prisma__waitlistEntryClient<$Result.GetResult<Prisma.$waitlistEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaitlistEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistEntryCountArgs} args - Arguments to filter WaitlistEntries to count.
     * @example
     * // Count the number of WaitlistEntries
     * const count = await prisma.waitlistEntry.count({
     *   where: {
     *     // ... the filter for the WaitlistEntries we want to count
     *   }
     * })
    **/
    count<T extends waitlistEntryCountArgs>(
      args?: Subset<T, waitlistEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaitlistEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaitlistEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaitlistEntryAggregateArgs>(args: Subset<T, WaitlistEntryAggregateArgs>): Prisma.PrismaPromise<GetWaitlistEntryAggregateType<T>>

    /**
     * Group by WaitlistEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends waitlistEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: waitlistEntryGroupByArgs['orderBy'] }
        : { orderBy?: waitlistEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, waitlistEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaitlistEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the waitlistEntry model
   */
  readonly fields: waitlistEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for waitlistEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__waitlistEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends waitlistEntry$userArgs<ExtArgs> = {}>(args?: Subset<T, waitlistEntry$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the waitlistEntry model
   */
  interface waitlistEntryFieldRefs {
    readonly id: FieldRef<"waitlistEntry", 'String'>
    readonly email: FieldRef<"waitlistEntry", 'String'>
    readonly status: FieldRef<"waitlistEntry", 'Status'>
    readonly verification_token_hash: FieldRef<"waitlistEntry", 'String'>
    readonly verification_expires_at: FieldRef<"waitlistEntry", 'DateTime'>
    readonly verified_at: FieldRef<"waitlistEntry", 'DateTime'>
    readonly userId: FieldRef<"waitlistEntry", 'String'>
    readonly created_at: FieldRef<"waitlistEntry", 'DateTime'>
    readonly updated_at: FieldRef<"waitlistEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * waitlistEntry findUnique
   */
  export type waitlistEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlistEntry
     */
    select?: waitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlistEntry
     */
    omit?: waitlistEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistEntryInclude<ExtArgs> | null
    /**
     * Filter, which waitlistEntry to fetch.
     */
    where: waitlistEntryWhereUniqueInput
  }

  /**
   * waitlistEntry findUniqueOrThrow
   */
  export type waitlistEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlistEntry
     */
    select?: waitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlistEntry
     */
    omit?: waitlistEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistEntryInclude<ExtArgs> | null
    /**
     * Filter, which waitlistEntry to fetch.
     */
    where: waitlistEntryWhereUniqueInput
  }

  /**
   * waitlistEntry findFirst
   */
  export type waitlistEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlistEntry
     */
    select?: waitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlistEntry
     */
    omit?: waitlistEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistEntryInclude<ExtArgs> | null
    /**
     * Filter, which waitlistEntry to fetch.
     */
    where?: waitlistEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitlistEntries to fetch.
     */
    orderBy?: waitlistEntryOrderByWithRelationInput | waitlistEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for waitlistEntries.
     */
    cursor?: waitlistEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitlistEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitlistEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of waitlistEntries.
     */
    distinct?: WaitlistEntryScalarFieldEnum | WaitlistEntryScalarFieldEnum[]
  }

  /**
   * waitlistEntry findFirstOrThrow
   */
  export type waitlistEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlistEntry
     */
    select?: waitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlistEntry
     */
    omit?: waitlistEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistEntryInclude<ExtArgs> | null
    /**
     * Filter, which waitlistEntry to fetch.
     */
    where?: waitlistEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitlistEntries to fetch.
     */
    orderBy?: waitlistEntryOrderByWithRelationInput | waitlistEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for waitlistEntries.
     */
    cursor?: waitlistEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitlistEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitlistEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of waitlistEntries.
     */
    distinct?: WaitlistEntryScalarFieldEnum | WaitlistEntryScalarFieldEnum[]
  }

  /**
   * waitlistEntry findMany
   */
  export type waitlistEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlistEntry
     */
    select?: waitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlistEntry
     */
    omit?: waitlistEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistEntryInclude<ExtArgs> | null
    /**
     * Filter, which waitlistEntries to fetch.
     */
    where?: waitlistEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitlistEntries to fetch.
     */
    orderBy?: waitlistEntryOrderByWithRelationInput | waitlistEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing waitlistEntries.
     */
    cursor?: waitlistEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitlistEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitlistEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of waitlistEntries.
     */
    distinct?: WaitlistEntryScalarFieldEnum | WaitlistEntryScalarFieldEnum[]
  }

  /**
   * waitlistEntry create
   */
  export type waitlistEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlistEntry
     */
    select?: waitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlistEntry
     */
    omit?: waitlistEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a waitlistEntry.
     */
    data: XOR<waitlistEntryCreateInput, waitlistEntryUncheckedCreateInput>
  }

  /**
   * waitlistEntry createMany
   */
  export type waitlistEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many waitlistEntries.
     */
    data: waitlistEntryCreateManyInput | waitlistEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * waitlistEntry createManyAndReturn
   */
  export type waitlistEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlistEntry
     */
    select?: waitlistEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the waitlistEntry
     */
    omit?: waitlistEntryOmit<ExtArgs> | null
    /**
     * The data used to create many waitlistEntries.
     */
    data: waitlistEntryCreateManyInput | waitlistEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * waitlistEntry update
   */
  export type waitlistEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlistEntry
     */
    select?: waitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlistEntry
     */
    omit?: waitlistEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a waitlistEntry.
     */
    data: XOR<waitlistEntryUpdateInput, waitlistEntryUncheckedUpdateInput>
    /**
     * Choose, which waitlistEntry to update.
     */
    where: waitlistEntryWhereUniqueInput
  }

  /**
   * waitlistEntry updateMany
   */
  export type waitlistEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update waitlistEntries.
     */
    data: XOR<waitlistEntryUpdateManyMutationInput, waitlistEntryUncheckedUpdateManyInput>
    /**
     * Filter which waitlistEntries to update
     */
    where?: waitlistEntryWhereInput
    /**
     * Limit how many waitlistEntries to update.
     */
    limit?: number
  }

  /**
   * waitlistEntry updateManyAndReturn
   */
  export type waitlistEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlistEntry
     */
    select?: waitlistEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the waitlistEntry
     */
    omit?: waitlistEntryOmit<ExtArgs> | null
    /**
     * The data used to update waitlistEntries.
     */
    data: XOR<waitlistEntryUpdateManyMutationInput, waitlistEntryUncheckedUpdateManyInput>
    /**
     * Filter which waitlistEntries to update
     */
    where?: waitlistEntryWhereInput
    /**
     * Limit how many waitlistEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * waitlistEntry upsert
   */
  export type waitlistEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlistEntry
     */
    select?: waitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlistEntry
     */
    omit?: waitlistEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the waitlistEntry to update in case it exists.
     */
    where: waitlistEntryWhereUniqueInput
    /**
     * In case the waitlistEntry found by the `where` argument doesn't exist, create a new waitlistEntry with this data.
     */
    create: XOR<waitlistEntryCreateInput, waitlistEntryUncheckedCreateInput>
    /**
     * In case the waitlistEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<waitlistEntryUpdateInput, waitlistEntryUncheckedUpdateInput>
  }

  /**
   * waitlistEntry delete
   */
  export type waitlistEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlistEntry
     */
    select?: waitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlistEntry
     */
    omit?: waitlistEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistEntryInclude<ExtArgs> | null
    /**
     * Filter which waitlistEntry to delete.
     */
    where: waitlistEntryWhereUniqueInput
  }

  /**
   * waitlistEntry deleteMany
   */
  export type waitlistEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which waitlistEntries to delete
     */
    where?: waitlistEntryWhereInput
    /**
     * Limit how many waitlistEntries to delete.
     */
    limit?: number
  }

  /**
   * waitlistEntry.user
   */
  export type waitlistEntry$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * waitlistEntry without action
   */
  export type waitlistEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlistEntry
     */
    select?: waitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlistEntry
     */
    omit?: waitlistEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistEntryInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    password_hash: string | null
    first_name: string | null
    last_name: string | null
    avatar_url: string | null
    email_verified_at: Date | null
    status: $Enums.Status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    password_hash: string | null
    first_name: string | null
    last_name: string | null
    avatar_url: string | null
    email_verified_at: Date | null
    status: $Enums.Status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    password_hash: number
    first_name: number
    last_name: number
    avatar_url: number
    email_verified_at: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    avatar_url?: true
    email_verified_at?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    avatar_url?: true
    email_verified_at?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    avatar_url?: true
    email_verified_at?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    phone: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url: string | null
    email_verified_at: Date | null
    status: $Enums.Status
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar_url?: boolean
    email_verified_at?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    waitlistEntry?: boolean | users$waitlistEntryArgs<ExtArgs>
    session?: boolean | users$sessionArgs<ExtArgs>
    savings_circles?: boolean | users$savings_circlesArgs<ExtArgs>
    circle_members?: boolean | users$circle_membersArgs<ExtArgs>
    circle_invitations?: boolean | users$circle_invitationsArgs<ExtArgs>
    contributions?: boolean | users$contributionsArgs<ExtArgs>
    payment_transactions?: boolean | users$payment_transactionsArgs<ExtArgs>
    notifications?: boolean | users$notificationsArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar_url?: boolean
    email_verified_at?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar_url?: boolean
    email_verified_at?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar_url?: boolean
    email_verified_at?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "password_hash" | "first_name" | "last_name" | "avatar_url" | "email_verified_at" | "status" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waitlistEntry?: boolean | users$waitlistEntryArgs<ExtArgs>
    session?: boolean | users$sessionArgs<ExtArgs>
    savings_circles?: boolean | users$savings_circlesArgs<ExtArgs>
    circle_members?: boolean | users$circle_membersArgs<ExtArgs>
    circle_invitations?: boolean | users$circle_invitationsArgs<ExtArgs>
    contributions?: boolean | users$contributionsArgs<ExtArgs>
    payment_transactions?: boolean | users$payment_transactionsArgs<ExtArgs>
    notifications?: boolean | users$notificationsArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      waitlistEntry: Prisma.$waitlistEntryPayload<ExtArgs> | null
      session: Prisma.$sessionsPayload<ExtArgs> | null
      savings_circles: Prisma.$savings_circlesPayload<ExtArgs> | null
      circle_members: Prisma.$circle_membersPayload<ExtArgs> | null
      circle_invitations: Prisma.$circle_invitationsPayload<ExtArgs> | null
      contributions: Prisma.$contributionsPayload<ExtArgs> | null
      payment_transactions: Prisma.$payment_transactionsPayload<ExtArgs> | null
      notifications: Prisma.$notificationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phone: string | null
      password_hash: string
      first_name: string
      last_name: string
      avatar_url: string | null
      email_verified_at: Date | null
      status: $Enums.Status
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    waitlistEntry<T extends users$waitlistEntryArgs<ExtArgs> = {}>(args?: Subset<T, users$waitlistEntryArgs<ExtArgs>>): Prisma__waitlistEntryClient<$Result.GetResult<Prisma.$waitlistEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    session<T extends users$sessionArgs<ExtArgs> = {}>(args?: Subset<T, users$sessionArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    savings_circles<T extends users$savings_circlesArgs<ExtArgs> = {}>(args?: Subset<T, users$savings_circlesArgs<ExtArgs>>): Prisma__savings_circlesClient<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    circle_members<T extends users$circle_membersArgs<ExtArgs> = {}>(args?: Subset<T, users$circle_membersArgs<ExtArgs>>): Prisma__circle_membersClient<$Result.GetResult<Prisma.$circle_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    circle_invitations<T extends users$circle_invitationsArgs<ExtArgs> = {}>(args?: Subset<T, users$circle_invitationsArgs<ExtArgs>>): Prisma__circle_invitationsClient<$Result.GetResult<Prisma.$circle_invitationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contributions<T extends users$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, users$contributionsArgs<ExtArgs>>): Prisma__contributionsClient<$Result.GetResult<Prisma.$contributionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment_transactions<T extends users$payment_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, users$payment_transactionsArgs<ExtArgs>>): Prisma__payment_transactionsClient<$Result.GetResult<Prisma.$payment_transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notifications<T extends users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, users$notificationsArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly avatar_url: FieldRef<"users", 'String'>
    readonly email_verified_at: FieldRef<"users", 'DateTime'>
    readonly status: FieldRef<"users", 'Status'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.waitlistEntry
   */
  export type users$waitlistEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlistEntry
     */
    select?: waitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlistEntry
     */
    omit?: waitlistEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waitlistEntryInclude<ExtArgs> | null
    where?: waitlistEntryWhereInput
  }

  /**
   * users.session
   */
  export type users$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    where?: sessionsWhereInput
  }

  /**
   * users.savings_circles
   */
  export type users$savings_circlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_circles
     */
    select?: savings_circlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_circles
     */
    omit?: savings_circlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_circlesInclude<ExtArgs> | null
    where?: savings_circlesWhereInput
  }

  /**
   * users.circle_members
   */
  export type users$circle_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_members
     */
    select?: circle_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_members
     */
    omit?: circle_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_membersInclude<ExtArgs> | null
    where?: circle_membersWhereInput
  }

  /**
   * users.circle_invitations
   */
  export type users$circle_invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_invitations
     */
    select?: circle_invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_invitations
     */
    omit?: circle_invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_invitationsInclude<ExtArgs> | null
    where?: circle_invitationsWhereInput
  }

  /**
   * users.contributions
   */
  export type users$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contributions
     */
    select?: contributionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contributions
     */
    omit?: contributionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contributionsInclude<ExtArgs> | null
    where?: contributionsWhereInput
  }

  /**
   * users.payment_transactions
   */
  export type users$payment_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_transactions
     */
    select?: payment_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_transactions
     */
    omit?: payment_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_transactionsInclude<ExtArgs> | null
    where?: payment_transactionsWhereInput
  }

  /**
   * users.notifications
   */
  export type users$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    token_hash: string | null
    expires_at: Date | null
    created_at: Date | null
    revoked_at: Date | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    token_hash: string | null
    expires_at: Date | null
    created_at: Date | null
    revoked_at: Date | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    user_id: number
    token_hash: number
    expires_at: number
    created_at: number
    revoked_at: number
    _all: number
  }


  export type SessionsMinAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    created_at?: true
    revoked_at?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    created_at?: true
    revoked_at?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    created_at?: true
    revoked_at?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: string
    user_id: string
    token_hash: string
    expires_at: Date | null
    created_at: Date
    revoked_at: Date | null
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expires_at?: boolean
    created_at?: boolean
    revoked_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expires_at?: boolean
    created_at?: boolean
    revoked_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expires_at?: boolean
    created_at?: boolean
    revoked_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expires_at?: boolean
    created_at?: boolean
    revoked_at?: boolean
  }

  export type sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token_hash" | "expires_at" | "created_at" | "revoked_at", ExtArgs["result"]["sessions"]>
  export type sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type sessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type sessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      token_hash: string
      expires_at: Date | null
      created_at: Date
      revoked_at: Date | null
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {sessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {sessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, sessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sessions model
   */
  interface sessionsFieldRefs {
    readonly id: FieldRef<"sessions", 'String'>
    readonly user_id: FieldRef<"sessions", 'String'>
    readonly token_hash: FieldRef<"sessions", 'String'>
    readonly expires_at: FieldRef<"sessions", 'DateTime'>
    readonly created_at: FieldRef<"sessions", 'DateTime'>
    readonly revoked_at: FieldRef<"sessions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions createManyAndReturn
   */
  export type sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions updateManyAndReturn
   */
  export type sessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
  }


  /**
   * Model savings_circles
   */

  export type AggregateSavings_circles = {
    _count: Savings_circlesCountAggregateOutputType | null
    _avg: Savings_circlesAvgAggregateOutputType | null
    _sum: Savings_circlesSumAggregateOutputType | null
    _min: Savings_circlesMinAggregateOutputType | null
    _max: Savings_circlesMaxAggregateOutputType | null
  }

  export type Savings_circlesAvgAggregateOutputType = {
    contribution_amount: Decimal | null
    member_limit: number | null
  }

  export type Savings_circlesSumAggregateOutputType = {
    contribution_amount: Decimal | null
    member_limit: number | null
  }

  export type Savings_circlesMinAggregateOutputType = {
    id: string | null
    name: string | null
    decription: string | null
    owner_id: string | null
    contribution_amount: Decimal | null
    currency: string | null
    frequency: $Enums.Frequency | null
    member_limit: number | null
    start_date: Date | null
    status: $Enums.Status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Savings_circlesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    decription: string | null
    owner_id: string | null
    contribution_amount: Decimal | null
    currency: string | null
    frequency: $Enums.Frequency | null
    member_limit: number | null
    start_date: Date | null
    status: $Enums.Status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Savings_circlesCountAggregateOutputType = {
    id: number
    name: number
    decription: number
    owner_id: number
    contribution_amount: number
    currency: number
    frequency: number
    member_limit: number
    start_date: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Savings_circlesAvgAggregateInputType = {
    contribution_amount?: true
    member_limit?: true
  }

  export type Savings_circlesSumAggregateInputType = {
    contribution_amount?: true
    member_limit?: true
  }

  export type Savings_circlesMinAggregateInputType = {
    id?: true
    name?: true
    decription?: true
    owner_id?: true
    contribution_amount?: true
    currency?: true
    frequency?: true
    member_limit?: true
    start_date?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Savings_circlesMaxAggregateInputType = {
    id?: true
    name?: true
    decription?: true
    owner_id?: true
    contribution_amount?: true
    currency?: true
    frequency?: true
    member_limit?: true
    start_date?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Savings_circlesCountAggregateInputType = {
    id?: true
    name?: true
    decription?: true
    owner_id?: true
    contribution_amount?: true
    currency?: true
    frequency?: true
    member_limit?: true
    start_date?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Savings_circlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which savings_circles to aggregate.
     */
    where?: savings_circlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of savings_circles to fetch.
     */
    orderBy?: savings_circlesOrderByWithRelationInput | savings_circlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: savings_circlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` savings_circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` savings_circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned savings_circles
    **/
    _count?: true | Savings_circlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Savings_circlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Savings_circlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Savings_circlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Savings_circlesMaxAggregateInputType
  }

  export type GetSavings_circlesAggregateType<T extends Savings_circlesAggregateArgs> = {
        [P in keyof T & keyof AggregateSavings_circles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavings_circles[P]>
      : GetScalarType<T[P], AggregateSavings_circles[P]>
  }




  export type savings_circlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: savings_circlesWhereInput
    orderBy?: savings_circlesOrderByWithAggregationInput | savings_circlesOrderByWithAggregationInput[]
    by: Savings_circlesScalarFieldEnum[] | Savings_circlesScalarFieldEnum
    having?: savings_circlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Savings_circlesCountAggregateInputType | true
    _avg?: Savings_circlesAvgAggregateInputType
    _sum?: Savings_circlesSumAggregateInputType
    _min?: Savings_circlesMinAggregateInputType
    _max?: Savings_circlesMaxAggregateInputType
  }

  export type Savings_circlesGroupByOutputType = {
    id: string
    name: string
    decription: string
    owner_id: string
    contribution_amount: Decimal
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date
    status: $Enums.Status
    created_at: Date
    updated_at: Date
    _count: Savings_circlesCountAggregateOutputType | null
    _avg: Savings_circlesAvgAggregateOutputType | null
    _sum: Savings_circlesSumAggregateOutputType | null
    _min: Savings_circlesMinAggregateOutputType | null
    _max: Savings_circlesMaxAggregateOutputType | null
  }

  type GetSavings_circlesGroupByPayload<T extends savings_circlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Savings_circlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Savings_circlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Savings_circlesGroupByOutputType[P]>
            : GetScalarType<T[P], Savings_circlesGroupByOutputType[P]>
        }
      >
    >


  export type savings_circlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    decription?: boolean
    owner_id?: boolean
    contribution_amount?: boolean
    currency?: boolean
    frequency?: boolean
    member_limit?: boolean
    start_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    circle_members?: boolean | savings_circles$circle_membersArgs<ExtArgs>
    circle_invitations?: boolean | savings_circles$circle_invitationsArgs<ExtArgs>
    savings_schedules?: boolean | savings_circles$savings_schedulesArgs<ExtArgs>
    contributions?: boolean | savings_circles$contributionsArgs<ExtArgs>
    payouts?: boolean | savings_circles$payoutsArgs<ExtArgs>
  }, ExtArgs["result"]["savings_circles"]>

  export type savings_circlesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    decription?: boolean
    owner_id?: boolean
    contribution_amount?: boolean
    currency?: boolean
    frequency?: boolean
    member_limit?: boolean
    start_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savings_circles"]>

  export type savings_circlesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    decription?: boolean
    owner_id?: boolean
    contribution_amount?: boolean
    currency?: boolean
    frequency?: boolean
    member_limit?: boolean
    start_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savings_circles"]>

  export type savings_circlesSelectScalar = {
    id?: boolean
    name?: boolean
    decription?: boolean
    owner_id?: boolean
    contribution_amount?: boolean
    currency?: boolean
    frequency?: boolean
    member_limit?: boolean
    start_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type savings_circlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "decription" | "owner_id" | "contribution_amount" | "currency" | "frequency" | "member_limit" | "start_date" | "status" | "created_at" | "updated_at", ExtArgs["result"]["savings_circles"]>
  export type savings_circlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    circle_members?: boolean | savings_circles$circle_membersArgs<ExtArgs>
    circle_invitations?: boolean | savings_circles$circle_invitationsArgs<ExtArgs>
    savings_schedules?: boolean | savings_circles$savings_schedulesArgs<ExtArgs>
    contributions?: boolean | savings_circles$contributionsArgs<ExtArgs>
    payouts?: boolean | savings_circles$payoutsArgs<ExtArgs>
  }
  export type savings_circlesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type savings_circlesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $savings_circlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "savings_circles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      circle_members: Prisma.$circle_membersPayload<ExtArgs> | null
      circle_invitations: Prisma.$circle_invitationsPayload<ExtArgs> | null
      savings_schedules: Prisma.$savings_schedulesPayload<ExtArgs> | null
      contributions: Prisma.$contributionsPayload<ExtArgs> | null
      payouts: Prisma.$payoutsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      decription: string
      owner_id: string
      contribution_amount: Prisma.Decimal
      currency: string
      frequency: $Enums.Frequency
      member_limit: number
      start_date: Date
      status: $Enums.Status
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["savings_circles"]>
    composites: {}
  }

  type savings_circlesGetPayload<S extends boolean | null | undefined | savings_circlesDefaultArgs> = $Result.GetResult<Prisma.$savings_circlesPayload, S>

  type savings_circlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<savings_circlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Savings_circlesCountAggregateInputType | true
    }

  export interface savings_circlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['savings_circles'], meta: { name: 'savings_circles' } }
    /**
     * Find zero or one Savings_circles that matches the filter.
     * @param {savings_circlesFindUniqueArgs} args - Arguments to find a Savings_circles
     * @example
     * // Get one Savings_circles
     * const savings_circles = await prisma.savings_circles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends savings_circlesFindUniqueArgs>(args: SelectSubset<T, savings_circlesFindUniqueArgs<ExtArgs>>): Prisma__savings_circlesClient<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Savings_circles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {savings_circlesFindUniqueOrThrowArgs} args - Arguments to find a Savings_circles
     * @example
     * // Get one Savings_circles
     * const savings_circles = await prisma.savings_circles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends savings_circlesFindUniqueOrThrowArgs>(args: SelectSubset<T, savings_circlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__savings_circlesClient<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Savings_circles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savings_circlesFindFirstArgs} args - Arguments to find a Savings_circles
     * @example
     * // Get one Savings_circles
     * const savings_circles = await prisma.savings_circles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends savings_circlesFindFirstArgs>(args?: SelectSubset<T, savings_circlesFindFirstArgs<ExtArgs>>): Prisma__savings_circlesClient<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Savings_circles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savings_circlesFindFirstOrThrowArgs} args - Arguments to find a Savings_circles
     * @example
     * // Get one Savings_circles
     * const savings_circles = await prisma.savings_circles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends savings_circlesFindFirstOrThrowArgs>(args?: SelectSubset<T, savings_circlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__savings_circlesClient<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Savings_circles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savings_circlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Savings_circles
     * const savings_circles = await prisma.savings_circles.findMany()
     * 
     * // Get first 10 Savings_circles
     * const savings_circles = await prisma.savings_circles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savings_circlesWithIdOnly = await prisma.savings_circles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends savings_circlesFindManyArgs>(args?: SelectSubset<T, savings_circlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Savings_circles.
     * @param {savings_circlesCreateArgs} args - Arguments to create a Savings_circles.
     * @example
     * // Create one Savings_circles
     * const Savings_circles = await prisma.savings_circles.create({
     *   data: {
     *     // ... data to create a Savings_circles
     *   }
     * })
     * 
     */
    create<T extends savings_circlesCreateArgs>(args: SelectSubset<T, savings_circlesCreateArgs<ExtArgs>>): Prisma__savings_circlesClient<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Savings_circles.
     * @param {savings_circlesCreateManyArgs} args - Arguments to create many Savings_circles.
     * @example
     * // Create many Savings_circles
     * const savings_circles = await prisma.savings_circles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends savings_circlesCreateManyArgs>(args?: SelectSubset<T, savings_circlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Savings_circles and returns the data saved in the database.
     * @param {savings_circlesCreateManyAndReturnArgs} args - Arguments to create many Savings_circles.
     * @example
     * // Create many Savings_circles
     * const savings_circles = await prisma.savings_circles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Savings_circles and only return the `id`
     * const savings_circlesWithIdOnly = await prisma.savings_circles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends savings_circlesCreateManyAndReturnArgs>(args?: SelectSubset<T, savings_circlesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Savings_circles.
     * @param {savings_circlesDeleteArgs} args - Arguments to delete one Savings_circles.
     * @example
     * // Delete one Savings_circles
     * const Savings_circles = await prisma.savings_circles.delete({
     *   where: {
     *     // ... filter to delete one Savings_circles
     *   }
     * })
     * 
     */
    delete<T extends savings_circlesDeleteArgs>(args: SelectSubset<T, savings_circlesDeleteArgs<ExtArgs>>): Prisma__savings_circlesClient<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Savings_circles.
     * @param {savings_circlesUpdateArgs} args - Arguments to update one Savings_circles.
     * @example
     * // Update one Savings_circles
     * const savings_circles = await prisma.savings_circles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends savings_circlesUpdateArgs>(args: SelectSubset<T, savings_circlesUpdateArgs<ExtArgs>>): Prisma__savings_circlesClient<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Savings_circles.
     * @param {savings_circlesDeleteManyArgs} args - Arguments to filter Savings_circles to delete.
     * @example
     * // Delete a few Savings_circles
     * const { count } = await prisma.savings_circles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends savings_circlesDeleteManyArgs>(args?: SelectSubset<T, savings_circlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Savings_circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savings_circlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Savings_circles
     * const savings_circles = await prisma.savings_circles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends savings_circlesUpdateManyArgs>(args: SelectSubset<T, savings_circlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Savings_circles and returns the data updated in the database.
     * @param {savings_circlesUpdateManyAndReturnArgs} args - Arguments to update many Savings_circles.
     * @example
     * // Update many Savings_circles
     * const savings_circles = await prisma.savings_circles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Savings_circles and only return the `id`
     * const savings_circlesWithIdOnly = await prisma.savings_circles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends savings_circlesUpdateManyAndReturnArgs>(args: SelectSubset<T, savings_circlesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Savings_circles.
     * @param {savings_circlesUpsertArgs} args - Arguments to update or create a Savings_circles.
     * @example
     * // Update or create a Savings_circles
     * const savings_circles = await prisma.savings_circles.upsert({
     *   create: {
     *     // ... data to create a Savings_circles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Savings_circles we want to update
     *   }
     * })
     */
    upsert<T extends savings_circlesUpsertArgs>(args: SelectSubset<T, savings_circlesUpsertArgs<ExtArgs>>): Prisma__savings_circlesClient<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Savings_circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savings_circlesCountArgs} args - Arguments to filter Savings_circles to count.
     * @example
     * // Count the number of Savings_circles
     * const count = await prisma.savings_circles.count({
     *   where: {
     *     // ... the filter for the Savings_circles we want to count
     *   }
     * })
    **/
    count<T extends savings_circlesCountArgs>(
      args?: Subset<T, savings_circlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Savings_circlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Savings_circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Savings_circlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Savings_circlesAggregateArgs>(args: Subset<T, Savings_circlesAggregateArgs>): Prisma.PrismaPromise<GetSavings_circlesAggregateType<T>>

    /**
     * Group by Savings_circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savings_circlesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends savings_circlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: savings_circlesGroupByArgs['orderBy'] }
        : { orderBy?: savings_circlesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, savings_circlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavings_circlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the savings_circles model
   */
  readonly fields: savings_circlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for savings_circles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__savings_circlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    circle_members<T extends savings_circles$circle_membersArgs<ExtArgs> = {}>(args?: Subset<T, savings_circles$circle_membersArgs<ExtArgs>>): Prisma__circle_membersClient<$Result.GetResult<Prisma.$circle_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    circle_invitations<T extends savings_circles$circle_invitationsArgs<ExtArgs> = {}>(args?: Subset<T, savings_circles$circle_invitationsArgs<ExtArgs>>): Prisma__circle_invitationsClient<$Result.GetResult<Prisma.$circle_invitationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    savings_schedules<T extends savings_circles$savings_schedulesArgs<ExtArgs> = {}>(args?: Subset<T, savings_circles$savings_schedulesArgs<ExtArgs>>): Prisma__savings_schedulesClient<$Result.GetResult<Prisma.$savings_schedulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contributions<T extends savings_circles$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, savings_circles$contributionsArgs<ExtArgs>>): Prisma__contributionsClient<$Result.GetResult<Prisma.$contributionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payouts<T extends savings_circles$payoutsArgs<ExtArgs> = {}>(args?: Subset<T, savings_circles$payoutsArgs<ExtArgs>>): Prisma__payoutsClient<$Result.GetResult<Prisma.$payoutsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the savings_circles model
   */
  interface savings_circlesFieldRefs {
    readonly id: FieldRef<"savings_circles", 'String'>
    readonly name: FieldRef<"savings_circles", 'String'>
    readonly decription: FieldRef<"savings_circles", 'String'>
    readonly owner_id: FieldRef<"savings_circles", 'String'>
    readonly contribution_amount: FieldRef<"savings_circles", 'Decimal'>
    readonly currency: FieldRef<"savings_circles", 'String'>
    readonly frequency: FieldRef<"savings_circles", 'Frequency'>
    readonly member_limit: FieldRef<"savings_circles", 'Int'>
    readonly start_date: FieldRef<"savings_circles", 'DateTime'>
    readonly status: FieldRef<"savings_circles", 'Status'>
    readonly created_at: FieldRef<"savings_circles", 'DateTime'>
    readonly updated_at: FieldRef<"savings_circles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * savings_circles findUnique
   */
  export type savings_circlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_circles
     */
    select?: savings_circlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_circles
     */
    omit?: savings_circlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_circlesInclude<ExtArgs> | null
    /**
     * Filter, which savings_circles to fetch.
     */
    where: savings_circlesWhereUniqueInput
  }

  /**
   * savings_circles findUniqueOrThrow
   */
  export type savings_circlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_circles
     */
    select?: savings_circlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_circles
     */
    omit?: savings_circlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_circlesInclude<ExtArgs> | null
    /**
     * Filter, which savings_circles to fetch.
     */
    where: savings_circlesWhereUniqueInput
  }

  /**
   * savings_circles findFirst
   */
  export type savings_circlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_circles
     */
    select?: savings_circlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_circles
     */
    omit?: savings_circlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_circlesInclude<ExtArgs> | null
    /**
     * Filter, which savings_circles to fetch.
     */
    where?: savings_circlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of savings_circles to fetch.
     */
    orderBy?: savings_circlesOrderByWithRelationInput | savings_circlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for savings_circles.
     */
    cursor?: savings_circlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` savings_circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` savings_circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of savings_circles.
     */
    distinct?: Savings_circlesScalarFieldEnum | Savings_circlesScalarFieldEnum[]
  }

  /**
   * savings_circles findFirstOrThrow
   */
  export type savings_circlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_circles
     */
    select?: savings_circlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_circles
     */
    omit?: savings_circlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_circlesInclude<ExtArgs> | null
    /**
     * Filter, which savings_circles to fetch.
     */
    where?: savings_circlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of savings_circles to fetch.
     */
    orderBy?: savings_circlesOrderByWithRelationInput | savings_circlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for savings_circles.
     */
    cursor?: savings_circlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` savings_circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` savings_circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of savings_circles.
     */
    distinct?: Savings_circlesScalarFieldEnum | Savings_circlesScalarFieldEnum[]
  }

  /**
   * savings_circles findMany
   */
  export type savings_circlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_circles
     */
    select?: savings_circlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_circles
     */
    omit?: savings_circlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_circlesInclude<ExtArgs> | null
    /**
     * Filter, which savings_circles to fetch.
     */
    where?: savings_circlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of savings_circles to fetch.
     */
    orderBy?: savings_circlesOrderByWithRelationInput | savings_circlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing savings_circles.
     */
    cursor?: savings_circlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` savings_circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` savings_circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of savings_circles.
     */
    distinct?: Savings_circlesScalarFieldEnum | Savings_circlesScalarFieldEnum[]
  }

  /**
   * savings_circles create
   */
  export type savings_circlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_circles
     */
    select?: savings_circlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_circles
     */
    omit?: savings_circlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_circlesInclude<ExtArgs> | null
    /**
     * The data needed to create a savings_circles.
     */
    data: XOR<savings_circlesCreateInput, savings_circlesUncheckedCreateInput>
  }

  /**
   * savings_circles createMany
   */
  export type savings_circlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many savings_circles.
     */
    data: savings_circlesCreateManyInput | savings_circlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * savings_circles createManyAndReturn
   */
  export type savings_circlesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_circles
     */
    select?: savings_circlesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the savings_circles
     */
    omit?: savings_circlesOmit<ExtArgs> | null
    /**
     * The data used to create many savings_circles.
     */
    data: savings_circlesCreateManyInput | savings_circlesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_circlesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * savings_circles update
   */
  export type savings_circlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_circles
     */
    select?: savings_circlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_circles
     */
    omit?: savings_circlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_circlesInclude<ExtArgs> | null
    /**
     * The data needed to update a savings_circles.
     */
    data: XOR<savings_circlesUpdateInput, savings_circlesUncheckedUpdateInput>
    /**
     * Choose, which savings_circles to update.
     */
    where: savings_circlesWhereUniqueInput
  }

  /**
   * savings_circles updateMany
   */
  export type savings_circlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update savings_circles.
     */
    data: XOR<savings_circlesUpdateManyMutationInput, savings_circlesUncheckedUpdateManyInput>
    /**
     * Filter which savings_circles to update
     */
    where?: savings_circlesWhereInput
    /**
     * Limit how many savings_circles to update.
     */
    limit?: number
  }

  /**
   * savings_circles updateManyAndReturn
   */
  export type savings_circlesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_circles
     */
    select?: savings_circlesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the savings_circles
     */
    omit?: savings_circlesOmit<ExtArgs> | null
    /**
     * The data used to update savings_circles.
     */
    data: XOR<savings_circlesUpdateManyMutationInput, savings_circlesUncheckedUpdateManyInput>
    /**
     * Filter which savings_circles to update
     */
    where?: savings_circlesWhereInput
    /**
     * Limit how many savings_circles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_circlesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * savings_circles upsert
   */
  export type savings_circlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_circles
     */
    select?: savings_circlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_circles
     */
    omit?: savings_circlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_circlesInclude<ExtArgs> | null
    /**
     * The filter to search for the savings_circles to update in case it exists.
     */
    where: savings_circlesWhereUniqueInput
    /**
     * In case the savings_circles found by the `where` argument doesn't exist, create a new savings_circles with this data.
     */
    create: XOR<savings_circlesCreateInput, savings_circlesUncheckedCreateInput>
    /**
     * In case the savings_circles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<savings_circlesUpdateInput, savings_circlesUncheckedUpdateInput>
  }

  /**
   * savings_circles delete
   */
  export type savings_circlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_circles
     */
    select?: savings_circlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_circles
     */
    omit?: savings_circlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_circlesInclude<ExtArgs> | null
    /**
     * Filter which savings_circles to delete.
     */
    where: savings_circlesWhereUniqueInput
  }

  /**
   * savings_circles deleteMany
   */
  export type savings_circlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which savings_circles to delete
     */
    where?: savings_circlesWhereInput
    /**
     * Limit how many savings_circles to delete.
     */
    limit?: number
  }

  /**
   * savings_circles.circle_members
   */
  export type savings_circles$circle_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_members
     */
    select?: circle_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_members
     */
    omit?: circle_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_membersInclude<ExtArgs> | null
    where?: circle_membersWhereInput
  }

  /**
   * savings_circles.circle_invitations
   */
  export type savings_circles$circle_invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_invitations
     */
    select?: circle_invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_invitations
     */
    omit?: circle_invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_invitationsInclude<ExtArgs> | null
    where?: circle_invitationsWhereInput
  }

  /**
   * savings_circles.savings_schedules
   */
  export type savings_circles$savings_schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_schedules
     */
    select?: savings_schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_schedules
     */
    omit?: savings_schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_schedulesInclude<ExtArgs> | null
    where?: savings_schedulesWhereInput
  }

  /**
   * savings_circles.contributions
   */
  export type savings_circles$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contributions
     */
    select?: contributionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contributions
     */
    omit?: contributionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contributionsInclude<ExtArgs> | null
    where?: contributionsWhereInput
  }

  /**
   * savings_circles.payouts
   */
  export type savings_circles$payoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payouts
     */
    select?: payoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payouts
     */
    omit?: payoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payoutsInclude<ExtArgs> | null
    where?: payoutsWhereInput
  }

  /**
   * savings_circles without action
   */
  export type savings_circlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_circles
     */
    select?: savings_circlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_circles
     */
    omit?: savings_circlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_circlesInclude<ExtArgs> | null
  }


  /**
   * Model circle_members
   */

  export type AggregateCircle_members = {
    _count: Circle_membersCountAggregateOutputType | null
    _min: Circle_membersMinAggregateOutputType | null
    _max: Circle_membersMaxAggregateOutputType | null
  }

  export type Circle_membersMinAggregateOutputType = {
    id: string | null
    circle_id: string | null
    user_id: string | null
    role: $Enums.Role | null
    status: $Enums.Circle_Status | null
    joined_at: Date | null
    left_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Circle_membersMaxAggregateOutputType = {
    id: string | null
    circle_id: string | null
    user_id: string | null
    role: $Enums.Role | null
    status: $Enums.Circle_Status | null
    joined_at: Date | null
    left_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Circle_membersCountAggregateOutputType = {
    id: number
    circle_id: number
    user_id: number
    role: number
    status: number
    joined_at: number
    left_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Circle_membersMinAggregateInputType = {
    id?: true
    circle_id?: true
    user_id?: true
    role?: true
    status?: true
    joined_at?: true
    left_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Circle_membersMaxAggregateInputType = {
    id?: true
    circle_id?: true
    user_id?: true
    role?: true
    status?: true
    joined_at?: true
    left_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Circle_membersCountAggregateInputType = {
    id?: true
    circle_id?: true
    user_id?: true
    role?: true
    status?: true
    joined_at?: true
    left_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Circle_membersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which circle_members to aggregate.
     */
    where?: circle_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of circle_members to fetch.
     */
    orderBy?: circle_membersOrderByWithRelationInput | circle_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: circle_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` circle_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` circle_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned circle_members
    **/
    _count?: true | Circle_membersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Circle_membersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Circle_membersMaxAggregateInputType
  }

  export type GetCircle_membersAggregateType<T extends Circle_membersAggregateArgs> = {
        [P in keyof T & keyof AggregateCircle_members]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCircle_members[P]>
      : GetScalarType<T[P], AggregateCircle_members[P]>
  }




  export type circle_membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: circle_membersWhereInput
    orderBy?: circle_membersOrderByWithAggregationInput | circle_membersOrderByWithAggregationInput[]
    by: Circle_membersScalarFieldEnum[] | Circle_membersScalarFieldEnum
    having?: circle_membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Circle_membersCountAggregateInputType | true
    _min?: Circle_membersMinAggregateInputType
    _max?: Circle_membersMaxAggregateInputType
  }

  export type Circle_membersGroupByOutputType = {
    id: string
    circle_id: string
    user_id: string
    role: $Enums.Role
    status: $Enums.Circle_Status
    joined_at: Date
    left_at: Date | null
    created_at: Date
    updated_at: Date
    _count: Circle_membersCountAggregateOutputType | null
    _min: Circle_membersMinAggregateOutputType | null
    _max: Circle_membersMaxAggregateOutputType | null
  }

  type GetCircle_membersGroupByPayload<T extends circle_membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Circle_membersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Circle_membersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Circle_membersGroupByOutputType[P]>
            : GetScalarType<T[P], Circle_membersGroupByOutputType[P]>
        }
      >
    >


  export type circle_membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    user_id?: boolean
    role?: boolean
    status?: boolean
    joined_at?: boolean
    left_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    payouts?: boolean | circle_members$payoutsArgs<ExtArgs>
  }, ExtArgs["result"]["circle_members"]>

  export type circle_membersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    user_id?: boolean
    role?: boolean
    status?: boolean
    joined_at?: boolean
    left_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle_members"]>

  export type circle_membersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    user_id?: boolean
    role?: boolean
    status?: boolean
    joined_at?: boolean
    left_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle_members"]>

  export type circle_membersSelectScalar = {
    id?: boolean
    circle_id?: boolean
    user_id?: boolean
    role?: boolean
    status?: boolean
    joined_at?: boolean
    left_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type circle_membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "circle_id" | "user_id" | "role" | "status" | "joined_at" | "left_at" | "created_at" | "updated_at", ExtArgs["result"]["circle_members"]>
  export type circle_membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    payouts?: boolean | circle_members$payoutsArgs<ExtArgs>
  }
  export type circle_membersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type circle_membersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $circle_membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "circle_members"
    objects: {
      savings_circle: Prisma.$savings_circlesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
      payouts: Prisma.$payoutsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      circle_id: string
      user_id: string
      role: $Enums.Role
      status: $Enums.Circle_Status
      joined_at: Date
      left_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["circle_members"]>
    composites: {}
  }

  type circle_membersGetPayload<S extends boolean | null | undefined | circle_membersDefaultArgs> = $Result.GetResult<Prisma.$circle_membersPayload, S>

  type circle_membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<circle_membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Circle_membersCountAggregateInputType | true
    }

  export interface circle_membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['circle_members'], meta: { name: 'circle_members' } }
    /**
     * Find zero or one Circle_members that matches the filter.
     * @param {circle_membersFindUniqueArgs} args - Arguments to find a Circle_members
     * @example
     * // Get one Circle_members
     * const circle_members = await prisma.circle_members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends circle_membersFindUniqueArgs>(args: SelectSubset<T, circle_membersFindUniqueArgs<ExtArgs>>): Prisma__circle_membersClient<$Result.GetResult<Prisma.$circle_membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Circle_members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {circle_membersFindUniqueOrThrowArgs} args - Arguments to find a Circle_members
     * @example
     * // Get one Circle_members
     * const circle_members = await prisma.circle_members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends circle_membersFindUniqueOrThrowArgs>(args: SelectSubset<T, circle_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__circle_membersClient<$Result.GetResult<Prisma.$circle_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circle_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {circle_membersFindFirstArgs} args - Arguments to find a Circle_members
     * @example
     * // Get one Circle_members
     * const circle_members = await prisma.circle_members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends circle_membersFindFirstArgs>(args?: SelectSubset<T, circle_membersFindFirstArgs<ExtArgs>>): Prisma__circle_membersClient<$Result.GetResult<Prisma.$circle_membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circle_members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {circle_membersFindFirstOrThrowArgs} args - Arguments to find a Circle_members
     * @example
     * // Get one Circle_members
     * const circle_members = await prisma.circle_members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends circle_membersFindFirstOrThrowArgs>(args?: SelectSubset<T, circle_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__circle_membersClient<$Result.GetResult<Prisma.$circle_membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Circle_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {circle_membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Circle_members
     * const circle_members = await prisma.circle_members.findMany()
     * 
     * // Get first 10 Circle_members
     * const circle_members = await prisma.circle_members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const circle_membersWithIdOnly = await prisma.circle_members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends circle_membersFindManyArgs>(args?: SelectSubset<T, circle_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$circle_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Circle_members.
     * @param {circle_membersCreateArgs} args - Arguments to create a Circle_members.
     * @example
     * // Create one Circle_members
     * const Circle_members = await prisma.circle_members.create({
     *   data: {
     *     // ... data to create a Circle_members
     *   }
     * })
     * 
     */
    create<T extends circle_membersCreateArgs>(args: SelectSubset<T, circle_membersCreateArgs<ExtArgs>>): Prisma__circle_membersClient<$Result.GetResult<Prisma.$circle_membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Circle_members.
     * @param {circle_membersCreateManyArgs} args - Arguments to create many Circle_members.
     * @example
     * // Create many Circle_members
     * const circle_members = await prisma.circle_members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends circle_membersCreateManyArgs>(args?: SelectSubset<T, circle_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Circle_members and returns the data saved in the database.
     * @param {circle_membersCreateManyAndReturnArgs} args - Arguments to create many Circle_members.
     * @example
     * // Create many Circle_members
     * const circle_members = await prisma.circle_members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Circle_members and only return the `id`
     * const circle_membersWithIdOnly = await prisma.circle_members.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends circle_membersCreateManyAndReturnArgs>(args?: SelectSubset<T, circle_membersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$circle_membersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Circle_members.
     * @param {circle_membersDeleteArgs} args - Arguments to delete one Circle_members.
     * @example
     * // Delete one Circle_members
     * const Circle_members = await prisma.circle_members.delete({
     *   where: {
     *     // ... filter to delete one Circle_members
     *   }
     * })
     * 
     */
    delete<T extends circle_membersDeleteArgs>(args: SelectSubset<T, circle_membersDeleteArgs<ExtArgs>>): Prisma__circle_membersClient<$Result.GetResult<Prisma.$circle_membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Circle_members.
     * @param {circle_membersUpdateArgs} args - Arguments to update one Circle_members.
     * @example
     * // Update one Circle_members
     * const circle_members = await prisma.circle_members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends circle_membersUpdateArgs>(args: SelectSubset<T, circle_membersUpdateArgs<ExtArgs>>): Prisma__circle_membersClient<$Result.GetResult<Prisma.$circle_membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Circle_members.
     * @param {circle_membersDeleteManyArgs} args - Arguments to filter Circle_members to delete.
     * @example
     * // Delete a few Circle_members
     * const { count } = await prisma.circle_members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends circle_membersDeleteManyArgs>(args?: SelectSubset<T, circle_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circle_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {circle_membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Circle_members
     * const circle_members = await prisma.circle_members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends circle_membersUpdateManyArgs>(args: SelectSubset<T, circle_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circle_members and returns the data updated in the database.
     * @param {circle_membersUpdateManyAndReturnArgs} args - Arguments to update many Circle_members.
     * @example
     * // Update many Circle_members
     * const circle_members = await prisma.circle_members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Circle_members and only return the `id`
     * const circle_membersWithIdOnly = await prisma.circle_members.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends circle_membersUpdateManyAndReturnArgs>(args: SelectSubset<T, circle_membersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$circle_membersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Circle_members.
     * @param {circle_membersUpsertArgs} args - Arguments to update or create a Circle_members.
     * @example
     * // Update or create a Circle_members
     * const circle_members = await prisma.circle_members.upsert({
     *   create: {
     *     // ... data to create a Circle_members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Circle_members we want to update
     *   }
     * })
     */
    upsert<T extends circle_membersUpsertArgs>(args: SelectSubset<T, circle_membersUpsertArgs<ExtArgs>>): Prisma__circle_membersClient<$Result.GetResult<Prisma.$circle_membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Circle_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {circle_membersCountArgs} args - Arguments to filter Circle_members to count.
     * @example
     * // Count the number of Circle_members
     * const count = await prisma.circle_members.count({
     *   where: {
     *     // ... the filter for the Circle_members we want to count
     *   }
     * })
    **/
    count<T extends circle_membersCountArgs>(
      args?: Subset<T, circle_membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Circle_membersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Circle_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Circle_membersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Circle_membersAggregateArgs>(args: Subset<T, Circle_membersAggregateArgs>): Prisma.PrismaPromise<GetCircle_membersAggregateType<T>>

    /**
     * Group by Circle_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {circle_membersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends circle_membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: circle_membersGroupByArgs['orderBy'] }
        : { orderBy?: circle_membersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, circle_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCircle_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the circle_members model
   */
  readonly fields: circle_membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for circle_members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__circle_membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savings_circle<T extends savings_circlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, savings_circlesDefaultArgs<ExtArgs>>): Prisma__savings_circlesClient<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payouts<T extends circle_members$payoutsArgs<ExtArgs> = {}>(args?: Subset<T, circle_members$payoutsArgs<ExtArgs>>): Prisma__payoutsClient<$Result.GetResult<Prisma.$payoutsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the circle_members model
   */
  interface circle_membersFieldRefs {
    readonly id: FieldRef<"circle_members", 'String'>
    readonly circle_id: FieldRef<"circle_members", 'String'>
    readonly user_id: FieldRef<"circle_members", 'String'>
    readonly role: FieldRef<"circle_members", 'Role'>
    readonly status: FieldRef<"circle_members", 'Circle_Status'>
    readonly joined_at: FieldRef<"circle_members", 'DateTime'>
    readonly left_at: FieldRef<"circle_members", 'DateTime'>
    readonly created_at: FieldRef<"circle_members", 'DateTime'>
    readonly updated_at: FieldRef<"circle_members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * circle_members findUnique
   */
  export type circle_membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_members
     */
    select?: circle_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_members
     */
    omit?: circle_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_membersInclude<ExtArgs> | null
    /**
     * Filter, which circle_members to fetch.
     */
    where: circle_membersWhereUniqueInput
  }

  /**
   * circle_members findUniqueOrThrow
   */
  export type circle_membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_members
     */
    select?: circle_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_members
     */
    omit?: circle_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_membersInclude<ExtArgs> | null
    /**
     * Filter, which circle_members to fetch.
     */
    where: circle_membersWhereUniqueInput
  }

  /**
   * circle_members findFirst
   */
  export type circle_membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_members
     */
    select?: circle_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_members
     */
    omit?: circle_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_membersInclude<ExtArgs> | null
    /**
     * Filter, which circle_members to fetch.
     */
    where?: circle_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of circle_members to fetch.
     */
    orderBy?: circle_membersOrderByWithRelationInput | circle_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for circle_members.
     */
    cursor?: circle_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` circle_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` circle_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of circle_members.
     */
    distinct?: Circle_membersScalarFieldEnum | Circle_membersScalarFieldEnum[]
  }

  /**
   * circle_members findFirstOrThrow
   */
  export type circle_membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_members
     */
    select?: circle_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_members
     */
    omit?: circle_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_membersInclude<ExtArgs> | null
    /**
     * Filter, which circle_members to fetch.
     */
    where?: circle_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of circle_members to fetch.
     */
    orderBy?: circle_membersOrderByWithRelationInput | circle_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for circle_members.
     */
    cursor?: circle_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` circle_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` circle_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of circle_members.
     */
    distinct?: Circle_membersScalarFieldEnum | Circle_membersScalarFieldEnum[]
  }

  /**
   * circle_members findMany
   */
  export type circle_membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_members
     */
    select?: circle_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_members
     */
    omit?: circle_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_membersInclude<ExtArgs> | null
    /**
     * Filter, which circle_members to fetch.
     */
    where?: circle_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of circle_members to fetch.
     */
    orderBy?: circle_membersOrderByWithRelationInput | circle_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing circle_members.
     */
    cursor?: circle_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` circle_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` circle_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of circle_members.
     */
    distinct?: Circle_membersScalarFieldEnum | Circle_membersScalarFieldEnum[]
  }

  /**
   * circle_members create
   */
  export type circle_membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_members
     */
    select?: circle_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_members
     */
    omit?: circle_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_membersInclude<ExtArgs> | null
    /**
     * The data needed to create a circle_members.
     */
    data: XOR<circle_membersCreateInput, circle_membersUncheckedCreateInput>
  }

  /**
   * circle_members createMany
   */
  export type circle_membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many circle_members.
     */
    data: circle_membersCreateManyInput | circle_membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * circle_members createManyAndReturn
   */
  export type circle_membersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_members
     */
    select?: circle_membersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the circle_members
     */
    omit?: circle_membersOmit<ExtArgs> | null
    /**
     * The data used to create many circle_members.
     */
    data: circle_membersCreateManyInput | circle_membersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_membersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * circle_members update
   */
  export type circle_membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_members
     */
    select?: circle_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_members
     */
    omit?: circle_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_membersInclude<ExtArgs> | null
    /**
     * The data needed to update a circle_members.
     */
    data: XOR<circle_membersUpdateInput, circle_membersUncheckedUpdateInput>
    /**
     * Choose, which circle_members to update.
     */
    where: circle_membersWhereUniqueInput
  }

  /**
   * circle_members updateMany
   */
  export type circle_membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update circle_members.
     */
    data: XOR<circle_membersUpdateManyMutationInput, circle_membersUncheckedUpdateManyInput>
    /**
     * Filter which circle_members to update
     */
    where?: circle_membersWhereInput
    /**
     * Limit how many circle_members to update.
     */
    limit?: number
  }

  /**
   * circle_members updateManyAndReturn
   */
  export type circle_membersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_members
     */
    select?: circle_membersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the circle_members
     */
    omit?: circle_membersOmit<ExtArgs> | null
    /**
     * The data used to update circle_members.
     */
    data: XOR<circle_membersUpdateManyMutationInput, circle_membersUncheckedUpdateManyInput>
    /**
     * Filter which circle_members to update
     */
    where?: circle_membersWhereInput
    /**
     * Limit how many circle_members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_membersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * circle_members upsert
   */
  export type circle_membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_members
     */
    select?: circle_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_members
     */
    omit?: circle_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_membersInclude<ExtArgs> | null
    /**
     * The filter to search for the circle_members to update in case it exists.
     */
    where: circle_membersWhereUniqueInput
    /**
     * In case the circle_members found by the `where` argument doesn't exist, create a new circle_members with this data.
     */
    create: XOR<circle_membersCreateInput, circle_membersUncheckedCreateInput>
    /**
     * In case the circle_members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<circle_membersUpdateInput, circle_membersUncheckedUpdateInput>
  }

  /**
   * circle_members delete
   */
  export type circle_membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_members
     */
    select?: circle_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_members
     */
    omit?: circle_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_membersInclude<ExtArgs> | null
    /**
     * Filter which circle_members to delete.
     */
    where: circle_membersWhereUniqueInput
  }

  /**
   * circle_members deleteMany
   */
  export type circle_membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which circle_members to delete
     */
    where?: circle_membersWhereInput
    /**
     * Limit how many circle_members to delete.
     */
    limit?: number
  }

  /**
   * circle_members.payouts
   */
  export type circle_members$payoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payouts
     */
    select?: payoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payouts
     */
    omit?: payoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payoutsInclude<ExtArgs> | null
    where?: payoutsWhereInput
  }

  /**
   * circle_members without action
   */
  export type circle_membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_members
     */
    select?: circle_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_members
     */
    omit?: circle_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_membersInclude<ExtArgs> | null
  }


  /**
   * Model circle_invitations
   */

  export type AggregateCircle_invitations = {
    _count: Circle_invitationsCountAggregateOutputType | null
    _min: Circle_invitationsMinAggregateOutputType | null
    _max: Circle_invitationsMaxAggregateOutputType | null
  }

  export type Circle_invitationsMinAggregateOutputType = {
    id: string | null
    circle_id: string | null
    invited_by: string | null
    email: string | null
    token_hash: string | null
    status: $Enums.Status | null
    expires_at: Date | null
    accepted_at: Date | null
    created_at: Date | null
  }

  export type Circle_invitationsMaxAggregateOutputType = {
    id: string | null
    circle_id: string | null
    invited_by: string | null
    email: string | null
    token_hash: string | null
    status: $Enums.Status | null
    expires_at: Date | null
    accepted_at: Date | null
    created_at: Date | null
  }

  export type Circle_invitationsCountAggregateOutputType = {
    id: number
    circle_id: number
    invited_by: number
    email: number
    token_hash: number
    status: number
    expires_at: number
    accepted_at: number
    created_at: number
    _all: number
  }


  export type Circle_invitationsMinAggregateInputType = {
    id?: true
    circle_id?: true
    invited_by?: true
    email?: true
    token_hash?: true
    status?: true
    expires_at?: true
    accepted_at?: true
    created_at?: true
  }

  export type Circle_invitationsMaxAggregateInputType = {
    id?: true
    circle_id?: true
    invited_by?: true
    email?: true
    token_hash?: true
    status?: true
    expires_at?: true
    accepted_at?: true
    created_at?: true
  }

  export type Circle_invitationsCountAggregateInputType = {
    id?: true
    circle_id?: true
    invited_by?: true
    email?: true
    token_hash?: true
    status?: true
    expires_at?: true
    accepted_at?: true
    created_at?: true
    _all?: true
  }

  export type Circle_invitationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which circle_invitations to aggregate.
     */
    where?: circle_invitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of circle_invitations to fetch.
     */
    orderBy?: circle_invitationsOrderByWithRelationInput | circle_invitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: circle_invitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` circle_invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` circle_invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned circle_invitations
    **/
    _count?: true | Circle_invitationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Circle_invitationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Circle_invitationsMaxAggregateInputType
  }

  export type GetCircle_invitationsAggregateType<T extends Circle_invitationsAggregateArgs> = {
        [P in keyof T & keyof AggregateCircle_invitations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCircle_invitations[P]>
      : GetScalarType<T[P], AggregateCircle_invitations[P]>
  }




  export type circle_invitationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: circle_invitationsWhereInput
    orderBy?: circle_invitationsOrderByWithAggregationInput | circle_invitationsOrderByWithAggregationInput[]
    by: Circle_invitationsScalarFieldEnum[] | Circle_invitationsScalarFieldEnum
    having?: circle_invitationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Circle_invitationsCountAggregateInputType | true
    _min?: Circle_invitationsMinAggregateInputType
    _max?: Circle_invitationsMaxAggregateInputType
  }

  export type Circle_invitationsGroupByOutputType = {
    id: string
    circle_id: string
    invited_by: string
    email: string
    token_hash: string
    status: $Enums.Status
    expires_at: Date
    accepted_at: Date | null
    created_at: Date
    _count: Circle_invitationsCountAggregateOutputType | null
    _min: Circle_invitationsMinAggregateOutputType | null
    _max: Circle_invitationsMaxAggregateOutputType | null
  }

  type GetCircle_invitationsGroupByPayload<T extends circle_invitationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Circle_invitationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Circle_invitationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Circle_invitationsGroupByOutputType[P]>
            : GetScalarType<T[P], Circle_invitationsGroupByOutputType[P]>
        }
      >
    >


  export type circle_invitationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    invited_by?: boolean
    email?: boolean
    token_hash?: boolean
    status?: boolean
    expires_at?: boolean
    accepted_at?: boolean
    created_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle_invitations"]>

  export type circle_invitationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    invited_by?: boolean
    email?: boolean
    token_hash?: boolean
    status?: boolean
    expires_at?: boolean
    accepted_at?: boolean
    created_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle_invitations"]>

  export type circle_invitationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    invited_by?: boolean
    email?: boolean
    token_hash?: boolean
    status?: boolean
    expires_at?: boolean
    accepted_at?: boolean
    created_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle_invitations"]>

  export type circle_invitationsSelectScalar = {
    id?: boolean
    circle_id?: boolean
    invited_by?: boolean
    email?: boolean
    token_hash?: boolean
    status?: boolean
    expires_at?: boolean
    accepted_at?: boolean
    created_at?: boolean
  }

  export type circle_invitationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "circle_id" | "invited_by" | "email" | "token_hash" | "status" | "expires_at" | "accepted_at" | "created_at", ExtArgs["result"]["circle_invitations"]>
  export type circle_invitationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type circle_invitationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type circle_invitationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $circle_invitationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "circle_invitations"
    objects: {
      savings_circle: Prisma.$savings_circlesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      circle_id: string
      invited_by: string
      email: string
      token_hash: string
      status: $Enums.Status
      expires_at: Date
      accepted_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["circle_invitations"]>
    composites: {}
  }

  type circle_invitationsGetPayload<S extends boolean | null | undefined | circle_invitationsDefaultArgs> = $Result.GetResult<Prisma.$circle_invitationsPayload, S>

  type circle_invitationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<circle_invitationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Circle_invitationsCountAggregateInputType | true
    }

  export interface circle_invitationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['circle_invitations'], meta: { name: 'circle_invitations' } }
    /**
     * Find zero or one Circle_invitations that matches the filter.
     * @param {circle_invitationsFindUniqueArgs} args - Arguments to find a Circle_invitations
     * @example
     * // Get one Circle_invitations
     * const circle_invitations = await prisma.circle_invitations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends circle_invitationsFindUniqueArgs>(args: SelectSubset<T, circle_invitationsFindUniqueArgs<ExtArgs>>): Prisma__circle_invitationsClient<$Result.GetResult<Prisma.$circle_invitationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Circle_invitations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {circle_invitationsFindUniqueOrThrowArgs} args - Arguments to find a Circle_invitations
     * @example
     * // Get one Circle_invitations
     * const circle_invitations = await prisma.circle_invitations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends circle_invitationsFindUniqueOrThrowArgs>(args: SelectSubset<T, circle_invitationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__circle_invitationsClient<$Result.GetResult<Prisma.$circle_invitationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circle_invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {circle_invitationsFindFirstArgs} args - Arguments to find a Circle_invitations
     * @example
     * // Get one Circle_invitations
     * const circle_invitations = await prisma.circle_invitations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends circle_invitationsFindFirstArgs>(args?: SelectSubset<T, circle_invitationsFindFirstArgs<ExtArgs>>): Prisma__circle_invitationsClient<$Result.GetResult<Prisma.$circle_invitationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circle_invitations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {circle_invitationsFindFirstOrThrowArgs} args - Arguments to find a Circle_invitations
     * @example
     * // Get one Circle_invitations
     * const circle_invitations = await prisma.circle_invitations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends circle_invitationsFindFirstOrThrowArgs>(args?: SelectSubset<T, circle_invitationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__circle_invitationsClient<$Result.GetResult<Prisma.$circle_invitationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Circle_invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {circle_invitationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Circle_invitations
     * const circle_invitations = await prisma.circle_invitations.findMany()
     * 
     * // Get first 10 Circle_invitations
     * const circle_invitations = await prisma.circle_invitations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const circle_invitationsWithIdOnly = await prisma.circle_invitations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends circle_invitationsFindManyArgs>(args?: SelectSubset<T, circle_invitationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$circle_invitationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Circle_invitations.
     * @param {circle_invitationsCreateArgs} args - Arguments to create a Circle_invitations.
     * @example
     * // Create one Circle_invitations
     * const Circle_invitations = await prisma.circle_invitations.create({
     *   data: {
     *     // ... data to create a Circle_invitations
     *   }
     * })
     * 
     */
    create<T extends circle_invitationsCreateArgs>(args: SelectSubset<T, circle_invitationsCreateArgs<ExtArgs>>): Prisma__circle_invitationsClient<$Result.GetResult<Prisma.$circle_invitationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Circle_invitations.
     * @param {circle_invitationsCreateManyArgs} args - Arguments to create many Circle_invitations.
     * @example
     * // Create many Circle_invitations
     * const circle_invitations = await prisma.circle_invitations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends circle_invitationsCreateManyArgs>(args?: SelectSubset<T, circle_invitationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Circle_invitations and returns the data saved in the database.
     * @param {circle_invitationsCreateManyAndReturnArgs} args - Arguments to create many Circle_invitations.
     * @example
     * // Create many Circle_invitations
     * const circle_invitations = await prisma.circle_invitations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Circle_invitations and only return the `id`
     * const circle_invitationsWithIdOnly = await prisma.circle_invitations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends circle_invitationsCreateManyAndReturnArgs>(args?: SelectSubset<T, circle_invitationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$circle_invitationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Circle_invitations.
     * @param {circle_invitationsDeleteArgs} args - Arguments to delete one Circle_invitations.
     * @example
     * // Delete one Circle_invitations
     * const Circle_invitations = await prisma.circle_invitations.delete({
     *   where: {
     *     // ... filter to delete one Circle_invitations
     *   }
     * })
     * 
     */
    delete<T extends circle_invitationsDeleteArgs>(args: SelectSubset<T, circle_invitationsDeleteArgs<ExtArgs>>): Prisma__circle_invitationsClient<$Result.GetResult<Prisma.$circle_invitationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Circle_invitations.
     * @param {circle_invitationsUpdateArgs} args - Arguments to update one Circle_invitations.
     * @example
     * // Update one Circle_invitations
     * const circle_invitations = await prisma.circle_invitations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends circle_invitationsUpdateArgs>(args: SelectSubset<T, circle_invitationsUpdateArgs<ExtArgs>>): Prisma__circle_invitationsClient<$Result.GetResult<Prisma.$circle_invitationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Circle_invitations.
     * @param {circle_invitationsDeleteManyArgs} args - Arguments to filter Circle_invitations to delete.
     * @example
     * // Delete a few Circle_invitations
     * const { count } = await prisma.circle_invitations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends circle_invitationsDeleteManyArgs>(args?: SelectSubset<T, circle_invitationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circle_invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {circle_invitationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Circle_invitations
     * const circle_invitations = await prisma.circle_invitations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends circle_invitationsUpdateManyArgs>(args: SelectSubset<T, circle_invitationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circle_invitations and returns the data updated in the database.
     * @param {circle_invitationsUpdateManyAndReturnArgs} args - Arguments to update many Circle_invitations.
     * @example
     * // Update many Circle_invitations
     * const circle_invitations = await prisma.circle_invitations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Circle_invitations and only return the `id`
     * const circle_invitationsWithIdOnly = await prisma.circle_invitations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends circle_invitationsUpdateManyAndReturnArgs>(args: SelectSubset<T, circle_invitationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$circle_invitationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Circle_invitations.
     * @param {circle_invitationsUpsertArgs} args - Arguments to update or create a Circle_invitations.
     * @example
     * // Update or create a Circle_invitations
     * const circle_invitations = await prisma.circle_invitations.upsert({
     *   create: {
     *     // ... data to create a Circle_invitations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Circle_invitations we want to update
     *   }
     * })
     */
    upsert<T extends circle_invitationsUpsertArgs>(args: SelectSubset<T, circle_invitationsUpsertArgs<ExtArgs>>): Prisma__circle_invitationsClient<$Result.GetResult<Prisma.$circle_invitationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Circle_invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {circle_invitationsCountArgs} args - Arguments to filter Circle_invitations to count.
     * @example
     * // Count the number of Circle_invitations
     * const count = await prisma.circle_invitations.count({
     *   where: {
     *     // ... the filter for the Circle_invitations we want to count
     *   }
     * })
    **/
    count<T extends circle_invitationsCountArgs>(
      args?: Subset<T, circle_invitationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Circle_invitationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Circle_invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Circle_invitationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Circle_invitationsAggregateArgs>(args: Subset<T, Circle_invitationsAggregateArgs>): Prisma.PrismaPromise<GetCircle_invitationsAggregateType<T>>

    /**
     * Group by Circle_invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {circle_invitationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends circle_invitationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: circle_invitationsGroupByArgs['orderBy'] }
        : { orderBy?: circle_invitationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, circle_invitationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCircle_invitationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the circle_invitations model
   */
  readonly fields: circle_invitationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for circle_invitations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__circle_invitationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savings_circle<T extends savings_circlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, savings_circlesDefaultArgs<ExtArgs>>): Prisma__savings_circlesClient<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the circle_invitations model
   */
  interface circle_invitationsFieldRefs {
    readonly id: FieldRef<"circle_invitations", 'String'>
    readonly circle_id: FieldRef<"circle_invitations", 'String'>
    readonly invited_by: FieldRef<"circle_invitations", 'String'>
    readonly email: FieldRef<"circle_invitations", 'String'>
    readonly token_hash: FieldRef<"circle_invitations", 'String'>
    readonly status: FieldRef<"circle_invitations", 'Status'>
    readonly expires_at: FieldRef<"circle_invitations", 'DateTime'>
    readonly accepted_at: FieldRef<"circle_invitations", 'DateTime'>
    readonly created_at: FieldRef<"circle_invitations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * circle_invitations findUnique
   */
  export type circle_invitationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_invitations
     */
    select?: circle_invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_invitations
     */
    omit?: circle_invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_invitationsInclude<ExtArgs> | null
    /**
     * Filter, which circle_invitations to fetch.
     */
    where: circle_invitationsWhereUniqueInput
  }

  /**
   * circle_invitations findUniqueOrThrow
   */
  export type circle_invitationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_invitations
     */
    select?: circle_invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_invitations
     */
    omit?: circle_invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_invitationsInclude<ExtArgs> | null
    /**
     * Filter, which circle_invitations to fetch.
     */
    where: circle_invitationsWhereUniqueInput
  }

  /**
   * circle_invitations findFirst
   */
  export type circle_invitationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_invitations
     */
    select?: circle_invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_invitations
     */
    omit?: circle_invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_invitationsInclude<ExtArgs> | null
    /**
     * Filter, which circle_invitations to fetch.
     */
    where?: circle_invitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of circle_invitations to fetch.
     */
    orderBy?: circle_invitationsOrderByWithRelationInput | circle_invitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for circle_invitations.
     */
    cursor?: circle_invitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` circle_invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` circle_invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of circle_invitations.
     */
    distinct?: Circle_invitationsScalarFieldEnum | Circle_invitationsScalarFieldEnum[]
  }

  /**
   * circle_invitations findFirstOrThrow
   */
  export type circle_invitationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_invitations
     */
    select?: circle_invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_invitations
     */
    omit?: circle_invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_invitationsInclude<ExtArgs> | null
    /**
     * Filter, which circle_invitations to fetch.
     */
    where?: circle_invitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of circle_invitations to fetch.
     */
    orderBy?: circle_invitationsOrderByWithRelationInput | circle_invitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for circle_invitations.
     */
    cursor?: circle_invitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` circle_invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` circle_invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of circle_invitations.
     */
    distinct?: Circle_invitationsScalarFieldEnum | Circle_invitationsScalarFieldEnum[]
  }

  /**
   * circle_invitations findMany
   */
  export type circle_invitationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_invitations
     */
    select?: circle_invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_invitations
     */
    omit?: circle_invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_invitationsInclude<ExtArgs> | null
    /**
     * Filter, which circle_invitations to fetch.
     */
    where?: circle_invitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of circle_invitations to fetch.
     */
    orderBy?: circle_invitationsOrderByWithRelationInput | circle_invitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing circle_invitations.
     */
    cursor?: circle_invitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` circle_invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` circle_invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of circle_invitations.
     */
    distinct?: Circle_invitationsScalarFieldEnum | Circle_invitationsScalarFieldEnum[]
  }

  /**
   * circle_invitations create
   */
  export type circle_invitationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_invitations
     */
    select?: circle_invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_invitations
     */
    omit?: circle_invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_invitationsInclude<ExtArgs> | null
    /**
     * The data needed to create a circle_invitations.
     */
    data: XOR<circle_invitationsCreateInput, circle_invitationsUncheckedCreateInput>
  }

  /**
   * circle_invitations createMany
   */
  export type circle_invitationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many circle_invitations.
     */
    data: circle_invitationsCreateManyInput | circle_invitationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * circle_invitations createManyAndReturn
   */
  export type circle_invitationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_invitations
     */
    select?: circle_invitationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the circle_invitations
     */
    omit?: circle_invitationsOmit<ExtArgs> | null
    /**
     * The data used to create many circle_invitations.
     */
    data: circle_invitationsCreateManyInput | circle_invitationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_invitationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * circle_invitations update
   */
  export type circle_invitationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_invitations
     */
    select?: circle_invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_invitations
     */
    omit?: circle_invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_invitationsInclude<ExtArgs> | null
    /**
     * The data needed to update a circle_invitations.
     */
    data: XOR<circle_invitationsUpdateInput, circle_invitationsUncheckedUpdateInput>
    /**
     * Choose, which circle_invitations to update.
     */
    where: circle_invitationsWhereUniqueInput
  }

  /**
   * circle_invitations updateMany
   */
  export type circle_invitationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update circle_invitations.
     */
    data: XOR<circle_invitationsUpdateManyMutationInput, circle_invitationsUncheckedUpdateManyInput>
    /**
     * Filter which circle_invitations to update
     */
    where?: circle_invitationsWhereInput
    /**
     * Limit how many circle_invitations to update.
     */
    limit?: number
  }

  /**
   * circle_invitations updateManyAndReturn
   */
  export type circle_invitationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_invitations
     */
    select?: circle_invitationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the circle_invitations
     */
    omit?: circle_invitationsOmit<ExtArgs> | null
    /**
     * The data used to update circle_invitations.
     */
    data: XOR<circle_invitationsUpdateManyMutationInput, circle_invitationsUncheckedUpdateManyInput>
    /**
     * Filter which circle_invitations to update
     */
    where?: circle_invitationsWhereInput
    /**
     * Limit how many circle_invitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_invitationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * circle_invitations upsert
   */
  export type circle_invitationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_invitations
     */
    select?: circle_invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_invitations
     */
    omit?: circle_invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_invitationsInclude<ExtArgs> | null
    /**
     * The filter to search for the circle_invitations to update in case it exists.
     */
    where: circle_invitationsWhereUniqueInput
    /**
     * In case the circle_invitations found by the `where` argument doesn't exist, create a new circle_invitations with this data.
     */
    create: XOR<circle_invitationsCreateInput, circle_invitationsUncheckedCreateInput>
    /**
     * In case the circle_invitations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<circle_invitationsUpdateInput, circle_invitationsUncheckedUpdateInput>
  }

  /**
   * circle_invitations delete
   */
  export type circle_invitationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_invitations
     */
    select?: circle_invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_invitations
     */
    omit?: circle_invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_invitationsInclude<ExtArgs> | null
    /**
     * Filter which circle_invitations to delete.
     */
    where: circle_invitationsWhereUniqueInput
  }

  /**
   * circle_invitations deleteMany
   */
  export type circle_invitationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which circle_invitations to delete
     */
    where?: circle_invitationsWhereInput
    /**
     * Limit how many circle_invitations to delete.
     */
    limit?: number
  }

  /**
   * circle_invitations without action
   */
  export type circle_invitationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the circle_invitations
     */
    select?: circle_invitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the circle_invitations
     */
    omit?: circle_invitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: circle_invitationsInclude<ExtArgs> | null
  }


  /**
   * Model savings_schedules
   */

  export type AggregateSavings_schedules = {
    _count: Savings_schedulesCountAggregateOutputType | null
    _avg: Savings_schedulesAvgAggregateOutputType | null
    _sum: Savings_schedulesSumAggregateOutputType | null
    _min: Savings_schedulesMinAggregateOutputType | null
    _max: Savings_schedulesMaxAggregateOutputType | null
  }

  export type Savings_schedulesAvgAggregateOutputType = {
    contribution_amount: Decimal | null
    total_cycles: number | null
    current_cycle: number | null
  }

  export type Savings_schedulesSumAggregateOutputType = {
    contribution_amount: Decimal | null
    total_cycles: number | null
    current_cycle: number | null
  }

  export type Savings_schedulesMinAggregateOutputType = {
    id: string | null
    circle_id: string | null
    frequency: $Enums.Frequency | null
    contribution_amount: Decimal | null
    start_date: Date | null
    end_date: Date | null
    total_cycles: number | null
    current_cycle: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Savings_schedulesMaxAggregateOutputType = {
    id: string | null
    circle_id: string | null
    frequency: $Enums.Frequency | null
    contribution_amount: Decimal | null
    start_date: Date | null
    end_date: Date | null
    total_cycles: number | null
    current_cycle: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Savings_schedulesCountAggregateOutputType = {
    id: number
    circle_id: number
    frequency: number
    contribution_amount: number
    start_date: number
    end_date: number
    total_cycles: number
    current_cycle: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Savings_schedulesAvgAggregateInputType = {
    contribution_amount?: true
    total_cycles?: true
    current_cycle?: true
  }

  export type Savings_schedulesSumAggregateInputType = {
    contribution_amount?: true
    total_cycles?: true
    current_cycle?: true
  }

  export type Savings_schedulesMinAggregateInputType = {
    id?: true
    circle_id?: true
    frequency?: true
    contribution_amount?: true
    start_date?: true
    end_date?: true
    total_cycles?: true
    current_cycle?: true
    created_at?: true
    updated_at?: true
  }

  export type Savings_schedulesMaxAggregateInputType = {
    id?: true
    circle_id?: true
    frequency?: true
    contribution_amount?: true
    start_date?: true
    end_date?: true
    total_cycles?: true
    current_cycle?: true
    created_at?: true
    updated_at?: true
  }

  export type Savings_schedulesCountAggregateInputType = {
    id?: true
    circle_id?: true
    frequency?: true
    contribution_amount?: true
    start_date?: true
    end_date?: true
    total_cycles?: true
    current_cycle?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Savings_schedulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which savings_schedules to aggregate.
     */
    where?: savings_schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of savings_schedules to fetch.
     */
    orderBy?: savings_schedulesOrderByWithRelationInput | savings_schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: savings_schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` savings_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` savings_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned savings_schedules
    **/
    _count?: true | Savings_schedulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Savings_schedulesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Savings_schedulesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Savings_schedulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Savings_schedulesMaxAggregateInputType
  }

  export type GetSavings_schedulesAggregateType<T extends Savings_schedulesAggregateArgs> = {
        [P in keyof T & keyof AggregateSavings_schedules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavings_schedules[P]>
      : GetScalarType<T[P], AggregateSavings_schedules[P]>
  }




  export type savings_schedulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: savings_schedulesWhereInput
    orderBy?: savings_schedulesOrderByWithAggregationInput | savings_schedulesOrderByWithAggregationInput[]
    by: Savings_schedulesScalarFieldEnum[] | Savings_schedulesScalarFieldEnum
    having?: savings_schedulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Savings_schedulesCountAggregateInputType | true
    _avg?: Savings_schedulesAvgAggregateInputType
    _sum?: Savings_schedulesSumAggregateInputType
    _min?: Savings_schedulesMinAggregateInputType
    _max?: Savings_schedulesMaxAggregateInputType
  }

  export type Savings_schedulesGroupByOutputType = {
    id: string
    circle_id: string
    frequency: $Enums.Frequency
    contribution_amount: Decimal
    start_date: Date
    end_date: Date | null
    total_cycles: number
    current_cycle: number
    created_at: Date
    updated_at: Date
    _count: Savings_schedulesCountAggregateOutputType | null
    _avg: Savings_schedulesAvgAggregateOutputType | null
    _sum: Savings_schedulesSumAggregateOutputType | null
    _min: Savings_schedulesMinAggregateOutputType | null
    _max: Savings_schedulesMaxAggregateOutputType | null
  }

  type GetSavings_schedulesGroupByPayload<T extends savings_schedulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Savings_schedulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Savings_schedulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Savings_schedulesGroupByOutputType[P]>
            : GetScalarType<T[P], Savings_schedulesGroupByOutputType[P]>
        }
      >
    >


  export type savings_schedulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    frequency?: boolean
    contribution_amount?: boolean
    start_date?: boolean
    end_date?: boolean
    total_cycles?: boolean
    current_cycle?: boolean
    created_at?: boolean
    updated_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savings_schedules"]>

  export type savings_schedulesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    frequency?: boolean
    contribution_amount?: boolean
    start_date?: boolean
    end_date?: boolean
    total_cycles?: boolean
    current_cycle?: boolean
    created_at?: boolean
    updated_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savings_schedules"]>

  export type savings_schedulesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    frequency?: boolean
    contribution_amount?: boolean
    start_date?: boolean
    end_date?: boolean
    total_cycles?: boolean
    current_cycle?: boolean
    created_at?: boolean
    updated_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savings_schedules"]>

  export type savings_schedulesSelectScalar = {
    id?: boolean
    circle_id?: boolean
    frequency?: boolean
    contribution_amount?: boolean
    start_date?: boolean
    end_date?: boolean
    total_cycles?: boolean
    current_cycle?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type savings_schedulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "circle_id" | "frequency" | "contribution_amount" | "start_date" | "end_date" | "total_cycles" | "current_cycle" | "created_at" | "updated_at", ExtArgs["result"]["savings_schedules"]>
  export type savings_schedulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
  }
  export type savings_schedulesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
  }
  export type savings_schedulesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
  }

  export type $savings_schedulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "savings_schedules"
    objects: {
      savings_circle: Prisma.$savings_circlesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      circle_id: string
      frequency: $Enums.Frequency
      contribution_amount: Prisma.Decimal
      start_date: Date
      end_date: Date | null
      total_cycles: number
      current_cycle: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["savings_schedules"]>
    composites: {}
  }

  type savings_schedulesGetPayload<S extends boolean | null | undefined | savings_schedulesDefaultArgs> = $Result.GetResult<Prisma.$savings_schedulesPayload, S>

  type savings_schedulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<savings_schedulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Savings_schedulesCountAggregateInputType | true
    }

  export interface savings_schedulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['savings_schedules'], meta: { name: 'savings_schedules' } }
    /**
     * Find zero or one Savings_schedules that matches the filter.
     * @param {savings_schedulesFindUniqueArgs} args - Arguments to find a Savings_schedules
     * @example
     * // Get one Savings_schedules
     * const savings_schedules = await prisma.savings_schedules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends savings_schedulesFindUniqueArgs>(args: SelectSubset<T, savings_schedulesFindUniqueArgs<ExtArgs>>): Prisma__savings_schedulesClient<$Result.GetResult<Prisma.$savings_schedulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Savings_schedules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {savings_schedulesFindUniqueOrThrowArgs} args - Arguments to find a Savings_schedules
     * @example
     * // Get one Savings_schedules
     * const savings_schedules = await prisma.savings_schedules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends savings_schedulesFindUniqueOrThrowArgs>(args: SelectSubset<T, savings_schedulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__savings_schedulesClient<$Result.GetResult<Prisma.$savings_schedulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Savings_schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savings_schedulesFindFirstArgs} args - Arguments to find a Savings_schedules
     * @example
     * // Get one Savings_schedules
     * const savings_schedules = await prisma.savings_schedules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends savings_schedulesFindFirstArgs>(args?: SelectSubset<T, savings_schedulesFindFirstArgs<ExtArgs>>): Prisma__savings_schedulesClient<$Result.GetResult<Prisma.$savings_schedulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Savings_schedules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savings_schedulesFindFirstOrThrowArgs} args - Arguments to find a Savings_schedules
     * @example
     * // Get one Savings_schedules
     * const savings_schedules = await prisma.savings_schedules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends savings_schedulesFindFirstOrThrowArgs>(args?: SelectSubset<T, savings_schedulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__savings_schedulesClient<$Result.GetResult<Prisma.$savings_schedulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Savings_schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savings_schedulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Savings_schedules
     * const savings_schedules = await prisma.savings_schedules.findMany()
     * 
     * // Get first 10 Savings_schedules
     * const savings_schedules = await prisma.savings_schedules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savings_schedulesWithIdOnly = await prisma.savings_schedules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends savings_schedulesFindManyArgs>(args?: SelectSubset<T, savings_schedulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savings_schedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Savings_schedules.
     * @param {savings_schedulesCreateArgs} args - Arguments to create a Savings_schedules.
     * @example
     * // Create one Savings_schedules
     * const Savings_schedules = await prisma.savings_schedules.create({
     *   data: {
     *     // ... data to create a Savings_schedules
     *   }
     * })
     * 
     */
    create<T extends savings_schedulesCreateArgs>(args: SelectSubset<T, savings_schedulesCreateArgs<ExtArgs>>): Prisma__savings_schedulesClient<$Result.GetResult<Prisma.$savings_schedulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Savings_schedules.
     * @param {savings_schedulesCreateManyArgs} args - Arguments to create many Savings_schedules.
     * @example
     * // Create many Savings_schedules
     * const savings_schedules = await prisma.savings_schedules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends savings_schedulesCreateManyArgs>(args?: SelectSubset<T, savings_schedulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Savings_schedules and returns the data saved in the database.
     * @param {savings_schedulesCreateManyAndReturnArgs} args - Arguments to create many Savings_schedules.
     * @example
     * // Create many Savings_schedules
     * const savings_schedules = await prisma.savings_schedules.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Savings_schedules and only return the `id`
     * const savings_schedulesWithIdOnly = await prisma.savings_schedules.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends savings_schedulesCreateManyAndReturnArgs>(args?: SelectSubset<T, savings_schedulesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savings_schedulesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Savings_schedules.
     * @param {savings_schedulesDeleteArgs} args - Arguments to delete one Savings_schedules.
     * @example
     * // Delete one Savings_schedules
     * const Savings_schedules = await prisma.savings_schedules.delete({
     *   where: {
     *     // ... filter to delete one Savings_schedules
     *   }
     * })
     * 
     */
    delete<T extends savings_schedulesDeleteArgs>(args: SelectSubset<T, savings_schedulesDeleteArgs<ExtArgs>>): Prisma__savings_schedulesClient<$Result.GetResult<Prisma.$savings_schedulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Savings_schedules.
     * @param {savings_schedulesUpdateArgs} args - Arguments to update one Savings_schedules.
     * @example
     * // Update one Savings_schedules
     * const savings_schedules = await prisma.savings_schedules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends savings_schedulesUpdateArgs>(args: SelectSubset<T, savings_schedulesUpdateArgs<ExtArgs>>): Prisma__savings_schedulesClient<$Result.GetResult<Prisma.$savings_schedulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Savings_schedules.
     * @param {savings_schedulesDeleteManyArgs} args - Arguments to filter Savings_schedules to delete.
     * @example
     * // Delete a few Savings_schedules
     * const { count } = await prisma.savings_schedules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends savings_schedulesDeleteManyArgs>(args?: SelectSubset<T, savings_schedulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Savings_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savings_schedulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Savings_schedules
     * const savings_schedules = await prisma.savings_schedules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends savings_schedulesUpdateManyArgs>(args: SelectSubset<T, savings_schedulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Savings_schedules and returns the data updated in the database.
     * @param {savings_schedulesUpdateManyAndReturnArgs} args - Arguments to update many Savings_schedules.
     * @example
     * // Update many Savings_schedules
     * const savings_schedules = await prisma.savings_schedules.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Savings_schedules and only return the `id`
     * const savings_schedulesWithIdOnly = await prisma.savings_schedules.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends savings_schedulesUpdateManyAndReturnArgs>(args: SelectSubset<T, savings_schedulesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savings_schedulesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Savings_schedules.
     * @param {savings_schedulesUpsertArgs} args - Arguments to update or create a Savings_schedules.
     * @example
     * // Update or create a Savings_schedules
     * const savings_schedules = await prisma.savings_schedules.upsert({
     *   create: {
     *     // ... data to create a Savings_schedules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Savings_schedules we want to update
     *   }
     * })
     */
    upsert<T extends savings_schedulesUpsertArgs>(args: SelectSubset<T, savings_schedulesUpsertArgs<ExtArgs>>): Prisma__savings_schedulesClient<$Result.GetResult<Prisma.$savings_schedulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Savings_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savings_schedulesCountArgs} args - Arguments to filter Savings_schedules to count.
     * @example
     * // Count the number of Savings_schedules
     * const count = await prisma.savings_schedules.count({
     *   where: {
     *     // ... the filter for the Savings_schedules we want to count
     *   }
     * })
    **/
    count<T extends savings_schedulesCountArgs>(
      args?: Subset<T, savings_schedulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Savings_schedulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Savings_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Savings_schedulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Savings_schedulesAggregateArgs>(args: Subset<T, Savings_schedulesAggregateArgs>): Prisma.PrismaPromise<GetSavings_schedulesAggregateType<T>>

    /**
     * Group by Savings_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savings_schedulesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends savings_schedulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: savings_schedulesGroupByArgs['orderBy'] }
        : { orderBy?: savings_schedulesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, savings_schedulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavings_schedulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the savings_schedules model
   */
  readonly fields: savings_schedulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for savings_schedules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__savings_schedulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savings_circle<T extends savings_circlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, savings_circlesDefaultArgs<ExtArgs>>): Prisma__savings_circlesClient<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the savings_schedules model
   */
  interface savings_schedulesFieldRefs {
    readonly id: FieldRef<"savings_schedules", 'String'>
    readonly circle_id: FieldRef<"savings_schedules", 'String'>
    readonly frequency: FieldRef<"savings_schedules", 'Frequency'>
    readonly contribution_amount: FieldRef<"savings_schedules", 'Decimal'>
    readonly start_date: FieldRef<"savings_schedules", 'DateTime'>
    readonly end_date: FieldRef<"savings_schedules", 'DateTime'>
    readonly total_cycles: FieldRef<"savings_schedules", 'Int'>
    readonly current_cycle: FieldRef<"savings_schedules", 'Int'>
    readonly created_at: FieldRef<"savings_schedules", 'DateTime'>
    readonly updated_at: FieldRef<"savings_schedules", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * savings_schedules findUnique
   */
  export type savings_schedulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_schedules
     */
    select?: savings_schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_schedules
     */
    omit?: savings_schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_schedulesInclude<ExtArgs> | null
    /**
     * Filter, which savings_schedules to fetch.
     */
    where: savings_schedulesWhereUniqueInput
  }

  /**
   * savings_schedules findUniqueOrThrow
   */
  export type savings_schedulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_schedules
     */
    select?: savings_schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_schedules
     */
    omit?: savings_schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_schedulesInclude<ExtArgs> | null
    /**
     * Filter, which savings_schedules to fetch.
     */
    where: savings_schedulesWhereUniqueInput
  }

  /**
   * savings_schedules findFirst
   */
  export type savings_schedulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_schedules
     */
    select?: savings_schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_schedules
     */
    omit?: savings_schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_schedulesInclude<ExtArgs> | null
    /**
     * Filter, which savings_schedules to fetch.
     */
    where?: savings_schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of savings_schedules to fetch.
     */
    orderBy?: savings_schedulesOrderByWithRelationInput | savings_schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for savings_schedules.
     */
    cursor?: savings_schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` savings_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` savings_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of savings_schedules.
     */
    distinct?: Savings_schedulesScalarFieldEnum | Savings_schedulesScalarFieldEnum[]
  }

  /**
   * savings_schedules findFirstOrThrow
   */
  export type savings_schedulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_schedules
     */
    select?: savings_schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_schedules
     */
    omit?: savings_schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_schedulesInclude<ExtArgs> | null
    /**
     * Filter, which savings_schedules to fetch.
     */
    where?: savings_schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of savings_schedules to fetch.
     */
    orderBy?: savings_schedulesOrderByWithRelationInput | savings_schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for savings_schedules.
     */
    cursor?: savings_schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` savings_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` savings_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of savings_schedules.
     */
    distinct?: Savings_schedulesScalarFieldEnum | Savings_schedulesScalarFieldEnum[]
  }

  /**
   * savings_schedules findMany
   */
  export type savings_schedulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_schedules
     */
    select?: savings_schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_schedules
     */
    omit?: savings_schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_schedulesInclude<ExtArgs> | null
    /**
     * Filter, which savings_schedules to fetch.
     */
    where?: savings_schedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of savings_schedules to fetch.
     */
    orderBy?: savings_schedulesOrderByWithRelationInput | savings_schedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing savings_schedules.
     */
    cursor?: savings_schedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` savings_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` savings_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of savings_schedules.
     */
    distinct?: Savings_schedulesScalarFieldEnum | Savings_schedulesScalarFieldEnum[]
  }

  /**
   * savings_schedules create
   */
  export type savings_schedulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_schedules
     */
    select?: savings_schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_schedules
     */
    omit?: savings_schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_schedulesInclude<ExtArgs> | null
    /**
     * The data needed to create a savings_schedules.
     */
    data: XOR<savings_schedulesCreateInput, savings_schedulesUncheckedCreateInput>
  }

  /**
   * savings_schedules createMany
   */
  export type savings_schedulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many savings_schedules.
     */
    data: savings_schedulesCreateManyInput | savings_schedulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * savings_schedules createManyAndReturn
   */
  export type savings_schedulesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_schedules
     */
    select?: savings_schedulesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the savings_schedules
     */
    omit?: savings_schedulesOmit<ExtArgs> | null
    /**
     * The data used to create many savings_schedules.
     */
    data: savings_schedulesCreateManyInput | savings_schedulesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_schedulesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * savings_schedules update
   */
  export type savings_schedulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_schedules
     */
    select?: savings_schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_schedules
     */
    omit?: savings_schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_schedulesInclude<ExtArgs> | null
    /**
     * The data needed to update a savings_schedules.
     */
    data: XOR<savings_schedulesUpdateInput, savings_schedulesUncheckedUpdateInput>
    /**
     * Choose, which savings_schedules to update.
     */
    where: savings_schedulesWhereUniqueInput
  }

  /**
   * savings_schedules updateMany
   */
  export type savings_schedulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update savings_schedules.
     */
    data: XOR<savings_schedulesUpdateManyMutationInput, savings_schedulesUncheckedUpdateManyInput>
    /**
     * Filter which savings_schedules to update
     */
    where?: savings_schedulesWhereInput
    /**
     * Limit how many savings_schedules to update.
     */
    limit?: number
  }

  /**
   * savings_schedules updateManyAndReturn
   */
  export type savings_schedulesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_schedules
     */
    select?: savings_schedulesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the savings_schedules
     */
    omit?: savings_schedulesOmit<ExtArgs> | null
    /**
     * The data used to update savings_schedules.
     */
    data: XOR<savings_schedulesUpdateManyMutationInput, savings_schedulesUncheckedUpdateManyInput>
    /**
     * Filter which savings_schedules to update
     */
    where?: savings_schedulesWhereInput
    /**
     * Limit how many savings_schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_schedulesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * savings_schedules upsert
   */
  export type savings_schedulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_schedules
     */
    select?: savings_schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_schedules
     */
    omit?: savings_schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_schedulesInclude<ExtArgs> | null
    /**
     * The filter to search for the savings_schedules to update in case it exists.
     */
    where: savings_schedulesWhereUniqueInput
    /**
     * In case the savings_schedules found by the `where` argument doesn't exist, create a new savings_schedules with this data.
     */
    create: XOR<savings_schedulesCreateInput, savings_schedulesUncheckedCreateInput>
    /**
     * In case the savings_schedules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<savings_schedulesUpdateInput, savings_schedulesUncheckedUpdateInput>
  }

  /**
   * savings_schedules delete
   */
  export type savings_schedulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_schedules
     */
    select?: savings_schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_schedules
     */
    omit?: savings_schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_schedulesInclude<ExtArgs> | null
    /**
     * Filter which savings_schedules to delete.
     */
    where: savings_schedulesWhereUniqueInput
  }

  /**
   * savings_schedules deleteMany
   */
  export type savings_schedulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which savings_schedules to delete
     */
    where?: savings_schedulesWhereInput
    /**
     * Limit how many savings_schedules to delete.
     */
    limit?: number
  }

  /**
   * savings_schedules without action
   */
  export type savings_schedulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the savings_schedules
     */
    select?: savings_schedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the savings_schedules
     */
    omit?: savings_schedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savings_schedulesInclude<ExtArgs> | null
  }


  /**
   * Model contributions
   */

  export type AggregateContributions = {
    _count: ContributionsCountAggregateOutputType | null
    _avg: ContributionsAvgAggregateOutputType | null
    _sum: ContributionsSumAggregateOutputType | null
    _min: ContributionsMinAggregateOutputType | null
    _max: ContributionsMaxAggregateOutputType | null
  }

  export type ContributionsAvgAggregateOutputType = {
    cycle_number: number | null
    amount: Decimal | null
  }

  export type ContributionsSumAggregateOutputType = {
    cycle_number: number | null
    amount: Decimal | null
  }

  export type ContributionsMinAggregateOutputType = {
    id: string | null
    circle_id: string | null
    circle_member: string | null
    cycle_number: number | null
    amount: Decimal | null
    due_date: Date | null
    paid_at: Date | null
    status: $Enums.Contribution_status | null
    transaction_id: string | null
    create_at: Date | null
    updated_at: Date | null
  }

  export type ContributionsMaxAggregateOutputType = {
    id: string | null
    circle_id: string | null
    circle_member: string | null
    cycle_number: number | null
    amount: Decimal | null
    due_date: Date | null
    paid_at: Date | null
    status: $Enums.Contribution_status | null
    transaction_id: string | null
    create_at: Date | null
    updated_at: Date | null
  }

  export type ContributionsCountAggregateOutputType = {
    id: number
    circle_id: number
    circle_member: number
    cycle_number: number
    amount: number
    due_date: number
    paid_at: number
    status: number
    transaction_id: number
    create_at: number
    updated_at: number
    _all: number
  }


  export type ContributionsAvgAggregateInputType = {
    cycle_number?: true
    amount?: true
  }

  export type ContributionsSumAggregateInputType = {
    cycle_number?: true
    amount?: true
  }

  export type ContributionsMinAggregateInputType = {
    id?: true
    circle_id?: true
    circle_member?: true
    cycle_number?: true
    amount?: true
    due_date?: true
    paid_at?: true
    status?: true
    transaction_id?: true
    create_at?: true
    updated_at?: true
  }

  export type ContributionsMaxAggregateInputType = {
    id?: true
    circle_id?: true
    circle_member?: true
    cycle_number?: true
    amount?: true
    due_date?: true
    paid_at?: true
    status?: true
    transaction_id?: true
    create_at?: true
    updated_at?: true
  }

  export type ContributionsCountAggregateInputType = {
    id?: true
    circle_id?: true
    circle_member?: true
    cycle_number?: true
    amount?: true
    due_date?: true
    paid_at?: true
    status?: true
    transaction_id?: true
    create_at?: true
    updated_at?: true
    _all?: true
  }

  export type ContributionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contributions to aggregate.
     */
    where?: contributionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contributions to fetch.
     */
    orderBy?: contributionsOrderByWithRelationInput | contributionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contributionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contributions
    **/
    _count?: true | ContributionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContributionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContributionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContributionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContributionsMaxAggregateInputType
  }

  export type GetContributionsAggregateType<T extends ContributionsAggregateArgs> = {
        [P in keyof T & keyof AggregateContributions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContributions[P]>
      : GetScalarType<T[P], AggregateContributions[P]>
  }




  export type contributionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contributionsWhereInput
    orderBy?: contributionsOrderByWithAggregationInput | contributionsOrderByWithAggregationInput[]
    by: ContributionsScalarFieldEnum[] | ContributionsScalarFieldEnum
    having?: contributionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContributionsCountAggregateInputType | true
    _avg?: ContributionsAvgAggregateInputType
    _sum?: ContributionsSumAggregateInputType
    _min?: ContributionsMinAggregateInputType
    _max?: ContributionsMaxAggregateInputType
  }

  export type ContributionsGroupByOutputType = {
    id: string
    circle_id: string
    circle_member: string
    cycle_number: number
    amount: Decimal
    due_date: Date
    paid_at: Date | null
    status: $Enums.Contribution_status
    transaction_id: string | null
    create_at: Date
    updated_at: Date
    _count: ContributionsCountAggregateOutputType | null
    _avg: ContributionsAvgAggregateOutputType | null
    _sum: ContributionsSumAggregateOutputType | null
    _min: ContributionsMinAggregateOutputType | null
    _max: ContributionsMaxAggregateOutputType | null
  }

  type GetContributionsGroupByPayload<T extends contributionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContributionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContributionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContributionsGroupByOutputType[P]>
            : GetScalarType<T[P], ContributionsGroupByOutputType[P]>
        }
      >
    >


  export type contributionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    circle_member?: boolean
    cycle_number?: boolean
    amount?: boolean
    due_date?: boolean
    paid_at?: boolean
    status?: boolean
    transaction_id?: boolean
    create_at?: boolean
    updated_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contributions"]>

  export type contributionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    circle_member?: boolean
    cycle_number?: boolean
    amount?: boolean
    due_date?: boolean
    paid_at?: boolean
    status?: boolean
    transaction_id?: boolean
    create_at?: boolean
    updated_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contributions"]>

  export type contributionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    circle_member?: boolean
    cycle_number?: boolean
    amount?: boolean
    due_date?: boolean
    paid_at?: boolean
    status?: boolean
    transaction_id?: boolean
    create_at?: boolean
    updated_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contributions"]>

  export type contributionsSelectScalar = {
    id?: boolean
    circle_id?: boolean
    circle_member?: boolean
    cycle_number?: boolean
    amount?: boolean
    due_date?: boolean
    paid_at?: boolean
    status?: boolean
    transaction_id?: boolean
    create_at?: boolean
    updated_at?: boolean
  }

  export type contributionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "circle_id" | "circle_member" | "cycle_number" | "amount" | "due_date" | "paid_at" | "status" | "transaction_id" | "create_at" | "updated_at", ExtArgs["result"]["contributions"]>
  export type contributionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type contributionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type contributionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $contributionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contributions"
    objects: {
      savings_circle: Prisma.$savings_circlesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      circle_id: string
      circle_member: string
      cycle_number: number
      amount: Prisma.Decimal
      due_date: Date
      paid_at: Date | null
      status: $Enums.Contribution_status
      transaction_id: string | null
      create_at: Date
      updated_at: Date
    }, ExtArgs["result"]["contributions"]>
    composites: {}
  }

  type contributionsGetPayload<S extends boolean | null | undefined | contributionsDefaultArgs> = $Result.GetResult<Prisma.$contributionsPayload, S>

  type contributionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contributionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContributionsCountAggregateInputType | true
    }

  export interface contributionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contributions'], meta: { name: 'contributions' } }
    /**
     * Find zero or one Contributions that matches the filter.
     * @param {contributionsFindUniqueArgs} args - Arguments to find a Contributions
     * @example
     * // Get one Contributions
     * const contributions = await prisma.contributions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contributionsFindUniqueArgs>(args: SelectSubset<T, contributionsFindUniqueArgs<ExtArgs>>): Prisma__contributionsClient<$Result.GetResult<Prisma.$contributionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contributions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contributionsFindUniqueOrThrowArgs} args - Arguments to find a Contributions
     * @example
     * // Get one Contributions
     * const contributions = await prisma.contributions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contributionsFindUniqueOrThrowArgs>(args: SelectSubset<T, contributionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contributionsClient<$Result.GetResult<Prisma.$contributionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contributionsFindFirstArgs} args - Arguments to find a Contributions
     * @example
     * // Get one Contributions
     * const contributions = await prisma.contributions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contributionsFindFirstArgs>(args?: SelectSubset<T, contributionsFindFirstArgs<ExtArgs>>): Prisma__contributionsClient<$Result.GetResult<Prisma.$contributionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contributions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contributionsFindFirstOrThrowArgs} args - Arguments to find a Contributions
     * @example
     * // Get one Contributions
     * const contributions = await prisma.contributions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contributionsFindFirstOrThrowArgs>(args?: SelectSubset<T, contributionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__contributionsClient<$Result.GetResult<Prisma.$contributionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contributionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contributions
     * const contributions = await prisma.contributions.findMany()
     * 
     * // Get first 10 Contributions
     * const contributions = await prisma.contributions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contributionsWithIdOnly = await prisma.contributions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contributionsFindManyArgs>(args?: SelectSubset<T, contributionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contributionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contributions.
     * @param {contributionsCreateArgs} args - Arguments to create a Contributions.
     * @example
     * // Create one Contributions
     * const Contributions = await prisma.contributions.create({
     *   data: {
     *     // ... data to create a Contributions
     *   }
     * })
     * 
     */
    create<T extends contributionsCreateArgs>(args: SelectSubset<T, contributionsCreateArgs<ExtArgs>>): Prisma__contributionsClient<$Result.GetResult<Prisma.$contributionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contributions.
     * @param {contributionsCreateManyArgs} args - Arguments to create many Contributions.
     * @example
     * // Create many Contributions
     * const contributions = await prisma.contributions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contributionsCreateManyArgs>(args?: SelectSubset<T, contributionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contributions and returns the data saved in the database.
     * @param {contributionsCreateManyAndReturnArgs} args - Arguments to create many Contributions.
     * @example
     * // Create many Contributions
     * const contributions = await prisma.contributions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contributions and only return the `id`
     * const contributionsWithIdOnly = await prisma.contributions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends contributionsCreateManyAndReturnArgs>(args?: SelectSubset<T, contributionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contributionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contributions.
     * @param {contributionsDeleteArgs} args - Arguments to delete one Contributions.
     * @example
     * // Delete one Contributions
     * const Contributions = await prisma.contributions.delete({
     *   where: {
     *     // ... filter to delete one Contributions
     *   }
     * })
     * 
     */
    delete<T extends contributionsDeleteArgs>(args: SelectSubset<T, contributionsDeleteArgs<ExtArgs>>): Prisma__contributionsClient<$Result.GetResult<Prisma.$contributionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contributions.
     * @param {contributionsUpdateArgs} args - Arguments to update one Contributions.
     * @example
     * // Update one Contributions
     * const contributions = await prisma.contributions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contributionsUpdateArgs>(args: SelectSubset<T, contributionsUpdateArgs<ExtArgs>>): Prisma__contributionsClient<$Result.GetResult<Prisma.$contributionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contributions.
     * @param {contributionsDeleteManyArgs} args - Arguments to filter Contributions to delete.
     * @example
     * // Delete a few Contributions
     * const { count } = await prisma.contributions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contributionsDeleteManyArgs>(args?: SelectSubset<T, contributionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contributionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contributions
     * const contributions = await prisma.contributions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contributionsUpdateManyArgs>(args: SelectSubset<T, contributionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contributions and returns the data updated in the database.
     * @param {contributionsUpdateManyAndReturnArgs} args - Arguments to update many Contributions.
     * @example
     * // Update many Contributions
     * const contributions = await prisma.contributions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contributions and only return the `id`
     * const contributionsWithIdOnly = await prisma.contributions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends contributionsUpdateManyAndReturnArgs>(args: SelectSubset<T, contributionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contributionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contributions.
     * @param {contributionsUpsertArgs} args - Arguments to update or create a Contributions.
     * @example
     * // Update or create a Contributions
     * const contributions = await prisma.contributions.upsert({
     *   create: {
     *     // ... data to create a Contributions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contributions we want to update
     *   }
     * })
     */
    upsert<T extends contributionsUpsertArgs>(args: SelectSubset<T, contributionsUpsertArgs<ExtArgs>>): Prisma__contributionsClient<$Result.GetResult<Prisma.$contributionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contributionsCountArgs} args - Arguments to filter Contributions to count.
     * @example
     * // Count the number of Contributions
     * const count = await prisma.contributions.count({
     *   where: {
     *     // ... the filter for the Contributions we want to count
     *   }
     * })
    **/
    count<T extends contributionsCountArgs>(
      args?: Subset<T, contributionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContributionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContributionsAggregateArgs>(args: Subset<T, ContributionsAggregateArgs>): Prisma.PrismaPromise<GetContributionsAggregateType<T>>

    /**
     * Group by Contributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contributionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contributionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contributionsGroupByArgs['orderBy'] }
        : { orderBy?: contributionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contributionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContributionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contributions model
   */
  readonly fields: contributionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contributions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contributionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savings_circle<T extends savings_circlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, savings_circlesDefaultArgs<ExtArgs>>): Prisma__savings_circlesClient<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contributions model
   */
  interface contributionsFieldRefs {
    readonly id: FieldRef<"contributions", 'String'>
    readonly circle_id: FieldRef<"contributions", 'String'>
    readonly circle_member: FieldRef<"contributions", 'String'>
    readonly cycle_number: FieldRef<"contributions", 'Int'>
    readonly amount: FieldRef<"contributions", 'Decimal'>
    readonly due_date: FieldRef<"contributions", 'DateTime'>
    readonly paid_at: FieldRef<"contributions", 'DateTime'>
    readonly status: FieldRef<"contributions", 'Contribution_status'>
    readonly transaction_id: FieldRef<"contributions", 'String'>
    readonly create_at: FieldRef<"contributions", 'DateTime'>
    readonly updated_at: FieldRef<"contributions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * contributions findUnique
   */
  export type contributionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contributions
     */
    select?: contributionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contributions
     */
    omit?: contributionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contributionsInclude<ExtArgs> | null
    /**
     * Filter, which contributions to fetch.
     */
    where: contributionsWhereUniqueInput
  }

  /**
   * contributions findUniqueOrThrow
   */
  export type contributionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contributions
     */
    select?: contributionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contributions
     */
    omit?: contributionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contributionsInclude<ExtArgs> | null
    /**
     * Filter, which contributions to fetch.
     */
    where: contributionsWhereUniqueInput
  }

  /**
   * contributions findFirst
   */
  export type contributionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contributions
     */
    select?: contributionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contributions
     */
    omit?: contributionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contributionsInclude<ExtArgs> | null
    /**
     * Filter, which contributions to fetch.
     */
    where?: contributionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contributions to fetch.
     */
    orderBy?: contributionsOrderByWithRelationInput | contributionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contributions.
     */
    cursor?: contributionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contributions.
     */
    distinct?: ContributionsScalarFieldEnum | ContributionsScalarFieldEnum[]
  }

  /**
   * contributions findFirstOrThrow
   */
  export type contributionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contributions
     */
    select?: contributionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contributions
     */
    omit?: contributionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contributionsInclude<ExtArgs> | null
    /**
     * Filter, which contributions to fetch.
     */
    where?: contributionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contributions to fetch.
     */
    orderBy?: contributionsOrderByWithRelationInput | contributionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contributions.
     */
    cursor?: contributionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contributions.
     */
    distinct?: ContributionsScalarFieldEnum | ContributionsScalarFieldEnum[]
  }

  /**
   * contributions findMany
   */
  export type contributionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contributions
     */
    select?: contributionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contributions
     */
    omit?: contributionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contributionsInclude<ExtArgs> | null
    /**
     * Filter, which contributions to fetch.
     */
    where?: contributionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contributions to fetch.
     */
    orderBy?: contributionsOrderByWithRelationInput | contributionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contributions.
     */
    cursor?: contributionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contributions.
     */
    distinct?: ContributionsScalarFieldEnum | ContributionsScalarFieldEnum[]
  }

  /**
   * contributions create
   */
  export type contributionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contributions
     */
    select?: contributionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contributions
     */
    omit?: contributionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contributionsInclude<ExtArgs> | null
    /**
     * The data needed to create a contributions.
     */
    data: XOR<contributionsCreateInput, contributionsUncheckedCreateInput>
  }

  /**
   * contributions createMany
   */
  export type contributionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contributions.
     */
    data: contributionsCreateManyInput | contributionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contributions createManyAndReturn
   */
  export type contributionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contributions
     */
    select?: contributionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contributions
     */
    omit?: contributionsOmit<ExtArgs> | null
    /**
     * The data used to create many contributions.
     */
    data: contributionsCreateManyInput | contributionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contributionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * contributions update
   */
  export type contributionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contributions
     */
    select?: contributionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contributions
     */
    omit?: contributionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contributionsInclude<ExtArgs> | null
    /**
     * The data needed to update a contributions.
     */
    data: XOR<contributionsUpdateInput, contributionsUncheckedUpdateInput>
    /**
     * Choose, which contributions to update.
     */
    where: contributionsWhereUniqueInput
  }

  /**
   * contributions updateMany
   */
  export type contributionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contributions.
     */
    data: XOR<contributionsUpdateManyMutationInput, contributionsUncheckedUpdateManyInput>
    /**
     * Filter which contributions to update
     */
    where?: contributionsWhereInput
    /**
     * Limit how many contributions to update.
     */
    limit?: number
  }

  /**
   * contributions updateManyAndReturn
   */
  export type contributionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contributions
     */
    select?: contributionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contributions
     */
    omit?: contributionsOmit<ExtArgs> | null
    /**
     * The data used to update contributions.
     */
    data: XOR<contributionsUpdateManyMutationInput, contributionsUncheckedUpdateManyInput>
    /**
     * Filter which contributions to update
     */
    where?: contributionsWhereInput
    /**
     * Limit how many contributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contributionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * contributions upsert
   */
  export type contributionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contributions
     */
    select?: contributionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contributions
     */
    omit?: contributionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contributionsInclude<ExtArgs> | null
    /**
     * The filter to search for the contributions to update in case it exists.
     */
    where: contributionsWhereUniqueInput
    /**
     * In case the contributions found by the `where` argument doesn't exist, create a new contributions with this data.
     */
    create: XOR<contributionsCreateInput, contributionsUncheckedCreateInput>
    /**
     * In case the contributions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contributionsUpdateInput, contributionsUncheckedUpdateInput>
  }

  /**
   * contributions delete
   */
  export type contributionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contributions
     */
    select?: contributionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contributions
     */
    omit?: contributionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contributionsInclude<ExtArgs> | null
    /**
     * Filter which contributions to delete.
     */
    where: contributionsWhereUniqueInput
  }

  /**
   * contributions deleteMany
   */
  export type contributionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contributions to delete
     */
    where?: contributionsWhereInput
    /**
     * Limit how many contributions to delete.
     */
    limit?: number
  }

  /**
   * contributions without action
   */
  export type contributionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contributions
     */
    select?: contributionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contributions
     */
    omit?: contributionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contributionsInclude<ExtArgs> | null
  }


  /**
   * Model payouts
   */

  export type AggregatePayouts = {
    _count: PayoutsCountAggregateOutputType | null
    _avg: PayoutsAvgAggregateOutputType | null
    _sum: PayoutsSumAggregateOutputType | null
    _min: PayoutsMinAggregateOutputType | null
    _max: PayoutsMaxAggregateOutputType | null
  }

  export type PayoutsAvgAggregateOutputType = {
    cycle_number: number | null
    amount: Decimal | null
  }

  export type PayoutsSumAggregateOutputType = {
    cycle_number: number | null
    amount: Decimal | null
  }

  export type PayoutsMinAggregateOutputType = {
    id: string | null
    circle_id: string | null
    member_id: string | null
    cycle_number: number | null
    amount: Decimal | null
    scheduled_date: Date | null
    paid_at: Date | null
    status: $Enums.Contribution_status | null
    transaction_id: string | null
    create_at: Date | null
    updated_at: Date | null
  }

  export type PayoutsMaxAggregateOutputType = {
    id: string | null
    circle_id: string | null
    member_id: string | null
    cycle_number: number | null
    amount: Decimal | null
    scheduled_date: Date | null
    paid_at: Date | null
    status: $Enums.Contribution_status | null
    transaction_id: string | null
    create_at: Date | null
    updated_at: Date | null
  }

  export type PayoutsCountAggregateOutputType = {
    id: number
    circle_id: number
    member_id: number
    cycle_number: number
    amount: number
    scheduled_date: number
    paid_at: number
    status: number
    transaction_id: number
    create_at: number
    updated_at: number
    _all: number
  }


  export type PayoutsAvgAggregateInputType = {
    cycle_number?: true
    amount?: true
  }

  export type PayoutsSumAggregateInputType = {
    cycle_number?: true
    amount?: true
  }

  export type PayoutsMinAggregateInputType = {
    id?: true
    circle_id?: true
    member_id?: true
    cycle_number?: true
    amount?: true
    scheduled_date?: true
    paid_at?: true
    status?: true
    transaction_id?: true
    create_at?: true
    updated_at?: true
  }

  export type PayoutsMaxAggregateInputType = {
    id?: true
    circle_id?: true
    member_id?: true
    cycle_number?: true
    amount?: true
    scheduled_date?: true
    paid_at?: true
    status?: true
    transaction_id?: true
    create_at?: true
    updated_at?: true
  }

  export type PayoutsCountAggregateInputType = {
    id?: true
    circle_id?: true
    member_id?: true
    cycle_number?: true
    amount?: true
    scheduled_date?: true
    paid_at?: true
    status?: true
    transaction_id?: true
    create_at?: true
    updated_at?: true
    _all?: true
  }

  export type PayoutsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payouts to aggregate.
     */
    where?: payoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payouts to fetch.
     */
    orderBy?: payoutsOrderByWithRelationInput | payoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payouts
    **/
    _count?: true | PayoutsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayoutsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayoutsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayoutsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayoutsMaxAggregateInputType
  }

  export type GetPayoutsAggregateType<T extends PayoutsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayouts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayouts[P]>
      : GetScalarType<T[P], AggregatePayouts[P]>
  }




  export type payoutsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payoutsWhereInput
    orderBy?: payoutsOrderByWithAggregationInput | payoutsOrderByWithAggregationInput[]
    by: PayoutsScalarFieldEnum[] | PayoutsScalarFieldEnum
    having?: payoutsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayoutsCountAggregateInputType | true
    _avg?: PayoutsAvgAggregateInputType
    _sum?: PayoutsSumAggregateInputType
    _min?: PayoutsMinAggregateInputType
    _max?: PayoutsMaxAggregateInputType
  }

  export type PayoutsGroupByOutputType = {
    id: string
    circle_id: string
    member_id: string
    cycle_number: number
    amount: Decimal
    scheduled_date: Date
    paid_at: Date | null
    status: $Enums.Contribution_status
    transaction_id: string | null
    create_at: Date
    updated_at: Date
    _count: PayoutsCountAggregateOutputType | null
    _avg: PayoutsAvgAggregateOutputType | null
    _sum: PayoutsSumAggregateOutputType | null
    _min: PayoutsMinAggregateOutputType | null
    _max: PayoutsMaxAggregateOutputType | null
  }

  type GetPayoutsGroupByPayload<T extends payoutsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayoutsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayoutsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayoutsGroupByOutputType[P]>
            : GetScalarType<T[P], PayoutsGroupByOutputType[P]>
        }
      >
    >


  export type payoutsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    member_id?: boolean
    cycle_number?: boolean
    amount?: boolean
    scheduled_date?: boolean
    paid_at?: boolean
    status?: boolean
    transaction_id?: boolean
    create_at?: boolean
    updated_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    circle_member?: boolean | circle_membersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payouts"]>

  export type payoutsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    member_id?: boolean
    cycle_number?: boolean
    amount?: boolean
    scheduled_date?: boolean
    paid_at?: boolean
    status?: boolean
    transaction_id?: boolean
    create_at?: boolean
    updated_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    circle_member?: boolean | circle_membersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payouts"]>

  export type payoutsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circle_id?: boolean
    member_id?: boolean
    cycle_number?: boolean
    amount?: boolean
    scheduled_date?: boolean
    paid_at?: boolean
    status?: boolean
    transaction_id?: boolean
    create_at?: boolean
    updated_at?: boolean
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    circle_member?: boolean | circle_membersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payouts"]>

  export type payoutsSelectScalar = {
    id?: boolean
    circle_id?: boolean
    member_id?: boolean
    cycle_number?: boolean
    amount?: boolean
    scheduled_date?: boolean
    paid_at?: boolean
    status?: boolean
    transaction_id?: boolean
    create_at?: boolean
    updated_at?: boolean
  }

  export type payoutsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "circle_id" | "member_id" | "cycle_number" | "amount" | "scheduled_date" | "paid_at" | "status" | "transaction_id" | "create_at" | "updated_at", ExtArgs["result"]["payouts"]>
  export type payoutsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    circle_member?: boolean | circle_membersDefaultArgs<ExtArgs>
  }
  export type payoutsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    circle_member?: boolean | circle_membersDefaultArgs<ExtArgs>
  }
  export type payoutsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savings_circle?: boolean | savings_circlesDefaultArgs<ExtArgs>
    circle_member?: boolean | circle_membersDefaultArgs<ExtArgs>
  }

  export type $payoutsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payouts"
    objects: {
      savings_circle: Prisma.$savings_circlesPayload<ExtArgs>
      circle_member: Prisma.$circle_membersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      circle_id: string
      member_id: string
      cycle_number: number
      amount: Prisma.Decimal
      scheduled_date: Date
      paid_at: Date | null
      status: $Enums.Contribution_status
      transaction_id: string | null
      create_at: Date
      updated_at: Date
    }, ExtArgs["result"]["payouts"]>
    composites: {}
  }

  type payoutsGetPayload<S extends boolean | null | undefined | payoutsDefaultArgs> = $Result.GetResult<Prisma.$payoutsPayload, S>

  type payoutsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<payoutsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayoutsCountAggregateInputType | true
    }

  export interface payoutsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payouts'], meta: { name: 'payouts' } }
    /**
     * Find zero or one Payouts that matches the filter.
     * @param {payoutsFindUniqueArgs} args - Arguments to find a Payouts
     * @example
     * // Get one Payouts
     * const payouts = await prisma.payouts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends payoutsFindUniqueArgs>(args: SelectSubset<T, payoutsFindUniqueArgs<ExtArgs>>): Prisma__payoutsClient<$Result.GetResult<Prisma.$payoutsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payouts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {payoutsFindUniqueOrThrowArgs} args - Arguments to find a Payouts
     * @example
     * // Get one Payouts
     * const payouts = await prisma.payouts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends payoutsFindUniqueOrThrowArgs>(args: SelectSubset<T, payoutsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__payoutsClient<$Result.GetResult<Prisma.$payoutsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payoutsFindFirstArgs} args - Arguments to find a Payouts
     * @example
     * // Get one Payouts
     * const payouts = await prisma.payouts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends payoutsFindFirstArgs>(args?: SelectSubset<T, payoutsFindFirstArgs<ExtArgs>>): Prisma__payoutsClient<$Result.GetResult<Prisma.$payoutsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payouts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payoutsFindFirstOrThrowArgs} args - Arguments to find a Payouts
     * @example
     * // Get one Payouts
     * const payouts = await prisma.payouts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends payoutsFindFirstOrThrowArgs>(args?: SelectSubset<T, payoutsFindFirstOrThrowArgs<ExtArgs>>): Prisma__payoutsClient<$Result.GetResult<Prisma.$payoutsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payoutsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payouts
     * const payouts = await prisma.payouts.findMany()
     * 
     * // Get first 10 Payouts
     * const payouts = await prisma.payouts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payoutsWithIdOnly = await prisma.payouts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends payoutsFindManyArgs>(args?: SelectSubset<T, payoutsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payoutsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payouts.
     * @param {payoutsCreateArgs} args - Arguments to create a Payouts.
     * @example
     * // Create one Payouts
     * const Payouts = await prisma.payouts.create({
     *   data: {
     *     // ... data to create a Payouts
     *   }
     * })
     * 
     */
    create<T extends payoutsCreateArgs>(args: SelectSubset<T, payoutsCreateArgs<ExtArgs>>): Prisma__payoutsClient<$Result.GetResult<Prisma.$payoutsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payouts.
     * @param {payoutsCreateManyArgs} args - Arguments to create many Payouts.
     * @example
     * // Create many Payouts
     * const payouts = await prisma.payouts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends payoutsCreateManyArgs>(args?: SelectSubset<T, payoutsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payouts and returns the data saved in the database.
     * @param {payoutsCreateManyAndReturnArgs} args - Arguments to create many Payouts.
     * @example
     * // Create many Payouts
     * const payouts = await prisma.payouts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payouts and only return the `id`
     * const payoutsWithIdOnly = await prisma.payouts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends payoutsCreateManyAndReturnArgs>(args?: SelectSubset<T, payoutsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payoutsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payouts.
     * @param {payoutsDeleteArgs} args - Arguments to delete one Payouts.
     * @example
     * // Delete one Payouts
     * const Payouts = await prisma.payouts.delete({
     *   where: {
     *     // ... filter to delete one Payouts
     *   }
     * })
     * 
     */
    delete<T extends payoutsDeleteArgs>(args: SelectSubset<T, payoutsDeleteArgs<ExtArgs>>): Prisma__payoutsClient<$Result.GetResult<Prisma.$payoutsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payouts.
     * @param {payoutsUpdateArgs} args - Arguments to update one Payouts.
     * @example
     * // Update one Payouts
     * const payouts = await prisma.payouts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends payoutsUpdateArgs>(args: SelectSubset<T, payoutsUpdateArgs<ExtArgs>>): Prisma__payoutsClient<$Result.GetResult<Prisma.$payoutsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payouts.
     * @param {payoutsDeleteManyArgs} args - Arguments to filter Payouts to delete.
     * @example
     * // Delete a few Payouts
     * const { count } = await prisma.payouts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends payoutsDeleteManyArgs>(args?: SelectSubset<T, payoutsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payoutsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payouts
     * const payouts = await prisma.payouts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends payoutsUpdateManyArgs>(args: SelectSubset<T, payoutsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payouts and returns the data updated in the database.
     * @param {payoutsUpdateManyAndReturnArgs} args - Arguments to update many Payouts.
     * @example
     * // Update many Payouts
     * const payouts = await prisma.payouts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payouts and only return the `id`
     * const payoutsWithIdOnly = await prisma.payouts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends payoutsUpdateManyAndReturnArgs>(args: SelectSubset<T, payoutsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payoutsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payouts.
     * @param {payoutsUpsertArgs} args - Arguments to update or create a Payouts.
     * @example
     * // Update or create a Payouts
     * const payouts = await prisma.payouts.upsert({
     *   create: {
     *     // ... data to create a Payouts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payouts we want to update
     *   }
     * })
     */
    upsert<T extends payoutsUpsertArgs>(args: SelectSubset<T, payoutsUpsertArgs<ExtArgs>>): Prisma__payoutsClient<$Result.GetResult<Prisma.$payoutsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payoutsCountArgs} args - Arguments to filter Payouts to count.
     * @example
     * // Count the number of Payouts
     * const count = await prisma.payouts.count({
     *   where: {
     *     // ... the filter for the Payouts we want to count
     *   }
     * })
    **/
    count<T extends payoutsCountArgs>(
      args?: Subset<T, payoutsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayoutsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayoutsAggregateArgs>(args: Subset<T, PayoutsAggregateArgs>): Prisma.PrismaPromise<GetPayoutsAggregateType<T>>

    /**
     * Group by Payouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payoutsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends payoutsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payoutsGroupByArgs['orderBy'] }
        : { orderBy?: payoutsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, payoutsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payouts model
   */
  readonly fields: payoutsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payouts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payoutsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savings_circle<T extends savings_circlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, savings_circlesDefaultArgs<ExtArgs>>): Prisma__savings_circlesClient<$Result.GetResult<Prisma.$savings_circlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    circle_member<T extends circle_membersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, circle_membersDefaultArgs<ExtArgs>>): Prisma__circle_membersClient<$Result.GetResult<Prisma.$circle_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payouts model
   */
  interface payoutsFieldRefs {
    readonly id: FieldRef<"payouts", 'String'>
    readonly circle_id: FieldRef<"payouts", 'String'>
    readonly member_id: FieldRef<"payouts", 'String'>
    readonly cycle_number: FieldRef<"payouts", 'Int'>
    readonly amount: FieldRef<"payouts", 'Decimal'>
    readonly scheduled_date: FieldRef<"payouts", 'DateTime'>
    readonly paid_at: FieldRef<"payouts", 'DateTime'>
    readonly status: FieldRef<"payouts", 'Contribution_status'>
    readonly transaction_id: FieldRef<"payouts", 'String'>
    readonly create_at: FieldRef<"payouts", 'DateTime'>
    readonly updated_at: FieldRef<"payouts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payouts findUnique
   */
  export type payoutsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payouts
     */
    select?: payoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payouts
     */
    omit?: payoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payoutsInclude<ExtArgs> | null
    /**
     * Filter, which payouts to fetch.
     */
    where: payoutsWhereUniqueInput
  }

  /**
   * payouts findUniqueOrThrow
   */
  export type payoutsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payouts
     */
    select?: payoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payouts
     */
    omit?: payoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payoutsInclude<ExtArgs> | null
    /**
     * Filter, which payouts to fetch.
     */
    where: payoutsWhereUniqueInput
  }

  /**
   * payouts findFirst
   */
  export type payoutsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payouts
     */
    select?: payoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payouts
     */
    omit?: payoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payoutsInclude<ExtArgs> | null
    /**
     * Filter, which payouts to fetch.
     */
    where?: payoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payouts to fetch.
     */
    orderBy?: payoutsOrderByWithRelationInput | payoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payouts.
     */
    cursor?: payoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payouts.
     */
    distinct?: PayoutsScalarFieldEnum | PayoutsScalarFieldEnum[]
  }

  /**
   * payouts findFirstOrThrow
   */
  export type payoutsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payouts
     */
    select?: payoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payouts
     */
    omit?: payoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payoutsInclude<ExtArgs> | null
    /**
     * Filter, which payouts to fetch.
     */
    where?: payoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payouts to fetch.
     */
    orderBy?: payoutsOrderByWithRelationInput | payoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payouts.
     */
    cursor?: payoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payouts.
     */
    distinct?: PayoutsScalarFieldEnum | PayoutsScalarFieldEnum[]
  }

  /**
   * payouts findMany
   */
  export type payoutsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payouts
     */
    select?: payoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payouts
     */
    omit?: payoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payoutsInclude<ExtArgs> | null
    /**
     * Filter, which payouts to fetch.
     */
    where?: payoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payouts to fetch.
     */
    orderBy?: payoutsOrderByWithRelationInput | payoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payouts.
     */
    cursor?: payoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payouts.
     */
    distinct?: PayoutsScalarFieldEnum | PayoutsScalarFieldEnum[]
  }

  /**
   * payouts create
   */
  export type payoutsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payouts
     */
    select?: payoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payouts
     */
    omit?: payoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payoutsInclude<ExtArgs> | null
    /**
     * The data needed to create a payouts.
     */
    data: XOR<payoutsCreateInput, payoutsUncheckedCreateInput>
  }

  /**
   * payouts createMany
   */
  export type payoutsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payouts.
     */
    data: payoutsCreateManyInput | payoutsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payouts createManyAndReturn
   */
  export type payoutsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payouts
     */
    select?: payoutsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payouts
     */
    omit?: payoutsOmit<ExtArgs> | null
    /**
     * The data used to create many payouts.
     */
    data: payoutsCreateManyInput | payoutsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payoutsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payouts update
   */
  export type payoutsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payouts
     */
    select?: payoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payouts
     */
    omit?: payoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payoutsInclude<ExtArgs> | null
    /**
     * The data needed to update a payouts.
     */
    data: XOR<payoutsUpdateInput, payoutsUncheckedUpdateInput>
    /**
     * Choose, which payouts to update.
     */
    where: payoutsWhereUniqueInput
  }

  /**
   * payouts updateMany
   */
  export type payoutsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payouts.
     */
    data: XOR<payoutsUpdateManyMutationInput, payoutsUncheckedUpdateManyInput>
    /**
     * Filter which payouts to update
     */
    where?: payoutsWhereInput
    /**
     * Limit how many payouts to update.
     */
    limit?: number
  }

  /**
   * payouts updateManyAndReturn
   */
  export type payoutsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payouts
     */
    select?: payoutsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payouts
     */
    omit?: payoutsOmit<ExtArgs> | null
    /**
     * The data used to update payouts.
     */
    data: XOR<payoutsUpdateManyMutationInput, payoutsUncheckedUpdateManyInput>
    /**
     * Filter which payouts to update
     */
    where?: payoutsWhereInput
    /**
     * Limit how many payouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payoutsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payouts upsert
   */
  export type payoutsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payouts
     */
    select?: payoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payouts
     */
    omit?: payoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payoutsInclude<ExtArgs> | null
    /**
     * The filter to search for the payouts to update in case it exists.
     */
    where: payoutsWhereUniqueInput
    /**
     * In case the payouts found by the `where` argument doesn't exist, create a new payouts with this data.
     */
    create: XOR<payoutsCreateInput, payoutsUncheckedCreateInput>
    /**
     * In case the payouts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payoutsUpdateInput, payoutsUncheckedUpdateInput>
  }

  /**
   * payouts delete
   */
  export type payoutsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payouts
     */
    select?: payoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payouts
     */
    omit?: payoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payoutsInclude<ExtArgs> | null
    /**
     * Filter which payouts to delete.
     */
    where: payoutsWhereUniqueInput
  }

  /**
   * payouts deleteMany
   */
  export type payoutsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payouts to delete
     */
    where?: payoutsWhereInput
    /**
     * Limit how many payouts to delete.
     */
    limit?: number
  }

  /**
   * payouts without action
   */
  export type payoutsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payouts
     */
    select?: payoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payouts
     */
    omit?: payoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payoutsInclude<ExtArgs> | null
  }


  /**
   * Model payment_transactions
   */

  export type AggregatePayment_transactions = {
    _count: Payment_transactionsCountAggregateOutputType | null
    _avg: Payment_transactionsAvgAggregateOutputType | null
    _sum: Payment_transactionsSumAggregateOutputType | null
    _min: Payment_transactionsMinAggregateOutputType | null
    _max: Payment_transactionsMaxAggregateOutputType | null
  }

  export type Payment_transactionsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type Payment_transactionsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type Payment_transactionsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    refernce: string | null
    idempotency_key: string | null
    provider: $Enums.Provider | null
    provider_reference: string | null
    type: $Enums.Payment_type | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.Payout | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Payment_transactionsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    refernce: string | null
    idempotency_key: string | null
    provider: $Enums.Provider | null
    provider_reference: string | null
    type: $Enums.Payment_type | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.Payout | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Payment_transactionsCountAggregateOutputType = {
    id: number
    user_id: number
    refernce: number
    idempotency_key: number
    provider: number
    provider_reference: number
    type: number
    amount: number
    currency: number
    status: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Payment_transactionsAvgAggregateInputType = {
    amount?: true
  }

  export type Payment_transactionsSumAggregateInputType = {
    amount?: true
  }

  export type Payment_transactionsMinAggregateInputType = {
    id?: true
    user_id?: true
    refernce?: true
    idempotency_key?: true
    provider?: true
    provider_reference?: true
    type?: true
    amount?: true
    currency?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Payment_transactionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    refernce?: true
    idempotency_key?: true
    provider?: true
    provider_reference?: true
    type?: true
    amount?: true
    currency?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Payment_transactionsCountAggregateInputType = {
    id?: true
    user_id?: true
    refernce?: true
    idempotency_key?: true
    provider?: true
    provider_reference?: true
    type?: true
    amount?: true
    currency?: true
    status?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Payment_transactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_transactions to aggregate.
     */
    where?: payment_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_transactions to fetch.
     */
    orderBy?: payment_transactionsOrderByWithRelationInput | payment_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payment_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payment_transactions
    **/
    _count?: true | Payment_transactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Payment_transactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Payment_transactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_transactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_transactionsMaxAggregateInputType
  }

  export type GetPayment_transactionsAggregateType<T extends Payment_transactionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_transactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_transactions[P]>
      : GetScalarType<T[P], AggregatePayment_transactions[P]>
  }




  export type payment_transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_transactionsWhereInput
    orderBy?: payment_transactionsOrderByWithAggregationInput | payment_transactionsOrderByWithAggregationInput[]
    by: Payment_transactionsScalarFieldEnum[] | Payment_transactionsScalarFieldEnum
    having?: payment_transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_transactionsCountAggregateInputType | true
    _avg?: Payment_transactionsAvgAggregateInputType
    _sum?: Payment_transactionsSumAggregateInputType
    _min?: Payment_transactionsMinAggregateInputType
    _max?: Payment_transactionsMaxAggregateInputType
  }

  export type Payment_transactionsGroupByOutputType = {
    id: string
    user_id: string
    refernce: string
    idempotency_key: string
    provider: $Enums.Provider
    provider_reference: string | null
    type: $Enums.Payment_type
    amount: Decimal
    currency: string
    status: $Enums.Payout
    metadata: JsonValue
    created_at: Date
    updated_at: Date
    _count: Payment_transactionsCountAggregateOutputType | null
    _avg: Payment_transactionsAvgAggregateOutputType | null
    _sum: Payment_transactionsSumAggregateOutputType | null
    _min: Payment_transactionsMinAggregateOutputType | null
    _max: Payment_transactionsMaxAggregateOutputType | null
  }

  type GetPayment_transactionsGroupByPayload<T extends payment_transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_transactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_transactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_transactionsGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_transactionsGroupByOutputType[P]>
        }
      >
    >


  export type payment_transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    refernce?: boolean
    idempotency_key?: boolean
    provider?: boolean
    provider_reference?: boolean
    type?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    payment_status_history?: boolean | payment_transactions$payment_status_historyArgs<ExtArgs>
  }, ExtArgs["result"]["payment_transactions"]>

  export type payment_transactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    refernce?: boolean
    idempotency_key?: boolean
    provider?: boolean
    provider_reference?: boolean
    type?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_transactions"]>

  export type payment_transactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    refernce?: boolean
    idempotency_key?: boolean
    provider?: boolean
    provider_reference?: boolean
    type?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_transactions"]>

  export type payment_transactionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    refernce?: boolean
    idempotency_key?: boolean
    provider?: boolean
    provider_reference?: boolean
    type?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type payment_transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "refernce" | "idempotency_key" | "provider" | "provider_reference" | "type" | "amount" | "currency" | "status" | "metadata" | "created_at" | "updated_at", ExtArgs["result"]["payment_transactions"]>
  export type payment_transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    payment_status_history?: boolean | payment_transactions$payment_status_historyArgs<ExtArgs>
  }
  export type payment_transactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type payment_transactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $payment_transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment_transactions"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      payment_status_history: Prisma.$payment_status_historyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      refernce: string
      idempotency_key: string
      provider: $Enums.Provider
      provider_reference: string | null
      type: $Enums.Payment_type
      amount: Prisma.Decimal
      currency: string
      status: $Enums.Payout
      metadata: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["payment_transactions"]>
    composites: {}
  }

  type payment_transactionsGetPayload<S extends boolean | null | undefined | payment_transactionsDefaultArgs> = $Result.GetResult<Prisma.$payment_transactionsPayload, S>

  type payment_transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<payment_transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Payment_transactionsCountAggregateInputType | true
    }

  export interface payment_transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment_transactions'], meta: { name: 'payment_transactions' } }
    /**
     * Find zero or one Payment_transactions that matches the filter.
     * @param {payment_transactionsFindUniqueArgs} args - Arguments to find a Payment_transactions
     * @example
     * // Get one Payment_transactions
     * const payment_transactions = await prisma.payment_transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends payment_transactionsFindUniqueArgs>(args: SelectSubset<T, payment_transactionsFindUniqueArgs<ExtArgs>>): Prisma__payment_transactionsClient<$Result.GetResult<Prisma.$payment_transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment_transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {payment_transactionsFindUniqueOrThrowArgs} args - Arguments to find a Payment_transactions
     * @example
     * // Get one Payment_transactions
     * const payment_transactions = await prisma.payment_transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends payment_transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, payment_transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__payment_transactionsClient<$Result.GetResult<Prisma.$payment_transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_transactionsFindFirstArgs} args - Arguments to find a Payment_transactions
     * @example
     * // Get one Payment_transactions
     * const payment_transactions = await prisma.payment_transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends payment_transactionsFindFirstArgs>(args?: SelectSubset<T, payment_transactionsFindFirstArgs<ExtArgs>>): Prisma__payment_transactionsClient<$Result.GetResult<Prisma.$payment_transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_transactionsFindFirstOrThrowArgs} args - Arguments to find a Payment_transactions
     * @example
     * // Get one Payment_transactions
     * const payment_transactions = await prisma.payment_transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends payment_transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, payment_transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__payment_transactionsClient<$Result.GetResult<Prisma.$payment_transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payment_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_transactions
     * const payment_transactions = await prisma.payment_transactions.findMany()
     * 
     * // Get first 10 Payment_transactions
     * const payment_transactions = await prisma.payment_transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_transactionsWithIdOnly = await prisma.payment_transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends payment_transactionsFindManyArgs>(args?: SelectSubset<T, payment_transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment_transactions.
     * @param {payment_transactionsCreateArgs} args - Arguments to create a Payment_transactions.
     * @example
     * // Create one Payment_transactions
     * const Payment_transactions = await prisma.payment_transactions.create({
     *   data: {
     *     // ... data to create a Payment_transactions
     *   }
     * })
     * 
     */
    create<T extends payment_transactionsCreateArgs>(args: SelectSubset<T, payment_transactionsCreateArgs<ExtArgs>>): Prisma__payment_transactionsClient<$Result.GetResult<Prisma.$payment_transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payment_transactions.
     * @param {payment_transactionsCreateManyArgs} args - Arguments to create many Payment_transactions.
     * @example
     * // Create many Payment_transactions
     * const payment_transactions = await prisma.payment_transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends payment_transactionsCreateManyArgs>(args?: SelectSubset<T, payment_transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payment_transactions and returns the data saved in the database.
     * @param {payment_transactionsCreateManyAndReturnArgs} args - Arguments to create many Payment_transactions.
     * @example
     * // Create many Payment_transactions
     * const payment_transactions = await prisma.payment_transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payment_transactions and only return the `id`
     * const payment_transactionsWithIdOnly = await prisma.payment_transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends payment_transactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, payment_transactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_transactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment_transactions.
     * @param {payment_transactionsDeleteArgs} args - Arguments to delete one Payment_transactions.
     * @example
     * // Delete one Payment_transactions
     * const Payment_transactions = await prisma.payment_transactions.delete({
     *   where: {
     *     // ... filter to delete one Payment_transactions
     *   }
     * })
     * 
     */
    delete<T extends payment_transactionsDeleteArgs>(args: SelectSubset<T, payment_transactionsDeleteArgs<ExtArgs>>): Prisma__payment_transactionsClient<$Result.GetResult<Prisma.$payment_transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment_transactions.
     * @param {payment_transactionsUpdateArgs} args - Arguments to update one Payment_transactions.
     * @example
     * // Update one Payment_transactions
     * const payment_transactions = await prisma.payment_transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends payment_transactionsUpdateArgs>(args: SelectSubset<T, payment_transactionsUpdateArgs<ExtArgs>>): Prisma__payment_transactionsClient<$Result.GetResult<Prisma.$payment_transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payment_transactions.
     * @param {payment_transactionsDeleteManyArgs} args - Arguments to filter Payment_transactions to delete.
     * @example
     * // Delete a few Payment_transactions
     * const { count } = await prisma.payment_transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends payment_transactionsDeleteManyArgs>(args?: SelectSubset<T, payment_transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_transactions
     * const payment_transactions = await prisma.payment_transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends payment_transactionsUpdateManyArgs>(args: SelectSubset<T, payment_transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_transactions and returns the data updated in the database.
     * @param {payment_transactionsUpdateManyAndReturnArgs} args - Arguments to update many Payment_transactions.
     * @example
     * // Update many Payment_transactions
     * const payment_transactions = await prisma.payment_transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payment_transactions and only return the `id`
     * const payment_transactionsWithIdOnly = await prisma.payment_transactions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends payment_transactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, payment_transactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_transactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment_transactions.
     * @param {payment_transactionsUpsertArgs} args - Arguments to update or create a Payment_transactions.
     * @example
     * // Update or create a Payment_transactions
     * const payment_transactions = await prisma.payment_transactions.upsert({
     *   create: {
     *     // ... data to create a Payment_transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_transactions we want to update
     *   }
     * })
     */
    upsert<T extends payment_transactionsUpsertArgs>(args: SelectSubset<T, payment_transactionsUpsertArgs<ExtArgs>>): Prisma__payment_transactionsClient<$Result.GetResult<Prisma.$payment_transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payment_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_transactionsCountArgs} args - Arguments to filter Payment_transactions to count.
     * @example
     * // Count the number of Payment_transactions
     * const count = await prisma.payment_transactions.count({
     *   where: {
     *     // ... the filter for the Payment_transactions we want to count
     *   }
     * })
    **/
    count<T extends payment_transactionsCountArgs>(
      args?: Subset<T, payment_transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_transactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_transactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Payment_transactionsAggregateArgs>(args: Subset<T, Payment_transactionsAggregateArgs>): Prisma.PrismaPromise<GetPayment_transactionsAggregateType<T>>

    /**
     * Group by Payment_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_transactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends payment_transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payment_transactionsGroupByArgs['orderBy'] }
        : { orderBy?: payment_transactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, payment_transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_transactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment_transactions model
   */
  readonly fields: payment_transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment_transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payment_transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment_status_history<T extends payment_transactions$payment_status_historyArgs<ExtArgs> = {}>(args?: Subset<T, payment_transactions$payment_status_historyArgs<ExtArgs>>): Prisma__payment_status_historyClient<$Result.GetResult<Prisma.$payment_status_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payment_transactions model
   */
  interface payment_transactionsFieldRefs {
    readonly id: FieldRef<"payment_transactions", 'String'>
    readonly user_id: FieldRef<"payment_transactions", 'String'>
    readonly refernce: FieldRef<"payment_transactions", 'String'>
    readonly idempotency_key: FieldRef<"payment_transactions", 'String'>
    readonly provider: FieldRef<"payment_transactions", 'Provider'>
    readonly provider_reference: FieldRef<"payment_transactions", 'String'>
    readonly type: FieldRef<"payment_transactions", 'Payment_type'>
    readonly amount: FieldRef<"payment_transactions", 'Decimal'>
    readonly currency: FieldRef<"payment_transactions", 'String'>
    readonly status: FieldRef<"payment_transactions", 'Payout'>
    readonly metadata: FieldRef<"payment_transactions", 'Json'>
    readonly created_at: FieldRef<"payment_transactions", 'DateTime'>
    readonly updated_at: FieldRef<"payment_transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payment_transactions findUnique
   */
  export type payment_transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_transactions
     */
    select?: payment_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_transactions
     */
    omit?: payment_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which payment_transactions to fetch.
     */
    where: payment_transactionsWhereUniqueInput
  }

  /**
   * payment_transactions findUniqueOrThrow
   */
  export type payment_transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_transactions
     */
    select?: payment_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_transactions
     */
    omit?: payment_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which payment_transactions to fetch.
     */
    where: payment_transactionsWhereUniqueInput
  }

  /**
   * payment_transactions findFirst
   */
  export type payment_transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_transactions
     */
    select?: payment_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_transactions
     */
    omit?: payment_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which payment_transactions to fetch.
     */
    where?: payment_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_transactions to fetch.
     */
    orderBy?: payment_transactionsOrderByWithRelationInput | payment_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_transactions.
     */
    cursor?: payment_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_transactions.
     */
    distinct?: Payment_transactionsScalarFieldEnum | Payment_transactionsScalarFieldEnum[]
  }

  /**
   * payment_transactions findFirstOrThrow
   */
  export type payment_transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_transactions
     */
    select?: payment_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_transactions
     */
    omit?: payment_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which payment_transactions to fetch.
     */
    where?: payment_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_transactions to fetch.
     */
    orderBy?: payment_transactionsOrderByWithRelationInput | payment_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_transactions.
     */
    cursor?: payment_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_transactions.
     */
    distinct?: Payment_transactionsScalarFieldEnum | Payment_transactionsScalarFieldEnum[]
  }

  /**
   * payment_transactions findMany
   */
  export type payment_transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_transactions
     */
    select?: payment_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_transactions
     */
    omit?: payment_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which payment_transactions to fetch.
     */
    where?: payment_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_transactions to fetch.
     */
    orderBy?: payment_transactionsOrderByWithRelationInput | payment_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payment_transactions.
     */
    cursor?: payment_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_transactions.
     */
    distinct?: Payment_transactionsScalarFieldEnum | Payment_transactionsScalarFieldEnum[]
  }

  /**
   * payment_transactions create
   */
  export type payment_transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_transactions
     */
    select?: payment_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_transactions
     */
    omit?: payment_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_transactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a payment_transactions.
     */
    data: XOR<payment_transactionsCreateInput, payment_transactionsUncheckedCreateInput>
  }

  /**
   * payment_transactions createMany
   */
  export type payment_transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payment_transactions.
     */
    data: payment_transactionsCreateManyInput | payment_transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment_transactions createManyAndReturn
   */
  export type payment_transactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_transactions
     */
    select?: payment_transactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_transactions
     */
    omit?: payment_transactionsOmit<ExtArgs> | null
    /**
     * The data used to create many payment_transactions.
     */
    data: payment_transactionsCreateManyInput | payment_transactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_transactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment_transactions update
   */
  export type payment_transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_transactions
     */
    select?: payment_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_transactions
     */
    omit?: payment_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_transactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a payment_transactions.
     */
    data: XOR<payment_transactionsUpdateInput, payment_transactionsUncheckedUpdateInput>
    /**
     * Choose, which payment_transactions to update.
     */
    where: payment_transactionsWhereUniqueInput
  }

  /**
   * payment_transactions updateMany
   */
  export type payment_transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payment_transactions.
     */
    data: XOR<payment_transactionsUpdateManyMutationInput, payment_transactionsUncheckedUpdateManyInput>
    /**
     * Filter which payment_transactions to update
     */
    where?: payment_transactionsWhereInput
    /**
     * Limit how many payment_transactions to update.
     */
    limit?: number
  }

  /**
   * payment_transactions updateManyAndReturn
   */
  export type payment_transactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_transactions
     */
    select?: payment_transactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_transactions
     */
    omit?: payment_transactionsOmit<ExtArgs> | null
    /**
     * The data used to update payment_transactions.
     */
    data: XOR<payment_transactionsUpdateManyMutationInput, payment_transactionsUncheckedUpdateManyInput>
    /**
     * Filter which payment_transactions to update
     */
    where?: payment_transactionsWhereInput
    /**
     * Limit how many payment_transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_transactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment_transactions upsert
   */
  export type payment_transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_transactions
     */
    select?: payment_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_transactions
     */
    omit?: payment_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_transactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the payment_transactions to update in case it exists.
     */
    where: payment_transactionsWhereUniqueInput
    /**
     * In case the payment_transactions found by the `where` argument doesn't exist, create a new payment_transactions with this data.
     */
    create: XOR<payment_transactionsCreateInput, payment_transactionsUncheckedCreateInput>
    /**
     * In case the payment_transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payment_transactionsUpdateInput, payment_transactionsUncheckedUpdateInput>
  }

  /**
   * payment_transactions delete
   */
  export type payment_transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_transactions
     */
    select?: payment_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_transactions
     */
    omit?: payment_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_transactionsInclude<ExtArgs> | null
    /**
     * Filter which payment_transactions to delete.
     */
    where: payment_transactionsWhereUniqueInput
  }

  /**
   * payment_transactions deleteMany
   */
  export type payment_transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_transactions to delete
     */
    where?: payment_transactionsWhereInput
    /**
     * Limit how many payment_transactions to delete.
     */
    limit?: number
  }

  /**
   * payment_transactions.payment_status_history
   */
  export type payment_transactions$payment_status_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_status_history
     */
    select?: payment_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_status_history
     */
    omit?: payment_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_status_historyInclude<ExtArgs> | null
    where?: payment_status_historyWhereInput
  }

  /**
   * payment_transactions without action
   */
  export type payment_transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_transactions
     */
    select?: payment_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_transactions
     */
    omit?: payment_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_transactionsInclude<ExtArgs> | null
  }


  /**
   * Model payment_status_history
   */

  export type AggregatePayment_status_history = {
    _count: Payment_status_historyCountAggregateOutputType | null
    _min: Payment_status_historyMinAggregateOutputType | null
    _max: Payment_status_historyMaxAggregateOutputType | null
  }

  export type Payment_status_historyMinAggregateOutputType = {
    id: string | null
    transaction_id: string | null
    status: $Enums.Payout | null
    message: string | null
    created_at: Date | null
  }

  export type Payment_status_historyMaxAggregateOutputType = {
    id: string | null
    transaction_id: string | null
    status: $Enums.Payout | null
    message: string | null
    created_at: Date | null
  }

  export type Payment_status_historyCountAggregateOutputType = {
    id: number
    transaction_id: number
    status: number
    message: number
    metadata: number
    created_at: number
    _all: number
  }


  export type Payment_status_historyMinAggregateInputType = {
    id?: true
    transaction_id?: true
    status?: true
    message?: true
    created_at?: true
  }

  export type Payment_status_historyMaxAggregateInputType = {
    id?: true
    transaction_id?: true
    status?: true
    message?: true
    created_at?: true
  }

  export type Payment_status_historyCountAggregateInputType = {
    id?: true
    transaction_id?: true
    status?: true
    message?: true
    metadata?: true
    created_at?: true
    _all?: true
  }

  export type Payment_status_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_status_history to aggregate.
     */
    where?: payment_status_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_status_histories to fetch.
     */
    orderBy?: payment_status_historyOrderByWithRelationInput | payment_status_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payment_status_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_status_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_status_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payment_status_histories
    **/
    _count?: true | Payment_status_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_status_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_status_historyMaxAggregateInputType
  }

  export type GetPayment_status_historyAggregateType<T extends Payment_status_historyAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_status_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_status_history[P]>
      : GetScalarType<T[P], AggregatePayment_status_history[P]>
  }




  export type payment_status_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_status_historyWhereInput
    orderBy?: payment_status_historyOrderByWithAggregationInput | payment_status_historyOrderByWithAggregationInput[]
    by: Payment_status_historyScalarFieldEnum[] | Payment_status_historyScalarFieldEnum
    having?: payment_status_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_status_historyCountAggregateInputType | true
    _min?: Payment_status_historyMinAggregateInputType
    _max?: Payment_status_historyMaxAggregateInputType
  }

  export type Payment_status_historyGroupByOutputType = {
    id: string
    transaction_id: string
    status: $Enums.Payout
    message: string
    metadata: JsonValue
    created_at: Date
    _count: Payment_status_historyCountAggregateOutputType | null
    _min: Payment_status_historyMinAggregateOutputType | null
    _max: Payment_status_historyMaxAggregateOutputType | null
  }

  type GetPayment_status_historyGroupByPayload<T extends payment_status_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_status_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_status_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_status_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_status_historyGroupByOutputType[P]>
        }
      >
    >


  export type payment_status_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    status?: boolean
    message?: boolean
    metadata?: boolean
    created_at?: boolean
    payment_transactions?: boolean | payment_transactionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_status_history"]>

  export type payment_status_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    status?: boolean
    message?: boolean
    metadata?: boolean
    created_at?: boolean
    payment_transactions?: boolean | payment_transactionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_status_history"]>

  export type payment_status_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    status?: boolean
    message?: boolean
    metadata?: boolean
    created_at?: boolean
    payment_transactions?: boolean | payment_transactionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_status_history"]>

  export type payment_status_historySelectScalar = {
    id?: boolean
    transaction_id?: boolean
    status?: boolean
    message?: boolean
    metadata?: boolean
    created_at?: boolean
  }

  export type payment_status_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transaction_id" | "status" | "message" | "metadata" | "created_at", ExtArgs["result"]["payment_status_history"]>
  export type payment_status_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment_transactions?: boolean | payment_transactionsDefaultArgs<ExtArgs>
  }
  export type payment_status_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment_transactions?: boolean | payment_transactionsDefaultArgs<ExtArgs>
  }
  export type payment_status_historyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment_transactions?: boolean | payment_transactionsDefaultArgs<ExtArgs>
  }

  export type $payment_status_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment_status_history"
    objects: {
      payment_transactions: Prisma.$payment_transactionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transaction_id: string
      status: $Enums.Payout
      message: string
      metadata: Prisma.JsonValue
      created_at: Date
    }, ExtArgs["result"]["payment_status_history"]>
    composites: {}
  }

  type payment_status_historyGetPayload<S extends boolean | null | undefined | payment_status_historyDefaultArgs> = $Result.GetResult<Prisma.$payment_status_historyPayload, S>

  type payment_status_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<payment_status_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Payment_status_historyCountAggregateInputType | true
    }

  export interface payment_status_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment_status_history'], meta: { name: 'payment_status_history' } }
    /**
     * Find zero or one Payment_status_history that matches the filter.
     * @param {payment_status_historyFindUniqueArgs} args - Arguments to find a Payment_status_history
     * @example
     * // Get one Payment_status_history
     * const payment_status_history = await prisma.payment_status_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends payment_status_historyFindUniqueArgs>(args: SelectSubset<T, payment_status_historyFindUniqueArgs<ExtArgs>>): Prisma__payment_status_historyClient<$Result.GetResult<Prisma.$payment_status_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment_status_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {payment_status_historyFindUniqueOrThrowArgs} args - Arguments to find a Payment_status_history
     * @example
     * // Get one Payment_status_history
     * const payment_status_history = await prisma.payment_status_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends payment_status_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, payment_status_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__payment_status_historyClient<$Result.GetResult<Prisma.$payment_status_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_status_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_status_historyFindFirstArgs} args - Arguments to find a Payment_status_history
     * @example
     * // Get one Payment_status_history
     * const payment_status_history = await prisma.payment_status_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends payment_status_historyFindFirstArgs>(args?: SelectSubset<T, payment_status_historyFindFirstArgs<ExtArgs>>): Prisma__payment_status_historyClient<$Result.GetResult<Prisma.$payment_status_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_status_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_status_historyFindFirstOrThrowArgs} args - Arguments to find a Payment_status_history
     * @example
     * // Get one Payment_status_history
     * const payment_status_history = await prisma.payment_status_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends payment_status_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, payment_status_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__payment_status_historyClient<$Result.GetResult<Prisma.$payment_status_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payment_status_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_status_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_status_histories
     * const payment_status_histories = await prisma.payment_status_history.findMany()
     * 
     * // Get first 10 Payment_status_histories
     * const payment_status_histories = await prisma.payment_status_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_status_historyWithIdOnly = await prisma.payment_status_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends payment_status_historyFindManyArgs>(args?: SelectSubset<T, payment_status_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_status_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment_status_history.
     * @param {payment_status_historyCreateArgs} args - Arguments to create a Payment_status_history.
     * @example
     * // Create one Payment_status_history
     * const Payment_status_history = await prisma.payment_status_history.create({
     *   data: {
     *     // ... data to create a Payment_status_history
     *   }
     * })
     * 
     */
    create<T extends payment_status_historyCreateArgs>(args: SelectSubset<T, payment_status_historyCreateArgs<ExtArgs>>): Prisma__payment_status_historyClient<$Result.GetResult<Prisma.$payment_status_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payment_status_histories.
     * @param {payment_status_historyCreateManyArgs} args - Arguments to create many Payment_status_histories.
     * @example
     * // Create many Payment_status_histories
     * const payment_status_history = await prisma.payment_status_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends payment_status_historyCreateManyArgs>(args?: SelectSubset<T, payment_status_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payment_status_histories and returns the data saved in the database.
     * @param {payment_status_historyCreateManyAndReturnArgs} args - Arguments to create many Payment_status_histories.
     * @example
     * // Create many Payment_status_histories
     * const payment_status_history = await prisma.payment_status_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payment_status_histories and only return the `id`
     * const payment_status_historyWithIdOnly = await prisma.payment_status_history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends payment_status_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, payment_status_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_status_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment_status_history.
     * @param {payment_status_historyDeleteArgs} args - Arguments to delete one Payment_status_history.
     * @example
     * // Delete one Payment_status_history
     * const Payment_status_history = await prisma.payment_status_history.delete({
     *   where: {
     *     // ... filter to delete one Payment_status_history
     *   }
     * })
     * 
     */
    delete<T extends payment_status_historyDeleteArgs>(args: SelectSubset<T, payment_status_historyDeleteArgs<ExtArgs>>): Prisma__payment_status_historyClient<$Result.GetResult<Prisma.$payment_status_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment_status_history.
     * @param {payment_status_historyUpdateArgs} args - Arguments to update one Payment_status_history.
     * @example
     * // Update one Payment_status_history
     * const payment_status_history = await prisma.payment_status_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends payment_status_historyUpdateArgs>(args: SelectSubset<T, payment_status_historyUpdateArgs<ExtArgs>>): Prisma__payment_status_historyClient<$Result.GetResult<Prisma.$payment_status_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payment_status_histories.
     * @param {payment_status_historyDeleteManyArgs} args - Arguments to filter Payment_status_histories to delete.
     * @example
     * // Delete a few Payment_status_histories
     * const { count } = await prisma.payment_status_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends payment_status_historyDeleteManyArgs>(args?: SelectSubset<T, payment_status_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_status_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_status_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_status_histories
     * const payment_status_history = await prisma.payment_status_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends payment_status_historyUpdateManyArgs>(args: SelectSubset<T, payment_status_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_status_histories and returns the data updated in the database.
     * @param {payment_status_historyUpdateManyAndReturnArgs} args - Arguments to update many Payment_status_histories.
     * @example
     * // Update many Payment_status_histories
     * const payment_status_history = await prisma.payment_status_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payment_status_histories and only return the `id`
     * const payment_status_historyWithIdOnly = await prisma.payment_status_history.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends payment_status_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, payment_status_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_status_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment_status_history.
     * @param {payment_status_historyUpsertArgs} args - Arguments to update or create a Payment_status_history.
     * @example
     * // Update or create a Payment_status_history
     * const payment_status_history = await prisma.payment_status_history.upsert({
     *   create: {
     *     // ... data to create a Payment_status_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_status_history we want to update
     *   }
     * })
     */
    upsert<T extends payment_status_historyUpsertArgs>(args: SelectSubset<T, payment_status_historyUpsertArgs<ExtArgs>>): Prisma__payment_status_historyClient<$Result.GetResult<Prisma.$payment_status_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payment_status_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_status_historyCountArgs} args - Arguments to filter Payment_status_histories to count.
     * @example
     * // Count the number of Payment_status_histories
     * const count = await prisma.payment_status_history.count({
     *   where: {
     *     // ... the filter for the Payment_status_histories we want to count
     *   }
     * })
    **/
    count<T extends payment_status_historyCountArgs>(
      args?: Subset<T, payment_status_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_status_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_status_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_status_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Payment_status_historyAggregateArgs>(args: Subset<T, Payment_status_historyAggregateArgs>): Prisma.PrismaPromise<GetPayment_status_historyAggregateType<T>>

    /**
     * Group by Payment_status_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_status_historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends payment_status_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payment_status_historyGroupByArgs['orderBy'] }
        : { orderBy?: payment_status_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, payment_status_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_status_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment_status_history model
   */
  readonly fields: payment_status_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment_status_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payment_status_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment_transactions<T extends payment_transactionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, payment_transactionsDefaultArgs<ExtArgs>>): Prisma__payment_transactionsClient<$Result.GetResult<Prisma.$payment_transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payment_status_history model
   */
  interface payment_status_historyFieldRefs {
    readonly id: FieldRef<"payment_status_history", 'String'>
    readonly transaction_id: FieldRef<"payment_status_history", 'String'>
    readonly status: FieldRef<"payment_status_history", 'Payout'>
    readonly message: FieldRef<"payment_status_history", 'String'>
    readonly metadata: FieldRef<"payment_status_history", 'Json'>
    readonly created_at: FieldRef<"payment_status_history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payment_status_history findUnique
   */
  export type payment_status_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_status_history
     */
    select?: payment_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_status_history
     */
    omit?: payment_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_status_historyInclude<ExtArgs> | null
    /**
     * Filter, which payment_status_history to fetch.
     */
    where: payment_status_historyWhereUniqueInput
  }

  /**
   * payment_status_history findUniqueOrThrow
   */
  export type payment_status_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_status_history
     */
    select?: payment_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_status_history
     */
    omit?: payment_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_status_historyInclude<ExtArgs> | null
    /**
     * Filter, which payment_status_history to fetch.
     */
    where: payment_status_historyWhereUniqueInput
  }

  /**
   * payment_status_history findFirst
   */
  export type payment_status_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_status_history
     */
    select?: payment_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_status_history
     */
    omit?: payment_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_status_historyInclude<ExtArgs> | null
    /**
     * Filter, which payment_status_history to fetch.
     */
    where?: payment_status_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_status_histories to fetch.
     */
    orderBy?: payment_status_historyOrderByWithRelationInput | payment_status_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_status_histories.
     */
    cursor?: payment_status_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_status_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_status_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_status_histories.
     */
    distinct?: Payment_status_historyScalarFieldEnum | Payment_status_historyScalarFieldEnum[]
  }

  /**
   * payment_status_history findFirstOrThrow
   */
  export type payment_status_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_status_history
     */
    select?: payment_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_status_history
     */
    omit?: payment_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_status_historyInclude<ExtArgs> | null
    /**
     * Filter, which payment_status_history to fetch.
     */
    where?: payment_status_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_status_histories to fetch.
     */
    orderBy?: payment_status_historyOrderByWithRelationInput | payment_status_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_status_histories.
     */
    cursor?: payment_status_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_status_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_status_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_status_histories.
     */
    distinct?: Payment_status_historyScalarFieldEnum | Payment_status_historyScalarFieldEnum[]
  }

  /**
   * payment_status_history findMany
   */
  export type payment_status_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_status_history
     */
    select?: payment_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_status_history
     */
    omit?: payment_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_status_historyInclude<ExtArgs> | null
    /**
     * Filter, which payment_status_histories to fetch.
     */
    where?: payment_status_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_status_histories to fetch.
     */
    orderBy?: payment_status_historyOrderByWithRelationInput | payment_status_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payment_status_histories.
     */
    cursor?: payment_status_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_status_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_status_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_status_histories.
     */
    distinct?: Payment_status_historyScalarFieldEnum | Payment_status_historyScalarFieldEnum[]
  }

  /**
   * payment_status_history create
   */
  export type payment_status_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_status_history
     */
    select?: payment_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_status_history
     */
    omit?: payment_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_status_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a payment_status_history.
     */
    data: XOR<payment_status_historyCreateInput, payment_status_historyUncheckedCreateInput>
  }

  /**
   * payment_status_history createMany
   */
  export type payment_status_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payment_status_histories.
     */
    data: payment_status_historyCreateManyInput | payment_status_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment_status_history createManyAndReturn
   */
  export type payment_status_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_status_history
     */
    select?: payment_status_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_status_history
     */
    omit?: payment_status_historyOmit<ExtArgs> | null
    /**
     * The data used to create many payment_status_histories.
     */
    data: payment_status_historyCreateManyInput | payment_status_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_status_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment_status_history update
   */
  export type payment_status_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_status_history
     */
    select?: payment_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_status_history
     */
    omit?: payment_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_status_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a payment_status_history.
     */
    data: XOR<payment_status_historyUpdateInput, payment_status_historyUncheckedUpdateInput>
    /**
     * Choose, which payment_status_history to update.
     */
    where: payment_status_historyWhereUniqueInput
  }

  /**
   * payment_status_history updateMany
   */
  export type payment_status_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payment_status_histories.
     */
    data: XOR<payment_status_historyUpdateManyMutationInput, payment_status_historyUncheckedUpdateManyInput>
    /**
     * Filter which payment_status_histories to update
     */
    where?: payment_status_historyWhereInput
    /**
     * Limit how many payment_status_histories to update.
     */
    limit?: number
  }

  /**
   * payment_status_history updateManyAndReturn
   */
  export type payment_status_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_status_history
     */
    select?: payment_status_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_status_history
     */
    omit?: payment_status_historyOmit<ExtArgs> | null
    /**
     * The data used to update payment_status_histories.
     */
    data: XOR<payment_status_historyUpdateManyMutationInput, payment_status_historyUncheckedUpdateManyInput>
    /**
     * Filter which payment_status_histories to update
     */
    where?: payment_status_historyWhereInput
    /**
     * Limit how many payment_status_histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_status_historyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment_status_history upsert
   */
  export type payment_status_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_status_history
     */
    select?: payment_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_status_history
     */
    omit?: payment_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_status_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the payment_status_history to update in case it exists.
     */
    where: payment_status_historyWhereUniqueInput
    /**
     * In case the payment_status_history found by the `where` argument doesn't exist, create a new payment_status_history with this data.
     */
    create: XOR<payment_status_historyCreateInput, payment_status_historyUncheckedCreateInput>
    /**
     * In case the payment_status_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payment_status_historyUpdateInput, payment_status_historyUncheckedUpdateInput>
  }

  /**
   * payment_status_history delete
   */
  export type payment_status_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_status_history
     */
    select?: payment_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_status_history
     */
    omit?: payment_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_status_historyInclude<ExtArgs> | null
    /**
     * Filter which payment_status_history to delete.
     */
    where: payment_status_historyWhereUniqueInput
  }

  /**
   * payment_status_history deleteMany
   */
  export type payment_status_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_status_histories to delete
     */
    where?: payment_status_historyWhereInput
    /**
     * Limit how many payment_status_histories to delete.
     */
    limit?: number
  }

  /**
   * payment_status_history without action
   */
  export type payment_status_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_status_history
     */
    select?: payment_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_status_history
     */
    omit?: payment_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_status_historyInclude<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    type: $Enums.Notifications | null
    title: string | null
    message: string | null
    read_at: Date | null
    created_at: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    type: $Enums.Notifications | null
    title: string | null
    message: string | null
    read_at: Date | null
    created_at: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    user_id: number
    type: number
    title: number
    message: number
    data: number
    read_at: number
    created_at: number
    _all: number
  }


  export type NotificationsMinAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    title?: true
    message?: true
    read_at?: true
    created_at?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    title?: true
    message?: true
    read_at?: true
    created_at?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    title?: true
    message?: true
    data?: true
    read_at?: true
    created_at?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: string
    user_id: string
    type: $Enums.Notifications
    title: string
    message: string
    data: JsonValue
    read_at: Date
    created_at: Date
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    read_at?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    read_at?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    read_at?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    read_at?: boolean
    created_at?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "type" | "title" | "message" | "data" | "read_at" | "created_at", ExtArgs["result"]["notifications"]>
  export type notificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type notificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type notificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      type: $Enums.Notifications
      title: string
      message: string
      data: Prisma.JsonValue
      read_at: Date
      created_at: Date
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'String'>
    readonly user_id: FieldRef<"notifications", 'String'>
    readonly type: FieldRef<"notifications", 'Notifications'>
    readonly title: FieldRef<"notifications", 'String'>
    readonly message: FieldRef<"notifications", 'String'>
    readonly data: FieldRef<"notifications", 'Json'>
    readonly read_at: FieldRef<"notifications", 'DateTime'>
    readonly created_at: FieldRef<"notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications createManyAndReturn
   */
  export type notificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications updateManyAndReturn
   */
  export type notificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
  }


  /**
   * Model audit_log
   */

  export type AggregateAudit_log = {
    _count: Audit_logCountAggregateOutputType | null
    _min: Audit_logMinAggregateOutputType | null
    _max: Audit_logMaxAggregateOutputType | null
  }

  export type Audit_logMinAggregateOutputType = {
    id: string | null
    user_id: $Enums.Status | null
    action: string | null
    entity_type: string | null
    entity_id: string | null
    ip_address: string | null
    created_at: Date | null
  }

  export type Audit_logMaxAggregateOutputType = {
    id: string | null
    user_id: $Enums.Status | null
    action: string | null
    entity_type: string | null
    entity_id: string | null
    ip_address: string | null
    created_at: Date | null
  }

  export type Audit_logCountAggregateOutputType = {
    id: number
    user_id: number
    action: number
    entity_type: number
    entity_id: number
    metadata: number
    ip_address: number
    created_at: number
    _all: number
  }


  export type Audit_logMinAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    entity_type?: true
    entity_id?: true
    ip_address?: true
    created_at?: true
  }

  export type Audit_logMaxAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    entity_type?: true
    entity_id?: true
    ip_address?: true
    created_at?: true
  }

  export type Audit_logCountAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    entity_type?: true
    entity_id?: true
    metadata?: true
    ip_address?: true
    created_at?: true
    _all?: true
  }

  export type Audit_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_log to aggregate.
     */
    where?: audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audit_logs
    **/
    _count?: true | Audit_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_logMaxAggregateInputType
  }

  export type GetAudit_logAggregateType<T extends Audit_logAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_log[P]>
      : GetScalarType<T[P], AggregateAudit_log[P]>
  }




  export type audit_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logWhereInput
    orderBy?: audit_logOrderByWithAggregationInput | audit_logOrderByWithAggregationInput[]
    by: Audit_logScalarFieldEnum[] | Audit_logScalarFieldEnum
    having?: audit_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_logCountAggregateInputType | true
    _min?: Audit_logMinAggregateInputType
    _max?: Audit_logMaxAggregateInputType
  }

  export type Audit_logGroupByOutputType = {
    id: string
    user_id: $Enums.Status | null
    action: string
    entity_type: string
    entity_id: string | null
    metadata: JsonValue | null
    ip_address: string | null
    created_at: Date
    _count: Audit_logCountAggregateOutputType | null
    _min: Audit_logMinAggregateOutputType | null
    _max: Audit_logMaxAggregateOutputType | null
  }

  type GetAudit_logGroupByPayload<T extends audit_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_logGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_logGroupByOutputType[P]>
        }
      >
    >


  export type audit_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    entity_type?: boolean
    entity_id?: boolean
    metadata?: boolean
    ip_address?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["audit_log"]>

  export type audit_logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    entity_type?: boolean
    entity_id?: boolean
    metadata?: boolean
    ip_address?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["audit_log"]>

  export type audit_logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    entity_type?: boolean
    entity_id?: boolean
    metadata?: boolean
    ip_address?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["audit_log"]>

  export type audit_logSelectScalar = {
    id?: boolean
    user_id?: boolean
    action?: boolean
    entity_type?: boolean
    entity_id?: boolean
    metadata?: boolean
    ip_address?: boolean
    created_at?: boolean
  }

  export type audit_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "action" | "entity_type" | "entity_id" | "metadata" | "ip_address" | "created_at", ExtArgs["result"]["audit_log"]>

  export type $audit_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "audit_log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: $Enums.Status | null
      action: string
      entity_type: string
      entity_id: string | null
      metadata: Prisma.JsonValue | null
      ip_address: string | null
      created_at: Date
    }, ExtArgs["result"]["audit_log"]>
    composites: {}
  }

  type audit_logGetPayload<S extends boolean | null | undefined | audit_logDefaultArgs> = $Result.GetResult<Prisma.$audit_logPayload, S>

  type audit_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<audit_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Audit_logCountAggregateInputType | true
    }

  export interface audit_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_log'], meta: { name: 'audit_log' } }
    /**
     * Find zero or one Audit_log that matches the filter.
     * @param {audit_logFindUniqueArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends audit_logFindUniqueArgs>(args: SelectSubset<T, audit_logFindUniqueArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {audit_logFindUniqueOrThrowArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends audit_logFindUniqueOrThrowArgs>(args: SelectSubset<T, audit_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindFirstArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends audit_logFindFirstArgs>(args?: SelectSubset<T, audit_logFindFirstArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindFirstOrThrowArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends audit_logFindFirstOrThrowArgs>(args?: SelectSubset<T, audit_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_logs
     * const audit_logs = await prisma.audit_log.findMany()
     * 
     * // Get first 10 Audit_logs
     * const audit_logs = await prisma.audit_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audit_logWithIdOnly = await prisma.audit_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends audit_logFindManyArgs>(args?: SelectSubset<T, audit_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit_log.
     * @param {audit_logCreateArgs} args - Arguments to create a Audit_log.
     * @example
     * // Create one Audit_log
     * const Audit_log = await prisma.audit_log.create({
     *   data: {
     *     // ... data to create a Audit_log
     *   }
     * })
     * 
     */
    create<T extends audit_logCreateArgs>(args: SelectSubset<T, audit_logCreateArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audit_logs.
     * @param {audit_logCreateManyArgs} args - Arguments to create many Audit_logs.
     * @example
     * // Create many Audit_logs
     * const audit_log = await prisma.audit_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends audit_logCreateManyArgs>(args?: SelectSubset<T, audit_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audit_logs and returns the data saved in the database.
     * @param {audit_logCreateManyAndReturnArgs} args - Arguments to create many Audit_logs.
     * @example
     * // Create many Audit_logs
     * const audit_log = await prisma.audit_log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audit_logs and only return the `id`
     * const audit_logWithIdOnly = await prisma.audit_log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends audit_logCreateManyAndReturnArgs>(args?: SelectSubset<T, audit_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audit_log.
     * @param {audit_logDeleteArgs} args - Arguments to delete one Audit_log.
     * @example
     * // Delete one Audit_log
     * const Audit_log = await prisma.audit_log.delete({
     *   where: {
     *     // ... filter to delete one Audit_log
     *   }
     * })
     * 
     */
    delete<T extends audit_logDeleteArgs>(args: SelectSubset<T, audit_logDeleteArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit_log.
     * @param {audit_logUpdateArgs} args - Arguments to update one Audit_log.
     * @example
     * // Update one Audit_log
     * const audit_log = await prisma.audit_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends audit_logUpdateArgs>(args: SelectSubset<T, audit_logUpdateArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audit_logs.
     * @param {audit_logDeleteManyArgs} args - Arguments to filter Audit_logs to delete.
     * @example
     * // Delete a few Audit_logs
     * const { count } = await prisma.audit_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends audit_logDeleteManyArgs>(args?: SelectSubset<T, audit_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_logs
     * const audit_log = await prisma.audit_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends audit_logUpdateManyArgs>(args: SelectSubset<T, audit_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_logs and returns the data updated in the database.
     * @param {audit_logUpdateManyAndReturnArgs} args - Arguments to update many Audit_logs.
     * @example
     * // Update many Audit_logs
     * const audit_log = await prisma.audit_log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audit_logs and only return the `id`
     * const audit_logWithIdOnly = await prisma.audit_log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends audit_logUpdateManyAndReturnArgs>(args: SelectSubset<T, audit_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audit_log.
     * @param {audit_logUpsertArgs} args - Arguments to update or create a Audit_log.
     * @example
     * // Update or create a Audit_log
     * const audit_log = await prisma.audit_log.upsert({
     *   create: {
     *     // ... data to create a Audit_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_log we want to update
     *   }
     * })
     */
    upsert<T extends audit_logUpsertArgs>(args: SelectSubset<T, audit_logUpsertArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logCountArgs} args - Arguments to filter Audit_logs to count.
     * @example
     * // Count the number of Audit_logs
     * const count = await prisma.audit_log.count({
     *   where: {
     *     // ... the filter for the Audit_logs we want to count
     *   }
     * })
    **/
    count<T extends audit_logCountArgs>(
      args?: Subset<T, audit_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Audit_logAggregateArgs>(args: Subset<T, Audit_logAggregateArgs>): Prisma.PrismaPromise<GetAudit_logAggregateType<T>>

    /**
     * Group by Audit_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends audit_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_logGroupByArgs['orderBy'] }
        : { orderBy?: audit_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, audit_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the audit_log model
   */
  readonly fields: audit_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the audit_log model
   */
  interface audit_logFieldRefs {
    readonly id: FieldRef<"audit_log", 'String'>
    readonly user_id: FieldRef<"audit_log", 'Status'>
    readonly action: FieldRef<"audit_log", 'String'>
    readonly entity_type: FieldRef<"audit_log", 'String'>
    readonly entity_id: FieldRef<"audit_log", 'String'>
    readonly metadata: FieldRef<"audit_log", 'Json'>
    readonly ip_address: FieldRef<"audit_log", 'String'>
    readonly created_at: FieldRef<"audit_log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * audit_log findUnique
   */
  export type audit_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Filter, which audit_log to fetch.
     */
    where: audit_logWhereUniqueInput
  }

  /**
   * audit_log findUniqueOrThrow
   */
  export type audit_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Filter, which audit_log to fetch.
     */
    where: audit_logWhereUniqueInput
  }

  /**
   * audit_log findFirst
   */
  export type audit_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Filter, which audit_log to fetch.
     */
    where?: audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[]
  }

  /**
   * audit_log findFirstOrThrow
   */
  export type audit_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Filter, which audit_log to fetch.
     */
    where?: audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[]
  }

  /**
   * audit_log findMany
   */
  export type audit_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audit_logs.
     */
    cursor?: audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[]
  }

  /**
   * audit_log create
   */
  export type audit_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * The data needed to create a audit_log.
     */
    data: XOR<audit_logCreateInput, audit_logUncheckedCreateInput>
  }

  /**
   * audit_log createMany
   */
  export type audit_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logCreateManyInput | audit_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * audit_log createManyAndReturn
   */
  export type audit_logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logCreateManyInput | audit_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * audit_log update
   */
  export type audit_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * The data needed to update a audit_log.
     */
    data: XOR<audit_logUpdateInput, audit_logUncheckedUpdateInput>
    /**
     * Choose, which audit_log to update.
     */
    where: audit_logWhereUniqueInput
  }

  /**
   * audit_log updateMany
   */
  export type audit_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logUpdateManyMutationInput, audit_logUncheckedUpdateManyInput>
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logWhereInput
    /**
     * Limit how many audit_logs to update.
     */
    limit?: number
  }

  /**
   * audit_log updateManyAndReturn
   */
  export type audit_logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logUpdateManyMutationInput, audit_logUncheckedUpdateManyInput>
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logWhereInput
    /**
     * Limit how many audit_logs to update.
     */
    limit?: number
  }

  /**
   * audit_log upsert
   */
  export type audit_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * The filter to search for the audit_log to update in case it exists.
     */
    where: audit_logWhereUniqueInput
    /**
     * In case the audit_log found by the `where` argument doesn't exist, create a new audit_log with this data.
     */
    create: XOR<audit_logCreateInput, audit_logUncheckedCreateInput>
    /**
     * In case the audit_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_logUpdateInput, audit_logUncheckedUpdateInput>
  }

  /**
   * audit_log delete
   */
  export type audit_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Filter which audit_log to delete.
     */
    where: audit_logWhereUniqueInput
  }

  /**
   * audit_log deleteMany
   */
  export type audit_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_logs to delete
     */
    where?: audit_logWhereInput
    /**
     * Limit how many audit_logs to delete.
     */
    limit?: number
  }

  /**
   * audit_log without action
   */
  export type audit_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WaitlistEntryScalarFieldEnum: {
    id: 'id',
    email: 'email',
    status: 'status',
    verification_token_hash: 'verification_token_hash',
    verification_expires_at: 'verification_expires_at',
    verified_at: 'verified_at',
    userId: 'userId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WaitlistEntryScalarFieldEnum = (typeof WaitlistEntryScalarFieldEnum)[keyof typeof WaitlistEntryScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    password_hash: 'password_hash',
    first_name: 'first_name',
    last_name: 'last_name',
    avatar_url: 'avatar_url',
    email_verified_at: 'email_verified_at',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token_hash: 'token_hash',
    expires_at: 'expires_at',
    created_at: 'created_at',
    revoked_at: 'revoked_at'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const Savings_circlesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    decription: 'decription',
    owner_id: 'owner_id',
    contribution_amount: 'contribution_amount',
    currency: 'currency',
    frequency: 'frequency',
    member_limit: 'member_limit',
    start_date: 'start_date',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Savings_circlesScalarFieldEnum = (typeof Savings_circlesScalarFieldEnum)[keyof typeof Savings_circlesScalarFieldEnum]


  export const Circle_membersScalarFieldEnum: {
    id: 'id',
    circle_id: 'circle_id',
    user_id: 'user_id',
    role: 'role',
    status: 'status',
    joined_at: 'joined_at',
    left_at: 'left_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Circle_membersScalarFieldEnum = (typeof Circle_membersScalarFieldEnum)[keyof typeof Circle_membersScalarFieldEnum]


  export const Circle_invitationsScalarFieldEnum: {
    id: 'id',
    circle_id: 'circle_id',
    invited_by: 'invited_by',
    email: 'email',
    token_hash: 'token_hash',
    status: 'status',
    expires_at: 'expires_at',
    accepted_at: 'accepted_at',
    created_at: 'created_at'
  };

  export type Circle_invitationsScalarFieldEnum = (typeof Circle_invitationsScalarFieldEnum)[keyof typeof Circle_invitationsScalarFieldEnum]


  export const Savings_schedulesScalarFieldEnum: {
    id: 'id',
    circle_id: 'circle_id',
    frequency: 'frequency',
    contribution_amount: 'contribution_amount',
    start_date: 'start_date',
    end_date: 'end_date',
    total_cycles: 'total_cycles',
    current_cycle: 'current_cycle',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Savings_schedulesScalarFieldEnum = (typeof Savings_schedulesScalarFieldEnum)[keyof typeof Savings_schedulesScalarFieldEnum]


  export const ContributionsScalarFieldEnum: {
    id: 'id',
    circle_id: 'circle_id',
    circle_member: 'circle_member',
    cycle_number: 'cycle_number',
    amount: 'amount',
    due_date: 'due_date',
    paid_at: 'paid_at',
    status: 'status',
    transaction_id: 'transaction_id',
    create_at: 'create_at',
    updated_at: 'updated_at'
  };

  export type ContributionsScalarFieldEnum = (typeof ContributionsScalarFieldEnum)[keyof typeof ContributionsScalarFieldEnum]


  export const PayoutsScalarFieldEnum: {
    id: 'id',
    circle_id: 'circle_id',
    member_id: 'member_id',
    cycle_number: 'cycle_number',
    amount: 'amount',
    scheduled_date: 'scheduled_date',
    paid_at: 'paid_at',
    status: 'status',
    transaction_id: 'transaction_id',
    create_at: 'create_at',
    updated_at: 'updated_at'
  };

  export type PayoutsScalarFieldEnum = (typeof PayoutsScalarFieldEnum)[keyof typeof PayoutsScalarFieldEnum]


  export const Payment_transactionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    refernce: 'refernce',
    idempotency_key: 'idempotency_key',
    provider: 'provider',
    provider_reference: 'provider_reference',
    type: 'type',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Payment_transactionsScalarFieldEnum = (typeof Payment_transactionsScalarFieldEnum)[keyof typeof Payment_transactionsScalarFieldEnum]


  export const Payment_status_historyScalarFieldEnum: {
    id: 'id',
    transaction_id: 'transaction_id',
    status: 'status',
    message: 'message',
    metadata: 'metadata',
    created_at: 'created_at'
  };

  export type Payment_status_historyScalarFieldEnum = (typeof Payment_status_historyScalarFieldEnum)[keyof typeof Payment_status_historyScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    type: 'type',
    title: 'title',
    message: 'message',
    data: 'data',
    read_at: 'read_at',
    created_at: 'created_at'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const Audit_logScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    action: 'action',
    entity_type: 'entity_type',
    entity_id: 'entity_id',
    metadata: 'metadata',
    ip_address: 'ip_address',
    created_at: 'created_at'
  };

  export type Audit_logScalarFieldEnum = (typeof Audit_logScalarFieldEnum)[keyof typeof Audit_logScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Frequency'
   */
  export type EnumFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Frequency'>
    


  /**
   * Reference to a field of type 'Frequency[]'
   */
  export type ListEnumFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Frequency[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Circle_Status'
   */
  export type EnumCircle_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Circle_Status'>
    


  /**
   * Reference to a field of type 'Circle_Status[]'
   */
  export type ListEnumCircle_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Circle_Status[]'>
    


  /**
   * Reference to a field of type 'Contribution_status'
   */
  export type EnumContribution_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Contribution_status'>
    


  /**
   * Reference to a field of type 'Contribution_status[]'
   */
  export type ListEnumContribution_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Contribution_status[]'>
    


  /**
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'Provider[]'
   */
  export type ListEnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider[]'>
    


  /**
   * Reference to a field of type 'Payment_type'
   */
  export type EnumPayment_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Payment_type'>
    


  /**
   * Reference to a field of type 'Payment_type[]'
   */
  export type ListEnumPayment_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Payment_type[]'>
    


  /**
   * Reference to a field of type 'Payout'
   */
  export type EnumPayoutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Payout'>
    


  /**
   * Reference to a field of type 'Payout[]'
   */
  export type ListEnumPayoutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Payout[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Notifications'
   */
  export type EnumNotificationsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Notifications'>
    


  /**
   * Reference to a field of type 'Notifications[]'
   */
  export type ListEnumNotificationsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Notifications[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type waitlistEntryWhereInput = {
    AND?: waitlistEntryWhereInput | waitlistEntryWhereInput[]
    OR?: waitlistEntryWhereInput[]
    NOT?: waitlistEntryWhereInput | waitlistEntryWhereInput[]
    id?: StringFilter<"waitlistEntry"> | string
    email?: StringFilter<"waitlistEntry"> | string
    status?: EnumStatusFilter<"waitlistEntry"> | $Enums.Status
    verification_token_hash?: StringNullableFilter<"waitlistEntry"> | string | null
    verification_expires_at?: DateTimeFilter<"waitlistEntry"> | Date | string
    verified_at?: DateTimeNullableFilter<"waitlistEntry"> | Date | string | null
    userId?: StringNullableFilter<"waitlistEntry"> | string | null
    created_at?: DateTimeFilter<"waitlistEntry"> | Date | string
    updated_at?: DateTimeFilter<"waitlistEntry"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type waitlistEntryOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    verification_token_hash?: SortOrderInput | SortOrder
    verification_expires_at?: SortOrder
    verified_at?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type waitlistEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    userId?: string
    AND?: waitlistEntryWhereInput | waitlistEntryWhereInput[]
    OR?: waitlistEntryWhereInput[]
    NOT?: waitlistEntryWhereInput | waitlistEntryWhereInput[]
    status?: EnumStatusFilter<"waitlistEntry"> | $Enums.Status
    verification_token_hash?: StringNullableFilter<"waitlistEntry"> | string | null
    verification_expires_at?: DateTimeFilter<"waitlistEntry"> | Date | string
    verified_at?: DateTimeNullableFilter<"waitlistEntry"> | Date | string | null
    created_at?: DateTimeFilter<"waitlistEntry"> | Date | string
    updated_at?: DateTimeFilter<"waitlistEntry"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "email" | "userId">

  export type waitlistEntryOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    verification_token_hash?: SortOrderInput | SortOrder
    verification_expires_at?: SortOrder
    verified_at?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: waitlistEntryCountOrderByAggregateInput
    _max?: waitlistEntryMaxOrderByAggregateInput
    _min?: waitlistEntryMinOrderByAggregateInput
  }

  export type waitlistEntryScalarWhereWithAggregatesInput = {
    AND?: waitlistEntryScalarWhereWithAggregatesInput | waitlistEntryScalarWhereWithAggregatesInput[]
    OR?: waitlistEntryScalarWhereWithAggregatesInput[]
    NOT?: waitlistEntryScalarWhereWithAggregatesInput | waitlistEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"waitlistEntry"> | string
    email?: StringWithAggregatesFilter<"waitlistEntry"> | string
    status?: EnumStatusWithAggregatesFilter<"waitlistEntry"> | $Enums.Status
    verification_token_hash?: StringNullableWithAggregatesFilter<"waitlistEntry"> | string | null
    verification_expires_at?: DateTimeWithAggregatesFilter<"waitlistEntry"> | Date | string
    verified_at?: DateTimeNullableWithAggregatesFilter<"waitlistEntry"> | Date | string | null
    userId?: StringNullableWithAggregatesFilter<"waitlistEntry"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"waitlistEntry"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"waitlistEntry"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    password_hash?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    avatar_url?: StringNullableFilter<"users"> | string | null
    email_verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    status?: EnumStatusFilter<"users"> | $Enums.Status
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    waitlistEntry?: XOR<WaitlistEntryNullableScalarRelationFilter, waitlistEntryWhereInput> | null
    session?: XOR<SessionsNullableScalarRelationFilter, sessionsWhereInput> | null
    savings_circles?: XOR<Savings_circlesNullableScalarRelationFilter, savings_circlesWhereInput> | null
    circle_members?: XOR<Circle_membersNullableScalarRelationFilter, circle_membersWhereInput> | null
    circle_invitations?: XOR<Circle_invitationsNullableScalarRelationFilter, circle_invitationsWhereInput> | null
    contributions?: XOR<ContributionsNullableScalarRelationFilter, contributionsWhereInput> | null
    payment_transactions?: XOR<Payment_transactionsNullableScalarRelationFilter, payment_transactionsWhereInput> | null
    notifications?: XOR<NotificationsNullableScalarRelationFilter, notificationsWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    waitlistEntry?: waitlistEntryOrderByWithRelationInput
    session?: sessionsOrderByWithRelationInput
    savings_circles?: savings_circlesOrderByWithRelationInput
    circle_members?: circle_membersOrderByWithRelationInput
    circle_invitations?: circle_invitationsOrderByWithRelationInput
    contributions?: contributionsOrderByWithRelationInput
    payment_transactions?: payment_transactionsOrderByWithRelationInput
    notifications?: notificationsOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    avatar_url?: StringNullableFilter<"users"> | string | null
    email_verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    status?: EnumStatusFilter<"users"> | $Enums.Status
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    waitlistEntry?: XOR<WaitlistEntryNullableScalarRelationFilter, waitlistEntryWhereInput> | null
    session?: XOR<SessionsNullableScalarRelationFilter, sessionsWhereInput> | null
    savings_circles?: XOR<Savings_circlesNullableScalarRelationFilter, savings_circlesWhereInput> | null
    circle_members?: XOR<Circle_membersNullableScalarRelationFilter, circle_membersWhereInput> | null
    circle_invitations?: XOR<Circle_invitationsNullableScalarRelationFilter, circle_invitationsWhereInput> | null
    contributions?: XOR<ContributionsNullableScalarRelationFilter, contributionsWhereInput> | null
    payment_transactions?: XOR<Payment_transactionsNullableScalarRelationFilter, payment_transactionsWhereInput> | null
    notifications?: XOR<NotificationsNullableScalarRelationFilter, notificationsWhereInput> | null
  }, "id" | "email" | "phone">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    password_hash?: StringWithAggregatesFilter<"users"> | string
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringWithAggregatesFilter<"users"> | string
    avatar_url?: StringNullableWithAggregatesFilter<"users"> | string | null
    email_verified_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    status?: EnumStatusWithAggregatesFilter<"users"> | $Enums.Status
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    id?: StringFilter<"sessions"> | string
    user_id?: StringFilter<"sessions"> | string
    token_hash?: StringFilter<"sessions"> | string
    expires_at?: DateTimeNullableFilter<"sessions"> | Date | string | null
    created_at?: DateTimeFilter<"sessions"> | Date | string
    revoked_at?: DateTimeNullableFilter<"sessions"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type sessionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    revoked_at?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    token_hash?: StringFilter<"sessions"> | string
    expires_at?: DateTimeNullableFilter<"sessions"> | Date | string | null
    created_at?: DateTimeFilter<"sessions"> | Date | string
    revoked_at?: DateTimeNullableFilter<"sessions"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id">

  export type sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    revoked_at?: SortOrderInput | SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sessions"> | string
    user_id?: StringWithAggregatesFilter<"sessions"> | string
    token_hash?: StringWithAggregatesFilter<"sessions"> | string
    expires_at?: DateTimeNullableWithAggregatesFilter<"sessions"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
    revoked_at?: DateTimeNullableWithAggregatesFilter<"sessions"> | Date | string | null
  }

  export type savings_circlesWhereInput = {
    AND?: savings_circlesWhereInput | savings_circlesWhereInput[]
    OR?: savings_circlesWhereInput[]
    NOT?: savings_circlesWhereInput | savings_circlesWhereInput[]
    id?: StringFilter<"savings_circles"> | string
    name?: StringFilter<"savings_circles"> | string
    decription?: StringFilter<"savings_circles"> | string
    owner_id?: StringFilter<"savings_circles"> | string
    contribution_amount?: DecimalFilter<"savings_circles"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"savings_circles"> | string
    frequency?: EnumFrequencyFilter<"savings_circles"> | $Enums.Frequency
    member_limit?: IntFilter<"savings_circles"> | number
    start_date?: DateTimeFilter<"savings_circles"> | Date | string
    status?: EnumStatusFilter<"savings_circles"> | $Enums.Status
    created_at?: DateTimeFilter<"savings_circles"> | Date | string
    updated_at?: DateTimeFilter<"savings_circles"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    circle_members?: XOR<Circle_membersNullableScalarRelationFilter, circle_membersWhereInput> | null
    circle_invitations?: XOR<Circle_invitationsNullableScalarRelationFilter, circle_invitationsWhereInput> | null
    savings_schedules?: XOR<Savings_schedulesNullableScalarRelationFilter, savings_schedulesWhereInput> | null
    contributions?: XOR<ContributionsNullableScalarRelationFilter, contributionsWhereInput> | null
    payouts?: XOR<PayoutsNullableScalarRelationFilter, payoutsWhereInput> | null
  }

  export type savings_circlesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    decription?: SortOrder
    owner_id?: SortOrder
    contribution_amount?: SortOrder
    currency?: SortOrder
    frequency?: SortOrder
    member_limit?: SortOrder
    start_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: usersOrderByWithRelationInput
    circle_members?: circle_membersOrderByWithRelationInput
    circle_invitations?: circle_invitationsOrderByWithRelationInput
    savings_schedules?: savings_schedulesOrderByWithRelationInput
    contributions?: contributionsOrderByWithRelationInput
    payouts?: payoutsOrderByWithRelationInput
  }

  export type savings_circlesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    owner_id?: string
    AND?: savings_circlesWhereInput | savings_circlesWhereInput[]
    OR?: savings_circlesWhereInput[]
    NOT?: savings_circlesWhereInput | savings_circlesWhereInput[]
    name?: StringFilter<"savings_circles"> | string
    decription?: StringFilter<"savings_circles"> | string
    contribution_amount?: DecimalFilter<"savings_circles"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"savings_circles"> | string
    frequency?: EnumFrequencyFilter<"savings_circles"> | $Enums.Frequency
    member_limit?: IntFilter<"savings_circles"> | number
    start_date?: DateTimeFilter<"savings_circles"> | Date | string
    status?: EnumStatusFilter<"savings_circles"> | $Enums.Status
    created_at?: DateTimeFilter<"savings_circles"> | Date | string
    updated_at?: DateTimeFilter<"savings_circles"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    circle_members?: XOR<Circle_membersNullableScalarRelationFilter, circle_membersWhereInput> | null
    circle_invitations?: XOR<Circle_invitationsNullableScalarRelationFilter, circle_invitationsWhereInput> | null
    savings_schedules?: XOR<Savings_schedulesNullableScalarRelationFilter, savings_schedulesWhereInput> | null
    contributions?: XOR<ContributionsNullableScalarRelationFilter, contributionsWhereInput> | null
    payouts?: XOR<PayoutsNullableScalarRelationFilter, payoutsWhereInput> | null
  }, "id" | "owner_id">

  export type savings_circlesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    decription?: SortOrder
    owner_id?: SortOrder
    contribution_amount?: SortOrder
    currency?: SortOrder
    frequency?: SortOrder
    member_limit?: SortOrder
    start_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: savings_circlesCountOrderByAggregateInput
    _avg?: savings_circlesAvgOrderByAggregateInput
    _max?: savings_circlesMaxOrderByAggregateInput
    _min?: savings_circlesMinOrderByAggregateInput
    _sum?: savings_circlesSumOrderByAggregateInput
  }

  export type savings_circlesScalarWhereWithAggregatesInput = {
    AND?: savings_circlesScalarWhereWithAggregatesInput | savings_circlesScalarWhereWithAggregatesInput[]
    OR?: savings_circlesScalarWhereWithAggregatesInput[]
    NOT?: savings_circlesScalarWhereWithAggregatesInput | savings_circlesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"savings_circles"> | string
    name?: StringWithAggregatesFilter<"savings_circles"> | string
    decription?: StringWithAggregatesFilter<"savings_circles"> | string
    owner_id?: StringWithAggregatesFilter<"savings_circles"> | string
    contribution_amount?: DecimalWithAggregatesFilter<"savings_circles"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"savings_circles"> | string
    frequency?: EnumFrequencyWithAggregatesFilter<"savings_circles"> | $Enums.Frequency
    member_limit?: IntWithAggregatesFilter<"savings_circles"> | number
    start_date?: DateTimeWithAggregatesFilter<"savings_circles"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"savings_circles"> | $Enums.Status
    created_at?: DateTimeWithAggregatesFilter<"savings_circles"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"savings_circles"> | Date | string
  }

  export type circle_membersWhereInput = {
    AND?: circle_membersWhereInput | circle_membersWhereInput[]
    OR?: circle_membersWhereInput[]
    NOT?: circle_membersWhereInput | circle_membersWhereInput[]
    id?: StringFilter<"circle_members"> | string
    circle_id?: StringFilter<"circle_members"> | string
    user_id?: StringFilter<"circle_members"> | string
    role?: EnumRoleFilter<"circle_members"> | $Enums.Role
    status?: EnumCircle_StatusFilter<"circle_members"> | $Enums.Circle_Status
    joined_at?: DateTimeFilter<"circle_members"> | Date | string
    left_at?: DateTimeNullableFilter<"circle_members"> | Date | string | null
    created_at?: DateTimeFilter<"circle_members"> | Date | string
    updated_at?: DateTimeFilter<"circle_members"> | Date | string
    savings_circle?: XOR<Savings_circlesScalarRelationFilter, savings_circlesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    payouts?: XOR<PayoutsNullableScalarRelationFilter, payoutsWhereInput> | null
  }

  export type circle_membersOrderByWithRelationInput = {
    id?: SortOrder
    circle_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    savings_circle?: savings_circlesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    payouts?: payoutsOrderByWithRelationInput
  }

  export type circle_membersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    circle_id?: string
    user_id?: string
    AND?: circle_membersWhereInput | circle_membersWhereInput[]
    OR?: circle_membersWhereInput[]
    NOT?: circle_membersWhereInput | circle_membersWhereInput[]
    role?: EnumRoleFilter<"circle_members"> | $Enums.Role
    status?: EnumCircle_StatusFilter<"circle_members"> | $Enums.Circle_Status
    joined_at?: DateTimeFilter<"circle_members"> | Date | string
    left_at?: DateTimeNullableFilter<"circle_members"> | Date | string | null
    created_at?: DateTimeFilter<"circle_members"> | Date | string
    updated_at?: DateTimeFilter<"circle_members"> | Date | string
    savings_circle?: XOR<Savings_circlesScalarRelationFilter, savings_circlesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    payouts?: XOR<PayoutsNullableScalarRelationFilter, payoutsWhereInput> | null
  }, "id" | "circle_id" | "user_id">

  export type circle_membersOrderByWithAggregationInput = {
    id?: SortOrder
    circle_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: circle_membersCountOrderByAggregateInput
    _max?: circle_membersMaxOrderByAggregateInput
    _min?: circle_membersMinOrderByAggregateInput
  }

  export type circle_membersScalarWhereWithAggregatesInput = {
    AND?: circle_membersScalarWhereWithAggregatesInput | circle_membersScalarWhereWithAggregatesInput[]
    OR?: circle_membersScalarWhereWithAggregatesInput[]
    NOT?: circle_membersScalarWhereWithAggregatesInput | circle_membersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"circle_members"> | string
    circle_id?: StringWithAggregatesFilter<"circle_members"> | string
    user_id?: StringWithAggregatesFilter<"circle_members"> | string
    role?: EnumRoleWithAggregatesFilter<"circle_members"> | $Enums.Role
    status?: EnumCircle_StatusWithAggregatesFilter<"circle_members"> | $Enums.Circle_Status
    joined_at?: DateTimeWithAggregatesFilter<"circle_members"> | Date | string
    left_at?: DateTimeNullableWithAggregatesFilter<"circle_members"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"circle_members"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"circle_members"> | Date | string
  }

  export type circle_invitationsWhereInput = {
    AND?: circle_invitationsWhereInput | circle_invitationsWhereInput[]
    OR?: circle_invitationsWhereInput[]
    NOT?: circle_invitationsWhereInput | circle_invitationsWhereInput[]
    id?: StringFilter<"circle_invitations"> | string
    circle_id?: StringFilter<"circle_invitations"> | string
    invited_by?: StringFilter<"circle_invitations"> | string
    email?: StringFilter<"circle_invitations"> | string
    token_hash?: StringFilter<"circle_invitations"> | string
    status?: EnumStatusFilter<"circle_invitations"> | $Enums.Status
    expires_at?: DateTimeFilter<"circle_invitations"> | Date | string
    accepted_at?: DateTimeNullableFilter<"circle_invitations"> | Date | string | null
    created_at?: DateTimeFilter<"circle_invitations"> | Date | string
    savings_circle?: XOR<Savings_circlesScalarRelationFilter, savings_circlesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type circle_invitationsOrderByWithRelationInput = {
    id?: SortOrder
    circle_id?: SortOrder
    invited_by?: SortOrder
    email?: SortOrder
    token_hash?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
    accepted_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    savings_circle?: savings_circlesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type circle_invitationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    circle_id?: string
    invited_by?: string
    token_hash?: string
    AND?: circle_invitationsWhereInput | circle_invitationsWhereInput[]
    OR?: circle_invitationsWhereInput[]
    NOT?: circle_invitationsWhereInput | circle_invitationsWhereInput[]
    email?: StringFilter<"circle_invitations"> | string
    status?: EnumStatusFilter<"circle_invitations"> | $Enums.Status
    expires_at?: DateTimeFilter<"circle_invitations"> | Date | string
    accepted_at?: DateTimeNullableFilter<"circle_invitations"> | Date | string | null
    created_at?: DateTimeFilter<"circle_invitations"> | Date | string
    savings_circle?: XOR<Savings_circlesScalarRelationFilter, savings_circlesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "circle_id" | "invited_by" | "token_hash">

  export type circle_invitationsOrderByWithAggregationInput = {
    id?: SortOrder
    circle_id?: SortOrder
    invited_by?: SortOrder
    email?: SortOrder
    token_hash?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
    accepted_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: circle_invitationsCountOrderByAggregateInput
    _max?: circle_invitationsMaxOrderByAggregateInput
    _min?: circle_invitationsMinOrderByAggregateInput
  }

  export type circle_invitationsScalarWhereWithAggregatesInput = {
    AND?: circle_invitationsScalarWhereWithAggregatesInput | circle_invitationsScalarWhereWithAggregatesInput[]
    OR?: circle_invitationsScalarWhereWithAggregatesInput[]
    NOT?: circle_invitationsScalarWhereWithAggregatesInput | circle_invitationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"circle_invitations"> | string
    circle_id?: StringWithAggregatesFilter<"circle_invitations"> | string
    invited_by?: StringWithAggregatesFilter<"circle_invitations"> | string
    email?: StringWithAggregatesFilter<"circle_invitations"> | string
    token_hash?: StringWithAggregatesFilter<"circle_invitations"> | string
    status?: EnumStatusWithAggregatesFilter<"circle_invitations"> | $Enums.Status
    expires_at?: DateTimeWithAggregatesFilter<"circle_invitations"> | Date | string
    accepted_at?: DateTimeNullableWithAggregatesFilter<"circle_invitations"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"circle_invitations"> | Date | string
  }

  export type savings_schedulesWhereInput = {
    AND?: savings_schedulesWhereInput | savings_schedulesWhereInput[]
    OR?: savings_schedulesWhereInput[]
    NOT?: savings_schedulesWhereInput | savings_schedulesWhereInput[]
    id?: StringFilter<"savings_schedules"> | string
    circle_id?: StringFilter<"savings_schedules"> | string
    frequency?: EnumFrequencyFilter<"savings_schedules"> | $Enums.Frequency
    contribution_amount?: DecimalFilter<"savings_schedules"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFilter<"savings_schedules"> | Date | string
    end_date?: DateTimeNullableFilter<"savings_schedules"> | Date | string | null
    total_cycles?: IntFilter<"savings_schedules"> | number
    current_cycle?: IntFilter<"savings_schedules"> | number
    created_at?: DateTimeFilter<"savings_schedules"> | Date | string
    updated_at?: DateTimeFilter<"savings_schedules"> | Date | string
    savings_circle?: XOR<Savings_circlesScalarRelationFilter, savings_circlesWhereInput>
  }

  export type savings_schedulesOrderByWithRelationInput = {
    id?: SortOrder
    circle_id?: SortOrder
    frequency?: SortOrder
    contribution_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    total_cycles?: SortOrder
    current_cycle?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    savings_circle?: savings_circlesOrderByWithRelationInput
  }

  export type savings_schedulesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    circle_id?: string
    AND?: savings_schedulesWhereInput | savings_schedulesWhereInput[]
    OR?: savings_schedulesWhereInput[]
    NOT?: savings_schedulesWhereInput | savings_schedulesWhereInput[]
    frequency?: EnumFrequencyFilter<"savings_schedules"> | $Enums.Frequency
    contribution_amount?: DecimalFilter<"savings_schedules"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFilter<"savings_schedules"> | Date | string
    end_date?: DateTimeNullableFilter<"savings_schedules"> | Date | string | null
    total_cycles?: IntFilter<"savings_schedules"> | number
    current_cycle?: IntFilter<"savings_schedules"> | number
    created_at?: DateTimeFilter<"savings_schedules"> | Date | string
    updated_at?: DateTimeFilter<"savings_schedules"> | Date | string
    savings_circle?: XOR<Savings_circlesScalarRelationFilter, savings_circlesWhereInput>
  }, "id" | "circle_id">

  export type savings_schedulesOrderByWithAggregationInput = {
    id?: SortOrder
    circle_id?: SortOrder
    frequency?: SortOrder
    contribution_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    total_cycles?: SortOrder
    current_cycle?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: savings_schedulesCountOrderByAggregateInput
    _avg?: savings_schedulesAvgOrderByAggregateInput
    _max?: savings_schedulesMaxOrderByAggregateInput
    _min?: savings_schedulesMinOrderByAggregateInput
    _sum?: savings_schedulesSumOrderByAggregateInput
  }

  export type savings_schedulesScalarWhereWithAggregatesInput = {
    AND?: savings_schedulesScalarWhereWithAggregatesInput | savings_schedulesScalarWhereWithAggregatesInput[]
    OR?: savings_schedulesScalarWhereWithAggregatesInput[]
    NOT?: savings_schedulesScalarWhereWithAggregatesInput | savings_schedulesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"savings_schedules"> | string
    circle_id?: StringWithAggregatesFilter<"savings_schedules"> | string
    frequency?: EnumFrequencyWithAggregatesFilter<"savings_schedules"> | $Enums.Frequency
    contribution_amount?: DecimalWithAggregatesFilter<"savings_schedules"> | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeWithAggregatesFilter<"savings_schedules"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"savings_schedules"> | Date | string | null
    total_cycles?: IntWithAggregatesFilter<"savings_schedules"> | number
    current_cycle?: IntWithAggregatesFilter<"savings_schedules"> | number
    created_at?: DateTimeWithAggregatesFilter<"savings_schedules"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"savings_schedules"> | Date | string
  }

  export type contributionsWhereInput = {
    AND?: contributionsWhereInput | contributionsWhereInput[]
    OR?: contributionsWhereInput[]
    NOT?: contributionsWhereInput | contributionsWhereInput[]
    id?: StringFilter<"contributions"> | string
    circle_id?: StringFilter<"contributions"> | string
    circle_member?: StringFilter<"contributions"> | string
    cycle_number?: IntFilter<"contributions"> | number
    amount?: DecimalFilter<"contributions"> | Decimal | DecimalJsLike | number | string
    due_date?: DateTimeFilter<"contributions"> | Date | string
    paid_at?: DateTimeNullableFilter<"contributions"> | Date | string | null
    status?: EnumContribution_statusFilter<"contributions"> | $Enums.Contribution_status
    transaction_id?: StringNullableFilter<"contributions"> | string | null
    create_at?: DateTimeFilter<"contributions"> | Date | string
    updated_at?: DateTimeFilter<"contributions"> | Date | string
    savings_circle?: XOR<Savings_circlesScalarRelationFilter, savings_circlesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type contributionsOrderByWithRelationInput = {
    id?: SortOrder
    circle_id?: SortOrder
    circle_member?: SortOrder
    cycle_number?: SortOrder
    amount?: SortOrder
    due_date?: SortOrder
    paid_at?: SortOrderInput | SortOrder
    status?: SortOrder
    transaction_id?: SortOrderInput | SortOrder
    create_at?: SortOrder
    updated_at?: SortOrder
    savings_circle?: savings_circlesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type contributionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    circle_id?: string
    circle_member?: string
    transaction_id?: string
    AND?: contributionsWhereInput | contributionsWhereInput[]
    OR?: contributionsWhereInput[]
    NOT?: contributionsWhereInput | contributionsWhereInput[]
    cycle_number?: IntFilter<"contributions"> | number
    amount?: DecimalFilter<"contributions"> | Decimal | DecimalJsLike | number | string
    due_date?: DateTimeFilter<"contributions"> | Date | string
    paid_at?: DateTimeNullableFilter<"contributions"> | Date | string | null
    status?: EnumContribution_statusFilter<"contributions"> | $Enums.Contribution_status
    create_at?: DateTimeFilter<"contributions"> | Date | string
    updated_at?: DateTimeFilter<"contributions"> | Date | string
    savings_circle?: XOR<Savings_circlesScalarRelationFilter, savings_circlesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "circle_id" | "circle_member" | "transaction_id">

  export type contributionsOrderByWithAggregationInput = {
    id?: SortOrder
    circle_id?: SortOrder
    circle_member?: SortOrder
    cycle_number?: SortOrder
    amount?: SortOrder
    due_date?: SortOrder
    paid_at?: SortOrderInput | SortOrder
    status?: SortOrder
    transaction_id?: SortOrderInput | SortOrder
    create_at?: SortOrder
    updated_at?: SortOrder
    _count?: contributionsCountOrderByAggregateInput
    _avg?: contributionsAvgOrderByAggregateInput
    _max?: contributionsMaxOrderByAggregateInput
    _min?: contributionsMinOrderByAggregateInput
    _sum?: contributionsSumOrderByAggregateInput
  }

  export type contributionsScalarWhereWithAggregatesInput = {
    AND?: contributionsScalarWhereWithAggregatesInput | contributionsScalarWhereWithAggregatesInput[]
    OR?: contributionsScalarWhereWithAggregatesInput[]
    NOT?: contributionsScalarWhereWithAggregatesInput | contributionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"contributions"> | string
    circle_id?: StringWithAggregatesFilter<"contributions"> | string
    circle_member?: StringWithAggregatesFilter<"contributions"> | string
    cycle_number?: IntWithAggregatesFilter<"contributions"> | number
    amount?: DecimalWithAggregatesFilter<"contributions"> | Decimal | DecimalJsLike | number | string
    due_date?: DateTimeWithAggregatesFilter<"contributions"> | Date | string
    paid_at?: DateTimeNullableWithAggregatesFilter<"contributions"> | Date | string | null
    status?: EnumContribution_statusWithAggregatesFilter<"contributions"> | $Enums.Contribution_status
    transaction_id?: StringNullableWithAggregatesFilter<"contributions"> | string | null
    create_at?: DateTimeWithAggregatesFilter<"contributions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"contributions"> | Date | string
  }

  export type payoutsWhereInput = {
    AND?: payoutsWhereInput | payoutsWhereInput[]
    OR?: payoutsWhereInput[]
    NOT?: payoutsWhereInput | payoutsWhereInput[]
    id?: StringFilter<"payouts"> | string
    circle_id?: StringFilter<"payouts"> | string
    member_id?: StringFilter<"payouts"> | string
    cycle_number?: IntFilter<"payouts"> | number
    amount?: DecimalFilter<"payouts"> | Decimal | DecimalJsLike | number | string
    scheduled_date?: DateTimeFilter<"payouts"> | Date | string
    paid_at?: DateTimeNullableFilter<"payouts"> | Date | string | null
    status?: EnumContribution_statusFilter<"payouts"> | $Enums.Contribution_status
    transaction_id?: StringNullableFilter<"payouts"> | string | null
    create_at?: DateTimeFilter<"payouts"> | Date | string
    updated_at?: DateTimeFilter<"payouts"> | Date | string
    savings_circle?: XOR<Savings_circlesScalarRelationFilter, savings_circlesWhereInput>
    circle_member?: XOR<Circle_membersScalarRelationFilter, circle_membersWhereInput>
  }

  export type payoutsOrderByWithRelationInput = {
    id?: SortOrder
    circle_id?: SortOrder
    member_id?: SortOrder
    cycle_number?: SortOrder
    amount?: SortOrder
    scheduled_date?: SortOrder
    paid_at?: SortOrderInput | SortOrder
    status?: SortOrder
    transaction_id?: SortOrderInput | SortOrder
    create_at?: SortOrder
    updated_at?: SortOrder
    savings_circle?: savings_circlesOrderByWithRelationInput
    circle_member?: circle_membersOrderByWithRelationInput
  }

  export type payoutsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    circle_id?: string
    member_id?: string
    transaction_id?: string
    AND?: payoutsWhereInput | payoutsWhereInput[]
    OR?: payoutsWhereInput[]
    NOT?: payoutsWhereInput | payoutsWhereInput[]
    cycle_number?: IntFilter<"payouts"> | number
    amount?: DecimalFilter<"payouts"> | Decimal | DecimalJsLike | number | string
    scheduled_date?: DateTimeFilter<"payouts"> | Date | string
    paid_at?: DateTimeNullableFilter<"payouts"> | Date | string | null
    status?: EnumContribution_statusFilter<"payouts"> | $Enums.Contribution_status
    create_at?: DateTimeFilter<"payouts"> | Date | string
    updated_at?: DateTimeFilter<"payouts"> | Date | string
    savings_circle?: XOR<Savings_circlesScalarRelationFilter, savings_circlesWhereInput>
    circle_member?: XOR<Circle_membersScalarRelationFilter, circle_membersWhereInput>
  }, "id" | "circle_id" | "member_id" | "transaction_id">

  export type payoutsOrderByWithAggregationInput = {
    id?: SortOrder
    circle_id?: SortOrder
    member_id?: SortOrder
    cycle_number?: SortOrder
    amount?: SortOrder
    scheduled_date?: SortOrder
    paid_at?: SortOrderInput | SortOrder
    status?: SortOrder
    transaction_id?: SortOrderInput | SortOrder
    create_at?: SortOrder
    updated_at?: SortOrder
    _count?: payoutsCountOrderByAggregateInput
    _avg?: payoutsAvgOrderByAggregateInput
    _max?: payoutsMaxOrderByAggregateInput
    _min?: payoutsMinOrderByAggregateInput
    _sum?: payoutsSumOrderByAggregateInput
  }

  export type payoutsScalarWhereWithAggregatesInput = {
    AND?: payoutsScalarWhereWithAggregatesInput | payoutsScalarWhereWithAggregatesInput[]
    OR?: payoutsScalarWhereWithAggregatesInput[]
    NOT?: payoutsScalarWhereWithAggregatesInput | payoutsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"payouts"> | string
    circle_id?: StringWithAggregatesFilter<"payouts"> | string
    member_id?: StringWithAggregatesFilter<"payouts"> | string
    cycle_number?: IntWithAggregatesFilter<"payouts"> | number
    amount?: DecimalWithAggregatesFilter<"payouts"> | Decimal | DecimalJsLike | number | string
    scheduled_date?: DateTimeWithAggregatesFilter<"payouts"> | Date | string
    paid_at?: DateTimeNullableWithAggregatesFilter<"payouts"> | Date | string | null
    status?: EnumContribution_statusWithAggregatesFilter<"payouts"> | $Enums.Contribution_status
    transaction_id?: StringNullableWithAggregatesFilter<"payouts"> | string | null
    create_at?: DateTimeWithAggregatesFilter<"payouts"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"payouts"> | Date | string
  }

  export type payment_transactionsWhereInput = {
    AND?: payment_transactionsWhereInput | payment_transactionsWhereInput[]
    OR?: payment_transactionsWhereInput[]
    NOT?: payment_transactionsWhereInput | payment_transactionsWhereInput[]
    id?: StringFilter<"payment_transactions"> | string
    user_id?: StringFilter<"payment_transactions"> | string
    refernce?: StringFilter<"payment_transactions"> | string
    idempotency_key?: StringFilter<"payment_transactions"> | string
    provider?: EnumProviderFilter<"payment_transactions"> | $Enums.Provider
    provider_reference?: StringNullableFilter<"payment_transactions"> | string | null
    type?: EnumPayment_typeFilter<"payment_transactions"> | $Enums.Payment_type
    amount?: DecimalFilter<"payment_transactions"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"payment_transactions"> | string
    status?: EnumPayoutFilter<"payment_transactions"> | $Enums.Payout
    metadata?: JsonFilter<"payment_transactions">
    created_at?: DateTimeFilter<"payment_transactions"> | Date | string
    updated_at?: DateTimeFilter<"payment_transactions"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    payment_status_history?: XOR<Payment_status_historyNullableScalarRelationFilter, payment_status_historyWhereInput> | null
  }

  export type payment_transactionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    refernce?: SortOrder
    idempotency_key?: SortOrder
    provider?: SortOrder
    provider_reference?: SortOrderInput | SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: usersOrderByWithRelationInput
    payment_status_history?: payment_status_historyOrderByWithRelationInput
  }

  export type payment_transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    refernce?: string
    idempotency_key?: string
    AND?: payment_transactionsWhereInput | payment_transactionsWhereInput[]
    OR?: payment_transactionsWhereInput[]
    NOT?: payment_transactionsWhereInput | payment_transactionsWhereInput[]
    provider?: EnumProviderFilter<"payment_transactions"> | $Enums.Provider
    provider_reference?: StringNullableFilter<"payment_transactions"> | string | null
    type?: EnumPayment_typeFilter<"payment_transactions"> | $Enums.Payment_type
    amount?: DecimalFilter<"payment_transactions"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"payment_transactions"> | string
    status?: EnumPayoutFilter<"payment_transactions"> | $Enums.Payout
    metadata?: JsonFilter<"payment_transactions">
    created_at?: DateTimeFilter<"payment_transactions"> | Date | string
    updated_at?: DateTimeFilter<"payment_transactions"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    payment_status_history?: XOR<Payment_status_historyNullableScalarRelationFilter, payment_status_historyWhereInput> | null
  }, "id" | "user_id" | "refernce" | "idempotency_key">

  export type payment_transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    refernce?: SortOrder
    idempotency_key?: SortOrder
    provider?: SortOrder
    provider_reference?: SortOrderInput | SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: payment_transactionsCountOrderByAggregateInput
    _avg?: payment_transactionsAvgOrderByAggregateInput
    _max?: payment_transactionsMaxOrderByAggregateInput
    _min?: payment_transactionsMinOrderByAggregateInput
    _sum?: payment_transactionsSumOrderByAggregateInput
  }

  export type payment_transactionsScalarWhereWithAggregatesInput = {
    AND?: payment_transactionsScalarWhereWithAggregatesInput | payment_transactionsScalarWhereWithAggregatesInput[]
    OR?: payment_transactionsScalarWhereWithAggregatesInput[]
    NOT?: payment_transactionsScalarWhereWithAggregatesInput | payment_transactionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"payment_transactions"> | string
    user_id?: StringWithAggregatesFilter<"payment_transactions"> | string
    refernce?: StringWithAggregatesFilter<"payment_transactions"> | string
    idempotency_key?: StringWithAggregatesFilter<"payment_transactions"> | string
    provider?: EnumProviderWithAggregatesFilter<"payment_transactions"> | $Enums.Provider
    provider_reference?: StringNullableWithAggregatesFilter<"payment_transactions"> | string | null
    type?: EnumPayment_typeWithAggregatesFilter<"payment_transactions"> | $Enums.Payment_type
    amount?: DecimalWithAggregatesFilter<"payment_transactions"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"payment_transactions"> | string
    status?: EnumPayoutWithAggregatesFilter<"payment_transactions"> | $Enums.Payout
    metadata?: JsonWithAggregatesFilter<"payment_transactions">
    created_at?: DateTimeWithAggregatesFilter<"payment_transactions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"payment_transactions"> | Date | string
  }

  export type payment_status_historyWhereInput = {
    AND?: payment_status_historyWhereInput | payment_status_historyWhereInput[]
    OR?: payment_status_historyWhereInput[]
    NOT?: payment_status_historyWhereInput | payment_status_historyWhereInput[]
    id?: StringFilter<"payment_status_history"> | string
    transaction_id?: StringFilter<"payment_status_history"> | string
    status?: EnumPayoutFilter<"payment_status_history"> | $Enums.Payout
    message?: StringFilter<"payment_status_history"> | string
    metadata?: JsonFilter<"payment_status_history">
    created_at?: DateTimeFilter<"payment_status_history"> | Date | string
    payment_transactions?: XOR<Payment_transactionsScalarRelationFilter, payment_transactionsWhereInput>
  }

  export type payment_status_historyOrderByWithRelationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    payment_transactions?: payment_transactionsOrderByWithRelationInput
  }

  export type payment_status_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transaction_id?: string
    AND?: payment_status_historyWhereInput | payment_status_historyWhereInput[]
    OR?: payment_status_historyWhereInput[]
    NOT?: payment_status_historyWhereInput | payment_status_historyWhereInput[]
    status?: EnumPayoutFilter<"payment_status_history"> | $Enums.Payout
    message?: StringFilter<"payment_status_history"> | string
    metadata?: JsonFilter<"payment_status_history">
    created_at?: DateTimeFilter<"payment_status_history"> | Date | string
    payment_transactions?: XOR<Payment_transactionsScalarRelationFilter, payment_transactionsWhereInput>
  }, "id" | "transaction_id">

  export type payment_status_historyOrderByWithAggregationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    _count?: payment_status_historyCountOrderByAggregateInput
    _max?: payment_status_historyMaxOrderByAggregateInput
    _min?: payment_status_historyMinOrderByAggregateInput
  }

  export type payment_status_historyScalarWhereWithAggregatesInput = {
    AND?: payment_status_historyScalarWhereWithAggregatesInput | payment_status_historyScalarWhereWithAggregatesInput[]
    OR?: payment_status_historyScalarWhereWithAggregatesInput[]
    NOT?: payment_status_historyScalarWhereWithAggregatesInput | payment_status_historyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"payment_status_history"> | string
    transaction_id?: StringWithAggregatesFilter<"payment_status_history"> | string
    status?: EnumPayoutWithAggregatesFilter<"payment_status_history"> | $Enums.Payout
    message?: StringWithAggregatesFilter<"payment_status_history"> | string
    metadata?: JsonWithAggregatesFilter<"payment_status_history">
    created_at?: DateTimeWithAggregatesFilter<"payment_status_history"> | Date | string
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: StringFilter<"notifications"> | string
    user_id?: StringFilter<"notifications"> | string
    type?: EnumNotificationsFilter<"notifications"> | $Enums.Notifications
    title?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    data?: JsonFilter<"notifications">
    read_at?: DateTimeFilter<"notifications"> | Date | string
    created_at?: DateTimeFilter<"notifications"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrder
    read_at?: SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    type?: EnumNotificationsFilter<"notifications"> | $Enums.Notifications
    title?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    data?: JsonFilter<"notifications">
    read_at?: DateTimeFilter<"notifications"> | Date | string
    created_at?: DateTimeFilter<"notifications"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrder
    read_at?: SortOrder
    created_at?: SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"notifications"> | string
    user_id?: StringWithAggregatesFilter<"notifications"> | string
    type?: EnumNotificationsWithAggregatesFilter<"notifications"> | $Enums.Notifications
    title?: StringWithAggregatesFilter<"notifications"> | string
    message?: StringWithAggregatesFilter<"notifications"> | string
    data?: JsonWithAggregatesFilter<"notifications">
    read_at?: DateTimeWithAggregatesFilter<"notifications"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"notifications"> | Date | string
  }

  export type audit_logWhereInput = {
    AND?: audit_logWhereInput | audit_logWhereInput[]
    OR?: audit_logWhereInput[]
    NOT?: audit_logWhereInput | audit_logWhereInput[]
    id?: StringFilter<"audit_log"> | string
    user_id?: EnumStatusNullableFilter<"audit_log"> | $Enums.Status | null
    action?: StringFilter<"audit_log"> | string
    entity_type?: StringFilter<"audit_log"> | string
    entity_id?: StringNullableFilter<"audit_log"> | string | null
    metadata?: JsonNullableFilter<"audit_log">
    ip_address?: StringNullableFilter<"audit_log"> | string | null
    created_at?: DateTimeFilter<"audit_log"> | Date | string
  }

  export type audit_logOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type audit_logWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: audit_logWhereInput | audit_logWhereInput[]
    OR?: audit_logWhereInput[]
    NOT?: audit_logWhereInput | audit_logWhereInput[]
    user_id?: EnumStatusNullableFilter<"audit_log"> | $Enums.Status | null
    action?: StringFilter<"audit_log"> | string
    entity_type?: StringFilter<"audit_log"> | string
    entity_id?: StringNullableFilter<"audit_log"> | string | null
    metadata?: JsonNullableFilter<"audit_log">
    ip_address?: StringNullableFilter<"audit_log"> | string | null
    created_at?: DateTimeFilter<"audit_log"> | Date | string
  }, "id">

  export type audit_logOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: audit_logCountOrderByAggregateInput
    _max?: audit_logMaxOrderByAggregateInput
    _min?: audit_logMinOrderByAggregateInput
  }

  export type audit_logScalarWhereWithAggregatesInput = {
    AND?: audit_logScalarWhereWithAggregatesInput | audit_logScalarWhereWithAggregatesInput[]
    OR?: audit_logScalarWhereWithAggregatesInput[]
    NOT?: audit_logScalarWhereWithAggregatesInput | audit_logScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"audit_log"> | string
    user_id?: EnumStatusNullableWithAggregatesFilter<"audit_log"> | $Enums.Status | null
    action?: StringWithAggregatesFilter<"audit_log"> | string
    entity_type?: StringWithAggregatesFilter<"audit_log"> | string
    entity_id?: StringNullableWithAggregatesFilter<"audit_log"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"audit_log">
    ip_address?: StringNullableWithAggregatesFilter<"audit_log"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"audit_log"> | Date | string
  }

  export type waitlistEntryCreateInput = {
    id?: string
    email: string
    status?: $Enums.Status
    verification_token_hash?: string | null
    verification_expires_at: Date | string
    verified_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user?: usersCreateNestedOneWithoutWaitlistEntryInput
  }

  export type waitlistEntryUncheckedCreateInput = {
    id?: string
    email: string
    status?: $Enums.Status
    verification_token_hash?: string | null
    verification_expires_at: Date | string
    verified_at?: Date | string | null
    userId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type waitlistEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    verification_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutWaitlistEntryNestedInput
  }

  export type waitlistEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    verification_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waitlistEntryCreateManyInput = {
    id?: string
    email: string
    status?: $Enums.Status
    verification_token_hash?: string | null
    verification_expires_at: Date | string
    verified_at?: Date | string | null
    userId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type waitlistEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    verification_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waitlistEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    verification_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryCreateNestedOneWithoutUserInput
    session?: sessionsCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesCreateNestedOneWithoutUsersInput
    circle_members?: circle_membersCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsCreateNestedOneWithoutUsersInput
    contributions?: contributionsCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsCreateNestedOneWithoutUsersInput
    notifications?: notificationsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryUncheckedCreateNestedOneWithoutUserInput
    session?: sessionsUncheckedCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesUncheckedCreateNestedOneWithoutUsersInput
    circle_members?: circle_membersUncheckedCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsUncheckedCreateNestedOneWithoutUsersInput
    contributions?: contributionsUncheckedCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsUncheckedCreateNestedOneWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUpdateOneWithoutUserNestedInput
    session?: sessionsUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUpdateOneWithoutUsersNestedInput
    circle_members?: circle_membersUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUncheckedUpdateOneWithoutUserNestedInput
    session?: sessionsUncheckedUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUncheckedUpdateOneWithoutUsersNestedInput
    circle_members?: circle_membersUncheckedUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUncheckedUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUncheckedUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUncheckedUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsCreateInput = {
    id?: string
    token_hash: string
    expires_at?: Date | string | null
    created_at?: Date | string
    revoked_at?: Date | string | null
    user: usersCreateNestedOneWithoutSessionInput
  }

  export type sessionsUncheckedCreateInput = {
    id?: string
    user_id: string
    token_hash: string
    expires_at?: Date | string | null
    created_at?: Date | string
    revoked_at?: Date | string | null
  }

  export type sessionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutSessionNestedInput
  }

  export type sessionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionsCreateManyInput = {
    id?: string
    user_id: string
    token_hash: string
    expires_at?: Date | string | null
    created_at?: Date | string
    revoked_at?: Date | string | null
  }

  export type sessionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type savings_circlesCreateInput = {
    id?: string
    name: string
    decription: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutSavings_circlesInput
    circle_members?: circle_membersCreateNestedOneWithoutSavings_circleInput
    circle_invitations?: circle_invitationsCreateNestedOneWithoutSavings_circleInput
    savings_schedules?: savings_schedulesCreateNestedOneWithoutSavings_circleInput
    contributions?: contributionsCreateNestedOneWithoutSavings_circleInput
    payouts?: payoutsCreateNestedOneWithoutSavings_circleInput
  }

  export type savings_circlesUncheckedCreateInput = {
    id?: string
    name: string
    decription: string
    owner_id: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    circle_members?: circle_membersUncheckedCreateNestedOneWithoutSavings_circleInput
    circle_invitations?: circle_invitationsUncheckedCreateNestedOneWithoutSavings_circleInput
    savings_schedules?: savings_schedulesUncheckedCreateNestedOneWithoutSavings_circleInput
    contributions?: contributionsUncheckedCreateNestedOneWithoutSavings_circleInput
    payouts?: payoutsUncheckedCreateNestedOneWithoutSavings_circleInput
  }

  export type savings_circlesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutSavings_circlesNestedInput
    circle_members?: circle_membersUpdateOneWithoutSavings_circleNestedInput
    circle_invitations?: circle_invitationsUpdateOneWithoutSavings_circleNestedInput
    savings_schedules?: savings_schedulesUpdateOneWithoutSavings_circleNestedInput
    contributions?: contributionsUpdateOneWithoutSavings_circleNestedInput
    payouts?: payoutsUpdateOneWithoutSavings_circleNestedInput
  }

  export type savings_circlesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    circle_members?: circle_membersUncheckedUpdateOneWithoutSavings_circleNestedInput
    circle_invitations?: circle_invitationsUncheckedUpdateOneWithoutSavings_circleNestedInput
    savings_schedules?: savings_schedulesUncheckedUpdateOneWithoutSavings_circleNestedInput
    contributions?: contributionsUncheckedUpdateOneWithoutSavings_circleNestedInput
    payouts?: payoutsUncheckedUpdateOneWithoutSavings_circleNestedInput
  }

  export type savings_circlesCreateManyInput = {
    id?: string
    name: string
    decription: string
    owner_id: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type savings_circlesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savings_circlesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type circle_membersCreateInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.Circle_Status
    joined_at: Date | string
    left_at?: Date | string | null
    created_at: Date | string
    updated_at?: Date | string
    savings_circle: savings_circlesCreateNestedOneWithoutCircle_membersInput
    users: usersCreateNestedOneWithoutCircle_membersInput
    payouts?: payoutsCreateNestedOneWithoutCircle_memberInput
  }

  export type circle_membersUncheckedCreateInput = {
    id?: string
    circle_id: string
    user_id: string
    role: $Enums.Role
    status: $Enums.Circle_Status
    joined_at: Date | string
    left_at?: Date | string | null
    created_at: Date | string
    updated_at?: Date | string
    payouts?: payoutsUncheckedCreateNestedOneWithoutCircle_memberInput
  }

  export type circle_membersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumCircle_StatusFieldUpdateOperationsInput | $Enums.Circle_Status
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings_circle?: savings_circlesUpdateOneRequiredWithoutCircle_membersNestedInput
    users?: usersUpdateOneRequiredWithoutCircle_membersNestedInput
    payouts?: payoutsUpdateOneWithoutCircle_memberNestedInput
  }

  export type circle_membersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumCircle_StatusFieldUpdateOperationsInput | $Enums.Circle_Status
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payouts?: payoutsUncheckedUpdateOneWithoutCircle_memberNestedInput
  }

  export type circle_membersCreateManyInput = {
    id?: string
    circle_id: string
    user_id: string
    role: $Enums.Role
    status: $Enums.Circle_Status
    joined_at: Date | string
    left_at?: Date | string | null
    created_at: Date | string
    updated_at?: Date | string
  }

  export type circle_membersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumCircle_StatusFieldUpdateOperationsInput | $Enums.Circle_Status
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type circle_membersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumCircle_StatusFieldUpdateOperationsInput | $Enums.Circle_Status
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type circle_invitationsCreateInput = {
    id?: string
    email: string
    token_hash: string
    status: $Enums.Status
    expires_at: Date | string
    accepted_at?: Date | string | null
    created_at: Date | string
    savings_circle: savings_circlesCreateNestedOneWithoutCircle_invitationsInput
    users: usersCreateNestedOneWithoutCircle_invitationsInput
  }

  export type circle_invitationsUncheckedCreateInput = {
    id?: string
    circle_id: string
    invited_by: string
    email: string
    token_hash: string
    status: $Enums.Status
    expires_at: Date | string
    accepted_at?: Date | string | null
    created_at: Date | string
  }

  export type circle_invitationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings_circle?: savings_circlesUpdateOneRequiredWithoutCircle_invitationsNestedInput
    users?: usersUpdateOneRequiredWithoutCircle_invitationsNestedInput
  }

  export type circle_invitationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    invited_by?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type circle_invitationsCreateManyInput = {
    id?: string
    circle_id: string
    invited_by: string
    email: string
    token_hash: string
    status: $Enums.Status
    expires_at: Date | string
    accepted_at?: Date | string | null
    created_at: Date | string
  }

  export type circle_invitationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type circle_invitationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    invited_by?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savings_schedulesCreateInput = {
    id?: string
    frequency: $Enums.Frequency
    contribution_amount: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date?: Date | string | null
    total_cycles: number
    current_cycle: number
    created_at: Date | string
    updated_at?: Date | string
    savings_circle: savings_circlesCreateNestedOneWithoutSavings_schedulesInput
  }

  export type savings_schedulesUncheckedCreateInput = {
    id?: string
    circle_id: string
    frequency: $Enums.Frequency
    contribution_amount: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date?: Date | string | null
    total_cycles: number
    current_cycle: number
    created_at: Date | string
    updated_at?: Date | string
  }

  export type savings_schedulesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cycles?: IntFieldUpdateOperationsInput | number
    current_cycle?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings_circle?: savings_circlesUpdateOneRequiredWithoutSavings_schedulesNestedInput
  }

  export type savings_schedulesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cycles?: IntFieldUpdateOperationsInput | number
    current_cycle?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savings_schedulesCreateManyInput = {
    id?: string
    circle_id: string
    frequency: $Enums.Frequency
    contribution_amount: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date?: Date | string | null
    total_cycles: number
    current_cycle: number
    created_at: Date | string
    updated_at?: Date | string
  }

  export type savings_schedulesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cycles?: IntFieldUpdateOperationsInput | number
    current_cycle?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savings_schedulesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cycles?: IntFieldUpdateOperationsInput | number
    current_cycle?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contributionsCreateInput = {
    id?: string
    cycle_number: number
    amount: Decimal | DecimalJsLike | number | string
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.Contribution_status
    transaction_id?: string | null
    create_at?: Date | string
    updated_at?: Date | string
    savings_circle: savings_circlesCreateNestedOneWithoutContributionsInput
    users: usersCreateNestedOneWithoutContributionsInput
  }

  export type contributionsUncheckedCreateInput = {
    id?: string
    circle_id: string
    circle_member: string
    cycle_number: number
    amount: Decimal | DecimalJsLike | number | string
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.Contribution_status
    transaction_id?: string | null
    create_at?: Date | string
    updated_at?: Date | string
  }

  export type contributionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings_circle?: savings_circlesUpdateOneRequiredWithoutContributionsNestedInput
    users?: usersUpdateOneRequiredWithoutContributionsNestedInput
  }

  export type contributionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    circle_member?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contributionsCreateManyInput = {
    id?: string
    circle_id: string
    circle_member: string
    cycle_number: number
    amount: Decimal | DecimalJsLike | number | string
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.Contribution_status
    transaction_id?: string | null
    create_at?: Date | string
    updated_at?: Date | string
  }

  export type contributionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contributionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    circle_member?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payoutsCreateInput = {
    id?: string
    cycle_number: number
    amount: Decimal | DecimalJsLike | number | string
    scheduled_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.Contribution_status
    transaction_id?: string | null
    create_at?: Date | string
    updated_at?: Date | string
    savings_circle: savings_circlesCreateNestedOneWithoutPayoutsInput
    circle_member: circle_membersCreateNestedOneWithoutPayoutsInput
  }

  export type payoutsUncheckedCreateInput = {
    id?: string
    circle_id: string
    member_id: string
    cycle_number: number
    amount: Decimal | DecimalJsLike | number | string
    scheduled_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.Contribution_status
    transaction_id?: string | null
    create_at?: Date | string
    updated_at?: Date | string
  }

  export type payoutsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings_circle?: savings_circlesUpdateOneRequiredWithoutPayoutsNestedInput
    circle_member?: circle_membersUpdateOneRequiredWithoutPayoutsNestedInput
  }

  export type payoutsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payoutsCreateManyInput = {
    id?: string
    circle_id: string
    member_id: string
    cycle_number: number
    amount: Decimal | DecimalJsLike | number | string
    scheduled_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.Contribution_status
    transaction_id?: string | null
    create_at?: Date | string
    updated_at?: Date | string
  }

  export type payoutsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payoutsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_transactionsCreateInput = {
    id?: string
    refernce: string
    idempotency_key: string
    provider: $Enums.Provider
    provider_reference?: string | null
    type: $Enums.Payment_type
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status: $Enums.Payout
    metadata: JsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutPayment_transactionsInput
    payment_status_history?: payment_status_historyCreateNestedOneWithoutPayment_transactionsInput
  }

  export type payment_transactionsUncheckedCreateInput = {
    id?: string
    user_id: string
    refernce: string
    idempotency_key: string
    provider: $Enums.Provider
    provider_reference?: string | null
    type: $Enums.Payment_type
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status: $Enums.Payout
    metadata: JsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at?: Date | string
    payment_status_history?: payment_status_historyUncheckedCreateNestedOneWithoutPayment_transactionsInput
  }

  export type payment_transactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refernce?: StringFieldUpdateOperationsInput | string
    idempotency_key?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    provider_reference?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayment_typeFieldUpdateOperationsInput | $Enums.Payment_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutFieldUpdateOperationsInput | $Enums.Payout
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutPayment_transactionsNestedInput
    payment_status_history?: payment_status_historyUpdateOneWithoutPayment_transactionsNestedInput
  }

  export type payment_transactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    refernce?: StringFieldUpdateOperationsInput | string
    idempotency_key?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    provider_reference?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayment_typeFieldUpdateOperationsInput | $Enums.Payment_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutFieldUpdateOperationsInput | $Enums.Payout
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status_history?: payment_status_historyUncheckedUpdateOneWithoutPayment_transactionsNestedInput
  }

  export type payment_transactionsCreateManyInput = {
    id?: string
    user_id: string
    refernce: string
    idempotency_key: string
    provider: $Enums.Provider
    provider_reference?: string | null
    type: $Enums.Payment_type
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status: $Enums.Payout
    metadata: JsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at?: Date | string
  }

  export type payment_transactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refernce?: StringFieldUpdateOperationsInput | string
    idempotency_key?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    provider_reference?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayment_typeFieldUpdateOperationsInput | $Enums.Payment_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutFieldUpdateOperationsInput | $Enums.Payout
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_transactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    refernce?: StringFieldUpdateOperationsInput | string
    idempotency_key?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    provider_reference?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayment_typeFieldUpdateOperationsInput | $Enums.Payment_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutFieldUpdateOperationsInput | $Enums.Payout
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_status_historyCreateInput = {
    id?: string
    status: $Enums.Payout
    message: string
    metadata: JsonNullValueInput | InputJsonValue
    created_at: Date | string
    payment_transactions: payment_transactionsCreateNestedOneWithoutPayment_status_historyInput
  }

  export type payment_status_historyUncheckedCreateInput = {
    id?: string
    transaction_id: string
    status: $Enums.Payout
    message: string
    metadata: JsonNullValueInput | InputJsonValue
    created_at: Date | string
  }

  export type payment_status_historyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutFieldUpdateOperationsInput | $Enums.Payout
    message?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_transactions?: payment_transactionsUpdateOneRequiredWithoutPayment_status_historyNestedInput
  }

  export type payment_status_historyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutFieldUpdateOperationsInput | $Enums.Payout
    message?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_status_historyCreateManyInput = {
    id?: string
    transaction_id: string
    status: $Enums.Payout
    message: string
    metadata: JsonNullValueInput | InputJsonValue
    created_at: Date | string
  }

  export type payment_status_historyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutFieldUpdateOperationsInput | $Enums.Payout
    message?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_status_historyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_id?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutFieldUpdateOperationsInput | $Enums.Payout
    message?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsCreateInput = {
    id?: string
    type: $Enums.Notifications
    title: string
    message: string
    data: JsonNullValueInput | InputJsonValue
    read_at: Date | string
    created_at: Date | string
    users: usersCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateInput = {
    id?: string
    user_id: string
    type: $Enums.Notifications
    title: string
    message: string
    data: JsonNullValueInput | InputJsonValue
    read_at: Date | string
    created_at: Date | string
  }

  export type notificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationsFieldUpdateOperationsInput | $Enums.Notifications
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    read_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationsFieldUpdateOperationsInput | $Enums.Notifications
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    read_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsCreateManyInput = {
    id?: string
    user_id: string
    type: $Enums.Notifications
    title: string
    message: string
    data: JsonNullValueInput | InputJsonValue
    read_at: Date | string
    created_at: Date | string
  }

  export type notificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationsFieldUpdateOperationsInput | $Enums.Notifications
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    read_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationsFieldUpdateOperationsInput | $Enums.Notifications
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    read_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_logCreateInput = {
    id?: string
    user_id?: $Enums.Status | null
    action: string
    entity_type: string
    entity_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    created_at: Date | string
  }

  export type audit_logUncheckedCreateInput = {
    id?: string
    user_id?: $Enums.Status | null
    action: string
    entity_type: string
    entity_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    created_at: Date | string
  }

  export type audit_logUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    action?: StringFieldUpdateOperationsInput | string
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_logUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    action?: StringFieldUpdateOperationsInput | string
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_logCreateManyInput = {
    id?: string
    user_id?: $Enums.Status | null
    action: string
    entity_type: string
    entity_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    created_at: Date | string
  }

  export type audit_logUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    action?: StringFieldUpdateOperationsInput | string
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_logUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableEnumStatusFieldUpdateOperationsInput | $Enums.Status | null
    action?: StringFieldUpdateOperationsInput | string
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type waitlistEntryCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    verification_token_hash?: SortOrder
    verification_expires_at?: SortOrder
    verified_at?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type waitlistEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    verification_token_hash?: SortOrder
    verification_expires_at?: SortOrder
    verified_at?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type waitlistEntryMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    verification_token_hash?: SortOrder
    verification_expires_at?: SortOrder
    verified_at?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WaitlistEntryNullableScalarRelationFilter = {
    is?: waitlistEntryWhereInput | null
    isNot?: waitlistEntryWhereInput | null
  }

  export type SessionsNullableScalarRelationFilter = {
    is?: sessionsWhereInput | null
    isNot?: sessionsWhereInput | null
  }

  export type Savings_circlesNullableScalarRelationFilter = {
    is?: savings_circlesWhereInput | null
    isNot?: savings_circlesWhereInput | null
  }

  export type Circle_membersNullableScalarRelationFilter = {
    is?: circle_membersWhereInput | null
    isNot?: circle_membersWhereInput | null
  }

  export type Circle_invitationsNullableScalarRelationFilter = {
    is?: circle_invitationsWhereInput | null
    isNot?: circle_invitationsWhereInput | null
  }

  export type ContributionsNullableScalarRelationFilter = {
    is?: contributionsWhereInput | null
    isNot?: contributionsWhereInput | null
  }

  export type Payment_transactionsNullableScalarRelationFilter = {
    is?: payment_transactionsWhereInput | null
    isNot?: payment_transactionsWhereInput | null
  }

  export type NotificationsNullableScalarRelationFilter = {
    is?: notificationsWhereInput | null
    isNot?: notificationsWhereInput | null
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar_url?: SortOrder
    email_verified_at?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar_url?: SortOrder
    email_verified_at?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar_url?: SortOrder
    email_verified_at?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    revoked_at?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    revoked_at?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    revoked_at?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | EnumFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFrequencyFilter<$PrismaModel> | $Enums.Frequency
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Savings_schedulesNullableScalarRelationFilter = {
    is?: savings_schedulesWhereInput | null
    isNot?: savings_schedulesWhereInput | null
  }

  export type PayoutsNullableScalarRelationFilter = {
    is?: payoutsWhereInput | null
    isNot?: payoutsWhereInput | null
  }

  export type savings_circlesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    decription?: SortOrder
    owner_id?: SortOrder
    contribution_amount?: SortOrder
    currency?: SortOrder
    frequency?: SortOrder
    member_limit?: SortOrder
    start_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type savings_circlesAvgOrderByAggregateInput = {
    contribution_amount?: SortOrder
    member_limit?: SortOrder
  }

  export type savings_circlesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    decription?: SortOrder
    owner_id?: SortOrder
    contribution_amount?: SortOrder
    currency?: SortOrder
    frequency?: SortOrder
    member_limit?: SortOrder
    start_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type savings_circlesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    decription?: SortOrder
    owner_id?: SortOrder
    contribution_amount?: SortOrder
    currency?: SortOrder
    frequency?: SortOrder
    member_limit?: SortOrder
    start_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type savings_circlesSumOrderByAggregateInput = {
    contribution_amount?: SortOrder
    member_limit?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | EnumFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.Frequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFrequencyFilter<$PrismaModel>
    _max?: NestedEnumFrequencyFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumCircle_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Circle_Status | EnumCircle_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Circle_Status[] | ListEnumCircle_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Circle_Status[] | ListEnumCircle_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCircle_StatusFilter<$PrismaModel> | $Enums.Circle_Status
  }

  export type Savings_circlesScalarRelationFilter = {
    is?: savings_circlesWhereInput
    isNot?: savings_circlesWhereInput
  }

  export type circle_membersCountOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type circle_membersMaxOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type circle_membersMinOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    joined_at?: SortOrder
    left_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumCircle_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Circle_Status | EnumCircle_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Circle_Status[] | ListEnumCircle_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Circle_Status[] | ListEnumCircle_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCircle_StatusWithAggregatesFilter<$PrismaModel> | $Enums.Circle_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCircle_StatusFilter<$PrismaModel>
    _max?: NestedEnumCircle_StatusFilter<$PrismaModel>
  }

  export type circle_invitationsCountOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    invited_by?: SortOrder
    email?: SortOrder
    token_hash?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
    accepted_at?: SortOrder
    created_at?: SortOrder
  }

  export type circle_invitationsMaxOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    invited_by?: SortOrder
    email?: SortOrder
    token_hash?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
    accepted_at?: SortOrder
    created_at?: SortOrder
  }

  export type circle_invitationsMinOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    invited_by?: SortOrder
    email?: SortOrder
    token_hash?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
    accepted_at?: SortOrder
    created_at?: SortOrder
  }

  export type savings_schedulesCountOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    frequency?: SortOrder
    contribution_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    total_cycles?: SortOrder
    current_cycle?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type savings_schedulesAvgOrderByAggregateInput = {
    contribution_amount?: SortOrder
    total_cycles?: SortOrder
    current_cycle?: SortOrder
  }

  export type savings_schedulesMaxOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    frequency?: SortOrder
    contribution_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    total_cycles?: SortOrder
    current_cycle?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type savings_schedulesMinOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    frequency?: SortOrder
    contribution_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    total_cycles?: SortOrder
    current_cycle?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type savings_schedulesSumOrderByAggregateInput = {
    contribution_amount?: SortOrder
    total_cycles?: SortOrder
    current_cycle?: SortOrder
  }

  export type EnumContribution_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Contribution_status | EnumContribution_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Contribution_status[] | ListEnumContribution_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Contribution_status[] | ListEnumContribution_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumContribution_statusFilter<$PrismaModel> | $Enums.Contribution_status
  }

  export type contributionsCountOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    circle_member?: SortOrder
    cycle_number?: SortOrder
    amount?: SortOrder
    due_date?: SortOrder
    paid_at?: SortOrder
    status?: SortOrder
    transaction_id?: SortOrder
    create_at?: SortOrder
    updated_at?: SortOrder
  }

  export type contributionsAvgOrderByAggregateInput = {
    cycle_number?: SortOrder
    amount?: SortOrder
  }

  export type contributionsMaxOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    circle_member?: SortOrder
    cycle_number?: SortOrder
    amount?: SortOrder
    due_date?: SortOrder
    paid_at?: SortOrder
    status?: SortOrder
    transaction_id?: SortOrder
    create_at?: SortOrder
    updated_at?: SortOrder
  }

  export type contributionsMinOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    circle_member?: SortOrder
    cycle_number?: SortOrder
    amount?: SortOrder
    due_date?: SortOrder
    paid_at?: SortOrder
    status?: SortOrder
    transaction_id?: SortOrder
    create_at?: SortOrder
    updated_at?: SortOrder
  }

  export type contributionsSumOrderByAggregateInput = {
    cycle_number?: SortOrder
    amount?: SortOrder
  }

  export type EnumContribution_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Contribution_status | EnumContribution_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Contribution_status[] | ListEnumContribution_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Contribution_status[] | ListEnumContribution_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumContribution_statusWithAggregatesFilter<$PrismaModel> | $Enums.Contribution_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContribution_statusFilter<$PrismaModel>
    _max?: NestedEnumContribution_statusFilter<$PrismaModel>
  }

  export type Circle_membersScalarRelationFilter = {
    is?: circle_membersWhereInput
    isNot?: circle_membersWhereInput
  }

  export type payoutsCountOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    member_id?: SortOrder
    cycle_number?: SortOrder
    amount?: SortOrder
    scheduled_date?: SortOrder
    paid_at?: SortOrder
    status?: SortOrder
    transaction_id?: SortOrder
    create_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payoutsAvgOrderByAggregateInput = {
    cycle_number?: SortOrder
    amount?: SortOrder
  }

  export type payoutsMaxOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    member_id?: SortOrder
    cycle_number?: SortOrder
    amount?: SortOrder
    scheduled_date?: SortOrder
    paid_at?: SortOrder
    status?: SortOrder
    transaction_id?: SortOrder
    create_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payoutsMinOrderByAggregateInput = {
    id?: SortOrder
    circle_id?: SortOrder
    member_id?: SortOrder
    cycle_number?: SortOrder
    amount?: SortOrder
    scheduled_date?: SortOrder
    paid_at?: SortOrder
    status?: SortOrder
    transaction_id?: SortOrder
    create_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payoutsSumOrderByAggregateInput = {
    cycle_number?: SortOrder
    amount?: SortOrder
  }

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type EnumPayment_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Payment_type | EnumPayment_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Payment_type[] | ListEnumPayment_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Payment_type[] | ListEnumPayment_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayment_typeFilter<$PrismaModel> | $Enums.Payment_type
  }

  export type EnumPayoutFilter<$PrismaModel = never> = {
    equals?: $Enums.Payout | EnumPayoutFieldRefInput<$PrismaModel>
    in?: $Enums.Payout[] | ListEnumPayoutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Payout[] | ListEnumPayoutFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutFilter<$PrismaModel> | $Enums.Payout
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type Payment_status_historyNullableScalarRelationFilter = {
    is?: payment_status_historyWhereInput | null
    isNot?: payment_status_historyWhereInput | null
  }

  export type payment_transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refernce?: SortOrder
    idempotency_key?: SortOrder
    provider?: SortOrder
    provider_reference?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_transactionsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type payment_transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refernce?: SortOrder
    idempotency_key?: SortOrder
    provider?: SortOrder
    provider_reference?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refernce?: SortOrder
    idempotency_key?: SortOrder
    provider?: SortOrder
    provider_reference?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_transactionsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type EnumPayment_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Payment_type | EnumPayment_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Payment_type[] | ListEnumPayment_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Payment_type[] | ListEnumPayment_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayment_typeWithAggregatesFilter<$PrismaModel> | $Enums.Payment_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayment_typeFilter<$PrismaModel>
    _max?: NestedEnumPayment_typeFilter<$PrismaModel>
  }

  export type EnumPayoutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Payout | EnumPayoutFieldRefInput<$PrismaModel>
    in?: $Enums.Payout[] | ListEnumPayoutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Payout[] | ListEnumPayoutFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutWithAggregatesFilter<$PrismaModel> | $Enums.Payout
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayoutFilter<$PrismaModel>
    _max?: NestedEnumPayoutFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type Payment_transactionsScalarRelationFilter = {
    is?: payment_transactionsWhereInput
    isNot?: payment_transactionsWhereInput
  }

  export type payment_status_historyCountOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
  }

  export type payment_status_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type payment_status_historyMinOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type EnumNotificationsFilter<$PrismaModel = never> = {
    equals?: $Enums.Notifications | EnumNotificationsFieldRefInput<$PrismaModel>
    in?: $Enums.Notifications[] | ListEnumNotificationsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Notifications[] | ListEnumNotificationsFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationsFilter<$PrismaModel> | $Enums.Notifications
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrder
    read_at?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read_at?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read_at?: SortOrder
    created_at?: SortOrder
  }

  export type EnumNotificationsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Notifications | EnumNotificationsFieldRefInput<$PrismaModel>
    in?: $Enums.Notifications[] | ListEnumNotificationsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Notifications[] | ListEnumNotificationsFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationsWithAggregatesFilter<$PrismaModel> | $Enums.Notifications
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationsFilter<$PrismaModel>
    _max?: NestedEnumNotificationsFilter<$PrismaModel>
  }

  export type EnumStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableFilter<$PrismaModel> | $Enums.Status | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type audit_logCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    metadata?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
  }

  export type audit_logMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
  }

  export type audit_logMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
  }

  export type EnumStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutWaitlistEntryInput = {
    create?: XOR<usersCreateWithoutWaitlistEntryInput, usersUncheckedCreateWithoutWaitlistEntryInput>
    connectOrCreate?: usersCreateOrConnectWithoutWaitlistEntryInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneWithoutWaitlistEntryNestedInput = {
    create?: XOR<usersCreateWithoutWaitlistEntryInput, usersUncheckedCreateWithoutWaitlistEntryInput>
    connectOrCreate?: usersCreateOrConnectWithoutWaitlistEntryInput
    upsert?: usersUpsertWithoutWaitlistEntryInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWaitlistEntryInput, usersUpdateWithoutWaitlistEntryInput>, usersUncheckedUpdateWithoutWaitlistEntryInput>
  }

  export type waitlistEntryCreateNestedOneWithoutUserInput = {
    create?: XOR<waitlistEntryCreateWithoutUserInput, waitlistEntryUncheckedCreateWithoutUserInput>
    connectOrCreate?: waitlistEntryCreateOrConnectWithoutUserInput
    connect?: waitlistEntryWhereUniqueInput
  }

  export type sessionsCreateNestedOneWithoutUserInput = {
    create?: XOR<sessionsCreateWithoutUserInput, sessionsUncheckedCreateWithoutUserInput>
    connectOrCreate?: sessionsCreateOrConnectWithoutUserInput
    connect?: sessionsWhereUniqueInput
  }

  export type savings_circlesCreateNestedOneWithoutUsersInput = {
    create?: XOR<savings_circlesCreateWithoutUsersInput, savings_circlesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: savings_circlesCreateOrConnectWithoutUsersInput
    connect?: savings_circlesWhereUniqueInput
  }

  export type circle_membersCreateNestedOneWithoutUsersInput = {
    create?: XOR<circle_membersCreateWithoutUsersInput, circle_membersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: circle_membersCreateOrConnectWithoutUsersInput
    connect?: circle_membersWhereUniqueInput
  }

  export type circle_invitationsCreateNestedOneWithoutUsersInput = {
    create?: XOR<circle_invitationsCreateWithoutUsersInput, circle_invitationsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: circle_invitationsCreateOrConnectWithoutUsersInput
    connect?: circle_invitationsWhereUniqueInput
  }

  export type contributionsCreateNestedOneWithoutUsersInput = {
    create?: XOR<contributionsCreateWithoutUsersInput, contributionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: contributionsCreateOrConnectWithoutUsersInput
    connect?: contributionsWhereUniqueInput
  }

  export type payment_transactionsCreateNestedOneWithoutUsersInput = {
    create?: XOR<payment_transactionsCreateWithoutUsersInput, payment_transactionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: payment_transactionsCreateOrConnectWithoutUsersInput
    connect?: payment_transactionsWhereUniqueInput
  }

  export type notificationsCreateNestedOneWithoutUsersInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput
    connect?: notificationsWhereUniqueInput
  }

  export type waitlistEntryUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<waitlistEntryCreateWithoutUserInput, waitlistEntryUncheckedCreateWithoutUserInput>
    connectOrCreate?: waitlistEntryCreateOrConnectWithoutUserInput
    connect?: waitlistEntryWhereUniqueInput
  }

  export type sessionsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<sessionsCreateWithoutUserInput, sessionsUncheckedCreateWithoutUserInput>
    connectOrCreate?: sessionsCreateOrConnectWithoutUserInput
    connect?: sessionsWhereUniqueInput
  }

  export type savings_circlesUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<savings_circlesCreateWithoutUsersInput, savings_circlesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: savings_circlesCreateOrConnectWithoutUsersInput
    connect?: savings_circlesWhereUniqueInput
  }

  export type circle_membersUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<circle_membersCreateWithoutUsersInput, circle_membersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: circle_membersCreateOrConnectWithoutUsersInput
    connect?: circle_membersWhereUniqueInput
  }

  export type circle_invitationsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<circle_invitationsCreateWithoutUsersInput, circle_invitationsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: circle_invitationsCreateOrConnectWithoutUsersInput
    connect?: circle_invitationsWhereUniqueInput
  }

  export type contributionsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<contributionsCreateWithoutUsersInput, contributionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: contributionsCreateOrConnectWithoutUsersInput
    connect?: contributionsWhereUniqueInput
  }

  export type payment_transactionsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<payment_transactionsCreateWithoutUsersInput, payment_transactionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: payment_transactionsCreateOrConnectWithoutUsersInput
    connect?: payment_transactionsWhereUniqueInput
  }

  export type notificationsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput
    connect?: notificationsWhereUniqueInput
  }

  export type waitlistEntryUpdateOneWithoutUserNestedInput = {
    create?: XOR<waitlistEntryCreateWithoutUserInput, waitlistEntryUncheckedCreateWithoutUserInput>
    connectOrCreate?: waitlistEntryCreateOrConnectWithoutUserInput
    upsert?: waitlistEntryUpsertWithoutUserInput
    disconnect?: waitlistEntryWhereInput | boolean
    delete?: waitlistEntryWhereInput | boolean
    connect?: waitlistEntryWhereUniqueInput
    update?: XOR<XOR<waitlistEntryUpdateToOneWithWhereWithoutUserInput, waitlistEntryUpdateWithoutUserInput>, waitlistEntryUncheckedUpdateWithoutUserInput>
  }

  export type sessionsUpdateOneWithoutUserNestedInput = {
    create?: XOR<sessionsCreateWithoutUserInput, sessionsUncheckedCreateWithoutUserInput>
    connectOrCreate?: sessionsCreateOrConnectWithoutUserInput
    upsert?: sessionsUpsertWithoutUserInput
    disconnect?: sessionsWhereInput | boolean
    delete?: sessionsWhereInput | boolean
    connect?: sessionsWhereUniqueInput
    update?: XOR<XOR<sessionsUpdateToOneWithWhereWithoutUserInput, sessionsUpdateWithoutUserInput>, sessionsUncheckedUpdateWithoutUserInput>
  }

  export type savings_circlesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<savings_circlesCreateWithoutUsersInput, savings_circlesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: savings_circlesCreateOrConnectWithoutUsersInput
    upsert?: savings_circlesUpsertWithoutUsersInput
    disconnect?: savings_circlesWhereInput | boolean
    delete?: savings_circlesWhereInput | boolean
    connect?: savings_circlesWhereUniqueInput
    update?: XOR<XOR<savings_circlesUpdateToOneWithWhereWithoutUsersInput, savings_circlesUpdateWithoutUsersInput>, savings_circlesUncheckedUpdateWithoutUsersInput>
  }

  export type circle_membersUpdateOneWithoutUsersNestedInput = {
    create?: XOR<circle_membersCreateWithoutUsersInput, circle_membersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: circle_membersCreateOrConnectWithoutUsersInput
    upsert?: circle_membersUpsertWithoutUsersInput
    disconnect?: circle_membersWhereInput | boolean
    delete?: circle_membersWhereInput | boolean
    connect?: circle_membersWhereUniqueInput
    update?: XOR<XOR<circle_membersUpdateToOneWithWhereWithoutUsersInput, circle_membersUpdateWithoutUsersInput>, circle_membersUncheckedUpdateWithoutUsersInput>
  }

  export type circle_invitationsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<circle_invitationsCreateWithoutUsersInput, circle_invitationsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: circle_invitationsCreateOrConnectWithoutUsersInput
    upsert?: circle_invitationsUpsertWithoutUsersInput
    disconnect?: circle_invitationsWhereInput | boolean
    delete?: circle_invitationsWhereInput | boolean
    connect?: circle_invitationsWhereUniqueInput
    update?: XOR<XOR<circle_invitationsUpdateToOneWithWhereWithoutUsersInput, circle_invitationsUpdateWithoutUsersInput>, circle_invitationsUncheckedUpdateWithoutUsersInput>
  }

  export type contributionsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<contributionsCreateWithoutUsersInput, contributionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: contributionsCreateOrConnectWithoutUsersInput
    upsert?: contributionsUpsertWithoutUsersInput
    disconnect?: contributionsWhereInput | boolean
    delete?: contributionsWhereInput | boolean
    connect?: contributionsWhereUniqueInput
    update?: XOR<XOR<contributionsUpdateToOneWithWhereWithoutUsersInput, contributionsUpdateWithoutUsersInput>, contributionsUncheckedUpdateWithoutUsersInput>
  }

  export type payment_transactionsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<payment_transactionsCreateWithoutUsersInput, payment_transactionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: payment_transactionsCreateOrConnectWithoutUsersInput
    upsert?: payment_transactionsUpsertWithoutUsersInput
    disconnect?: payment_transactionsWhereInput | boolean
    delete?: payment_transactionsWhereInput | boolean
    connect?: payment_transactionsWhereUniqueInput
    update?: XOR<XOR<payment_transactionsUpdateToOneWithWhereWithoutUsersInput, payment_transactionsUpdateWithoutUsersInput>, payment_transactionsUncheckedUpdateWithoutUsersInput>
  }

  export type notificationsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput
    upsert?: notificationsUpsertWithoutUsersInput
    disconnect?: notificationsWhereInput | boolean
    delete?: notificationsWhereInput | boolean
    connect?: notificationsWhereUniqueInput
    update?: XOR<XOR<notificationsUpdateToOneWithWhereWithoutUsersInput, notificationsUpdateWithoutUsersInput>, notificationsUncheckedUpdateWithoutUsersInput>
  }

  export type waitlistEntryUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<waitlistEntryCreateWithoutUserInput, waitlistEntryUncheckedCreateWithoutUserInput>
    connectOrCreate?: waitlistEntryCreateOrConnectWithoutUserInput
    upsert?: waitlistEntryUpsertWithoutUserInput
    disconnect?: waitlistEntryWhereInput | boolean
    delete?: waitlistEntryWhereInput | boolean
    connect?: waitlistEntryWhereUniqueInput
    update?: XOR<XOR<waitlistEntryUpdateToOneWithWhereWithoutUserInput, waitlistEntryUpdateWithoutUserInput>, waitlistEntryUncheckedUpdateWithoutUserInput>
  }

  export type sessionsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<sessionsCreateWithoutUserInput, sessionsUncheckedCreateWithoutUserInput>
    connectOrCreate?: sessionsCreateOrConnectWithoutUserInput
    upsert?: sessionsUpsertWithoutUserInput
    disconnect?: sessionsWhereInput | boolean
    delete?: sessionsWhereInput | boolean
    connect?: sessionsWhereUniqueInput
    update?: XOR<XOR<sessionsUpdateToOneWithWhereWithoutUserInput, sessionsUpdateWithoutUserInput>, sessionsUncheckedUpdateWithoutUserInput>
  }

  export type savings_circlesUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<savings_circlesCreateWithoutUsersInput, savings_circlesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: savings_circlesCreateOrConnectWithoutUsersInput
    upsert?: savings_circlesUpsertWithoutUsersInput
    disconnect?: savings_circlesWhereInput | boolean
    delete?: savings_circlesWhereInput | boolean
    connect?: savings_circlesWhereUniqueInput
    update?: XOR<XOR<savings_circlesUpdateToOneWithWhereWithoutUsersInput, savings_circlesUpdateWithoutUsersInput>, savings_circlesUncheckedUpdateWithoutUsersInput>
  }

  export type circle_membersUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<circle_membersCreateWithoutUsersInput, circle_membersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: circle_membersCreateOrConnectWithoutUsersInput
    upsert?: circle_membersUpsertWithoutUsersInput
    disconnect?: circle_membersWhereInput | boolean
    delete?: circle_membersWhereInput | boolean
    connect?: circle_membersWhereUniqueInput
    update?: XOR<XOR<circle_membersUpdateToOneWithWhereWithoutUsersInput, circle_membersUpdateWithoutUsersInput>, circle_membersUncheckedUpdateWithoutUsersInput>
  }

  export type circle_invitationsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<circle_invitationsCreateWithoutUsersInput, circle_invitationsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: circle_invitationsCreateOrConnectWithoutUsersInput
    upsert?: circle_invitationsUpsertWithoutUsersInput
    disconnect?: circle_invitationsWhereInput | boolean
    delete?: circle_invitationsWhereInput | boolean
    connect?: circle_invitationsWhereUniqueInput
    update?: XOR<XOR<circle_invitationsUpdateToOneWithWhereWithoutUsersInput, circle_invitationsUpdateWithoutUsersInput>, circle_invitationsUncheckedUpdateWithoutUsersInput>
  }

  export type contributionsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<contributionsCreateWithoutUsersInput, contributionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: contributionsCreateOrConnectWithoutUsersInput
    upsert?: contributionsUpsertWithoutUsersInput
    disconnect?: contributionsWhereInput | boolean
    delete?: contributionsWhereInput | boolean
    connect?: contributionsWhereUniqueInput
    update?: XOR<XOR<contributionsUpdateToOneWithWhereWithoutUsersInput, contributionsUpdateWithoutUsersInput>, contributionsUncheckedUpdateWithoutUsersInput>
  }

  export type payment_transactionsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<payment_transactionsCreateWithoutUsersInput, payment_transactionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: payment_transactionsCreateOrConnectWithoutUsersInput
    upsert?: payment_transactionsUpsertWithoutUsersInput
    disconnect?: payment_transactionsWhereInput | boolean
    delete?: payment_transactionsWhereInput | boolean
    connect?: payment_transactionsWhereUniqueInput
    update?: XOR<XOR<payment_transactionsUpdateToOneWithWhereWithoutUsersInput, payment_transactionsUpdateWithoutUsersInput>, payment_transactionsUncheckedUpdateWithoutUsersInput>
  }

  export type notificationsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput
    upsert?: notificationsUpsertWithoutUsersInput
    disconnect?: notificationsWhereInput | boolean
    delete?: notificationsWhereInput | boolean
    connect?: notificationsWhereUniqueInput
    update?: XOR<XOR<notificationsUpdateToOneWithWhereWithoutUsersInput, notificationsUpdateWithoutUsersInput>, notificationsUncheckedUpdateWithoutUsersInput>
  }

  export type usersCreateNestedOneWithoutSessionInput = {
    create?: XOR<usersCreateWithoutSessionInput, usersUncheckedCreateWithoutSessionInput>
    connectOrCreate?: usersCreateOrConnectWithoutSessionInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<usersCreateWithoutSessionInput, usersUncheckedCreateWithoutSessionInput>
    connectOrCreate?: usersCreateOrConnectWithoutSessionInput
    upsert?: usersUpsertWithoutSessionInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSessionInput, usersUpdateWithoutSessionInput>, usersUncheckedUpdateWithoutSessionInput>
  }

  export type usersCreateNestedOneWithoutSavings_circlesInput = {
    create?: XOR<usersCreateWithoutSavings_circlesInput, usersUncheckedCreateWithoutSavings_circlesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSavings_circlesInput
    connect?: usersWhereUniqueInput
  }

  export type circle_membersCreateNestedOneWithoutSavings_circleInput = {
    create?: XOR<circle_membersCreateWithoutSavings_circleInput, circle_membersUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: circle_membersCreateOrConnectWithoutSavings_circleInput
    connect?: circle_membersWhereUniqueInput
  }

  export type circle_invitationsCreateNestedOneWithoutSavings_circleInput = {
    create?: XOR<circle_invitationsCreateWithoutSavings_circleInput, circle_invitationsUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: circle_invitationsCreateOrConnectWithoutSavings_circleInput
    connect?: circle_invitationsWhereUniqueInput
  }

  export type savings_schedulesCreateNestedOneWithoutSavings_circleInput = {
    create?: XOR<savings_schedulesCreateWithoutSavings_circleInput, savings_schedulesUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: savings_schedulesCreateOrConnectWithoutSavings_circleInput
    connect?: savings_schedulesWhereUniqueInput
  }

  export type contributionsCreateNestedOneWithoutSavings_circleInput = {
    create?: XOR<contributionsCreateWithoutSavings_circleInput, contributionsUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: contributionsCreateOrConnectWithoutSavings_circleInput
    connect?: contributionsWhereUniqueInput
  }

  export type payoutsCreateNestedOneWithoutSavings_circleInput = {
    create?: XOR<payoutsCreateWithoutSavings_circleInput, payoutsUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: payoutsCreateOrConnectWithoutSavings_circleInput
    connect?: payoutsWhereUniqueInput
  }

  export type circle_membersUncheckedCreateNestedOneWithoutSavings_circleInput = {
    create?: XOR<circle_membersCreateWithoutSavings_circleInput, circle_membersUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: circle_membersCreateOrConnectWithoutSavings_circleInput
    connect?: circle_membersWhereUniqueInput
  }

  export type circle_invitationsUncheckedCreateNestedOneWithoutSavings_circleInput = {
    create?: XOR<circle_invitationsCreateWithoutSavings_circleInput, circle_invitationsUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: circle_invitationsCreateOrConnectWithoutSavings_circleInput
    connect?: circle_invitationsWhereUniqueInput
  }

  export type savings_schedulesUncheckedCreateNestedOneWithoutSavings_circleInput = {
    create?: XOR<savings_schedulesCreateWithoutSavings_circleInput, savings_schedulesUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: savings_schedulesCreateOrConnectWithoutSavings_circleInput
    connect?: savings_schedulesWhereUniqueInput
  }

  export type contributionsUncheckedCreateNestedOneWithoutSavings_circleInput = {
    create?: XOR<contributionsCreateWithoutSavings_circleInput, contributionsUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: contributionsCreateOrConnectWithoutSavings_circleInput
    connect?: contributionsWhereUniqueInput
  }

  export type payoutsUncheckedCreateNestedOneWithoutSavings_circleInput = {
    create?: XOR<payoutsCreateWithoutSavings_circleInput, payoutsUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: payoutsCreateOrConnectWithoutSavings_circleInput
    connect?: payoutsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.Frequency
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutSavings_circlesNestedInput = {
    create?: XOR<usersCreateWithoutSavings_circlesInput, usersUncheckedCreateWithoutSavings_circlesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSavings_circlesInput
    upsert?: usersUpsertWithoutSavings_circlesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSavings_circlesInput, usersUpdateWithoutSavings_circlesInput>, usersUncheckedUpdateWithoutSavings_circlesInput>
  }

  export type circle_membersUpdateOneWithoutSavings_circleNestedInput = {
    create?: XOR<circle_membersCreateWithoutSavings_circleInput, circle_membersUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: circle_membersCreateOrConnectWithoutSavings_circleInput
    upsert?: circle_membersUpsertWithoutSavings_circleInput
    disconnect?: circle_membersWhereInput | boolean
    delete?: circle_membersWhereInput | boolean
    connect?: circle_membersWhereUniqueInput
    update?: XOR<XOR<circle_membersUpdateToOneWithWhereWithoutSavings_circleInput, circle_membersUpdateWithoutSavings_circleInput>, circle_membersUncheckedUpdateWithoutSavings_circleInput>
  }

  export type circle_invitationsUpdateOneWithoutSavings_circleNestedInput = {
    create?: XOR<circle_invitationsCreateWithoutSavings_circleInput, circle_invitationsUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: circle_invitationsCreateOrConnectWithoutSavings_circleInput
    upsert?: circle_invitationsUpsertWithoutSavings_circleInput
    disconnect?: circle_invitationsWhereInput | boolean
    delete?: circle_invitationsWhereInput | boolean
    connect?: circle_invitationsWhereUniqueInput
    update?: XOR<XOR<circle_invitationsUpdateToOneWithWhereWithoutSavings_circleInput, circle_invitationsUpdateWithoutSavings_circleInput>, circle_invitationsUncheckedUpdateWithoutSavings_circleInput>
  }

  export type savings_schedulesUpdateOneWithoutSavings_circleNestedInput = {
    create?: XOR<savings_schedulesCreateWithoutSavings_circleInput, savings_schedulesUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: savings_schedulesCreateOrConnectWithoutSavings_circleInput
    upsert?: savings_schedulesUpsertWithoutSavings_circleInput
    disconnect?: savings_schedulesWhereInput | boolean
    delete?: savings_schedulesWhereInput | boolean
    connect?: savings_schedulesWhereUniqueInput
    update?: XOR<XOR<savings_schedulesUpdateToOneWithWhereWithoutSavings_circleInput, savings_schedulesUpdateWithoutSavings_circleInput>, savings_schedulesUncheckedUpdateWithoutSavings_circleInput>
  }

  export type contributionsUpdateOneWithoutSavings_circleNestedInput = {
    create?: XOR<contributionsCreateWithoutSavings_circleInput, contributionsUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: contributionsCreateOrConnectWithoutSavings_circleInput
    upsert?: contributionsUpsertWithoutSavings_circleInput
    disconnect?: contributionsWhereInput | boolean
    delete?: contributionsWhereInput | boolean
    connect?: contributionsWhereUniqueInput
    update?: XOR<XOR<contributionsUpdateToOneWithWhereWithoutSavings_circleInput, contributionsUpdateWithoutSavings_circleInput>, contributionsUncheckedUpdateWithoutSavings_circleInput>
  }

  export type payoutsUpdateOneWithoutSavings_circleNestedInput = {
    create?: XOR<payoutsCreateWithoutSavings_circleInput, payoutsUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: payoutsCreateOrConnectWithoutSavings_circleInput
    upsert?: payoutsUpsertWithoutSavings_circleInput
    disconnect?: payoutsWhereInput | boolean
    delete?: payoutsWhereInput | boolean
    connect?: payoutsWhereUniqueInput
    update?: XOR<XOR<payoutsUpdateToOneWithWhereWithoutSavings_circleInput, payoutsUpdateWithoutSavings_circleInput>, payoutsUncheckedUpdateWithoutSavings_circleInput>
  }

  export type circle_membersUncheckedUpdateOneWithoutSavings_circleNestedInput = {
    create?: XOR<circle_membersCreateWithoutSavings_circleInput, circle_membersUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: circle_membersCreateOrConnectWithoutSavings_circleInput
    upsert?: circle_membersUpsertWithoutSavings_circleInput
    disconnect?: circle_membersWhereInput | boolean
    delete?: circle_membersWhereInput | boolean
    connect?: circle_membersWhereUniqueInput
    update?: XOR<XOR<circle_membersUpdateToOneWithWhereWithoutSavings_circleInput, circle_membersUpdateWithoutSavings_circleInput>, circle_membersUncheckedUpdateWithoutSavings_circleInput>
  }

  export type circle_invitationsUncheckedUpdateOneWithoutSavings_circleNestedInput = {
    create?: XOR<circle_invitationsCreateWithoutSavings_circleInput, circle_invitationsUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: circle_invitationsCreateOrConnectWithoutSavings_circleInput
    upsert?: circle_invitationsUpsertWithoutSavings_circleInput
    disconnect?: circle_invitationsWhereInput | boolean
    delete?: circle_invitationsWhereInput | boolean
    connect?: circle_invitationsWhereUniqueInput
    update?: XOR<XOR<circle_invitationsUpdateToOneWithWhereWithoutSavings_circleInput, circle_invitationsUpdateWithoutSavings_circleInput>, circle_invitationsUncheckedUpdateWithoutSavings_circleInput>
  }

  export type savings_schedulesUncheckedUpdateOneWithoutSavings_circleNestedInput = {
    create?: XOR<savings_schedulesCreateWithoutSavings_circleInput, savings_schedulesUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: savings_schedulesCreateOrConnectWithoutSavings_circleInput
    upsert?: savings_schedulesUpsertWithoutSavings_circleInput
    disconnect?: savings_schedulesWhereInput | boolean
    delete?: savings_schedulesWhereInput | boolean
    connect?: savings_schedulesWhereUniqueInput
    update?: XOR<XOR<savings_schedulesUpdateToOneWithWhereWithoutSavings_circleInput, savings_schedulesUpdateWithoutSavings_circleInput>, savings_schedulesUncheckedUpdateWithoutSavings_circleInput>
  }

  export type contributionsUncheckedUpdateOneWithoutSavings_circleNestedInput = {
    create?: XOR<contributionsCreateWithoutSavings_circleInput, contributionsUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: contributionsCreateOrConnectWithoutSavings_circleInput
    upsert?: contributionsUpsertWithoutSavings_circleInput
    disconnect?: contributionsWhereInput | boolean
    delete?: contributionsWhereInput | boolean
    connect?: contributionsWhereUniqueInput
    update?: XOR<XOR<contributionsUpdateToOneWithWhereWithoutSavings_circleInput, contributionsUpdateWithoutSavings_circleInput>, contributionsUncheckedUpdateWithoutSavings_circleInput>
  }

  export type payoutsUncheckedUpdateOneWithoutSavings_circleNestedInput = {
    create?: XOR<payoutsCreateWithoutSavings_circleInput, payoutsUncheckedCreateWithoutSavings_circleInput>
    connectOrCreate?: payoutsCreateOrConnectWithoutSavings_circleInput
    upsert?: payoutsUpsertWithoutSavings_circleInput
    disconnect?: payoutsWhereInput | boolean
    delete?: payoutsWhereInput | boolean
    connect?: payoutsWhereUniqueInput
    update?: XOR<XOR<payoutsUpdateToOneWithWhereWithoutSavings_circleInput, payoutsUpdateWithoutSavings_circleInput>, payoutsUncheckedUpdateWithoutSavings_circleInput>
  }

  export type savings_circlesCreateNestedOneWithoutCircle_membersInput = {
    create?: XOR<savings_circlesCreateWithoutCircle_membersInput, savings_circlesUncheckedCreateWithoutCircle_membersInput>
    connectOrCreate?: savings_circlesCreateOrConnectWithoutCircle_membersInput
    connect?: savings_circlesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCircle_membersInput = {
    create?: XOR<usersCreateWithoutCircle_membersInput, usersUncheckedCreateWithoutCircle_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCircle_membersInput
    connect?: usersWhereUniqueInput
  }

  export type payoutsCreateNestedOneWithoutCircle_memberInput = {
    create?: XOR<payoutsCreateWithoutCircle_memberInput, payoutsUncheckedCreateWithoutCircle_memberInput>
    connectOrCreate?: payoutsCreateOrConnectWithoutCircle_memberInput
    connect?: payoutsWhereUniqueInput
  }

  export type payoutsUncheckedCreateNestedOneWithoutCircle_memberInput = {
    create?: XOR<payoutsCreateWithoutCircle_memberInput, payoutsUncheckedCreateWithoutCircle_memberInput>
    connectOrCreate?: payoutsCreateOrConnectWithoutCircle_memberInput
    connect?: payoutsWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumCircle_StatusFieldUpdateOperationsInput = {
    set?: $Enums.Circle_Status
  }

  export type savings_circlesUpdateOneRequiredWithoutCircle_membersNestedInput = {
    create?: XOR<savings_circlesCreateWithoutCircle_membersInput, savings_circlesUncheckedCreateWithoutCircle_membersInput>
    connectOrCreate?: savings_circlesCreateOrConnectWithoutCircle_membersInput
    upsert?: savings_circlesUpsertWithoutCircle_membersInput
    connect?: savings_circlesWhereUniqueInput
    update?: XOR<XOR<savings_circlesUpdateToOneWithWhereWithoutCircle_membersInput, savings_circlesUpdateWithoutCircle_membersInput>, savings_circlesUncheckedUpdateWithoutCircle_membersInput>
  }

  export type usersUpdateOneRequiredWithoutCircle_membersNestedInput = {
    create?: XOR<usersCreateWithoutCircle_membersInput, usersUncheckedCreateWithoutCircle_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCircle_membersInput
    upsert?: usersUpsertWithoutCircle_membersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCircle_membersInput, usersUpdateWithoutCircle_membersInput>, usersUncheckedUpdateWithoutCircle_membersInput>
  }

  export type payoutsUpdateOneWithoutCircle_memberNestedInput = {
    create?: XOR<payoutsCreateWithoutCircle_memberInput, payoutsUncheckedCreateWithoutCircle_memberInput>
    connectOrCreate?: payoutsCreateOrConnectWithoutCircle_memberInput
    upsert?: payoutsUpsertWithoutCircle_memberInput
    disconnect?: payoutsWhereInput | boolean
    delete?: payoutsWhereInput | boolean
    connect?: payoutsWhereUniqueInput
    update?: XOR<XOR<payoutsUpdateToOneWithWhereWithoutCircle_memberInput, payoutsUpdateWithoutCircle_memberInput>, payoutsUncheckedUpdateWithoutCircle_memberInput>
  }

  export type payoutsUncheckedUpdateOneWithoutCircle_memberNestedInput = {
    create?: XOR<payoutsCreateWithoutCircle_memberInput, payoutsUncheckedCreateWithoutCircle_memberInput>
    connectOrCreate?: payoutsCreateOrConnectWithoutCircle_memberInput
    upsert?: payoutsUpsertWithoutCircle_memberInput
    disconnect?: payoutsWhereInput | boolean
    delete?: payoutsWhereInput | boolean
    connect?: payoutsWhereUniqueInput
    update?: XOR<XOR<payoutsUpdateToOneWithWhereWithoutCircle_memberInput, payoutsUpdateWithoutCircle_memberInput>, payoutsUncheckedUpdateWithoutCircle_memberInput>
  }

  export type savings_circlesCreateNestedOneWithoutCircle_invitationsInput = {
    create?: XOR<savings_circlesCreateWithoutCircle_invitationsInput, savings_circlesUncheckedCreateWithoutCircle_invitationsInput>
    connectOrCreate?: savings_circlesCreateOrConnectWithoutCircle_invitationsInput
    connect?: savings_circlesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCircle_invitationsInput = {
    create?: XOR<usersCreateWithoutCircle_invitationsInput, usersUncheckedCreateWithoutCircle_invitationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCircle_invitationsInput
    connect?: usersWhereUniqueInput
  }

  export type savings_circlesUpdateOneRequiredWithoutCircle_invitationsNestedInput = {
    create?: XOR<savings_circlesCreateWithoutCircle_invitationsInput, savings_circlesUncheckedCreateWithoutCircle_invitationsInput>
    connectOrCreate?: savings_circlesCreateOrConnectWithoutCircle_invitationsInput
    upsert?: savings_circlesUpsertWithoutCircle_invitationsInput
    connect?: savings_circlesWhereUniqueInput
    update?: XOR<XOR<savings_circlesUpdateToOneWithWhereWithoutCircle_invitationsInput, savings_circlesUpdateWithoutCircle_invitationsInput>, savings_circlesUncheckedUpdateWithoutCircle_invitationsInput>
  }

  export type usersUpdateOneRequiredWithoutCircle_invitationsNestedInput = {
    create?: XOR<usersCreateWithoutCircle_invitationsInput, usersUncheckedCreateWithoutCircle_invitationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCircle_invitationsInput
    upsert?: usersUpsertWithoutCircle_invitationsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCircle_invitationsInput, usersUpdateWithoutCircle_invitationsInput>, usersUncheckedUpdateWithoutCircle_invitationsInput>
  }

  export type savings_circlesCreateNestedOneWithoutSavings_schedulesInput = {
    create?: XOR<savings_circlesCreateWithoutSavings_schedulesInput, savings_circlesUncheckedCreateWithoutSavings_schedulesInput>
    connectOrCreate?: savings_circlesCreateOrConnectWithoutSavings_schedulesInput
    connect?: savings_circlesWhereUniqueInput
  }

  export type savings_circlesUpdateOneRequiredWithoutSavings_schedulesNestedInput = {
    create?: XOR<savings_circlesCreateWithoutSavings_schedulesInput, savings_circlesUncheckedCreateWithoutSavings_schedulesInput>
    connectOrCreate?: savings_circlesCreateOrConnectWithoutSavings_schedulesInput
    upsert?: savings_circlesUpsertWithoutSavings_schedulesInput
    connect?: savings_circlesWhereUniqueInput
    update?: XOR<XOR<savings_circlesUpdateToOneWithWhereWithoutSavings_schedulesInput, savings_circlesUpdateWithoutSavings_schedulesInput>, savings_circlesUncheckedUpdateWithoutSavings_schedulesInput>
  }

  export type savings_circlesCreateNestedOneWithoutContributionsInput = {
    create?: XOR<savings_circlesCreateWithoutContributionsInput, savings_circlesUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: savings_circlesCreateOrConnectWithoutContributionsInput
    connect?: savings_circlesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutContributionsInput = {
    create?: XOR<usersCreateWithoutContributionsInput, usersUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutContributionsInput
    connect?: usersWhereUniqueInput
  }

  export type EnumContribution_statusFieldUpdateOperationsInput = {
    set?: $Enums.Contribution_status
  }

  export type savings_circlesUpdateOneRequiredWithoutContributionsNestedInput = {
    create?: XOR<savings_circlesCreateWithoutContributionsInput, savings_circlesUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: savings_circlesCreateOrConnectWithoutContributionsInput
    upsert?: savings_circlesUpsertWithoutContributionsInput
    connect?: savings_circlesWhereUniqueInput
    update?: XOR<XOR<savings_circlesUpdateToOneWithWhereWithoutContributionsInput, savings_circlesUpdateWithoutContributionsInput>, savings_circlesUncheckedUpdateWithoutContributionsInput>
  }

  export type usersUpdateOneRequiredWithoutContributionsNestedInput = {
    create?: XOR<usersCreateWithoutContributionsInput, usersUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutContributionsInput
    upsert?: usersUpsertWithoutContributionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutContributionsInput, usersUpdateWithoutContributionsInput>, usersUncheckedUpdateWithoutContributionsInput>
  }

  export type savings_circlesCreateNestedOneWithoutPayoutsInput = {
    create?: XOR<savings_circlesCreateWithoutPayoutsInput, savings_circlesUncheckedCreateWithoutPayoutsInput>
    connectOrCreate?: savings_circlesCreateOrConnectWithoutPayoutsInput
    connect?: savings_circlesWhereUniqueInput
  }

  export type circle_membersCreateNestedOneWithoutPayoutsInput = {
    create?: XOR<circle_membersCreateWithoutPayoutsInput, circle_membersUncheckedCreateWithoutPayoutsInput>
    connectOrCreate?: circle_membersCreateOrConnectWithoutPayoutsInput
    connect?: circle_membersWhereUniqueInput
  }

  export type savings_circlesUpdateOneRequiredWithoutPayoutsNestedInput = {
    create?: XOR<savings_circlesCreateWithoutPayoutsInput, savings_circlesUncheckedCreateWithoutPayoutsInput>
    connectOrCreate?: savings_circlesCreateOrConnectWithoutPayoutsInput
    upsert?: savings_circlesUpsertWithoutPayoutsInput
    connect?: savings_circlesWhereUniqueInput
    update?: XOR<XOR<savings_circlesUpdateToOneWithWhereWithoutPayoutsInput, savings_circlesUpdateWithoutPayoutsInput>, savings_circlesUncheckedUpdateWithoutPayoutsInput>
  }

  export type circle_membersUpdateOneRequiredWithoutPayoutsNestedInput = {
    create?: XOR<circle_membersCreateWithoutPayoutsInput, circle_membersUncheckedCreateWithoutPayoutsInput>
    connectOrCreate?: circle_membersCreateOrConnectWithoutPayoutsInput
    upsert?: circle_membersUpsertWithoutPayoutsInput
    connect?: circle_membersWhereUniqueInput
    update?: XOR<XOR<circle_membersUpdateToOneWithWhereWithoutPayoutsInput, circle_membersUpdateWithoutPayoutsInput>, circle_membersUncheckedUpdateWithoutPayoutsInput>
  }

  export type usersCreateNestedOneWithoutPayment_transactionsInput = {
    create?: XOR<usersCreateWithoutPayment_transactionsInput, usersUncheckedCreateWithoutPayment_transactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayment_transactionsInput
    connect?: usersWhereUniqueInput
  }

  export type payment_status_historyCreateNestedOneWithoutPayment_transactionsInput = {
    create?: XOR<payment_status_historyCreateWithoutPayment_transactionsInput, payment_status_historyUncheckedCreateWithoutPayment_transactionsInput>
    connectOrCreate?: payment_status_historyCreateOrConnectWithoutPayment_transactionsInput
    connect?: payment_status_historyWhereUniqueInput
  }

  export type payment_status_historyUncheckedCreateNestedOneWithoutPayment_transactionsInput = {
    create?: XOR<payment_status_historyCreateWithoutPayment_transactionsInput, payment_status_historyUncheckedCreateWithoutPayment_transactionsInput>
    connectOrCreate?: payment_status_historyCreateOrConnectWithoutPayment_transactionsInput
    connect?: payment_status_historyWhereUniqueInput
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type EnumPayment_typeFieldUpdateOperationsInput = {
    set?: $Enums.Payment_type
  }

  export type EnumPayoutFieldUpdateOperationsInput = {
    set?: $Enums.Payout
  }

  export type usersUpdateOneRequiredWithoutPayment_transactionsNestedInput = {
    create?: XOR<usersCreateWithoutPayment_transactionsInput, usersUncheckedCreateWithoutPayment_transactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayment_transactionsInput
    upsert?: usersUpsertWithoutPayment_transactionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPayment_transactionsInput, usersUpdateWithoutPayment_transactionsInput>, usersUncheckedUpdateWithoutPayment_transactionsInput>
  }

  export type payment_status_historyUpdateOneWithoutPayment_transactionsNestedInput = {
    create?: XOR<payment_status_historyCreateWithoutPayment_transactionsInput, payment_status_historyUncheckedCreateWithoutPayment_transactionsInput>
    connectOrCreate?: payment_status_historyCreateOrConnectWithoutPayment_transactionsInput
    upsert?: payment_status_historyUpsertWithoutPayment_transactionsInput
    disconnect?: payment_status_historyWhereInput | boolean
    delete?: payment_status_historyWhereInput | boolean
    connect?: payment_status_historyWhereUniqueInput
    update?: XOR<XOR<payment_status_historyUpdateToOneWithWhereWithoutPayment_transactionsInput, payment_status_historyUpdateWithoutPayment_transactionsInput>, payment_status_historyUncheckedUpdateWithoutPayment_transactionsInput>
  }

  export type payment_status_historyUncheckedUpdateOneWithoutPayment_transactionsNestedInput = {
    create?: XOR<payment_status_historyCreateWithoutPayment_transactionsInput, payment_status_historyUncheckedCreateWithoutPayment_transactionsInput>
    connectOrCreate?: payment_status_historyCreateOrConnectWithoutPayment_transactionsInput
    upsert?: payment_status_historyUpsertWithoutPayment_transactionsInput
    disconnect?: payment_status_historyWhereInput | boolean
    delete?: payment_status_historyWhereInput | boolean
    connect?: payment_status_historyWhereUniqueInput
    update?: XOR<XOR<payment_status_historyUpdateToOneWithWhereWithoutPayment_transactionsInput, payment_status_historyUpdateWithoutPayment_transactionsInput>, payment_status_historyUncheckedUpdateWithoutPayment_transactionsInput>
  }

  export type payment_transactionsCreateNestedOneWithoutPayment_status_historyInput = {
    create?: XOR<payment_transactionsCreateWithoutPayment_status_historyInput, payment_transactionsUncheckedCreateWithoutPayment_status_historyInput>
    connectOrCreate?: payment_transactionsCreateOrConnectWithoutPayment_status_historyInput
    connect?: payment_transactionsWhereUniqueInput
  }

  export type payment_transactionsUpdateOneRequiredWithoutPayment_status_historyNestedInput = {
    create?: XOR<payment_transactionsCreateWithoutPayment_status_historyInput, payment_transactionsUncheckedCreateWithoutPayment_status_historyInput>
    connectOrCreate?: payment_transactionsCreateOrConnectWithoutPayment_status_historyInput
    upsert?: payment_transactionsUpsertWithoutPayment_status_historyInput
    connect?: payment_transactionsWhereUniqueInput
    update?: XOR<XOR<payment_transactionsUpdateToOneWithWhereWithoutPayment_status_historyInput, payment_transactionsUpdateWithoutPayment_status_historyInput>, payment_transactionsUncheckedUpdateWithoutPayment_status_historyInput>
  }

  export type usersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotificationsInput
    connect?: usersWhereUniqueInput
  }

  export type EnumNotificationsFieldUpdateOperationsInput = {
    set?: $Enums.Notifications
  }

  export type usersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotificationsInput
    upsert?: usersUpsertWithoutNotificationsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNotificationsInput, usersUpdateWithoutNotificationsInput>, usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type NullableEnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | EnumFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFrequencyFilter<$PrismaModel> | $Enums.Frequency
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | EnumFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.Frequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFrequencyFilter<$PrismaModel>
    _max?: NestedEnumFrequencyFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumCircle_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Circle_Status | EnumCircle_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Circle_Status[] | ListEnumCircle_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Circle_Status[] | ListEnumCircle_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCircle_StatusFilter<$PrismaModel> | $Enums.Circle_Status
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumCircle_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Circle_Status | EnumCircle_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Circle_Status[] | ListEnumCircle_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Circle_Status[] | ListEnumCircle_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCircle_StatusWithAggregatesFilter<$PrismaModel> | $Enums.Circle_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCircle_StatusFilter<$PrismaModel>
    _max?: NestedEnumCircle_StatusFilter<$PrismaModel>
  }

  export type NestedEnumContribution_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Contribution_status | EnumContribution_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Contribution_status[] | ListEnumContribution_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Contribution_status[] | ListEnumContribution_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumContribution_statusFilter<$PrismaModel> | $Enums.Contribution_status
  }

  export type NestedEnumContribution_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Contribution_status | EnumContribution_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Contribution_status[] | ListEnumContribution_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Contribution_status[] | ListEnumContribution_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumContribution_statusWithAggregatesFilter<$PrismaModel> | $Enums.Contribution_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContribution_statusFilter<$PrismaModel>
    _max?: NestedEnumContribution_statusFilter<$PrismaModel>
  }

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type NestedEnumPayment_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Payment_type | EnumPayment_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Payment_type[] | ListEnumPayment_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Payment_type[] | ListEnumPayment_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayment_typeFilter<$PrismaModel> | $Enums.Payment_type
  }

  export type NestedEnumPayoutFilter<$PrismaModel = never> = {
    equals?: $Enums.Payout | EnumPayoutFieldRefInput<$PrismaModel>
    in?: $Enums.Payout[] | ListEnumPayoutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Payout[] | ListEnumPayoutFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutFilter<$PrismaModel> | $Enums.Payout
  }

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type NestedEnumPayment_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Payment_type | EnumPayment_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Payment_type[] | ListEnumPayment_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Payment_type[] | ListEnumPayment_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayment_typeWithAggregatesFilter<$PrismaModel> | $Enums.Payment_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayment_typeFilter<$PrismaModel>
    _max?: NestedEnumPayment_typeFilter<$PrismaModel>
  }

  export type NestedEnumPayoutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Payout | EnumPayoutFieldRefInput<$PrismaModel>
    in?: $Enums.Payout[] | ListEnumPayoutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Payout[] | ListEnumPayoutFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutWithAggregatesFilter<$PrismaModel> | $Enums.Payout
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayoutFilter<$PrismaModel>
    _max?: NestedEnumPayoutFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumNotificationsFilter<$PrismaModel = never> = {
    equals?: $Enums.Notifications | EnumNotificationsFieldRefInput<$PrismaModel>
    in?: $Enums.Notifications[] | ListEnumNotificationsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Notifications[] | ListEnumNotificationsFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationsFilter<$PrismaModel> | $Enums.Notifications
  }

  export type NestedEnumNotificationsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Notifications | EnumNotificationsFieldRefInput<$PrismaModel>
    in?: $Enums.Notifications[] | ListEnumNotificationsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Notifications[] | ListEnumNotificationsFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationsWithAggregatesFilter<$PrismaModel> | $Enums.Notifications
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationsFilter<$PrismaModel>
    _max?: NestedEnumNotificationsFilter<$PrismaModel>
  }

  export type NestedEnumStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableFilter<$PrismaModel> | $Enums.Status | null
  }

  export type NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type usersCreateWithoutWaitlistEntryInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    session?: sessionsCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesCreateNestedOneWithoutUsersInput
    circle_members?: circle_membersCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsCreateNestedOneWithoutUsersInput
    contributions?: contributionsCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsCreateNestedOneWithoutUsersInput
    notifications?: notificationsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWaitlistEntryInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    session?: sessionsUncheckedCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesUncheckedCreateNestedOneWithoutUsersInput
    circle_members?: circle_membersUncheckedCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsUncheckedCreateNestedOneWithoutUsersInput
    contributions?: contributionsUncheckedCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsUncheckedCreateNestedOneWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWaitlistEntryInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWaitlistEntryInput, usersUncheckedCreateWithoutWaitlistEntryInput>
  }

  export type usersUpsertWithoutWaitlistEntryInput = {
    update: XOR<usersUpdateWithoutWaitlistEntryInput, usersUncheckedUpdateWithoutWaitlistEntryInput>
    create: XOR<usersCreateWithoutWaitlistEntryInput, usersUncheckedCreateWithoutWaitlistEntryInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWaitlistEntryInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWaitlistEntryInput, usersUncheckedUpdateWithoutWaitlistEntryInput>
  }

  export type usersUpdateWithoutWaitlistEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: sessionsUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUpdateOneWithoutUsersNestedInput
    circle_members?: circle_membersUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWaitlistEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: sessionsUncheckedUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUncheckedUpdateOneWithoutUsersNestedInput
    circle_members?: circle_membersUncheckedUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUncheckedUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUncheckedUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUncheckedUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type waitlistEntryCreateWithoutUserInput = {
    id?: string
    email: string
    status?: $Enums.Status
    verification_token_hash?: string | null
    verification_expires_at: Date | string
    verified_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type waitlistEntryUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    status?: $Enums.Status
    verification_token_hash?: string | null
    verification_expires_at: Date | string
    verified_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type waitlistEntryCreateOrConnectWithoutUserInput = {
    where: waitlistEntryWhereUniqueInput
    create: XOR<waitlistEntryCreateWithoutUserInput, waitlistEntryUncheckedCreateWithoutUserInput>
  }

  export type sessionsCreateWithoutUserInput = {
    id?: string
    token_hash: string
    expires_at?: Date | string | null
    created_at?: Date | string
    revoked_at?: Date | string | null
  }

  export type sessionsUncheckedCreateWithoutUserInput = {
    id?: string
    token_hash: string
    expires_at?: Date | string | null
    created_at?: Date | string
    revoked_at?: Date | string | null
  }

  export type sessionsCreateOrConnectWithoutUserInput = {
    where: sessionsWhereUniqueInput
    create: XOR<sessionsCreateWithoutUserInput, sessionsUncheckedCreateWithoutUserInput>
  }

  export type savings_circlesCreateWithoutUsersInput = {
    id?: string
    name: string
    decription: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    circle_members?: circle_membersCreateNestedOneWithoutSavings_circleInput
    circle_invitations?: circle_invitationsCreateNestedOneWithoutSavings_circleInput
    savings_schedules?: savings_schedulesCreateNestedOneWithoutSavings_circleInput
    contributions?: contributionsCreateNestedOneWithoutSavings_circleInput
    payouts?: payoutsCreateNestedOneWithoutSavings_circleInput
  }

  export type savings_circlesUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    decription: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    circle_members?: circle_membersUncheckedCreateNestedOneWithoutSavings_circleInput
    circle_invitations?: circle_invitationsUncheckedCreateNestedOneWithoutSavings_circleInput
    savings_schedules?: savings_schedulesUncheckedCreateNestedOneWithoutSavings_circleInput
    contributions?: contributionsUncheckedCreateNestedOneWithoutSavings_circleInput
    payouts?: payoutsUncheckedCreateNestedOneWithoutSavings_circleInput
  }

  export type savings_circlesCreateOrConnectWithoutUsersInput = {
    where: savings_circlesWhereUniqueInput
    create: XOR<savings_circlesCreateWithoutUsersInput, savings_circlesUncheckedCreateWithoutUsersInput>
  }

  export type circle_membersCreateWithoutUsersInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.Circle_Status
    joined_at: Date | string
    left_at?: Date | string | null
    created_at: Date | string
    updated_at?: Date | string
    savings_circle: savings_circlesCreateNestedOneWithoutCircle_membersInput
    payouts?: payoutsCreateNestedOneWithoutCircle_memberInput
  }

  export type circle_membersUncheckedCreateWithoutUsersInput = {
    id?: string
    circle_id: string
    role: $Enums.Role
    status: $Enums.Circle_Status
    joined_at: Date | string
    left_at?: Date | string | null
    created_at: Date | string
    updated_at?: Date | string
    payouts?: payoutsUncheckedCreateNestedOneWithoutCircle_memberInput
  }

  export type circle_membersCreateOrConnectWithoutUsersInput = {
    where: circle_membersWhereUniqueInput
    create: XOR<circle_membersCreateWithoutUsersInput, circle_membersUncheckedCreateWithoutUsersInput>
  }

  export type circle_invitationsCreateWithoutUsersInput = {
    id?: string
    email: string
    token_hash: string
    status: $Enums.Status
    expires_at: Date | string
    accepted_at?: Date | string | null
    created_at: Date | string
    savings_circle: savings_circlesCreateNestedOneWithoutCircle_invitationsInput
  }

  export type circle_invitationsUncheckedCreateWithoutUsersInput = {
    id?: string
    circle_id: string
    email: string
    token_hash: string
    status: $Enums.Status
    expires_at: Date | string
    accepted_at?: Date | string | null
    created_at: Date | string
  }

  export type circle_invitationsCreateOrConnectWithoutUsersInput = {
    where: circle_invitationsWhereUniqueInput
    create: XOR<circle_invitationsCreateWithoutUsersInput, circle_invitationsUncheckedCreateWithoutUsersInput>
  }

  export type contributionsCreateWithoutUsersInput = {
    id?: string
    cycle_number: number
    amount: Decimal | DecimalJsLike | number | string
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.Contribution_status
    transaction_id?: string | null
    create_at?: Date | string
    updated_at?: Date | string
    savings_circle: savings_circlesCreateNestedOneWithoutContributionsInput
  }

  export type contributionsUncheckedCreateWithoutUsersInput = {
    id?: string
    circle_id: string
    cycle_number: number
    amount: Decimal | DecimalJsLike | number | string
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.Contribution_status
    transaction_id?: string | null
    create_at?: Date | string
    updated_at?: Date | string
  }

  export type contributionsCreateOrConnectWithoutUsersInput = {
    where: contributionsWhereUniqueInput
    create: XOR<contributionsCreateWithoutUsersInput, contributionsUncheckedCreateWithoutUsersInput>
  }

  export type payment_transactionsCreateWithoutUsersInput = {
    id?: string
    refernce: string
    idempotency_key: string
    provider: $Enums.Provider
    provider_reference?: string | null
    type: $Enums.Payment_type
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status: $Enums.Payout
    metadata: JsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at?: Date | string
    payment_status_history?: payment_status_historyCreateNestedOneWithoutPayment_transactionsInput
  }

  export type payment_transactionsUncheckedCreateWithoutUsersInput = {
    id?: string
    refernce: string
    idempotency_key: string
    provider: $Enums.Provider
    provider_reference?: string | null
    type: $Enums.Payment_type
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status: $Enums.Payout
    metadata: JsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at?: Date | string
    payment_status_history?: payment_status_historyUncheckedCreateNestedOneWithoutPayment_transactionsInput
  }

  export type payment_transactionsCreateOrConnectWithoutUsersInput = {
    where: payment_transactionsWhereUniqueInput
    create: XOR<payment_transactionsCreateWithoutUsersInput, payment_transactionsUncheckedCreateWithoutUsersInput>
  }

  export type notificationsCreateWithoutUsersInput = {
    id?: string
    type: $Enums.Notifications
    title: string
    message: string
    data: JsonNullValueInput | InputJsonValue
    read_at: Date | string
    created_at: Date | string
  }

  export type notificationsUncheckedCreateWithoutUsersInput = {
    id?: string
    type: $Enums.Notifications
    title: string
    message: string
    data: JsonNullValueInput | InputJsonValue
    read_at: Date | string
    created_at: Date | string
  }

  export type notificationsCreateOrConnectWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
  }

  export type waitlistEntryUpsertWithoutUserInput = {
    update: XOR<waitlistEntryUpdateWithoutUserInput, waitlistEntryUncheckedUpdateWithoutUserInput>
    create: XOR<waitlistEntryCreateWithoutUserInput, waitlistEntryUncheckedCreateWithoutUserInput>
    where?: waitlistEntryWhereInput
  }

  export type waitlistEntryUpdateToOneWithWhereWithoutUserInput = {
    where?: waitlistEntryWhereInput
    data: XOR<waitlistEntryUpdateWithoutUserInput, waitlistEntryUncheckedUpdateWithoutUserInput>
  }

  export type waitlistEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    verification_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waitlistEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    verification_token_hash?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsUpsertWithoutUserInput = {
    update: XOR<sessionsUpdateWithoutUserInput, sessionsUncheckedUpdateWithoutUserInput>
    create: XOR<sessionsCreateWithoutUserInput, sessionsUncheckedCreateWithoutUserInput>
    where?: sessionsWhereInput
  }

  export type sessionsUpdateToOneWithWhereWithoutUserInput = {
    where?: sessionsWhereInput
    data: XOR<sessionsUpdateWithoutUserInput, sessionsUncheckedUpdateWithoutUserInput>
  }

  export type sessionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type savings_circlesUpsertWithoutUsersInput = {
    update: XOR<savings_circlesUpdateWithoutUsersInput, savings_circlesUncheckedUpdateWithoutUsersInput>
    create: XOR<savings_circlesCreateWithoutUsersInput, savings_circlesUncheckedCreateWithoutUsersInput>
    where?: savings_circlesWhereInput
  }

  export type savings_circlesUpdateToOneWithWhereWithoutUsersInput = {
    where?: savings_circlesWhereInput
    data: XOR<savings_circlesUpdateWithoutUsersInput, savings_circlesUncheckedUpdateWithoutUsersInput>
  }

  export type savings_circlesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    circle_members?: circle_membersUpdateOneWithoutSavings_circleNestedInput
    circle_invitations?: circle_invitationsUpdateOneWithoutSavings_circleNestedInput
    savings_schedules?: savings_schedulesUpdateOneWithoutSavings_circleNestedInput
    contributions?: contributionsUpdateOneWithoutSavings_circleNestedInput
    payouts?: payoutsUpdateOneWithoutSavings_circleNestedInput
  }

  export type savings_circlesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    circle_members?: circle_membersUncheckedUpdateOneWithoutSavings_circleNestedInput
    circle_invitations?: circle_invitationsUncheckedUpdateOneWithoutSavings_circleNestedInput
    savings_schedules?: savings_schedulesUncheckedUpdateOneWithoutSavings_circleNestedInput
    contributions?: contributionsUncheckedUpdateOneWithoutSavings_circleNestedInput
    payouts?: payoutsUncheckedUpdateOneWithoutSavings_circleNestedInput
  }

  export type circle_membersUpsertWithoutUsersInput = {
    update: XOR<circle_membersUpdateWithoutUsersInput, circle_membersUncheckedUpdateWithoutUsersInput>
    create: XOR<circle_membersCreateWithoutUsersInput, circle_membersUncheckedCreateWithoutUsersInput>
    where?: circle_membersWhereInput
  }

  export type circle_membersUpdateToOneWithWhereWithoutUsersInput = {
    where?: circle_membersWhereInput
    data: XOR<circle_membersUpdateWithoutUsersInput, circle_membersUncheckedUpdateWithoutUsersInput>
  }

  export type circle_membersUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumCircle_StatusFieldUpdateOperationsInput | $Enums.Circle_Status
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings_circle?: savings_circlesUpdateOneRequiredWithoutCircle_membersNestedInput
    payouts?: payoutsUpdateOneWithoutCircle_memberNestedInput
  }

  export type circle_membersUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumCircle_StatusFieldUpdateOperationsInput | $Enums.Circle_Status
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payouts?: payoutsUncheckedUpdateOneWithoutCircle_memberNestedInput
  }

  export type circle_invitationsUpsertWithoutUsersInput = {
    update: XOR<circle_invitationsUpdateWithoutUsersInput, circle_invitationsUncheckedUpdateWithoutUsersInput>
    create: XOR<circle_invitationsCreateWithoutUsersInput, circle_invitationsUncheckedCreateWithoutUsersInput>
    where?: circle_invitationsWhereInput
  }

  export type circle_invitationsUpdateToOneWithWhereWithoutUsersInput = {
    where?: circle_invitationsWhereInput
    data: XOR<circle_invitationsUpdateWithoutUsersInput, circle_invitationsUncheckedUpdateWithoutUsersInput>
  }

  export type circle_invitationsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings_circle?: savings_circlesUpdateOneRequiredWithoutCircle_invitationsNestedInput
  }

  export type circle_invitationsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contributionsUpsertWithoutUsersInput = {
    update: XOR<contributionsUpdateWithoutUsersInput, contributionsUncheckedUpdateWithoutUsersInput>
    create: XOR<contributionsCreateWithoutUsersInput, contributionsUncheckedCreateWithoutUsersInput>
    where?: contributionsWhereInput
  }

  export type contributionsUpdateToOneWithWhereWithoutUsersInput = {
    where?: contributionsWhereInput
    data: XOR<contributionsUpdateWithoutUsersInput, contributionsUncheckedUpdateWithoutUsersInput>
  }

  export type contributionsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings_circle?: savings_circlesUpdateOneRequiredWithoutContributionsNestedInput
  }

  export type contributionsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_transactionsUpsertWithoutUsersInput = {
    update: XOR<payment_transactionsUpdateWithoutUsersInput, payment_transactionsUncheckedUpdateWithoutUsersInput>
    create: XOR<payment_transactionsCreateWithoutUsersInput, payment_transactionsUncheckedCreateWithoutUsersInput>
    where?: payment_transactionsWhereInput
  }

  export type payment_transactionsUpdateToOneWithWhereWithoutUsersInput = {
    where?: payment_transactionsWhereInput
    data: XOR<payment_transactionsUpdateWithoutUsersInput, payment_transactionsUncheckedUpdateWithoutUsersInput>
  }

  export type payment_transactionsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    refernce?: StringFieldUpdateOperationsInput | string
    idempotency_key?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    provider_reference?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayment_typeFieldUpdateOperationsInput | $Enums.Payment_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutFieldUpdateOperationsInput | $Enums.Payout
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status_history?: payment_status_historyUpdateOneWithoutPayment_transactionsNestedInput
  }

  export type payment_transactionsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    refernce?: StringFieldUpdateOperationsInput | string
    idempotency_key?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    provider_reference?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayment_typeFieldUpdateOperationsInput | $Enums.Payment_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutFieldUpdateOperationsInput | $Enums.Payout
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status_history?: payment_status_historyUncheckedUpdateOneWithoutPayment_transactionsNestedInput
  }

  export type notificationsUpsertWithoutUsersInput = {
    update: XOR<notificationsUpdateWithoutUsersInput, notificationsUncheckedUpdateWithoutUsersInput>
    create: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
    where?: notificationsWhereInput
  }

  export type notificationsUpdateToOneWithWhereWithoutUsersInput = {
    where?: notificationsWhereInput
    data: XOR<notificationsUpdateWithoutUsersInput, notificationsUncheckedUpdateWithoutUsersInput>
  }

  export type notificationsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationsFieldUpdateOperationsInput | $Enums.Notifications
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    read_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationsFieldUpdateOperationsInput | $Enums.Notifications
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    read_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateWithoutSessionInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesCreateNestedOneWithoutUsersInput
    circle_members?: circle_membersCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsCreateNestedOneWithoutUsersInput
    contributions?: contributionsCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsCreateNestedOneWithoutUsersInput
    notifications?: notificationsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSessionInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryUncheckedCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesUncheckedCreateNestedOneWithoutUsersInput
    circle_members?: circle_membersUncheckedCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsUncheckedCreateNestedOneWithoutUsersInput
    contributions?: contributionsUncheckedCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsUncheckedCreateNestedOneWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSessionInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSessionInput, usersUncheckedCreateWithoutSessionInput>
  }

  export type usersUpsertWithoutSessionInput = {
    update: XOR<usersUpdateWithoutSessionInput, usersUncheckedUpdateWithoutSessionInput>
    create: XOR<usersCreateWithoutSessionInput, usersUncheckedCreateWithoutSessionInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSessionInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSessionInput, usersUncheckedUpdateWithoutSessionInput>
  }

  export type usersUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUpdateOneWithoutUsersNestedInput
    circle_members?: circle_membersUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUncheckedUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUncheckedUpdateOneWithoutUsersNestedInput
    circle_members?: circle_membersUncheckedUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUncheckedUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUncheckedUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUncheckedUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateWithoutSavings_circlesInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryCreateNestedOneWithoutUserInput
    session?: sessionsCreateNestedOneWithoutUserInput
    circle_members?: circle_membersCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsCreateNestedOneWithoutUsersInput
    contributions?: contributionsCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsCreateNestedOneWithoutUsersInput
    notifications?: notificationsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSavings_circlesInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryUncheckedCreateNestedOneWithoutUserInput
    session?: sessionsUncheckedCreateNestedOneWithoutUserInput
    circle_members?: circle_membersUncheckedCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsUncheckedCreateNestedOneWithoutUsersInput
    contributions?: contributionsUncheckedCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsUncheckedCreateNestedOneWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSavings_circlesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSavings_circlesInput, usersUncheckedCreateWithoutSavings_circlesInput>
  }

  export type circle_membersCreateWithoutSavings_circleInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.Circle_Status
    joined_at: Date | string
    left_at?: Date | string | null
    created_at: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutCircle_membersInput
    payouts?: payoutsCreateNestedOneWithoutCircle_memberInput
  }

  export type circle_membersUncheckedCreateWithoutSavings_circleInput = {
    id?: string
    user_id: string
    role: $Enums.Role
    status: $Enums.Circle_Status
    joined_at: Date | string
    left_at?: Date | string | null
    created_at: Date | string
    updated_at?: Date | string
    payouts?: payoutsUncheckedCreateNestedOneWithoutCircle_memberInput
  }

  export type circle_membersCreateOrConnectWithoutSavings_circleInput = {
    where: circle_membersWhereUniqueInput
    create: XOR<circle_membersCreateWithoutSavings_circleInput, circle_membersUncheckedCreateWithoutSavings_circleInput>
  }

  export type circle_invitationsCreateWithoutSavings_circleInput = {
    id?: string
    email: string
    token_hash: string
    status: $Enums.Status
    expires_at: Date | string
    accepted_at?: Date | string | null
    created_at: Date | string
    users: usersCreateNestedOneWithoutCircle_invitationsInput
  }

  export type circle_invitationsUncheckedCreateWithoutSavings_circleInput = {
    id?: string
    invited_by: string
    email: string
    token_hash: string
    status: $Enums.Status
    expires_at: Date | string
    accepted_at?: Date | string | null
    created_at: Date | string
  }

  export type circle_invitationsCreateOrConnectWithoutSavings_circleInput = {
    where: circle_invitationsWhereUniqueInput
    create: XOR<circle_invitationsCreateWithoutSavings_circleInput, circle_invitationsUncheckedCreateWithoutSavings_circleInput>
  }

  export type savings_schedulesCreateWithoutSavings_circleInput = {
    id?: string
    frequency: $Enums.Frequency
    contribution_amount: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date?: Date | string | null
    total_cycles: number
    current_cycle: number
    created_at: Date | string
    updated_at?: Date | string
  }

  export type savings_schedulesUncheckedCreateWithoutSavings_circleInput = {
    id?: string
    frequency: $Enums.Frequency
    contribution_amount: Decimal | DecimalJsLike | number | string
    start_date: Date | string
    end_date?: Date | string | null
    total_cycles: number
    current_cycle: number
    created_at: Date | string
    updated_at?: Date | string
  }

  export type savings_schedulesCreateOrConnectWithoutSavings_circleInput = {
    where: savings_schedulesWhereUniqueInput
    create: XOR<savings_schedulesCreateWithoutSavings_circleInput, savings_schedulesUncheckedCreateWithoutSavings_circleInput>
  }

  export type contributionsCreateWithoutSavings_circleInput = {
    id?: string
    cycle_number: number
    amount: Decimal | DecimalJsLike | number | string
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.Contribution_status
    transaction_id?: string | null
    create_at?: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutContributionsInput
  }

  export type contributionsUncheckedCreateWithoutSavings_circleInput = {
    id?: string
    circle_member: string
    cycle_number: number
    amount: Decimal | DecimalJsLike | number | string
    due_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.Contribution_status
    transaction_id?: string | null
    create_at?: Date | string
    updated_at?: Date | string
  }

  export type contributionsCreateOrConnectWithoutSavings_circleInput = {
    where: contributionsWhereUniqueInput
    create: XOR<contributionsCreateWithoutSavings_circleInput, contributionsUncheckedCreateWithoutSavings_circleInput>
  }

  export type payoutsCreateWithoutSavings_circleInput = {
    id?: string
    cycle_number: number
    amount: Decimal | DecimalJsLike | number | string
    scheduled_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.Contribution_status
    transaction_id?: string | null
    create_at?: Date | string
    updated_at?: Date | string
    circle_member: circle_membersCreateNestedOneWithoutPayoutsInput
  }

  export type payoutsUncheckedCreateWithoutSavings_circleInput = {
    id?: string
    member_id: string
    cycle_number: number
    amount: Decimal | DecimalJsLike | number | string
    scheduled_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.Contribution_status
    transaction_id?: string | null
    create_at?: Date | string
    updated_at?: Date | string
  }

  export type payoutsCreateOrConnectWithoutSavings_circleInput = {
    where: payoutsWhereUniqueInput
    create: XOR<payoutsCreateWithoutSavings_circleInput, payoutsUncheckedCreateWithoutSavings_circleInput>
  }

  export type usersUpsertWithoutSavings_circlesInput = {
    update: XOR<usersUpdateWithoutSavings_circlesInput, usersUncheckedUpdateWithoutSavings_circlesInput>
    create: XOR<usersCreateWithoutSavings_circlesInput, usersUncheckedCreateWithoutSavings_circlesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSavings_circlesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSavings_circlesInput, usersUncheckedUpdateWithoutSavings_circlesInput>
  }

  export type usersUpdateWithoutSavings_circlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUpdateOneWithoutUserNestedInput
    session?: sessionsUpdateOneWithoutUserNestedInput
    circle_members?: circle_membersUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSavings_circlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUncheckedUpdateOneWithoutUserNestedInput
    session?: sessionsUncheckedUpdateOneWithoutUserNestedInput
    circle_members?: circle_membersUncheckedUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUncheckedUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUncheckedUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUncheckedUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type circle_membersUpsertWithoutSavings_circleInput = {
    update: XOR<circle_membersUpdateWithoutSavings_circleInput, circle_membersUncheckedUpdateWithoutSavings_circleInput>
    create: XOR<circle_membersCreateWithoutSavings_circleInput, circle_membersUncheckedCreateWithoutSavings_circleInput>
    where?: circle_membersWhereInput
  }

  export type circle_membersUpdateToOneWithWhereWithoutSavings_circleInput = {
    where?: circle_membersWhereInput
    data: XOR<circle_membersUpdateWithoutSavings_circleInput, circle_membersUncheckedUpdateWithoutSavings_circleInput>
  }

  export type circle_membersUpdateWithoutSavings_circleInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumCircle_StatusFieldUpdateOperationsInput | $Enums.Circle_Status
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutCircle_membersNestedInput
    payouts?: payoutsUpdateOneWithoutCircle_memberNestedInput
  }

  export type circle_membersUncheckedUpdateWithoutSavings_circleInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumCircle_StatusFieldUpdateOperationsInput | $Enums.Circle_Status
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payouts?: payoutsUncheckedUpdateOneWithoutCircle_memberNestedInput
  }

  export type circle_invitationsUpsertWithoutSavings_circleInput = {
    update: XOR<circle_invitationsUpdateWithoutSavings_circleInput, circle_invitationsUncheckedUpdateWithoutSavings_circleInput>
    create: XOR<circle_invitationsCreateWithoutSavings_circleInput, circle_invitationsUncheckedCreateWithoutSavings_circleInput>
    where?: circle_invitationsWhereInput
  }

  export type circle_invitationsUpdateToOneWithWhereWithoutSavings_circleInput = {
    where?: circle_invitationsWhereInput
    data: XOR<circle_invitationsUpdateWithoutSavings_circleInput, circle_invitationsUncheckedUpdateWithoutSavings_circleInput>
  }

  export type circle_invitationsUpdateWithoutSavings_circleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutCircle_invitationsNestedInput
  }

  export type circle_invitationsUncheckedUpdateWithoutSavings_circleInput = {
    id?: StringFieldUpdateOperationsInput | string
    invited_by?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savings_schedulesUpsertWithoutSavings_circleInput = {
    update: XOR<savings_schedulesUpdateWithoutSavings_circleInput, savings_schedulesUncheckedUpdateWithoutSavings_circleInput>
    create: XOR<savings_schedulesCreateWithoutSavings_circleInput, savings_schedulesUncheckedCreateWithoutSavings_circleInput>
    where?: savings_schedulesWhereInput
  }

  export type savings_schedulesUpdateToOneWithWhereWithoutSavings_circleInput = {
    where?: savings_schedulesWhereInput
    data: XOR<savings_schedulesUpdateWithoutSavings_circleInput, savings_schedulesUncheckedUpdateWithoutSavings_circleInput>
  }

  export type savings_schedulesUpdateWithoutSavings_circleInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cycles?: IntFieldUpdateOperationsInput | number
    current_cycle?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savings_schedulesUncheckedUpdateWithoutSavings_circleInput = {
    id?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cycles?: IntFieldUpdateOperationsInput | number
    current_cycle?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contributionsUpsertWithoutSavings_circleInput = {
    update: XOR<contributionsUpdateWithoutSavings_circleInput, contributionsUncheckedUpdateWithoutSavings_circleInput>
    create: XOR<contributionsCreateWithoutSavings_circleInput, contributionsUncheckedCreateWithoutSavings_circleInput>
    where?: contributionsWhereInput
  }

  export type contributionsUpdateToOneWithWhereWithoutSavings_circleInput = {
    where?: contributionsWhereInput
    data: XOR<contributionsUpdateWithoutSavings_circleInput, contributionsUncheckedUpdateWithoutSavings_circleInput>
  }

  export type contributionsUpdateWithoutSavings_circleInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutContributionsNestedInput
  }

  export type contributionsUncheckedUpdateWithoutSavings_circleInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_member?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payoutsUpsertWithoutSavings_circleInput = {
    update: XOR<payoutsUpdateWithoutSavings_circleInput, payoutsUncheckedUpdateWithoutSavings_circleInput>
    create: XOR<payoutsCreateWithoutSavings_circleInput, payoutsUncheckedCreateWithoutSavings_circleInput>
    where?: payoutsWhereInput
  }

  export type payoutsUpdateToOneWithWhereWithoutSavings_circleInput = {
    where?: payoutsWhereInput
    data: XOR<payoutsUpdateWithoutSavings_circleInput, payoutsUncheckedUpdateWithoutSavings_circleInput>
  }

  export type payoutsUpdateWithoutSavings_circleInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    circle_member?: circle_membersUpdateOneRequiredWithoutPayoutsNestedInput
  }

  export type payoutsUncheckedUpdateWithoutSavings_circleInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savings_circlesCreateWithoutCircle_membersInput = {
    id?: string
    name: string
    decription: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutSavings_circlesInput
    circle_invitations?: circle_invitationsCreateNestedOneWithoutSavings_circleInput
    savings_schedules?: savings_schedulesCreateNestedOneWithoutSavings_circleInput
    contributions?: contributionsCreateNestedOneWithoutSavings_circleInput
    payouts?: payoutsCreateNestedOneWithoutSavings_circleInput
  }

  export type savings_circlesUncheckedCreateWithoutCircle_membersInput = {
    id?: string
    name: string
    decription: string
    owner_id: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    circle_invitations?: circle_invitationsUncheckedCreateNestedOneWithoutSavings_circleInput
    savings_schedules?: savings_schedulesUncheckedCreateNestedOneWithoutSavings_circleInput
    contributions?: contributionsUncheckedCreateNestedOneWithoutSavings_circleInput
    payouts?: payoutsUncheckedCreateNestedOneWithoutSavings_circleInput
  }

  export type savings_circlesCreateOrConnectWithoutCircle_membersInput = {
    where: savings_circlesWhereUniqueInput
    create: XOR<savings_circlesCreateWithoutCircle_membersInput, savings_circlesUncheckedCreateWithoutCircle_membersInput>
  }

  export type usersCreateWithoutCircle_membersInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryCreateNestedOneWithoutUserInput
    session?: sessionsCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsCreateNestedOneWithoutUsersInput
    contributions?: contributionsCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsCreateNestedOneWithoutUsersInput
    notifications?: notificationsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCircle_membersInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryUncheckedCreateNestedOneWithoutUserInput
    session?: sessionsUncheckedCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesUncheckedCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsUncheckedCreateNestedOneWithoutUsersInput
    contributions?: contributionsUncheckedCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsUncheckedCreateNestedOneWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCircle_membersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCircle_membersInput, usersUncheckedCreateWithoutCircle_membersInput>
  }

  export type payoutsCreateWithoutCircle_memberInput = {
    id?: string
    cycle_number: number
    amount: Decimal | DecimalJsLike | number | string
    scheduled_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.Contribution_status
    transaction_id?: string | null
    create_at?: Date | string
    updated_at?: Date | string
    savings_circle: savings_circlesCreateNestedOneWithoutPayoutsInput
  }

  export type payoutsUncheckedCreateWithoutCircle_memberInput = {
    id?: string
    circle_id: string
    cycle_number: number
    amount: Decimal | DecimalJsLike | number | string
    scheduled_date: Date | string
    paid_at?: Date | string | null
    status: $Enums.Contribution_status
    transaction_id?: string | null
    create_at?: Date | string
    updated_at?: Date | string
  }

  export type payoutsCreateOrConnectWithoutCircle_memberInput = {
    where: payoutsWhereUniqueInput
    create: XOR<payoutsCreateWithoutCircle_memberInput, payoutsUncheckedCreateWithoutCircle_memberInput>
  }

  export type savings_circlesUpsertWithoutCircle_membersInput = {
    update: XOR<savings_circlesUpdateWithoutCircle_membersInput, savings_circlesUncheckedUpdateWithoutCircle_membersInput>
    create: XOR<savings_circlesCreateWithoutCircle_membersInput, savings_circlesUncheckedCreateWithoutCircle_membersInput>
    where?: savings_circlesWhereInput
  }

  export type savings_circlesUpdateToOneWithWhereWithoutCircle_membersInput = {
    where?: savings_circlesWhereInput
    data: XOR<savings_circlesUpdateWithoutCircle_membersInput, savings_circlesUncheckedUpdateWithoutCircle_membersInput>
  }

  export type savings_circlesUpdateWithoutCircle_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutSavings_circlesNestedInput
    circle_invitations?: circle_invitationsUpdateOneWithoutSavings_circleNestedInput
    savings_schedules?: savings_schedulesUpdateOneWithoutSavings_circleNestedInput
    contributions?: contributionsUpdateOneWithoutSavings_circleNestedInput
    payouts?: payoutsUpdateOneWithoutSavings_circleNestedInput
  }

  export type savings_circlesUncheckedUpdateWithoutCircle_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    circle_invitations?: circle_invitationsUncheckedUpdateOneWithoutSavings_circleNestedInput
    savings_schedules?: savings_schedulesUncheckedUpdateOneWithoutSavings_circleNestedInput
    contributions?: contributionsUncheckedUpdateOneWithoutSavings_circleNestedInput
    payouts?: payoutsUncheckedUpdateOneWithoutSavings_circleNestedInput
  }

  export type usersUpsertWithoutCircle_membersInput = {
    update: XOR<usersUpdateWithoutCircle_membersInput, usersUncheckedUpdateWithoutCircle_membersInput>
    create: XOR<usersCreateWithoutCircle_membersInput, usersUncheckedCreateWithoutCircle_membersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCircle_membersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCircle_membersInput, usersUncheckedUpdateWithoutCircle_membersInput>
  }

  export type usersUpdateWithoutCircle_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUpdateOneWithoutUserNestedInput
    session?: sessionsUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCircle_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUncheckedUpdateOneWithoutUserNestedInput
    session?: sessionsUncheckedUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUncheckedUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUncheckedUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUncheckedUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUncheckedUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type payoutsUpsertWithoutCircle_memberInput = {
    update: XOR<payoutsUpdateWithoutCircle_memberInput, payoutsUncheckedUpdateWithoutCircle_memberInput>
    create: XOR<payoutsCreateWithoutCircle_memberInput, payoutsUncheckedCreateWithoutCircle_memberInput>
    where?: payoutsWhereInput
  }

  export type payoutsUpdateToOneWithWhereWithoutCircle_memberInput = {
    where?: payoutsWhereInput
    data: XOR<payoutsUpdateWithoutCircle_memberInput, payoutsUncheckedUpdateWithoutCircle_memberInput>
  }

  export type payoutsUpdateWithoutCircle_memberInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings_circle?: savings_circlesUpdateOneRequiredWithoutPayoutsNestedInput
  }

  export type payoutsUncheckedUpdateWithoutCircle_memberInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    cycle_number?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumContribution_statusFieldUpdateOperationsInput | $Enums.Contribution_status
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savings_circlesCreateWithoutCircle_invitationsInput = {
    id?: string
    name: string
    decription: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutSavings_circlesInput
    circle_members?: circle_membersCreateNestedOneWithoutSavings_circleInput
    savings_schedules?: savings_schedulesCreateNestedOneWithoutSavings_circleInput
    contributions?: contributionsCreateNestedOneWithoutSavings_circleInput
    payouts?: payoutsCreateNestedOneWithoutSavings_circleInput
  }

  export type savings_circlesUncheckedCreateWithoutCircle_invitationsInput = {
    id?: string
    name: string
    decription: string
    owner_id: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    circle_members?: circle_membersUncheckedCreateNestedOneWithoutSavings_circleInput
    savings_schedules?: savings_schedulesUncheckedCreateNestedOneWithoutSavings_circleInput
    contributions?: contributionsUncheckedCreateNestedOneWithoutSavings_circleInput
    payouts?: payoutsUncheckedCreateNestedOneWithoutSavings_circleInput
  }

  export type savings_circlesCreateOrConnectWithoutCircle_invitationsInput = {
    where: savings_circlesWhereUniqueInput
    create: XOR<savings_circlesCreateWithoutCircle_invitationsInput, savings_circlesUncheckedCreateWithoutCircle_invitationsInput>
  }

  export type usersCreateWithoutCircle_invitationsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryCreateNestedOneWithoutUserInput
    session?: sessionsCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesCreateNestedOneWithoutUsersInput
    circle_members?: circle_membersCreateNestedOneWithoutUsersInput
    contributions?: contributionsCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsCreateNestedOneWithoutUsersInput
    notifications?: notificationsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCircle_invitationsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryUncheckedCreateNestedOneWithoutUserInput
    session?: sessionsUncheckedCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesUncheckedCreateNestedOneWithoutUsersInput
    circle_members?: circle_membersUncheckedCreateNestedOneWithoutUsersInput
    contributions?: contributionsUncheckedCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsUncheckedCreateNestedOneWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCircle_invitationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCircle_invitationsInput, usersUncheckedCreateWithoutCircle_invitationsInput>
  }

  export type savings_circlesUpsertWithoutCircle_invitationsInput = {
    update: XOR<savings_circlesUpdateWithoutCircle_invitationsInput, savings_circlesUncheckedUpdateWithoutCircle_invitationsInput>
    create: XOR<savings_circlesCreateWithoutCircle_invitationsInput, savings_circlesUncheckedCreateWithoutCircle_invitationsInput>
    where?: savings_circlesWhereInput
  }

  export type savings_circlesUpdateToOneWithWhereWithoutCircle_invitationsInput = {
    where?: savings_circlesWhereInput
    data: XOR<savings_circlesUpdateWithoutCircle_invitationsInput, savings_circlesUncheckedUpdateWithoutCircle_invitationsInput>
  }

  export type savings_circlesUpdateWithoutCircle_invitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutSavings_circlesNestedInput
    circle_members?: circle_membersUpdateOneWithoutSavings_circleNestedInput
    savings_schedules?: savings_schedulesUpdateOneWithoutSavings_circleNestedInput
    contributions?: contributionsUpdateOneWithoutSavings_circleNestedInput
    payouts?: payoutsUpdateOneWithoutSavings_circleNestedInput
  }

  export type savings_circlesUncheckedUpdateWithoutCircle_invitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    circle_members?: circle_membersUncheckedUpdateOneWithoutSavings_circleNestedInput
    savings_schedules?: savings_schedulesUncheckedUpdateOneWithoutSavings_circleNestedInput
    contributions?: contributionsUncheckedUpdateOneWithoutSavings_circleNestedInput
    payouts?: payoutsUncheckedUpdateOneWithoutSavings_circleNestedInput
  }

  export type usersUpsertWithoutCircle_invitationsInput = {
    update: XOR<usersUpdateWithoutCircle_invitationsInput, usersUncheckedUpdateWithoutCircle_invitationsInput>
    create: XOR<usersCreateWithoutCircle_invitationsInput, usersUncheckedCreateWithoutCircle_invitationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCircle_invitationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCircle_invitationsInput, usersUncheckedUpdateWithoutCircle_invitationsInput>
  }

  export type usersUpdateWithoutCircle_invitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUpdateOneWithoutUserNestedInput
    session?: sessionsUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUpdateOneWithoutUsersNestedInput
    circle_members?: circle_membersUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCircle_invitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUncheckedUpdateOneWithoutUserNestedInput
    session?: sessionsUncheckedUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUncheckedUpdateOneWithoutUsersNestedInput
    circle_members?: circle_membersUncheckedUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUncheckedUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUncheckedUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type savings_circlesCreateWithoutSavings_schedulesInput = {
    id?: string
    name: string
    decription: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutSavings_circlesInput
    circle_members?: circle_membersCreateNestedOneWithoutSavings_circleInput
    circle_invitations?: circle_invitationsCreateNestedOneWithoutSavings_circleInput
    contributions?: contributionsCreateNestedOneWithoutSavings_circleInput
    payouts?: payoutsCreateNestedOneWithoutSavings_circleInput
  }

  export type savings_circlesUncheckedCreateWithoutSavings_schedulesInput = {
    id?: string
    name: string
    decription: string
    owner_id: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    circle_members?: circle_membersUncheckedCreateNestedOneWithoutSavings_circleInput
    circle_invitations?: circle_invitationsUncheckedCreateNestedOneWithoutSavings_circleInput
    contributions?: contributionsUncheckedCreateNestedOneWithoutSavings_circleInput
    payouts?: payoutsUncheckedCreateNestedOneWithoutSavings_circleInput
  }

  export type savings_circlesCreateOrConnectWithoutSavings_schedulesInput = {
    where: savings_circlesWhereUniqueInput
    create: XOR<savings_circlesCreateWithoutSavings_schedulesInput, savings_circlesUncheckedCreateWithoutSavings_schedulesInput>
  }

  export type savings_circlesUpsertWithoutSavings_schedulesInput = {
    update: XOR<savings_circlesUpdateWithoutSavings_schedulesInput, savings_circlesUncheckedUpdateWithoutSavings_schedulesInput>
    create: XOR<savings_circlesCreateWithoutSavings_schedulesInput, savings_circlesUncheckedCreateWithoutSavings_schedulesInput>
    where?: savings_circlesWhereInput
  }

  export type savings_circlesUpdateToOneWithWhereWithoutSavings_schedulesInput = {
    where?: savings_circlesWhereInput
    data: XOR<savings_circlesUpdateWithoutSavings_schedulesInput, savings_circlesUncheckedUpdateWithoutSavings_schedulesInput>
  }

  export type savings_circlesUpdateWithoutSavings_schedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutSavings_circlesNestedInput
    circle_members?: circle_membersUpdateOneWithoutSavings_circleNestedInput
    circle_invitations?: circle_invitationsUpdateOneWithoutSavings_circleNestedInput
    contributions?: contributionsUpdateOneWithoutSavings_circleNestedInput
    payouts?: payoutsUpdateOneWithoutSavings_circleNestedInput
  }

  export type savings_circlesUncheckedUpdateWithoutSavings_schedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    circle_members?: circle_membersUncheckedUpdateOneWithoutSavings_circleNestedInput
    circle_invitations?: circle_invitationsUncheckedUpdateOneWithoutSavings_circleNestedInput
    contributions?: contributionsUncheckedUpdateOneWithoutSavings_circleNestedInput
    payouts?: payoutsUncheckedUpdateOneWithoutSavings_circleNestedInput
  }

  export type savings_circlesCreateWithoutContributionsInput = {
    id?: string
    name: string
    decription: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutSavings_circlesInput
    circle_members?: circle_membersCreateNestedOneWithoutSavings_circleInput
    circle_invitations?: circle_invitationsCreateNestedOneWithoutSavings_circleInput
    savings_schedules?: savings_schedulesCreateNestedOneWithoutSavings_circleInput
    payouts?: payoutsCreateNestedOneWithoutSavings_circleInput
  }

  export type savings_circlesUncheckedCreateWithoutContributionsInput = {
    id?: string
    name: string
    decription: string
    owner_id: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    circle_members?: circle_membersUncheckedCreateNestedOneWithoutSavings_circleInput
    circle_invitations?: circle_invitationsUncheckedCreateNestedOneWithoutSavings_circleInput
    savings_schedules?: savings_schedulesUncheckedCreateNestedOneWithoutSavings_circleInput
    payouts?: payoutsUncheckedCreateNestedOneWithoutSavings_circleInput
  }

  export type savings_circlesCreateOrConnectWithoutContributionsInput = {
    where: savings_circlesWhereUniqueInput
    create: XOR<savings_circlesCreateWithoutContributionsInput, savings_circlesUncheckedCreateWithoutContributionsInput>
  }

  export type usersCreateWithoutContributionsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryCreateNestedOneWithoutUserInput
    session?: sessionsCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesCreateNestedOneWithoutUsersInput
    circle_members?: circle_membersCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsCreateNestedOneWithoutUsersInput
    notifications?: notificationsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutContributionsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryUncheckedCreateNestedOneWithoutUserInput
    session?: sessionsUncheckedCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesUncheckedCreateNestedOneWithoutUsersInput
    circle_members?: circle_membersUncheckedCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsUncheckedCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsUncheckedCreateNestedOneWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutContributionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutContributionsInput, usersUncheckedCreateWithoutContributionsInput>
  }

  export type savings_circlesUpsertWithoutContributionsInput = {
    update: XOR<savings_circlesUpdateWithoutContributionsInput, savings_circlesUncheckedUpdateWithoutContributionsInput>
    create: XOR<savings_circlesCreateWithoutContributionsInput, savings_circlesUncheckedCreateWithoutContributionsInput>
    where?: savings_circlesWhereInput
  }

  export type savings_circlesUpdateToOneWithWhereWithoutContributionsInput = {
    where?: savings_circlesWhereInput
    data: XOR<savings_circlesUpdateWithoutContributionsInput, savings_circlesUncheckedUpdateWithoutContributionsInput>
  }

  export type savings_circlesUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutSavings_circlesNestedInput
    circle_members?: circle_membersUpdateOneWithoutSavings_circleNestedInput
    circle_invitations?: circle_invitationsUpdateOneWithoutSavings_circleNestedInput
    savings_schedules?: savings_schedulesUpdateOneWithoutSavings_circleNestedInput
    payouts?: payoutsUpdateOneWithoutSavings_circleNestedInput
  }

  export type savings_circlesUncheckedUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    circle_members?: circle_membersUncheckedUpdateOneWithoutSavings_circleNestedInput
    circle_invitations?: circle_invitationsUncheckedUpdateOneWithoutSavings_circleNestedInput
    savings_schedules?: savings_schedulesUncheckedUpdateOneWithoutSavings_circleNestedInput
    payouts?: payoutsUncheckedUpdateOneWithoutSavings_circleNestedInput
  }

  export type usersUpsertWithoutContributionsInput = {
    update: XOR<usersUpdateWithoutContributionsInput, usersUncheckedUpdateWithoutContributionsInput>
    create: XOR<usersCreateWithoutContributionsInput, usersUncheckedCreateWithoutContributionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutContributionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutContributionsInput, usersUncheckedUpdateWithoutContributionsInput>
  }

  export type usersUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUpdateOneWithoutUserNestedInput
    session?: sessionsUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUpdateOneWithoutUsersNestedInput
    circle_members?: circle_membersUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUncheckedUpdateOneWithoutUserNestedInput
    session?: sessionsUncheckedUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUncheckedUpdateOneWithoutUsersNestedInput
    circle_members?: circle_membersUncheckedUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUncheckedUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUncheckedUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type savings_circlesCreateWithoutPayoutsInput = {
    id?: string
    name: string
    decription: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutSavings_circlesInput
    circle_members?: circle_membersCreateNestedOneWithoutSavings_circleInput
    circle_invitations?: circle_invitationsCreateNestedOneWithoutSavings_circleInput
    savings_schedules?: savings_schedulesCreateNestedOneWithoutSavings_circleInput
    contributions?: contributionsCreateNestedOneWithoutSavings_circleInput
  }

  export type savings_circlesUncheckedCreateWithoutPayoutsInput = {
    id?: string
    name: string
    decription: string
    owner_id: string
    contribution_amount: Decimal | DecimalJsLike | number | string
    currency: string
    frequency: $Enums.Frequency
    member_limit: number
    start_date: Date | string
    status: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    circle_members?: circle_membersUncheckedCreateNestedOneWithoutSavings_circleInput
    circle_invitations?: circle_invitationsUncheckedCreateNestedOneWithoutSavings_circleInput
    savings_schedules?: savings_schedulesUncheckedCreateNestedOneWithoutSavings_circleInput
    contributions?: contributionsUncheckedCreateNestedOneWithoutSavings_circleInput
  }

  export type savings_circlesCreateOrConnectWithoutPayoutsInput = {
    where: savings_circlesWhereUniqueInput
    create: XOR<savings_circlesCreateWithoutPayoutsInput, savings_circlesUncheckedCreateWithoutPayoutsInput>
  }

  export type circle_membersCreateWithoutPayoutsInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.Circle_Status
    joined_at: Date | string
    left_at?: Date | string | null
    created_at: Date | string
    updated_at?: Date | string
    savings_circle: savings_circlesCreateNestedOneWithoutCircle_membersInput
    users: usersCreateNestedOneWithoutCircle_membersInput
  }

  export type circle_membersUncheckedCreateWithoutPayoutsInput = {
    id?: string
    circle_id: string
    user_id: string
    role: $Enums.Role
    status: $Enums.Circle_Status
    joined_at: Date | string
    left_at?: Date | string | null
    created_at: Date | string
    updated_at?: Date | string
  }

  export type circle_membersCreateOrConnectWithoutPayoutsInput = {
    where: circle_membersWhereUniqueInput
    create: XOR<circle_membersCreateWithoutPayoutsInput, circle_membersUncheckedCreateWithoutPayoutsInput>
  }

  export type savings_circlesUpsertWithoutPayoutsInput = {
    update: XOR<savings_circlesUpdateWithoutPayoutsInput, savings_circlesUncheckedUpdateWithoutPayoutsInput>
    create: XOR<savings_circlesCreateWithoutPayoutsInput, savings_circlesUncheckedCreateWithoutPayoutsInput>
    where?: savings_circlesWhereInput
  }

  export type savings_circlesUpdateToOneWithWhereWithoutPayoutsInput = {
    where?: savings_circlesWhereInput
    data: XOR<savings_circlesUpdateWithoutPayoutsInput, savings_circlesUncheckedUpdateWithoutPayoutsInput>
  }

  export type savings_circlesUpdateWithoutPayoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutSavings_circlesNestedInput
    circle_members?: circle_membersUpdateOneWithoutSavings_circleNestedInput
    circle_invitations?: circle_invitationsUpdateOneWithoutSavings_circleNestedInput
    savings_schedules?: savings_schedulesUpdateOneWithoutSavings_circleNestedInput
    contributions?: contributionsUpdateOneWithoutSavings_circleNestedInput
  }

  export type savings_circlesUncheckedUpdateWithoutPayoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decription?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    contribution_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    member_limit?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    circle_members?: circle_membersUncheckedUpdateOneWithoutSavings_circleNestedInput
    circle_invitations?: circle_invitationsUncheckedUpdateOneWithoutSavings_circleNestedInput
    savings_schedules?: savings_schedulesUncheckedUpdateOneWithoutSavings_circleNestedInput
    contributions?: contributionsUncheckedUpdateOneWithoutSavings_circleNestedInput
  }

  export type circle_membersUpsertWithoutPayoutsInput = {
    update: XOR<circle_membersUpdateWithoutPayoutsInput, circle_membersUncheckedUpdateWithoutPayoutsInput>
    create: XOR<circle_membersCreateWithoutPayoutsInput, circle_membersUncheckedCreateWithoutPayoutsInput>
    where?: circle_membersWhereInput
  }

  export type circle_membersUpdateToOneWithWhereWithoutPayoutsInput = {
    where?: circle_membersWhereInput
    data: XOR<circle_membersUpdateWithoutPayoutsInput, circle_membersUncheckedUpdateWithoutPayoutsInput>
  }

  export type circle_membersUpdateWithoutPayoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumCircle_StatusFieldUpdateOperationsInput | $Enums.Circle_Status
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    savings_circle?: savings_circlesUpdateOneRequiredWithoutCircle_membersNestedInput
    users?: usersUpdateOneRequiredWithoutCircle_membersNestedInput
  }

  export type circle_membersUncheckedUpdateWithoutPayoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    circle_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumCircle_StatusFieldUpdateOperationsInput | $Enums.Circle_Status
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateWithoutPayment_transactionsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryCreateNestedOneWithoutUserInput
    session?: sessionsCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesCreateNestedOneWithoutUsersInput
    circle_members?: circle_membersCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsCreateNestedOneWithoutUsersInput
    contributions?: contributionsCreateNestedOneWithoutUsersInput
    notifications?: notificationsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPayment_transactionsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryUncheckedCreateNestedOneWithoutUserInput
    session?: sessionsUncheckedCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesUncheckedCreateNestedOneWithoutUsersInput
    circle_members?: circle_membersUncheckedCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsUncheckedCreateNestedOneWithoutUsersInput
    contributions?: contributionsUncheckedCreateNestedOneWithoutUsersInput
    notifications?: notificationsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPayment_transactionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPayment_transactionsInput, usersUncheckedCreateWithoutPayment_transactionsInput>
  }

  export type payment_status_historyCreateWithoutPayment_transactionsInput = {
    id?: string
    status: $Enums.Payout
    message: string
    metadata: JsonNullValueInput | InputJsonValue
    created_at: Date | string
  }

  export type payment_status_historyUncheckedCreateWithoutPayment_transactionsInput = {
    id?: string
    status: $Enums.Payout
    message: string
    metadata: JsonNullValueInput | InputJsonValue
    created_at: Date | string
  }

  export type payment_status_historyCreateOrConnectWithoutPayment_transactionsInput = {
    where: payment_status_historyWhereUniqueInput
    create: XOR<payment_status_historyCreateWithoutPayment_transactionsInput, payment_status_historyUncheckedCreateWithoutPayment_transactionsInput>
  }

  export type usersUpsertWithoutPayment_transactionsInput = {
    update: XOR<usersUpdateWithoutPayment_transactionsInput, usersUncheckedUpdateWithoutPayment_transactionsInput>
    create: XOR<usersCreateWithoutPayment_transactionsInput, usersUncheckedCreateWithoutPayment_transactionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPayment_transactionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPayment_transactionsInput, usersUncheckedUpdateWithoutPayment_transactionsInput>
  }

  export type usersUpdateWithoutPayment_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUpdateOneWithoutUserNestedInput
    session?: sessionsUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUpdateOneWithoutUsersNestedInput
    circle_members?: circle_membersUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPayment_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUncheckedUpdateOneWithoutUserNestedInput
    session?: sessionsUncheckedUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUncheckedUpdateOneWithoutUsersNestedInput
    circle_members?: circle_membersUncheckedUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUncheckedUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUncheckedUpdateOneWithoutUsersNestedInput
    notifications?: notificationsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type payment_status_historyUpsertWithoutPayment_transactionsInput = {
    update: XOR<payment_status_historyUpdateWithoutPayment_transactionsInput, payment_status_historyUncheckedUpdateWithoutPayment_transactionsInput>
    create: XOR<payment_status_historyCreateWithoutPayment_transactionsInput, payment_status_historyUncheckedCreateWithoutPayment_transactionsInput>
    where?: payment_status_historyWhereInput
  }

  export type payment_status_historyUpdateToOneWithWhereWithoutPayment_transactionsInput = {
    where?: payment_status_historyWhereInput
    data: XOR<payment_status_historyUpdateWithoutPayment_transactionsInput, payment_status_historyUncheckedUpdateWithoutPayment_transactionsInput>
  }

  export type payment_status_historyUpdateWithoutPayment_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutFieldUpdateOperationsInput | $Enums.Payout
    message?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_status_historyUncheckedUpdateWithoutPayment_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutFieldUpdateOperationsInput | $Enums.Payout
    message?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_transactionsCreateWithoutPayment_status_historyInput = {
    id?: string
    refernce: string
    idempotency_key: string
    provider: $Enums.Provider
    provider_reference?: string | null
    type: $Enums.Payment_type
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status: $Enums.Payout
    metadata: JsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutPayment_transactionsInput
  }

  export type payment_transactionsUncheckedCreateWithoutPayment_status_historyInput = {
    id?: string
    user_id: string
    refernce: string
    idempotency_key: string
    provider: $Enums.Provider
    provider_reference?: string | null
    type: $Enums.Payment_type
    amount: Decimal | DecimalJsLike | number | string
    currency: string
    status: $Enums.Payout
    metadata: JsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at?: Date | string
  }

  export type payment_transactionsCreateOrConnectWithoutPayment_status_historyInput = {
    where: payment_transactionsWhereUniqueInput
    create: XOR<payment_transactionsCreateWithoutPayment_status_historyInput, payment_transactionsUncheckedCreateWithoutPayment_status_historyInput>
  }

  export type payment_transactionsUpsertWithoutPayment_status_historyInput = {
    update: XOR<payment_transactionsUpdateWithoutPayment_status_historyInput, payment_transactionsUncheckedUpdateWithoutPayment_status_historyInput>
    create: XOR<payment_transactionsCreateWithoutPayment_status_historyInput, payment_transactionsUncheckedCreateWithoutPayment_status_historyInput>
    where?: payment_transactionsWhereInput
  }

  export type payment_transactionsUpdateToOneWithWhereWithoutPayment_status_historyInput = {
    where?: payment_transactionsWhereInput
    data: XOR<payment_transactionsUpdateWithoutPayment_status_historyInput, payment_transactionsUncheckedUpdateWithoutPayment_status_historyInput>
  }

  export type payment_transactionsUpdateWithoutPayment_status_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    refernce?: StringFieldUpdateOperationsInput | string
    idempotency_key?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    provider_reference?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayment_typeFieldUpdateOperationsInput | $Enums.Payment_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutFieldUpdateOperationsInput | $Enums.Payout
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutPayment_transactionsNestedInput
  }

  export type payment_transactionsUncheckedUpdateWithoutPayment_status_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    refernce?: StringFieldUpdateOperationsInput | string
    idempotency_key?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    provider_reference?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayment_typeFieldUpdateOperationsInput | $Enums.Payment_type
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutFieldUpdateOperationsInput | $Enums.Payout
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateWithoutNotificationsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryCreateNestedOneWithoutUserInput
    session?: sessionsCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesCreateNestedOneWithoutUsersInput
    circle_members?: circle_membersCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsCreateNestedOneWithoutUsersInput
    contributions?: contributionsCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash: string
    first_name: string
    last_name: string
    avatar_url?: string | null
    email_verified_at?: Date | string | null
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    waitlistEntry?: waitlistEntryUncheckedCreateNestedOneWithoutUserInput
    session?: sessionsUncheckedCreateNestedOneWithoutUserInput
    savings_circles?: savings_circlesUncheckedCreateNestedOneWithoutUsersInput
    circle_members?: circle_membersUncheckedCreateNestedOneWithoutUsersInput
    circle_invitations?: circle_invitationsUncheckedCreateNestedOneWithoutUsersInput
    contributions?: contributionsUncheckedCreateNestedOneWithoutUsersInput
    payment_transactions?: payment_transactionsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutNotificationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
  }

  export type usersUpsertWithoutNotificationsInput = {
    update: XOR<usersUpdateWithoutNotificationsInput, usersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNotificationsInput, usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type usersUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUpdateOneWithoutUserNestedInput
    session?: sessionsUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUpdateOneWithoutUsersNestedInput
    circle_members?: circle_membersUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlistEntry?: waitlistEntryUncheckedUpdateOneWithoutUserNestedInput
    session?: sessionsUncheckedUpdateOneWithoutUserNestedInput
    savings_circles?: savings_circlesUncheckedUpdateOneWithoutUsersNestedInput
    circle_members?: circle_membersUncheckedUpdateOneWithoutUsersNestedInput
    circle_invitations?: circle_invitationsUncheckedUpdateOneWithoutUsersNestedInput
    contributions?: contributionsUncheckedUpdateOneWithoutUsersNestedInput
    payment_transactions?: payment_transactionsUncheckedUpdateOneWithoutUsersNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}