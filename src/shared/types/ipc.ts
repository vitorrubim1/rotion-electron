export interface Document {
  id: string;
  title: string;
  content?: string;
}

/**
 * Requests
 */
export interface FetchDocumentRequest {
  id: string;
}

export type DeleteDocumentRequest = FetchDocumentRequest;
export type CreateDocumentRequest = Document;
export type SaveDocumentRequest = Document;

/**
 * Responses
 */
export interface FetchAllDocumentsResponse {
  data: Document[];
}

export interface FetchDocumentResponse {
  data: Document;
}

export interface CreateDocumentResponse {
  data: Document;
}

export interface SaveDocumentResponse {
  data: Document;
}

export interface DeleteDocumentResponse {
  data: Document;
}
