import type { Client, Options as Options2, TDataShape } from './client';
import type { CreateAssetData, CreateAssetErrors, CreateAssetResponses, CreateAttestationData, CreateAttestationErrors, CreateAttestationResponses, CreateBequestData, CreateBequestErrors, CreateBequestResponses, CreateDealerInterestData, CreateDealerInterestErrors, CreateDealerInterestResponses, CreateDocumentData, CreateDocumentErrors, CreateDocumentResponses, CreateEstateData, CreateEstateErrors, CreateEstateResponses, CreateExecutorData, CreateExecutorErrors, CreateExecutorResponses, CreateGuardianData, CreateGuardianErrors, CreateGuardianResponses, CreateKinshipData, CreateKinshipErrors, CreateKinshipResponses, CreateLiabilityData, CreateLiabilityErrors, CreateLiabilityResponses, CreateNonprobateTransferData, CreateNonprobateTransferErrors, CreateNonprobateTransferResponses, CreatePersonData, CreatePersonErrors, CreatePersonResponses, CreatePropertyData, CreatePropertyErrors, CreatePropertyResponses, CreateProxyAuthorisationData, CreateProxyAuthorisationErrors, CreateProxyAuthorisationResponses, CreateRelationshipData, CreateRelationshipErrors, CreateRelationshipResponses, CreateTrustData, CreateTrustErrors, CreateTrustResponses, CreateWishData, CreateWishErrors, CreateWishResponses, DeleteAssetData, DeleteAssetErrors, DeleteAssetResponses, DeleteAttestationData, DeleteAttestationErrors, DeleteAttestationResponses, DeleteBequestData, DeleteBequestErrors, DeleteBequestResponses, DeleteDealerInterestData, DeleteDealerInterestErrors, DeleteDealerInterestResponses, DeleteDocumentData, DeleteDocumentErrors, DeleteDocumentResponses, DeleteEstateData, DeleteEstateErrors, DeleteEstateResponses, DeleteExecutorData, DeleteExecutorErrors, DeleteExecutorResponses, DeleteGuardianData, DeleteGuardianErrors, DeleteGuardianResponses, DeleteKinshipData, DeleteKinshipErrors, DeleteKinshipResponses, DeleteLiabilityData, DeleteLiabilityErrors, DeleteLiabilityResponses, DeleteNonprobateTransferData, DeleteNonprobateTransferErrors, DeleteNonprobateTransferResponses, DeletePersonData, DeletePersonErrors, DeletePersonResponses, DeletePropertyData, DeletePropertyErrors, DeletePropertyResponses, DeleteProxyAuthorisationData, DeleteProxyAuthorisationErrors, DeleteProxyAuthorisationResponses, DeleteRelationshipData, DeleteRelationshipErrors, DeleteRelationshipResponses, DeleteTrustData, DeleteTrustErrors, DeleteTrustResponses, DeleteWishData, DeleteWishErrors, DeleteWishResponses, ExportEstateJsonData, ExportEstateJsonErrors, ExportEstateJsonResponses, ExportEstatePdfData, ExportEstatePdfErrors, ExportEstatePdfResponses, GetAssetData, GetAssetErrors, GetAssetResponses, GetAttestationData, GetAttestationErrors, GetAttestationResponses, GetBequestData, GetBequestErrors, GetBequestResponses, GetCompanionData, GetCompanionErrors, GetCompanionResponses, GetDealerInterestData, GetDealerInterestErrors, GetDealerInterestResponses, GetDocumentData, GetDocumentErrors, GetDocumentResponses, GetEstateData, GetEstateErrors, GetEstateResponses, GetEstateSummaryData, GetEstateSummaryErrors, GetEstateSummaryResponses, GetExecutorData, GetExecutorErrors, GetExecutorResponses, GetGuardianData, GetGuardianErrors, GetGuardianResponses, GetKinshipData, GetKinshipErrors, GetKinshipResponses, GetLiabilityData, GetLiabilityErrors, GetLiabilityResponses, GetNonprobateTransferData, GetNonprobateTransferErrors, GetNonprobateTransferResponses, GetPersonData, GetPersonErrors, GetPersonResponses, GetPropertyData, GetPropertyErrors, GetPropertyResponses, GetProxyAuthorisationData, GetProxyAuthorisationErrors, GetProxyAuthorisationResponses, GetRelationshipData, GetRelationshipErrors, GetRelationshipResponses, GetTrustData, GetTrustErrors, GetTrustResponses, GetWishData, GetWishErrors, GetWishResponses, ImportEstateData, ImportEstateErrors, ImportEstateResponses, LinkCompanionData, LinkCompanionErrors, LinkCompanionResponses, ListAssetsData, ListAssetsResponses, ListAttestationsData, ListAttestationsResponses, ListBequestsData, ListBequestsResponses, ListDealerInterestsData, ListDealerInterestsResponses, ListDocumentsData, ListDocumentsResponses, ListEstatesData, ListEstatesResponses, ListExecutorsData, ListExecutorsResponses, ListGuardiansData, ListGuardiansResponses, ListKinshipsData, ListKinshipsResponses, ListLiabilitiesData, ListLiabilitiesResponses, ListNonprobateTransfersData, ListNonprobateTransfersResponses, ListPeopleData, ListPeopleResponses, ListPropertiesData, ListPropertiesResponses, ListProxyAuthorisationsData, ListProxyAuthorisationsResponses, ListRelationshipsData, ListRelationshipsResponses, ListTrustsData, ListTrustsResponses, ListWishesData, ListWishesResponses, ReplaceAssetData, ReplaceAssetErrors, ReplaceAssetResponses, ReplaceAttestationData, ReplaceAttestationErrors, ReplaceAttestationResponses, ReplaceBequestData, ReplaceBequestErrors, ReplaceBequestResponses, ReplaceDealerInterestData, ReplaceDealerInterestErrors, ReplaceDealerInterestResponses, ReplaceDocumentData, ReplaceDocumentErrors, ReplaceDocumentResponses, ReplaceExecutorData, ReplaceExecutorErrors, ReplaceExecutorResponses, ReplaceGuardianData, ReplaceGuardianErrors, ReplaceGuardianResponses, ReplaceKinshipData, ReplaceKinshipErrors, ReplaceKinshipResponses, ReplaceLiabilityData, ReplaceLiabilityErrors, ReplaceLiabilityResponses, ReplaceNonprobateTransferData, ReplaceNonprobateTransferErrors, ReplaceNonprobateTransferResponses, ReplacePersonData, ReplacePersonErrors, ReplacePersonResponses, ReplacePropertyData, ReplacePropertyErrors, ReplacePropertyResponses, ReplaceProxyAuthorisationData, ReplaceProxyAuthorisationErrors, ReplaceProxyAuthorisationResponses, ReplaceRelationshipData, ReplaceRelationshipErrors, ReplaceRelationshipResponses, ReplaceTrustData, ReplaceTrustErrors, ReplaceTrustResponses, ReplaceWishData, ReplaceWishErrors, ReplaceWishResponses, UnlinkCompanionData, UnlinkCompanionErrors, UnlinkCompanionResponses, UpdateAssetData, UpdateAssetErrors, UpdateAssetResponses, UpdateAttestationData, UpdateAttestationErrors, UpdateAttestationResponses, UpdateBequestData, UpdateBequestErrors, UpdateBequestResponses, UpdateDealerInterestData, UpdateDealerInterestErrors, UpdateDealerInterestResponses, UpdateDocumentData, UpdateDocumentErrors, UpdateDocumentResponses, UpdateEstateData, UpdateEstateErrors, UpdateEstateResponses, UpdateExecutorData, UpdateExecutorErrors, UpdateExecutorResponses, UpdateGuardianData, UpdateGuardianErrors, UpdateGuardianResponses, UpdateKinshipData, UpdateKinshipErrors, UpdateKinshipResponses, UpdateLiabilityData, UpdateLiabilityErrors, UpdateLiabilityResponses, UpdateNonprobateTransferData, UpdateNonprobateTransferErrors, UpdateNonprobateTransferResponses, UpdatePersonData, UpdatePersonErrors, UpdatePersonResponses, UpdatePropertyData, UpdatePropertyErrors, UpdatePropertyResponses, UpdateProxyAuthorisationData, UpdateProxyAuthorisationErrors, UpdateProxyAuthorisationResponses, UpdateRelationshipData, UpdateRelationshipErrors, UpdateRelationshipResponses, UpdateTrustData, UpdateTrustErrors, UpdateTrustResponses, UpdateWishData, UpdateWishErrors, UpdateWishResponses, ValidateEstateData, ValidateEstateErrors, ValidateEstateResponses } from './types.gen';
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
 * List estates
 *
 * Returns a paginated list of estates visible to the authenticated caller.
 * Supports cursor-based pagination and filtering by status and jurisdiction.
 *
 */
export declare const listEstates: <ThrowOnError extends boolean = false>(options?: Options<ListEstatesData, ThrowOnError>) => import("./client").RequestResult<ListEstatesResponses, unknown, ThrowOnError, "fields">;
/**
 * Create a new estate
 *
 * Creates a new estate record. The request body must conform to the
 * INHERIT Estate schema. Returns the created estate with an ETag for
 * optimistic concurrency control.
 *
 */
export declare const createEstate: <ThrowOnError extends boolean = false>(options: Options<CreateEstateData, ThrowOnError>) => import("./client").RequestResult<CreateEstateResponses, CreateEstateErrors, ThrowOnError, "fields">;
/**
 * Delete an estate
 *
 * Permanently deletes an estate and all its associated entities.
 */
export declare const deleteEstate: <ThrowOnError extends boolean = false>(options: Options<DeleteEstateData, ThrowOnError>) => import("./client").RequestResult<DeleteEstateResponses, DeleteEstateErrors, ThrowOnError, "fields">;
/**
 * Get a single estate
 *
 * Returns a single estate by its unique identifier.
 */
export declare const getEstate: <ThrowOnError extends boolean = false>(options: Options<GetEstateData, ThrowOnError>) => import("./client").RequestResult<GetEstateResponses, GetEstateErrors, ThrowOnError, "fields">;
/**
 * Update an estate
 *
 * Partially or fully updates an estate. Callers SHOULD supply an
 * If-Match header containing the ETag from a previous GET or POST
 * response to enable optimistic concurrency control. If the ETag does
 * not match, a 412 Precondition Failed is returned.
 *
 */
export declare const updateEstate: <ThrowOnError extends boolean = false>(options: Options<UpdateEstateData, ThrowOnError>) => import("./client").RequestResult<UpdateEstateResponses, UpdateEstateErrors, ThrowOnError, "fields">;
/**
 * List all people in the estate
 */
export declare const listPeople: <ThrowOnError extends boolean = false>(options: Options<ListPeopleData, ThrowOnError>) => import("./client").RequestResult<ListPeopleResponses, unknown, ThrowOnError, "fields">;
/**
 * Add a person to the estate
 */
export declare const createPerson: <ThrowOnError extends boolean = false>(options: Options<CreatePersonData, ThrowOnError>) => import("./client").RequestResult<CreatePersonResponses, CreatePersonErrors, ThrowOnError, "fields">;
/**
 * Remove a person from the estate
 */
export declare const deletePerson: <ThrowOnError extends boolean = false>(options: Options<DeletePersonData, ThrowOnError>) => import("./client").RequestResult<DeletePersonResponses, DeletePersonErrors, ThrowOnError, "fields">;
/**
 * Get a person
 */
export declare const getPerson: <ThrowOnError extends boolean = false>(options: Options<GetPersonData, ThrowOnError>) => import("./client").RequestResult<GetPersonResponses, GetPersonErrors, ThrowOnError, "fields">;
/**
 * Partial update a person
 */
export declare const updatePerson: <ThrowOnError extends boolean = false>(options: Options<UpdatePersonData, ThrowOnError>) => import("./client").RequestResult<UpdatePersonResponses, UpdatePersonErrors, ThrowOnError, "fields">;
/**
 * Replace a person (full update)
 */
export declare const replacePerson: <ThrowOnError extends boolean = false>(options: Options<ReplacePersonData, ThrowOnError>) => import("./client").RequestResult<ReplacePersonResponses, ReplacePersonErrors, ThrowOnError, "fields">;
/**
 * List all relationships in the estate
 */
export declare const listRelationships: <ThrowOnError extends boolean = false>(options: Options<ListRelationshipsData, ThrowOnError>) => import("./client").RequestResult<ListRelationshipsResponses, unknown, ThrowOnError, "fields">;
/**
 * Add a relationship to the estate
 */
export declare const createRelationship: <ThrowOnError extends boolean = false>(options: Options<CreateRelationshipData, ThrowOnError>) => import("./client").RequestResult<CreateRelationshipResponses, CreateRelationshipErrors, ThrowOnError, "fields">;
/**
 * Remove a relationship from the estate
 */
export declare const deleteRelationship: <ThrowOnError extends boolean = false>(options: Options<DeleteRelationshipData, ThrowOnError>) => import("./client").RequestResult<DeleteRelationshipResponses, DeleteRelationshipErrors, ThrowOnError, "fields">;
/**
 * Get a relationship
 */
export declare const getRelationship: <ThrowOnError extends boolean = false>(options: Options<GetRelationshipData, ThrowOnError>) => import("./client").RequestResult<GetRelationshipResponses, GetRelationshipErrors, ThrowOnError, "fields">;
/**
 * Partial update a relationship
 */
export declare const updateRelationship: <ThrowOnError extends boolean = false>(options: Options<UpdateRelationshipData, ThrowOnError>) => import("./client").RequestResult<UpdateRelationshipResponses, UpdateRelationshipErrors, ThrowOnError, "fields">;
/**
 * Replace a relationship (full update)
 */
export declare const replaceRelationship: <ThrowOnError extends boolean = false>(options: Options<ReplaceRelationshipData, ThrowOnError>) => import("./client").RequestResult<ReplaceRelationshipResponses, ReplaceRelationshipErrors, ThrowOnError, "fields">;
/**
 * List all kinships in the estate
 */
export declare const listKinships: <ThrowOnError extends boolean = false>(options: Options<ListKinshipsData, ThrowOnError>) => import("./client").RequestResult<ListKinshipsResponses, unknown, ThrowOnError, "fields">;
/**
 * Add a kinship to the estate
 */
export declare const createKinship: <ThrowOnError extends boolean = false>(options: Options<CreateKinshipData, ThrowOnError>) => import("./client").RequestResult<CreateKinshipResponses, CreateKinshipErrors, ThrowOnError, "fields">;
/**
 * Remove a kinship from the estate
 */
export declare const deleteKinship: <ThrowOnError extends boolean = false>(options: Options<DeleteKinshipData, ThrowOnError>) => import("./client").RequestResult<DeleteKinshipResponses, DeleteKinshipErrors, ThrowOnError, "fields">;
/**
 * Get a kinship
 */
export declare const getKinship: <ThrowOnError extends boolean = false>(options: Options<GetKinshipData, ThrowOnError>) => import("./client").RequestResult<GetKinshipResponses, GetKinshipErrors, ThrowOnError, "fields">;
/**
 * Partial update a kinship
 */
export declare const updateKinship: <ThrowOnError extends boolean = false>(options: Options<UpdateKinshipData, ThrowOnError>) => import("./client").RequestResult<UpdateKinshipResponses, UpdateKinshipErrors, ThrowOnError, "fields">;
/**
 * Replace a kinship (full update)
 */
export declare const replaceKinship: <ThrowOnError extends boolean = false>(options: Options<ReplaceKinshipData, ThrowOnError>) => import("./client").RequestResult<ReplaceKinshipResponses, ReplaceKinshipErrors, ThrowOnError, "fields">;
/**
 * List all properties in the estate
 */
export declare const listProperties: <ThrowOnError extends boolean = false>(options: Options<ListPropertiesData, ThrowOnError>) => import("./client").RequestResult<ListPropertiesResponses, unknown, ThrowOnError, "fields">;
/**
 * Add a property to the estate
 */
export declare const createProperty: <ThrowOnError extends boolean = false>(options: Options<CreatePropertyData, ThrowOnError>) => import("./client").RequestResult<CreatePropertyResponses, CreatePropertyErrors, ThrowOnError, "fields">;
/**
 * Remove a property from the estate
 */
export declare const deleteProperty: <ThrowOnError extends boolean = false>(options: Options<DeletePropertyData, ThrowOnError>) => import("./client").RequestResult<DeletePropertyResponses, DeletePropertyErrors, ThrowOnError, "fields">;
/**
 * Get a property
 */
export declare const getProperty: <ThrowOnError extends boolean = false>(options: Options<GetPropertyData, ThrowOnError>) => import("./client").RequestResult<GetPropertyResponses, GetPropertyErrors, ThrowOnError, "fields">;
/**
 * Partial update a property
 */
export declare const updateProperty: <ThrowOnError extends boolean = false>(options: Options<UpdatePropertyData, ThrowOnError>) => import("./client").RequestResult<UpdatePropertyResponses, UpdatePropertyErrors, ThrowOnError, "fields">;
/**
 * Replace a property (full update)
 */
export declare const replaceProperty: <ThrowOnError extends boolean = false>(options: Options<ReplacePropertyData, ThrowOnError>) => import("./client").RequestResult<ReplacePropertyResponses, ReplacePropertyErrors, ThrowOnError, "fields">;
/**
 * List all assets in the estate
 */
export declare const listAssets: <ThrowOnError extends boolean = false>(options: Options<ListAssetsData, ThrowOnError>) => import("./client").RequestResult<ListAssetsResponses, unknown, ThrowOnError, "fields">;
/**
 * Add an asset to the estate
 */
export declare const createAsset: <ThrowOnError extends boolean = false>(options: Options<CreateAssetData, ThrowOnError>) => import("./client").RequestResult<CreateAssetResponses, CreateAssetErrors, ThrowOnError, "fields">;
/**
 * Remove an asset from the estate
 */
export declare const deleteAsset: <ThrowOnError extends boolean = false>(options: Options<DeleteAssetData, ThrowOnError>) => import("./client").RequestResult<DeleteAssetResponses, DeleteAssetErrors, ThrowOnError, "fields">;
/**
 * Get an asset
 */
export declare const getAsset: <ThrowOnError extends boolean = false>(options: Options<GetAssetData, ThrowOnError>) => import("./client").RequestResult<GetAssetResponses, GetAssetErrors, ThrowOnError, "fields">;
/**
 * Partial update an asset
 */
export declare const updateAsset: <ThrowOnError extends boolean = false>(options: Options<UpdateAssetData, ThrowOnError>) => import("./client").RequestResult<UpdateAssetResponses, UpdateAssetErrors, ThrowOnError, "fields">;
/**
 * Replace an asset (full update)
 */
export declare const replaceAsset: <ThrowOnError extends boolean = false>(options: Options<ReplaceAssetData, ThrowOnError>) => import("./client").RequestResult<ReplaceAssetResponses, ReplaceAssetErrors, ThrowOnError, "fields">;
/**
 * List all liabilities in the estate
 */
export declare const listLiabilities: <ThrowOnError extends boolean = false>(options: Options<ListLiabilitiesData, ThrowOnError>) => import("./client").RequestResult<ListLiabilitiesResponses, unknown, ThrowOnError, "fields">;
/**
 * Add a liability to the estate
 */
export declare const createLiability: <ThrowOnError extends boolean = false>(options: Options<CreateLiabilityData, ThrowOnError>) => import("./client").RequestResult<CreateLiabilityResponses, CreateLiabilityErrors, ThrowOnError, "fields">;
/**
 * Remove a liability from the estate
 */
export declare const deleteLiability: <ThrowOnError extends boolean = false>(options: Options<DeleteLiabilityData, ThrowOnError>) => import("./client").RequestResult<DeleteLiabilityResponses, DeleteLiabilityErrors, ThrowOnError, "fields">;
/**
 * Get a liability
 */
export declare const getLiability: <ThrowOnError extends boolean = false>(options: Options<GetLiabilityData, ThrowOnError>) => import("./client").RequestResult<GetLiabilityResponses, GetLiabilityErrors, ThrowOnError, "fields">;
/**
 * Partial update a liability
 */
export declare const updateLiability: <ThrowOnError extends boolean = false>(options: Options<UpdateLiabilityData, ThrowOnError>) => import("./client").RequestResult<UpdateLiabilityResponses, UpdateLiabilityErrors, ThrowOnError, "fields">;
/**
 * Replace a liability (full update)
 */
export declare const replaceLiability: <ThrowOnError extends boolean = false>(options: Options<ReplaceLiabilityData, ThrowOnError>) => import("./client").RequestResult<ReplaceLiabilityResponses, ReplaceLiabilityErrors, ThrowOnError, "fields">;
/**
 * List all bequests in the estate
 */
export declare const listBequests: <ThrowOnError extends boolean = false>(options: Options<ListBequestsData, ThrowOnError>) => import("./client").RequestResult<ListBequestsResponses, unknown, ThrowOnError, "fields">;
/**
 * Add a bequest to the estate
 */
export declare const createBequest: <ThrowOnError extends boolean = false>(options: Options<CreateBequestData, ThrowOnError>) => import("./client").RequestResult<CreateBequestResponses, CreateBequestErrors, ThrowOnError, "fields">;
/**
 * Remove a bequest from the estate
 */
export declare const deleteBequest: <ThrowOnError extends boolean = false>(options: Options<DeleteBequestData, ThrowOnError>) => import("./client").RequestResult<DeleteBequestResponses, DeleteBequestErrors, ThrowOnError, "fields">;
/**
 * Get a bequest
 */
export declare const getBequest: <ThrowOnError extends boolean = false>(options: Options<GetBequestData, ThrowOnError>) => import("./client").RequestResult<GetBequestResponses, GetBequestErrors, ThrowOnError, "fields">;
/**
 * Partial update a bequest
 */
export declare const updateBequest: <ThrowOnError extends boolean = false>(options: Options<UpdateBequestData, ThrowOnError>) => import("./client").RequestResult<UpdateBequestResponses, UpdateBequestErrors, ThrowOnError, "fields">;
/**
 * Replace a bequest (full update)
 */
export declare const replaceBequest: <ThrowOnError extends boolean = false>(options: Options<ReplaceBequestData, ThrowOnError>) => import("./client").RequestResult<ReplaceBequestResponses, ReplaceBequestErrors, ThrowOnError, "fields">;
/**
 * List all trusts in the estate
 */
export declare const listTrusts: <ThrowOnError extends boolean = false>(options: Options<ListTrustsData, ThrowOnError>) => import("./client").RequestResult<ListTrustsResponses, unknown, ThrowOnError, "fields">;
/**
 * Add a trust to the estate
 */
export declare const createTrust: <ThrowOnError extends boolean = false>(options: Options<CreateTrustData, ThrowOnError>) => import("./client").RequestResult<CreateTrustResponses, CreateTrustErrors, ThrowOnError, "fields">;
/**
 * Remove a trust from the estate
 */
export declare const deleteTrust: <ThrowOnError extends boolean = false>(options: Options<DeleteTrustData, ThrowOnError>) => import("./client").RequestResult<DeleteTrustResponses, DeleteTrustErrors, ThrowOnError, "fields">;
/**
 * Get a trust
 */
export declare const getTrust: <ThrowOnError extends boolean = false>(options: Options<GetTrustData, ThrowOnError>) => import("./client").RequestResult<GetTrustResponses, GetTrustErrors, ThrowOnError, "fields">;
/**
 * Partial update a trust
 */
export declare const updateTrust: <ThrowOnError extends boolean = false>(options: Options<UpdateTrustData, ThrowOnError>) => import("./client").RequestResult<UpdateTrustResponses, UpdateTrustErrors, ThrowOnError, "fields">;
/**
 * Replace a trust (full update)
 */
export declare const replaceTrust: <ThrowOnError extends boolean = false>(options: Options<ReplaceTrustData, ThrowOnError>) => import("./client").RequestResult<ReplaceTrustResponses, ReplaceTrustErrors, ThrowOnError, "fields">;
/**
 * List all executors in the estate
 */
export declare const listExecutors: <ThrowOnError extends boolean = false>(options: Options<ListExecutorsData, ThrowOnError>) => import("./client").RequestResult<ListExecutorsResponses, unknown, ThrowOnError, "fields">;
/**
 * Add an executor to the estate
 */
export declare const createExecutor: <ThrowOnError extends boolean = false>(options: Options<CreateExecutorData, ThrowOnError>) => import("./client").RequestResult<CreateExecutorResponses, CreateExecutorErrors, ThrowOnError, "fields">;
/**
 * Remove an executor from the estate
 */
export declare const deleteExecutor: <ThrowOnError extends boolean = false>(options: Options<DeleteExecutorData, ThrowOnError>) => import("./client").RequestResult<DeleteExecutorResponses, DeleteExecutorErrors, ThrowOnError, "fields">;
/**
 * Get an executor
 */
export declare const getExecutor: <ThrowOnError extends boolean = false>(options: Options<GetExecutorData, ThrowOnError>) => import("./client").RequestResult<GetExecutorResponses, GetExecutorErrors, ThrowOnError, "fields">;
/**
 * Partial update an executor
 */
export declare const updateExecutor: <ThrowOnError extends boolean = false>(options: Options<UpdateExecutorData, ThrowOnError>) => import("./client").RequestResult<UpdateExecutorResponses, UpdateExecutorErrors, ThrowOnError, "fields">;
/**
 * Replace an executor (full update)
 */
export declare const replaceExecutor: <ThrowOnError extends boolean = false>(options: Options<ReplaceExecutorData, ThrowOnError>) => import("./client").RequestResult<ReplaceExecutorResponses, ReplaceExecutorErrors, ThrowOnError, "fields">;
/**
 * List all guardians in the estate
 */
export declare const listGuardians: <ThrowOnError extends boolean = false>(options: Options<ListGuardiansData, ThrowOnError>) => import("./client").RequestResult<ListGuardiansResponses, unknown, ThrowOnError, "fields">;
/**
 * Add a guardian to the estate
 */
export declare const createGuardian: <ThrowOnError extends boolean = false>(options: Options<CreateGuardianData, ThrowOnError>) => import("./client").RequestResult<CreateGuardianResponses, CreateGuardianErrors, ThrowOnError, "fields">;
/**
 * Remove a guardian from the estate
 */
export declare const deleteGuardian: <ThrowOnError extends boolean = false>(options: Options<DeleteGuardianData, ThrowOnError>) => import("./client").RequestResult<DeleteGuardianResponses, DeleteGuardianErrors, ThrowOnError, "fields">;
/**
 * Get a guardian
 */
export declare const getGuardian: <ThrowOnError extends boolean = false>(options: Options<GetGuardianData, ThrowOnError>) => import("./client").RequestResult<GetGuardianResponses, GetGuardianErrors, ThrowOnError, "fields">;
/**
 * Partial update a guardian
 */
export declare const updateGuardian: <ThrowOnError extends boolean = false>(options: Options<UpdateGuardianData, ThrowOnError>) => import("./client").RequestResult<UpdateGuardianResponses, UpdateGuardianErrors, ThrowOnError, "fields">;
/**
 * Replace a guardian (full update)
 */
export declare const replaceGuardian: <ThrowOnError extends boolean = false>(options: Options<ReplaceGuardianData, ThrowOnError>) => import("./client").RequestResult<ReplaceGuardianResponses, ReplaceGuardianErrors, ThrowOnError, "fields">;
/**
 * List all wishes in the estate
 */
export declare const listWishes: <ThrowOnError extends boolean = false>(options: Options<ListWishesData, ThrowOnError>) => import("./client").RequestResult<ListWishesResponses, unknown, ThrowOnError, "fields">;
/**
 * Add a wish to the estate
 */
export declare const createWish: <ThrowOnError extends boolean = false>(options: Options<CreateWishData, ThrowOnError>) => import("./client").RequestResult<CreateWishResponses, CreateWishErrors, ThrowOnError, "fields">;
/**
 * Remove a wish from the estate
 */
export declare const deleteWish: <ThrowOnError extends boolean = false>(options: Options<DeleteWishData, ThrowOnError>) => import("./client").RequestResult<DeleteWishResponses, DeleteWishErrors, ThrowOnError, "fields">;
/**
 * Get a wish
 */
export declare const getWish: <ThrowOnError extends boolean = false>(options: Options<GetWishData, ThrowOnError>) => import("./client").RequestResult<GetWishResponses, GetWishErrors, ThrowOnError, "fields">;
/**
 * Partial update a wish
 */
export declare const updateWish: <ThrowOnError extends boolean = false>(options: Options<UpdateWishData, ThrowOnError>) => import("./client").RequestResult<UpdateWishResponses, UpdateWishErrors, ThrowOnError, "fields">;
/**
 * Replace a wish (full update)
 */
export declare const replaceWish: <ThrowOnError extends boolean = false>(options: Options<ReplaceWishData, ThrowOnError>) => import("./client").RequestResult<ReplaceWishResponses, ReplaceWishErrors, ThrowOnError, "fields">;
/**
 * List all documents in the estate
 */
export declare const listDocuments: <ThrowOnError extends boolean = false>(options: Options<ListDocumentsData, ThrowOnError>) => import("./client").RequestResult<ListDocumentsResponses, unknown, ThrowOnError, "fields">;
/**
 * Add a document to the estate
 */
export declare const createDocument: <ThrowOnError extends boolean = false>(options: Options<CreateDocumentData, ThrowOnError>) => import("./client").RequestResult<CreateDocumentResponses, CreateDocumentErrors, ThrowOnError, "fields">;
/**
 * Remove a document from the estate
 */
export declare const deleteDocument: <ThrowOnError extends boolean = false>(options: Options<DeleteDocumentData, ThrowOnError>) => import("./client").RequestResult<DeleteDocumentResponses, DeleteDocumentErrors, ThrowOnError, "fields">;
/**
 * Get a document
 */
export declare const getDocument: <ThrowOnError extends boolean = false>(options: Options<GetDocumentData, ThrowOnError>) => import("./client").RequestResult<GetDocumentResponses, GetDocumentErrors, ThrowOnError, "fields">;
/**
 * Partial update a document
 */
export declare const updateDocument: <ThrowOnError extends boolean = false>(options: Options<UpdateDocumentData, ThrowOnError>) => import("./client").RequestResult<UpdateDocumentResponses, UpdateDocumentErrors, ThrowOnError, "fields">;
/**
 * Replace a document (full update)
 */
export declare const replaceDocument: <ThrowOnError extends boolean = false>(options: Options<ReplaceDocumentData, ThrowOnError>) => import("./client").RequestResult<ReplaceDocumentResponses, ReplaceDocumentErrors, ThrowOnError, "fields">;
/**
 * List all attestations in the estate
 */
export declare const listAttestations: <ThrowOnError extends boolean = false>(options: Options<ListAttestationsData, ThrowOnError>) => import("./client").RequestResult<ListAttestationsResponses, unknown, ThrowOnError, "fields">;
/**
 * Add an attestation to the estate
 */
export declare const createAttestation: <ThrowOnError extends boolean = false>(options: Options<CreateAttestationData, ThrowOnError>) => import("./client").RequestResult<CreateAttestationResponses, CreateAttestationErrors, ThrowOnError, "fields">;
/**
 * Remove an attestation from the estate
 */
export declare const deleteAttestation: <ThrowOnError extends boolean = false>(options: Options<DeleteAttestationData, ThrowOnError>) => import("./client").RequestResult<DeleteAttestationResponses, DeleteAttestationErrors, ThrowOnError, "fields">;
/**
 * Get an attestation
 */
export declare const getAttestation: <ThrowOnError extends boolean = false>(options: Options<GetAttestationData, ThrowOnError>) => import("./client").RequestResult<GetAttestationResponses, GetAttestationErrors, ThrowOnError, "fields">;
/**
 * Partial update an attestation
 */
export declare const updateAttestation: <ThrowOnError extends boolean = false>(options: Options<UpdateAttestationData, ThrowOnError>) => import("./client").RequestResult<UpdateAttestationResponses, UpdateAttestationErrors, ThrowOnError, "fields">;
/**
 * Replace an attestation (full update)
 */
export declare const replaceAttestation: <ThrowOnError extends boolean = false>(options: Options<ReplaceAttestationData, ThrowOnError>) => import("./client").RequestResult<ReplaceAttestationResponses, ReplaceAttestationErrors, ThrowOnError, "fields">;
/**
 * List all nonprobate transfers in the estate
 */
export declare const listNonprobateTransfers: <ThrowOnError extends boolean = false>(options: Options<ListNonprobateTransfersData, ThrowOnError>) => import("./client").RequestResult<ListNonprobateTransfersResponses, unknown, ThrowOnError, "fields">;
/**
 * Add a nonprobate transfer to the estate
 */
export declare const createNonprobateTransfer: <ThrowOnError extends boolean = false>(options: Options<CreateNonprobateTransferData, ThrowOnError>) => import("./client").RequestResult<CreateNonprobateTransferResponses, CreateNonprobateTransferErrors, ThrowOnError, "fields">;
/**
 * Remove a nonprobate transfer from the estate
 */
export declare const deleteNonprobateTransfer: <ThrowOnError extends boolean = false>(options: Options<DeleteNonprobateTransferData, ThrowOnError>) => import("./client").RequestResult<DeleteNonprobateTransferResponses, DeleteNonprobateTransferErrors, ThrowOnError, "fields">;
/**
 * Get a nonprobate transfer
 */
export declare const getNonprobateTransfer: <ThrowOnError extends boolean = false>(options: Options<GetNonprobateTransferData, ThrowOnError>) => import("./client").RequestResult<GetNonprobateTransferResponses, GetNonprobateTransferErrors, ThrowOnError, "fields">;
/**
 * Partial update a nonprobate transfer
 */
export declare const updateNonprobateTransfer: <ThrowOnError extends boolean = false>(options: Options<UpdateNonprobateTransferData, ThrowOnError>) => import("./client").RequestResult<UpdateNonprobateTransferResponses, UpdateNonprobateTransferErrors, ThrowOnError, "fields">;
/**
 * Replace a nonprobate transfer (full update)
 */
export declare const replaceNonprobateTransfer: <ThrowOnError extends boolean = false>(options: Options<ReplaceNonprobateTransferData, ThrowOnError>) => import("./client").RequestResult<ReplaceNonprobateTransferResponses, ReplaceNonprobateTransferErrors, ThrowOnError, "fields">;
/**
 * List all proxy authorisations in the estate
 */
export declare const listProxyAuthorisations: <ThrowOnError extends boolean = false>(options: Options<ListProxyAuthorisationsData, ThrowOnError>) => import("./client").RequestResult<ListProxyAuthorisationsResponses, unknown, ThrowOnError, "fields">;
/**
 * Add a proxy authorisation to the estate
 */
export declare const createProxyAuthorisation: <ThrowOnError extends boolean = false>(options: Options<CreateProxyAuthorisationData, ThrowOnError>) => import("./client").RequestResult<CreateProxyAuthorisationResponses, CreateProxyAuthorisationErrors, ThrowOnError, "fields">;
/**
 * Remove a proxy authorisation from the estate
 */
export declare const deleteProxyAuthorisation: <ThrowOnError extends boolean = false>(options: Options<DeleteProxyAuthorisationData, ThrowOnError>) => import("./client").RequestResult<DeleteProxyAuthorisationResponses, DeleteProxyAuthorisationErrors, ThrowOnError, "fields">;
/**
 * Get a proxy authorisation
 */
export declare const getProxyAuthorisation: <ThrowOnError extends boolean = false>(options: Options<GetProxyAuthorisationData, ThrowOnError>) => import("./client").RequestResult<GetProxyAuthorisationResponses, GetProxyAuthorisationErrors, ThrowOnError, "fields">;
/**
 * Partial update a proxy authorisation
 */
export declare const updateProxyAuthorisation: <ThrowOnError extends boolean = false>(options: Options<UpdateProxyAuthorisationData, ThrowOnError>) => import("./client").RequestResult<UpdateProxyAuthorisationResponses, UpdateProxyAuthorisationErrors, ThrowOnError, "fields">;
/**
 * Replace a proxy authorisation (full update)
 */
export declare const replaceProxyAuthorisation: <ThrowOnError extends boolean = false>(options: Options<ReplaceProxyAuthorisationData, ThrowOnError>) => import("./client").RequestResult<ReplaceProxyAuthorisationResponses, ReplaceProxyAuthorisationErrors, ThrowOnError, "fields">;
/**
 * List all dealer interests in the estate
 */
export declare const listDealerInterests: <ThrowOnError extends boolean = false>(options: Options<ListDealerInterestsData, ThrowOnError>) => import("./client").RequestResult<ListDealerInterestsResponses, unknown, ThrowOnError, "fields">;
/**
 * Add a dealer interest to the estate
 */
export declare const createDealerInterest: <ThrowOnError extends boolean = false>(options: Options<CreateDealerInterestData, ThrowOnError>) => import("./client").RequestResult<CreateDealerInterestResponses, CreateDealerInterestErrors, ThrowOnError, "fields">;
/**
 * Remove a dealer interest from the estate
 */
export declare const deleteDealerInterest: <ThrowOnError extends boolean = false>(options: Options<DeleteDealerInterestData, ThrowOnError>) => import("./client").RequestResult<DeleteDealerInterestResponses, DeleteDealerInterestErrors, ThrowOnError, "fields">;
/**
 * Get a dealer interest
 */
export declare const getDealerInterest: <ThrowOnError extends boolean = false>(options: Options<GetDealerInterestData, ThrowOnError>) => import("./client").RequestResult<GetDealerInterestResponses, GetDealerInterestErrors, ThrowOnError, "fields">;
/**
 * Partial update a dealer interest
 */
export declare const updateDealerInterest: <ThrowOnError extends boolean = false>(options: Options<UpdateDealerInterestData, ThrowOnError>) => import("./client").RequestResult<UpdateDealerInterestResponses, UpdateDealerInterestErrors, ThrowOnError, "fields">;
/**
 * Replace a dealer interest (full update)
 */
export declare const replaceDealerInterest: <ThrowOnError extends boolean = false>(options: Options<ReplaceDealerInterestData, ThrowOnError>) => import("./client").RequestResult<ReplaceDealerInterestResponses, ReplaceDealerInterestErrors, ThrowOnError, "fields">;
/**
 * Export estate as INHERIT JSON document
 *
 * Returns a complete INHERIT root document containing all entities for the
 * estate. The exportedAt, exportedBy, and generator fields are set by the
 * server at the time of export.
 *
 */
export declare const exportEstateJson: <ThrowOnError extends boolean = false>(options: Options<ExportEstateJsonData, ThrowOnError>) => import("./client").RequestResult<ExportEstateJsonResponses, ExportEstateJsonErrors, ThrowOnError, "fields">;
/**
 * Export estate as a PDF report
 *
 * Renders a PDF report of the estate using the specified template.
 * Three templates are available: full (for the testator), summary (for
 * the family), and professional (for an estate planning professional).
 *
 */
export declare const exportEstatePdf: <ThrowOnError extends boolean = false>(options: Options<ExportEstatePdfData, ThrowOnError>) => import("./client").RequestResult<ExportEstatePdfResponses, ExportEstatePdfErrors, ThrowOnError, "fields">;
/**
 * Import an INHERIT JSON document as a new estate
 *
 * Accepts a complete INHERIT JSON document and creates a new estate from it.
 * Level 1 conformance is required for import to succeed. Levels 2–3
 * produce non-fatal warnings included in the response.
 *
 */
export declare const importEstate: <ThrowOnError extends boolean = false>(options: Options<ImportEstateData, ThrowOnError>) => import("./client").RequestResult<ImportEstateResponses, ImportEstateErrors, ThrowOnError, "fields">;
/**
 * Validate a stored estate at all conformance levels
 *
 * Validates the stored estate against all three INHERIT conformance levels
 * progressively. Returns detailed validation results including the highest
 * level achieved and any violations found at each level.
 *
 */
export declare const validateEstate: <ThrowOnError extends boolean = false>(options: Options<ValidateEstateData, ThrowOnError>) => import("./client").RequestResult<ValidateEstateResponses, ValidateEstateErrors, ThrowOnError, "fields">;
/**
 * Unlink the companion estate
 *
 * Removes the companion link between this estate and its companion.
 */
export declare const unlinkCompanion: <ThrowOnError extends boolean = false>(options: Options<UnlinkCompanionData, ThrowOnError>) => import("./client").RequestResult<UnlinkCompanionResponses, UnlinkCompanionErrors, ThrowOnError, "fields">;
/**
 * Get the companion estate summary
 *
 * Returns a summary of the estate linked as a companion to this one.
 * Returns 404 if this estate has no companion linked.
 *
 */
export declare const getCompanion: <ThrowOnError extends boolean = false>(options: Options<GetCompanionData, ThrowOnError>) => import("./client").RequestResult<GetCompanionResponses, GetCompanionErrors, ThrowOnError, "fields">;
/**
 * Link a companion estate
 *
 * Links another estate as a companion to this one, typically used for
 * couples where each partner has their own estate record. Both estates
 * must exist and must not already be linked to a companion.
 *
 */
export declare const linkCompanion: <ThrowOnError extends boolean = false>(options: Options<LinkCompanionData, ThrowOnError>) => import("./client").RequestResult<LinkCompanionResponses, LinkCompanionErrors, ThrowOnError, "fields">;
/**
 * Get derived estate summary statistics
 *
 * Returns derived statistics for the estate including entity counts,
 * estimated values, conformance level, completeness indicators, and
 * complexity indicators. Complexity data is used by the INHERIT matchmaker
 * to assess suitability for estate planning professional referral.
 *
 */
export declare const getEstateSummary: <ThrowOnError extends boolean = false>(options: Options<GetEstateSummaryData, ThrowOnError>) => import("./client").RequestResult<GetEstateSummaryResponses, GetEstateSummaryErrors, ThrowOnError, "fields">;
//# sourceMappingURL=sdk.gen.d.ts.map