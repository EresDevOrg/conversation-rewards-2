import { Type, Static } from "@sinclair/typebox";

export type CommentToEvaluate = { id: number; comment: string };

export type PrCommentToEvaluate = { id: number; comment: string; diffHunk?: string };

export const openAiRelevanceResponseSchema = Type.Record(Type.String(), Type.Number({ minimum: 0, maximum: 1 }));

export type Relevances = Static<typeof openAiRelevanceResponseSchema>;
