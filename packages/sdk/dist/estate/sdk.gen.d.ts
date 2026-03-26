import type { Client, Options as Options2, TDataShape } from './client';
import type { ValidateDocumentData, ValidateDocumentErrors, ValidateDocumentResponses } from './types.gen';
export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = Options2<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};
/**
 * Validate an INHERIT document
 *
 * Accepts a complete INHERIT document and returns validation results
 * at three conformance levels: Schema Valid, Referentially Intact,
 * and Jurisdiction Complete.
 *
 */
export declare const validateDocument: <ThrowOnError extends boolean = false>(options: Options<ValidateDocumentData, ThrowOnError>) => import("./client").RequestResult<ValidateDocumentResponses, ValidateDocumentErrors, ThrowOnError, "fields">;
//# sourceMappingURL=sdk.gen.d.ts.map